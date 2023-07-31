var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Account, Circuit, method, AccountUpdate, PublicKey, SmartContract, UInt64, Struct, State, state, TokenId, } from 'snarkyjs';
import { TokenContract } from './token';
class UInt64x2 extends Struct([UInt64, UInt64]) {
}
export class PoolContract extends SmartContract {
    constructor() {
        super(...arguments);
        /**
         * state which keeps track of total lqXY supply -- this is needed to calculate what to return when redeeming liquidity
         *
         * total supply is zero initially; it increases when supplying liquidity and decreases when redeeming it
         */
        this.totalSupply = State();
    }
    // we cannot override SmartContract constructor
    setup(addresses) {
        this.tokenX = addresses.tokenX;
        this.tokenY = addresses.tokenY;
        return this;
    }
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
    supplyLiquidityBase(dx, dy) {
        let user = this.sender;
        let tokenX = new TokenContract(this.tokenX);
        let tokenY = new TokenContract(this.tokenY);
        // get balances of X and Y token
        // TODO: this creates extra account updates. we need to reuse these by passing them to or returning them from transfer()
        // but for that, we need the @method argument generalization
        let poolXUpdate = AccountUpdate.create(this.address, tokenX.token.id);
        let poolXBalance = poolXUpdate.account.balance.getAndAssertEquals();
        let poolYUpdate = AccountUpdate.create(this.address, tokenY.token.id);
        let poolYBalance = poolYUpdate.account.balance.getAndAssertEquals();
        // // assert dy === [dx * y/x], or x === 0
        let isXZero = poolXBalance.equals(UInt64.zero);
        let xSafe = Circuit.if(isXZero, UInt64.one, poolXBalance);
        let isDyCorrect = dy.equals(dx.mul(poolYBalance).div(xSafe));
        isDyCorrect.or(isXZero).assertTrue();
        tokenX.transfer(user, poolXUpdate, dx);
        tokenY.transfer(user, poolYUpdate, dy);
        // calculate liquidity token output simply as dl = dx + dx
        // => maintains ratio x/l, y/l
        let dl = dy.add(dx);
        this.token.mint({ address: user, amount: dl });
        // update l supply
        let l = this.totalSupply.get();
        this.totalSupply.assertEquals(l);
        this.totalSupply.set(l.add(dl));
        return dl;
    }
    /**
     * Mint liquidity tokens in exchange for X and Y tokens
     * @param dx input amount of X tokens
     * @return output amount of lqXY tokens
     *
     * This uses supplyLiquidityBase as the circuit, but for convenience,
     * the input amount of Y tokens is calculated automatically from the X tokens.
     * Fails if the liquidity pool is empty, so can't be used for the first deposit.
     */
    supplyLiquidity(dx) {
        // calculate dy outside circuit
        let x = Account(this.address, TokenId.derive(this.tokenX)).balance.get();
        let y = Account(this.address, TokenId.derive(this.tokenY)).balance.get();
        if (x.value.isConstant() && x.equals(UInt64.from(0)).toBoolean()) {
            throw Error('Cannot call `supplyLiquidity` when reserves are zero. Use `supplyLiquidityBase`.');
        }
        let dy = dx.mul(y).div(x);
        return this.supplyLiquidityBase(dx, dy);
    }
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
    redeemLiquidity(dl) {
        // call the token X holder inside a token X-approved callback
        let tokenX = new TokenContract(this.tokenX);
        let poolX = new PoolTokenHolder(this.address, tokenX.token.id);
        let dxdy = poolX.redeemLiquidity(this.sender, dl, this.tokenY);
        let dx = dxdy[0];
        tokenX.approveUpdateAndSend(poolX.self, this.sender, dx);
        return dxdy;
    }
    /**
     * Swap X tokens for Y tokens
     * @param dx input amount of X tokens
     * @return output amount Y tokens
     *
     * The transaction needs to be signed by the user's private key.
     */
    swapX(dx) {
        let tokenY = new TokenContract(this.tokenY);
        let poolY = new PoolTokenHolder(this.address, tokenY.token.id);
        let dy = poolY.swap(this.sender, dx, this.tokenX);
        tokenY.approveUpdateAndSend(poolY.self, this.sender, dy);
        return dy;
    }
    /**
     * Swap Y tokens for X tokens
     * @param dy input amount of Y tokens
     * @return output amount Y tokens
     *
     * The transaction needs to be signed by the user's private key.
     */
    swapY(dy) {
        let tokenX = new TokenContract(this.tokenX);
        let poolX = new PoolTokenHolder(this.address, tokenX.token.id);
        let dx = poolX.swap(this.sender, dy, this.tokenY);
        tokenX.approveUpdateAndSend(poolX.self, this.sender, dx);
        return dx;
    }
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
    burnLiquidity(user, dl) {
        // this makes sure there is enough l to burn (user balance stays >= 0), so l stays >= 0, so l was >0 before
        this.token.burn({ address: user, amount: dl });
        let l = this.totalSupply.get();
        this.totalSupply.assertEquals(l);
        this.totalSupply.set(l.sub(dl));
        return l;
    }
    transfer(from, to, amount) {
        this.token.send({ from, to, amount });
    }
}
__decorate([
    state(UInt64),
    __metadata("design:type", Object)
], PoolContract.prototype, "totalSupply", void 0);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64, UInt64]),
    __metadata("design:returntype", UInt64)
], PoolContract.prototype, "supplyLiquidityBase", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64]),
    __metadata("design:returntype", UInt64)
], PoolContract.prototype, "swapX", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UInt64]),
    __metadata("design:returntype", UInt64)
], PoolContract.prototype, "swapY", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, UInt64]),
    __metadata("design:returntype", UInt64)
], PoolContract.prototype, "burnLiquidity", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, PublicKey, UInt64]),
    __metadata("design:returntype", void 0)
], PoolContract.prototype, "transfer", null);
export class PoolTokenHolder extends SmartContract {
    // we cannot override SmartContract constructor
    setup(addresses) {
        this.poolAddress = addresses.pool;
        return this;
    }
    // simpler circuit for redeeming liquidity -- direct trade between our token and lq token
    // it's incomplete, as it gives the user only the Y part for an lqXY token; but doesn't matter as there's no incentive to call it directly
    // see the more complicated method `redeemLiquidity` below which gives back both tokens, by calling this method,
    // for the other token, in a callback
    redeemLiquidityPartial(user, dl) {
        // user burns dl, approved by the Pool main contract
        let pool = new PoolContract(this.poolAddress);
        let l = pool.burnLiquidity(user, dl);
        // in return, we give dy back
        let y = this.account.balance.get();
        this.account.balance.assertEquals(y);
        // we can safely divide by l here because the Pool contract logic wouldn't allow burnLiquidity if not l>0
        let dy = y.mul(dl).div(l);
        // just subtract the balance, user gets their part one level higher
        this.balance.subInPlace(dy);
        // be approved by the token owner parent
        this.self.body.mayUseToken = AccountUpdate.MayUseToken.ParentsOwnToken;
        // return l, dy so callers don't have to walk their child account updates to get it
        return [l, dy];
    }
    // more complicated circuit, where we trigger the Y(other)-lqXY trade in our child account updates and then add the X(our) part
    redeemLiquidity(user, dl, otherTokenAddress) {
        // first call the Y token holder, approved by the Y token contract; this makes sure we get dl, the user's lqXY
        let tokenY = new TokenContract(otherTokenAddress);
        let poolY = new PoolTokenHolder(this.address, tokenY.token.id);
        let result = poolY.redeemLiquidityPartial(user, dl);
        let l = result[0];
        let dy = result[1];
        tokenY.approveUpdateAndSend(poolY.self, user, dy);
        // in return for dl, we give back dx, the X token part
        let x = this.account.balance.get();
        this.account.balance.assertEquals(x);
        let dx = x.mul(dl).div(l);
        // just subtract the balance, user gets their part one level higher
        this.balance.subInPlace(dx);
        return [dx, dy];
    }
    // this works for both directions (in our case where both tokens use the same contract)
    swap(user, otherTokenAmount, otherTokenAddress) {
        // we're writing this as if our token === y and other token === x
        let dx = otherTokenAmount;
        let tokenX = new TokenContract(otherTokenAddress);
        // get balances
        let x = tokenX.getBalance(this.address);
        let y = this.account.balance.get();
        this.account.balance.assertEquals(y);
        // send x from user to us (i.e., to the same address as this but with the other token)
        tokenX.transfer(user, this.address, dx);
        // compute and send dy
        let dy = y.mul(dx).div(x.add(dx));
        // just subtract dy balance and let adding balance be handled one level higher
        this.balance.subInPlace(dy);
        return dy;
    }
}
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey, UInt64]),
    __metadata("design:returntype", UInt64x2)
], PoolTokenHolder.prototype, "redeemLiquidityPartial", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey,
        UInt64,
        PublicKey]),
    __metadata("design:returntype", UInt64x2)
], PoolTokenHolder.prototype, "redeemLiquidity", null);
__decorate([
    method,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PublicKey,
        UInt64,
        PublicKey]),
    __metadata("design:returntype", UInt64)
], PoolTokenHolder.prototype, "swap", null);
//# sourceMappingURL=pool.js.map