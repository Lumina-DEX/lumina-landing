import { Field, PrivateKey, PublicKey } from "snarkyjs";
export interface Account {
    privateKey: PrivateKey;
    publicKey: PublicKey;
}
export interface Accounts {
    [key: string]: Account;
}
export declare function prepareTestAccounts({ funded, newAccounts }: {
    funded: string[];
    newAccounts: string[];
}, testAccounts: Account[]): [{
    [key: string]: PublicKey;
}, {
    [key: string]: PrivateKey;
}];
export declare function getBalances(addresses: {
    [key: string]: PublicKey;
}, tokenIds: {
    [key: string]: Field;
}): Promise<{
    [key: string]: {
        [key: string]: bigint;
    };
}>;
