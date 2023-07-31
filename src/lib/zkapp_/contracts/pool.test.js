import { getBalances, prepareTestAccounts } from './testUtils';
import { PoolContract, PoolTokenHolder } from './pool';
import { TokenContract } from './token';
import { Mina, AccountUpdate, TokenId, UInt64, Permissions } from 'snarkyjs';
describe('Pool contract', () => {
    let addresses, keys, tokenIds, tokenX, tokenY, pool, poolTokenHolderX, poolTokenHolderY, accountFee, proofsEnabled = false;
    beforeAll(async () => {
        const Local = Mina.LocalBlockchain({
            proofsEnabled: proofsEnabled,
            enforceTransactionLimits: false,
        });
        Mina.setActiveInstance(Local);
        [addresses, keys] = prepareTestAccounts({
            funded: ["deployer", "user", "user2"],
            newAccounts: ["tokenX", "tokenY", "pool"]
        }, Local.testAccounts);
        TokenContract.analyzeMethods();
        tokenIds = {
            X: TokenId.derive(addresses.tokenX),
            Y: TokenId.derive(addresses.tokenY),
            lqXY: TokenId.derive(addresses.pool),
            Mina: TokenId.default,
        };
        accountFee = Mina.accountCreationFee();
        let poolAddresses = {
            tokenX: addresses.tokenX,
            tokenY: addresses.tokenY,
            pool: addresses.pool,
        };
        if (proofsEnabled) {
            console.log('Compiling TokenContract...');
            await TokenContract.compile();
            console.log('Compiling PoolTokenHolder...');
            await PoolTokenHolder.compile();
            console.log('Compiling PoolContract...');
            await PoolContract.compile();
        }
        tokenX = new TokenContract(addresses.tokenX);
        tokenY = new TokenContract(addresses.tokenY);
        pool = new PoolContract(addresses.pool).setup(poolAddresses);
        poolTokenHolderX = new PoolTokenHolder(addresses.pool, tokenIds.X).setup(poolAddresses);
        poolTokenHolderY = new PoolTokenHolder(addresses.pool, tokenIds.Y).setup(poolAddresses);
        console.log('Deploy & init token contracts...');
        let tx = await Mina.transaction(addresses.deployer, () => {
            // pay fees for creating 2 token contract accounts, and fund them so each can create 2 accounts themselves
            let feePayerUpdate = AccountUpdate.fundNewAccount(addresses.deployer, 2);
            feePayerUpdate.send({ to: addresses.tokenX, amount: accountFee.mul(2) });
            feePayerUpdate.send({ to: addresses.tokenY, amount: accountFee.mul(2) });
            tokenX.deploy();
            tokenY.deploy();
        });
        await tx.prove();
        tx.sign([keys.deployer, keys.tokenX, keys.tokenY]);
        await tx.send();
        console.log('Deploy pool contracts...');
        tx = await Mina.transaction(addresses.deployer, () => {
            // pay fees for creating 3 dex accounts
            AccountUpdate.fundNewAccount(addresses.deployer, 3);
            pool.deploy();
            poolTokenHolderX.deploy();
            tokenX.approveUpdate(poolTokenHolderX.self);
            poolTokenHolderY.deploy();
            tokenY.approveUpdate(poolTokenHolderY.self);
        });
        await tx.prove();
        tx.sign([keys.deployer, keys.pool]);
        await tx.send();
        console.log('Transfer tokens to user');
        tx = await Mina.transaction({ sender: addresses.deployer, fee: accountFee.mul(1) }, () => {
            AccountUpdate.fundNewAccount(addresses.deployer, 4);
            tokenX.transfer(addresses.tokenX, addresses.deployer, UInt64.from(10000));
            tokenY.transfer(addresses.tokenY, addresses.deployer, UInt64.from(10000));
            tokenX.transfer(addresses.tokenX, addresses.user, UInt64.from(10000));
            tokenY.transfer(addresses.tokenY, addresses.user, UInt64.from(10000));
        });
        await tx.prove();
        tx.sign([keys.deployer, keys.tokenX, keys.tokenY]);
        await tx.send();
    });
    it('tokens X and Y are sent out', async () => {
        const balances = await getBalances(addresses, tokenIds);
        expect(balances.deployer.X).toEqual(10000n);
        expect(balances.deployer.Y).toEqual(10000n);
        expect(balances.user.X).toEqual(10000n);
        expect(balances.user.Y).toEqual(10000n);
    });
    it('supply initial liquidity to pool', async () => {
        const tx = await Mina.transaction({ sender: addresses.deployer, fee: accountFee }, () => {
            AccountUpdate.fundNewAccount(addresses.deployer);
            pool.supplyLiquidityBase(UInt64.from(10000), UInt64.from(10000));
        });
        await tx.prove();
        tx.sign([keys.deployer]);
        await tx.send();
        // pool holds X and Y
        const balances = await getBalances(addresses, tokenIds);
        expect(balances.pool.X).toEqual(10000n);
        expect(balances.pool.Y).toEqual(10000n);
        // initial liquidity provider received lqXY
        expect(balances.deployer.lqXY).toEqual(20000n);
    });
    it('supply liquidity by user, lqXY account for user does not exist yet', async () => {
        const oldBalances = await getBalances(addresses, tokenIds);
        const lqXYtotalSupply = pool.totalSupply.get().toBigInt();
        const userDx = 500n;
        const tx = await Mina.transaction(addresses.user, () => {
            AccountUpdate.fundNewAccount(addresses.user);
            pool.supplyLiquidity(UInt64.from(userDx));
        });
        await tx.prove();
        tx.sign([keys.user]);
        await tx.send();
        const balances = await getBalances(addresses, tokenIds);
        expect(balances.user.X).toEqual(oldBalances.user.X - userDx);
        expect(balances.user.Y).toEqual(oldBalances.user.Y - (userDx * oldBalances.pool.Y) / oldBalances.pool.X);
        expect(balances.user.Mina).toEqual(oldBalances.user.Mina - accountFee.toBigInt());
        expect(balances.user.lqXY).toEqual((userDx * lqXYtotalSupply) / oldBalances.pool.X);
    });
    it('supply liquidity by user, lqXY account exists', async () => {
        const oldBalances = await getBalances(addresses, tokenIds);
        const lqXYtotalSupply = pool.totalSupply.get().toBigInt();
        const userDx = 1000n;
        const tx = await Mina.transaction(addresses.user, () => {
            pool.supplyLiquidity(UInt64.from(userDx));
        });
        await tx.prove();
        tx.sign([keys.user]);
        await tx.send();
        const balances = await getBalances(addresses, tokenIds);
        expect(balances.user.X).toEqual(oldBalances.user.X - userDx);
        expect(balances.user.Y).toEqual(oldBalances.user.Y - (userDx * oldBalances.pool.Y) / oldBalances.pool.X);
        expect(balances.user.Mina).toEqual(oldBalances.user.Mina);
        expect(balances.user.lqXY).toEqual(oldBalances.user.lqXY +
            (userDx * lqXYtotalSupply) / oldBalances.pool.X);
    });
    it('supply liquidity with no tokens fails', async () => {
        const tx = await Mina.transaction(addresses.user2, () => {
            AccountUpdate.fundNewAccount(addresses.user2);
            pool.supplyLiquidityBase(UInt64.from(100), UInt64.from(100));
        });
        await tx.prove();
        tx.sign([keys.user2]);
        await expect(tx.send()).rejects.toThrow(/Overflow/);
    });
    it('supply liquidity with insufficient tokens fails', async () => {
        const tx = await Mina.transaction(addresses.user, () => {
            pool.supplyLiquidityBase(UInt64.from(1e9), UInt64.from(1e9));
        });
        await tx.prove();
        tx.sign([keys.user]);
        await expect(tx.send()).rejects.toThrow(/Overflow/);
    });
    it('supply liquidity with forbidden token send fails', async () => {
        const txSetup = await Mina.transaction(addresses.tokenX, () => {
            let tokenXtokenAccount = AccountUpdate.create(addresses.tokenX, tokenIds.X);
            tokenXtokenAccount.account.permissions.set({
                ...Permissions.initial(),
                send: Permissions.impossible(),
            });
            tokenXtokenAccount.requireSignature();
            // token X owner approves w/ signature so we don't need another method for this test
            let tokenX = AccountUpdate.create(addresses.tokenX);
            tokenX.approve(tokenXtokenAccount);
            tokenX.requireSignature();
        });
        await txSetup.prove();
        await txSetup.sign([keys.tokenX]).send();
        const tx = await Mina.transaction(addresses.tokenX, () => {
            AccountUpdate.fundNewAccount(addresses.tokenX);
            pool.supplyLiquidity(UInt64.from(10));
        });
        await tx.prove();
        await expect(tx.sign([keys.tokenX]).send()).rejects.toThrow();
    });
    it('liquidity redeem succeeds', async () => {
        const oldBalances = await getBalances(addresses, tokenIds);
        const lqXYtotalSupply = pool.totalSupply.get().toBigInt();
        const userDl = 100n;
        const tx = await Mina.transaction(addresses.user, () => {
            pool.redeemLiquidity(UInt64.from(userDl));
        });
        await tx.prove();
        tx.sign([keys.user]);
        await tx.send();
        const balances = await getBalances(addresses, tokenIds);
        expect(balances.user.lqXY).toEqual(oldBalances.user.lqXY - userDl);
        expect(balances.total.lqXY).toEqual(lqXYtotalSupply - userDl);
        const [dx, dy] = [
            (userDl * oldBalances.pool.X) / lqXYtotalSupply,
            (userDl * oldBalances.pool.Y) / lqXYtotalSupply,
        ];
        expect(balances.user.X).toEqual(oldBalances.user.X + dx);
        expect(balances.user.Y).toEqual(oldBalances.user.Y + dy);
        expect(balances.pool.X).toEqual(oldBalances.pool.X - dx);
        expect(balances.pool.Y).toEqual(oldBalances.pool.Y - dy);
    });
    it('swap test 10X for Y', async () => {
        const oldBalances = await getBalances(addresses, tokenIds);
        const userDx = 10n;
        const tx = await Mina.transaction(addresses.user, () => {
            pool.swapX(UInt64.from(userDx));
        });
        await tx.prove();
        await tx.sign([keys.user]).send();
        const balances = await getBalances(addresses, tokenIds);
        const dy = (userDx * oldBalances.pool.Y) / (oldBalances.pool.X + userDx);
        expect(balances.user.X).toEqual(oldBalances.user.X - userDx);
        expect(balances.user.Y).toEqual(oldBalances.user.Y + dy);
        expect(balances.pool.X).toEqual(oldBalances.pool.X + userDx);
        expect(balances.pool.Y).toEqual(oldBalances.pool.Y - dy);
        expect(balances.pool.X * balances.pool.Y).toBeGreaterThanOrEqual(oldBalances.pool.X * oldBalances.pool.Y);
    });
});
//# sourceMappingURL=pool.test.js.map