import { Mina, PrivateKey, PublicKey, fetchAccount } from "snarkyjs";
export function prepareTestAccounts({ funded, newAccounts }, testAccounts) {
    const names = [...funded, ...newAccounts];
    const accounts = names.reduce((accs, name, i) => {
        if (funded.includes(name)) {
            accs[name] = testAccounts[i];
        }
        else {
            const privateKey = PrivateKey.random();
            accs[name] = {
                privateKey,
                publicKey: PublicKey.fromPrivateKey(privateKey),
            };
        }
        return accs;
    }, {});
    const addresses = names.reduce((addrs, name) => {
        addrs[name] = accounts[name].publicKey;
        return addrs;
    }, {});
    const keys = names.reduce((keys, name) => {
        keys[name] = accounts[name].privateKey;
        return keys;
    }, {});
    return [addresses, keys];
}
export async function getBalances(addresses, tokenIds) {
    const balances = {};
    for (const addressName in addresses) {
        balances[addressName] = {};
        for (const tokenIdName in tokenIds) {
            try {
                await fetchAccount({ publicKey: addresses[addressName], tokenId: tokenIds[tokenIdName] });
                const balance = Mina.getBalance(addresses[addressName], tokenIds[tokenIdName]);
                balances[addressName][tokenIdName] = balance.toBigInt();
            }
            catch (e) {
                balances[addressName][tokenIdName] = BigInt(0);
            }
        }
    }
    return balances;
}
//# sourceMappingURL=testUtils.js.map