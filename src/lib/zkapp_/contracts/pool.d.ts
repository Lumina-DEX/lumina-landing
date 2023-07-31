import { PublicKey, SmartContract, UInt64, State } from 'snarkyjs';
declare const UInt64x2_base: (new (value: UInt64[]) => UInt64[]) & {
    _isStruct: true;
} & import("snarkyjs/dist/node/snarky").ProvablePure<UInt64[]> & {
    toInput: (x: UInt64[]) => {
        fields?: import("snarkyjs/dist/node/lib/field").Field[] | undefined;
        packed?: [import("snarkyjs/dist/node/lib/field").Field, number][] | undefined;
    };
    toJSON: (x: UInt64[]) => string[];
    fromJSON: (x: string[]) => UInt64[];
};
declare class UInt64x2 extends UInt64x2_base {
}
export interface PoolContractAddresses {
    tokenX: PublicKey;
    tokenY: PublicKey;
    pool: PublicKey;
    poolTokenHolderX?: PublicKey;
    poolTokenHolderY?: PublicKey;
}
export declare class PoolContract extends SmartContract {
    tokenX: PublicKey;
    tokenY: PublicKey;
    setup(addresses: PoolContractAddresses): PoolContract;
    /**
     * state which keeps track of total lqXY supply -- this is needed to calculate what to return when redeeming liquidity
     *
     * total supply is zero initially; it increases when supplying liquidity and decreases when redeeming it
     */
    totalSupply: State<UInt64>;
    /**
     * Mint liquidity tokens in exchange for X and Y tokens
     * @param dx input amount of X tokens
     * @param dy input amount of Y tokens
     * @return output amount of lqXY tokens
     *
     * This function fails if the X and Y token amounts don't match the current X/Y ratio in the pool.
     * This can also be used if the pool is empty. In that case, there is no check on X/Y;
     * instead, the input X and Y amounts determine the initial ratio.
     */
    supplyLiquidityBase(dx: UInt64, dy: UInt64): UInt64;
    /**
     * Mint liquidity tokens in exchange for X and Y tokens
     * @param dx input amount of X tokens
     * @return output amount of lqXY tokens
     *
     * This uses supplyLiquidityBase as the circuit, but for convenience,
     * the input amount of Y tokens is calculated automatically from the X tokens.
     * Fails if the liquidity pool is empty, so can't be used for the first deposit.
     */
    supplyLiquidity(dx: UInt64): UInt64;
    /**
     * Burn liquidity tokens to get back X and Y tokens
     * @param dl input amount of lqXY token
     * @return output amount of X and Y tokens, as a tuple [outputX, outputY]
     *
     * The transaction needs to be signed by the user's private key.
     *
     * Note: this is not a `@method` because there's nothing to prove which isn't already proven
     * by the called methods
     */
    redeemLiquidity(dl: UInt64): UInt64x2;
    /**
     * Swap X tokens for Y tokens
     * @param dx input amount of X tokens
     * @return output amount Y tokens
     *
     * The transaction needs to be signed by the user's private key.
     */
    swapX(dx: UInt64): UInt64;
    /**
     * Swap Y tokens for X tokens
     * @param dy input amount of Y tokens
     * @return output amount Y tokens
     *
     * The transaction needs to be signed by the user's private key.
     */
    swapY(dy: UInt64): UInt64;
    /**
     * helper method to approve burning of user's liquidity.
     * this just burns user tokens, so there is no incentive to call this directly.
     * instead, the pool token holders call this and in turn pay back tokens.
     *
     * @param user caller address
     * @param dl input amount of lq tokens
     * @returns total supply of lq tokens _before_ burning dl, so that caller can calculate how much dx / dx to returns
     *
     * The transaction needs to be signed by the user's private key.
     */
    burnLiquidity(user: PublicKey, dl: UInt64): UInt64;
    transfer(from: PublicKey, to: PublicKey, amount: UInt64): void;
}
export declare class PoolTokenHolder extends SmartContract {
    poolAddress: PublicKey;
    setup(addresses: PoolContractAddresses): PoolTokenHolder;
    redeemLiquidityPartial(user: PublicKey, dl: UInt64): UInt64x2;
    redeemLiquidity(user: PublicKey, dl: UInt64, otherTokenAddress: PublicKey): UInt64x2;
    swap(user: PublicKey, otherTokenAmount: UInt64, otherTokenAddress: PublicKey): UInt64;
}
export {};
