// import { zkClient } from "$lib/wallet";
import useAccount from "$states/useAccount";
import React from "react";
import { Button } from "react-daisyui";

const PoolPanel = () => {
  const balances = useAccount((state) => state.balances);

  const handleAddLiquidity = () => {
    // zkClient.supplyInitialLiquidityToPool().then(() => {
    //   //
    //   console.log("supplyInitialLiquidityToPool", "success");
    // });
  };

  return (
    <div className="bg-background-l2 rounded-lg overflow-hidden shadow-lg w-[500px] p-4 flex flex-col gap-4 text-left">
      <div className="text-center">
        <h2 className="text-gray-700 text-base">Public Pool</h2>
      </div>

      <div className="flex flex-col w-1/2 gap-2 m-auto">
        <p>Balances:</p>

        {Object.entries(balances).map(([tokenId, balance]) => (
          <div
            key={tokenId}
            className="flex justify-between text-gray-700 text-sm"
          >
            <span>{tokenId}:</span>
            <span>{balance.toString()}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button onClick={handleAddLiquidity} color="error">
          + Add Liquidity
        </Button>
      </div>
    </div>
  );
};

export default PoolPanel;
