import useTokens from "$states/useTokens";
import { Token } from "$types/token";
import Decimal from "decimal.js";
import React, { useEffect, useMemo, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Button, ButtonGroup } from "react-daisyui";
import clsx from "classnames";
const StakePanel = () => {
  const tokens = useTokens((state) => state.tokens);
  const [fromAmount, setFromAmount] = useState("");
  const [fromToken, setFromToken] = useState<Token | undefined>(tokens[0]);
  const [stakeActive, setStakeActive] = useState(true);
  const [unStakeActive, setUnStakeActive] = useState(false);

  const setStake = (val: boolean) => {
    if (val === true) {
      setStakeActive(true);
      setUnStakeActive(false);
    } else {
      setStakeActive(false);
      setUnStakeActive(true);
    }
  };
  // bg-action-primary bg-gray-300
  return (
    <div className="bg-light-100 rounded-3xl shadow-lg flex flex-col w-[456px] overflow-hidden pt-6 max-sm:w-[300px]">
      <div className="text-center text-xl text-action-primary font-bold">
        Your LUMINA Stake
      </div>
      <div className="flex flex-row mt-3 mb-8">
        <div className="grid basis-1/3 justify-items-end">
          <div
            className="w-16 h-16 bg-no-repeat bg-contain"
            style={{ backgroundImage: "url(/tokens/lumina-lg.png)" }}
          ></div>
        </div>
        <div className="grid basis-2/3 justify-items-center content-center">
          <div className="flex flex-row text-sm w-48 shadow-md rounded-r-lg rounded-l-lg">
            <div
              className={clsx(
                " rounded-l-lg py-2 basis-16 grow cursor-pointer",
                {
                  "bg-action-primary text-white": stakeActive,
                  "bg-gray-300": !stakeActive,
                }
              )}
              onClick={() => setStake(true)}
            >
              Stake
            </div>
            <div
              className={clsx(
                "rounded-r-lg py-2 basis-16 grow cursor-pointer",
                {
                  "bg-action-primary text-white": unStakeActive,
                  "bg-gray-300": !unStakeActive,
                }
              )}
              onClick={() => setStake(false)}
            >
              Unstake
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-light-200 px-9 pt-3 pb-8 gap-4">
        <div className="flex justify-between text-sm text-disabled font-secondary">
          <div>Current Stake 0</div>
          <div>Balance 0</div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-baseline gap-2">
            <CurrencyFormat
              className="bg-transparent text-black text-bold text-2xl focus:outline-none w-20"
              thousandSeparator={true}
              decimalScale={2}
              placeholder="0.0"
              value={fromAmount}
              onValueChange={({ value }) => setFromAmount(value)}
            />
            <CurrencyFormat
              className="font-secondary text-disabled"
              displayType="text"
              thousandSeparator={true}
              decimalScale={2}
              prefix="~$"
              value={new Decimal(fromToken!.usdPrice || "0")
                .times(fromAmount || "0")
                .toString()}
            />
          </div>
          <div className="flex gap-2">
            <Button
              className="text-white bg-pink-200"
              color="secondary"
              size="xs"
              // onClick={() =>
              //     setFromAmount((Number(5) / 2).toString()) }
            >
              50%
            </Button>
            <Button
              className="text-white bg-pink-200"
              color="secondary"
              size="xs"
            >
              Max
            </Button>
          </div>
        </div>
        <div>
          <Button
            className="mt-3 w-full font-primary tracking-[10px] font-bold text-white"
            color="secondary"
          >
            Stake
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StakePanel;
