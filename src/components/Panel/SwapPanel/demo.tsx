import React from "react";
import Button from "$components/Button";
import useAccount from "$states/useAccount";

const SwapPanelDemo = () => {
  const balances = useAccount((state) => state.balances);

  const handleSwapClick = () => {
    //
  };

  return (
    <div className="bg-background-l2 rounded-lg overflow-hidden shadow-lg w-[500px] p-4 flex flex-col gap-4 text-left">
      <div className="text-center">
        <h2 className="text-gray-700 text-base">Swap</h2>
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

      <div>
        <Button text="Swap" variant="secondary" onClick={handleSwapClick} />
      </div>
    </div>
  );
};

export default SwapPanelDemo;
