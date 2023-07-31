import {
  Mina,
  PublicKey,
  fetchAccount,
  Encoding,
  Signature,
  Field,
  PrivateKey,
  UInt64,
  AccountUpdate,
  TokenId,
} from "snarkyjs";
import { getBalances, prepareTestAccounts } from "./contracts/testUtils";
import { TokenContract } from "./contracts/token";
import { PoolContract, PoolTokenHolder } from "./contracts/pool";

const BERKELEY_ENDPOINT: string =
  "https://proxy.berkeley.minaexplorer.com/graphql";

const state = {
  Local: null as null | any,
  addresses: {} as { [key: string]: PublicKey },
  keys: {} as { [key: string]: PrivateKey },
  TokenContract: null as null | typeof TokenContract,
  PoolTokenHolder: null as null | typeof PoolTokenHolder,
  PoolContract: null as null | typeof PoolContract,
  tokenIds: {} as { [key: string]: Field },
  accountFee: null as null | UInt64,
  proofsEnabled: false as boolean,
  tokenX: null as null | TokenContract,
  tokenY: null as null | TokenContract,
  pool: null as null | PoolContract,
  poolTokenHolderX: null as null | PoolTokenHolder,
  poolTokenHolderY: null as null | PoolTokenHolder,
  hasBeenSetup: false as boolean,
};

//--------------------------------------------------
// functions definition

async function loadContract(args: {}) {
  console.log("loading contract...");
  state.TokenContract = TokenContract;
  state.PoolTokenHolder = PoolTokenHolder;
  state.PoolContract = PoolContract;
  console.log("done");
}

async function compileContract(args: {}) {
  if (state.proofsEnabled) {
    console.log("Compiling TokenContract...");
    await TokenContract.compile();
    console.log("Compiling PoolTokenHolder...");
    await PoolTokenHolder.compile();
    console.log("Compiling PoolContract...");
    await PoolContract.compile();
  }
}

async function setActiveInstanceToBerkeley(args: {}) {
  const Berkeley = Mina.Network(BERKELEY_ENDPOINT);
  Mina.setActiveInstance(Berkeley);
}

async function setActiveInstanceToLocal(args: {}) {
  const Local = Mina.LocalBlockchain({
    proofsEnabled: state.proofsEnabled,
    enforceTransactionLimits: false,
  });
  state.Local = Local!;
  Mina.setActiveInstance(Local);
}

async function _prepareTestAccounts(args: {}) {
  const [addresses, keys] = prepareTestAccounts(
    {
      funded: ["deployer", "user", "user2"],
      newAccounts: ["tokenX", "tokenY", "pool"],
    },
    state.Local!.testAccounts
  );
  state.addresses = addresses;
  state.keys = keys;
}

async function generateTokenIds(args: {}) {
  state.TokenContract?.analyzeMethods();
  state.tokenIds = {
    X: TokenId.derive(state.addresses.tokenX),
    Y: TokenId.derive(state.addresses.tokenY),
    lqXY: TokenId.derive(state.addresses.pool),
    Mina: TokenId.default,
  };
}

async function _getBalances(args: {}) {
  return await getBalances(state.addresses, state.tokenIds);
}

async function getPair(args: { id: string }) {
  const address = PublicKey.toBase58(state.addresses[args.id]);
  const key = PrivateKey.toBase58(state.keys[args.id]);
  return { address, key };
}

async function setAccountFee(args: {}) {
  state.accountFee = Mina.accountCreationFee();
}

async function initZkappInstance(args: {}) {
  let poolAddresses = {
    tokenX: state.addresses.tokenX,
    tokenY: state.addresses.tokenY,
    pool: state.addresses.pool,
  };

  await compileContract({});

  state.tokenX = new TokenContract(state.addresses.tokenX);
  state.tokenY = new TokenContract(state.addresses.tokenY);
  state.pool = new PoolContract(state.addresses.pool).setup(poolAddresses);
  state.poolTokenHolderX = new PoolTokenHolder(
    state.addresses.pool,
    state.tokenIds.X
  ).setup(poolAddresses);
  state.poolTokenHolderY = new PoolTokenHolder(
    state.addresses.pool,
    state.tokenIds.Y
  ).setup(poolAddresses);
}

async function deplyTokenContracts(args: {}) {
  console.log("Deploy & init token contracts...");
  let tx = await Mina.transaction(state.addresses.deployer, () => {
    // pay fees for creating 2 token contract accounts, and fund them so each can create 2 accounts themselves
    let feePayerUpdate = AccountUpdate.fundNewAccount(
      state.addresses.deployer,
      2
    );
    feePayerUpdate.send({
      to: state.addresses.tokenX,
      amount: state.accountFee!.mul(2),
    });
    feePayerUpdate.send({
      to: state.addresses.tokenY,
      amount: state.accountFee!.mul(2),
    });
    state.tokenX!.deploy();
    state.tokenY!.deploy();
  });
  await tx.prove();
  tx.sign([state.keys.deployer, state.keys.tokenX, state.keys.tokenY]);
  await tx.send();
}

async function deplyPoolContracts(args: {}) {
  console.log("Deploy pool contracts...");
  let tx = await Mina.transaction(state.addresses.deployer, () => {
    // pay fees for creating 3 dex accounts
    AccountUpdate.fundNewAccount(state.addresses.deployer, 3);
    state.pool!.deploy();
    state.poolTokenHolderX!.deploy();
    state.tokenX!.approveUpdate(state.poolTokenHolderX!.self);
    state.poolTokenHolderY!.deploy();
    state.tokenY!.approveUpdate(state.poolTokenHolderY!.self);
  });
  await tx.prove();
  tx.sign([state.keys.deployer, state.keys.pool]);
  await tx.send();
}

async function transferTokensToUser(args: {}) {
  console.log("Transfer tokens to user");
  let tx = await Mina.transaction(
    { sender: state.addresses.deployer, fee: state.accountFee!.mul(1) },
    () => {
      AccountUpdate.fundNewAccount(state.addresses.deployer, 4);
      state.tokenX!.transfer(
        state.addresses.tokenX,
        state.addresses.deployer,
        UInt64.from(10_000)
      );
      state.tokenY!.transfer(
        state.addresses.tokenY,
        state.addresses.deployer,
        UInt64.from(10_000)
      );
      state.tokenX!.transfer(
        state.addresses.tokenX,
        state.addresses.user,
        UInt64.from(10_000)
      );
      state.tokenY!.transfer(
        state.addresses.tokenY,
        state.addresses.user,
        UInt64.from(10_000)
      );
    }
  );
  await tx.prove();
  tx.sign([state.keys.deployer, state.keys.tokenX, state.keys.tokenY]);
  await tx.send();
}

async function supplyInitialLiquidityToPool(args: {}) {
  const tx = await Mina.transaction(
    { sender: state.addresses.deployer, fee: state.accountFee! },
    () => {
      AccountUpdate.fundNewAccount(state.addresses.deployer);
      state.pool!.supplyLiquidityBase(UInt64.from(10_000), UInt64.from(10_000));
    }
  );
  await tx.prove();
  tx.sign([state.keys.deployer]);
  await tx.send();
}

async function supplyLiquidityByUser(args: {}) {
  const userDx = 500n;
  const tx = await Mina.transaction(state.addresses.user, () => {
    AccountUpdate.fundNewAccount(state.addresses.user);
    state.pool!.supplyLiquidity(UInt64.from(userDx));
  });
  await tx.prove();
  tx.sign([state.keys.user]);
  await tx.send();
}

async function _fetchAccount(args: { publicKey58: string }) {
  const publicKey = PublicKey.fromBase58(args.publicKey58);
  return await fetchAccount({ publicKey });
}

async function getBalance(args: { publicKey58: string }) {
  const publicKey = PublicKey.fromBase58(args.publicKey58);
  const balance = Mina.getBalance(publicKey);
  return JSON.stringify(balance.toJSON());
}

//--------------------------------------------------
// list of callable functions wrapping zkApp methods

const functions = {
  loadContract,
  compileContract,
  setActiveInstanceToBerkeley,
  setActiveInstanceToLocal,
  prepareTestAccounts: _prepareTestAccounts,
  generateTokenIds,
  setAccountFee,
  initZkappInstance,
  deplyTokenContracts,
  deplyPoolContracts,
  transferTokensToUser,
  supplyInitialLiquidityToPool,
  getBalance,
  getBalances: _getBalances,
  getPair,
  fetchAccount: _fetchAccount,

  setupZkappInstance: async (args: {}) => {
    if (state.hasBeenSetup) return;

    console.log("setting up Zkapp...");

    await loadContract(args);
    await setActiveInstanceToBerkeley(args);

    state.hasBeenSetup = true;
    console.log("done");
  },
  setupZkappInstanceLocal: async (args: {}) => {
    if (state.hasBeenSetup) return;

    console.log("setting up Zkapp LOCAL...");

    await loadContract(args);
    await setActiveInstanceToLocal(args);
    await _prepareTestAccounts(args);
    await generateTokenIds(args);
    await setAccountFee(args);
    await initZkappInstance(args);
    await deplyTokenContracts(args);
    await deplyPoolContracts(args);
    await transferTokensToUser(args);
    await supplyInitialLiquidityToPool(args);

    state.hasBeenSetup = true;
    console.log("done");
  },
};

//--------------------------------------------------

export type WorkerFunctions = keyof typeof functions;

export type ZkappWorkerRequest = {
  id: number;
  fn: WorkerFunctions;
  args: any;
};

export type ZkappWorkerReponse = {
  id: number;
  data: any;
};

onmessage = async (event: MessageEvent<ZkappWorkerRequest>) => {
  const returnData = await functions[event.data.fn](event.data.args);

  const response: ZkappWorkerReponse = {
    id: event.data.id,
    data: returnData,
  };
  postMessage(response);
};

// await functions.setupZkappInstanceLocal({});
