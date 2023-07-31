import useWallet from "$states/useWallet";
import ZkappWorkerClient from "./zkapp_/worker_client";

const transactionFee = 0.1;

const MINA_SUB_DECIMAL: number = 1e9;

// Public Address of the zkApp account
const ZKAPP_CONTRACT_ADDRESS: string =
  "B62qo7TsbVEKU2q7md2upZuMwjEizuYcMy5t4FPdmB3YkonZbF5dJSu";

const WALLET_CONNECTED_BEFORE_FLAG: string = "wallet_connected_before";

export const mina = (window as any)?.mina;
export const zkClient = new ZkappWorkerClient();

// -------------------------------------------------------

export async function init() {
  useWallet.setState(() => ({ hasWallet: !!mina }));

  // Wallet initialization
  if (mina) {
    mina.on("chainChanged", handleChainChanged);
    mina.on("accountsChanged", handleAccountsChanged);

    // load SnarkyJs and set active network to Berkeley Testnet
    console.log("Loading SnarkyJS...");
    await zkClient.setupZkappInstance();
    await requestNetwork();
    console.log("done");

    // request Account only if user has connected before to avoid obstructive wallet popup
    const hasConnectedBefore =
      localStorage.getItem(WALLET_CONNECTED_BEFORE_FLAG) === "true";
    console.log({ hasConnectedBefore });
    if (hasConnectedBefore) {
      await requestAccounts();
    }
  }
}

export async function connect() {
  if (!mina) return;
  await requestNetwork();
  await requestAccounts();

  localStorage.setItem(WALLET_CONNECTED_BEFORE_FLAG, "true");
}

// -------------------------------------------------------

async function requestNetwork() {
  await mina
    .requestNetwork()
    .then(handleChainChanged)
    .catch((e: any) => console.error(e));
}

async function handleChainChanged(newChain: string) {
  useWallet.setState(() => ({ network: newChain }));
}

async function requestAccounts() {
  await mina
    .requestAccounts()
    .then(handleAccountsChanged)
    .catch((e: any) => console.error(e));
}

async function handleAccountsChanged(accounts: string[]) {
  let publicKey58: string = "";
  let walletConnected: boolean = false;

  if (accounts?.length > 0) {
    publicKey58 = accounts[0];
    await setupWorkerClient(publicKey58);
    walletConnected = true;
  } else {
    localStorage.setItem(WALLET_CONNECTED_BEFORE_FLAG, "false");
  }
  useWallet.setState(() => ({ publicKey58, walletConnected }));
}

async function setupWorkerClient(publicKey58: string) {
  try {
    // check if connected user account exists or not
    const res = await zkClient.fetchAccount(publicKey58);
    console.log("fetchAccount", res);
    const accountExists = res.error == null;
    useWallet.setState((state) => ({ ...state, accountExists }));

    // get account balance if account exists
    if (accountExists) {
      const balance = await zkClient.getBalance(publicKey58);
      useWallet.setState((state) => ({
        ...state,
        balances: { mina: Number(balance.toString()) / MINA_SUB_DECIMAL },
      }));
    } else {
      throw new Error(res.error.statusText);
    }
  } catch (e: any) {
    console.error("setupWorkerClient", e);
  }
}
