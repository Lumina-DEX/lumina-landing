import { TokenContract } from './token';
import { PrivateKey, Mina, AccountUpdate, fetchAccount, TokenId, UInt64 } from 'snarkyjs';
describe('Token contract', () => {
    let token, tokenAccount, tokenId, sender, user, accountFee;
    beforeAll(async () => {
        const local = Mina.LocalBlockchain({ proofsEnabled: false, enforceTransactionLimits: false });
        Mina.setActiveInstance(local);
        [sender, user] = local.testAccounts;
        const privateKey = PrivateKey.random();
        tokenAccount = { privateKey, publicKey: privateKey.toPublicKey() };
        token = new TokenContract(tokenAccount.publicKey);
        tokenId = TokenId.derive(tokenAccount.publicKey);
        accountFee = Mina.accountCreationFee();
    });
    it('deploy', async () => {
        const tx = await Mina.transaction(sender.publicKey, () => {
            const feePayerUpdate = AccountUpdate.fundNewAccount(sender.publicKey);
            feePayerUpdate.send({ to: tokenAccount.publicKey, amount: accountFee });
            token.deploy();
        });
        await tx.prove();
        tx.sign([sender.privateKey, tokenAccount.privateKey]);
        const txid = await tx.send();
        await txid.wait();
        expect(txid.isSuccess).toBe(true);
    });
    it('has the initially minted tokens', async () => {
        fetchAccount({ publicKey: tokenAccount.publicKey, tokenId });
        const balance = Mina.getBalance(tokenAccount.publicKey, tokenId);
        expect(balance).toEqual(token.SUPPLY);
    });
    it('send tokens to user', async () => {
        const tx = await Mina.transaction({ sender: sender.publicKey, fee: accountFee.mul(1) }, () => {
            AccountUpdate.fundNewAccount(sender.publicKey, 1);
            token.transfer(tokenAccount.publicKey, user.publicKey, UInt64.from(10000));
        });
        await tx.prove();
        tx.sign([sender.privateKey, tokenAccount.privateKey]);
        await tx.send();
        fetchAccount({ publicKey: user.publicKey, tokenId });
        const balance = Mina.getBalance(user.publicKey, tokenId);
        expect(balance.toBigInt()).toEqual(10000n);
    });
});
//# sourceMappingURL=token.test.js.map