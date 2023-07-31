import TokenSelector from "$components/Selector/TokenSelector";
import useAccount from "$states/useAccount";
import useTokens from "$states/useTokens";
import useAssets from "$states/useAssets";
import { Token } from "$types/token";
import clsx from "classnames";
import Decimal from "decimal.js";
import React, { useEffect, useMemo, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Button, Dropdown, Tabs } from "react-daisyui";
import { BiCog } from "react-icons/bi";
import TransactionsSetting from "$components/DropDown/TransactionSettings";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

type Percent = number | string;

const SwapPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const tokens = useTokens((state) => state.tokens);
  const assets = useAssets((state) => state.assets);
  const balances = useAccount((state) => state.balances);
  const [tabValue, setTabValue] = useState(1);
  const [tabValue1, setTabValue1] = useState(0);

  const [fromToken, setFromToken] = useState<Token>(tokens[0]);
  const [fromAmount, setFromAmount] = useState("");
  const fromTokenBalance = useMemo(
    () => balances[fromToken!.tokenId] || 0,
    [balances, fromToken!.tokenId]
  );

  const [toToken, setToToken] = useState<Token>(tokens[1]);
  const [toAmount, setToAmount] = useState("0.0");
  const toTokenBalance = useMemo(
    () => balances[toToken!.tokenId] || 0,
    [balances, toToken!.tokenId]
  );

  const [slippagePercent, setSlippagePercent] = useState<Percent>(0);

  useEffect(() => {
    setFromAmount("0");
    let curPath = location.pathname;
    let tmp = searchParams.get("fromToken");
    if (fromToken === toToken) {
      setFromToken(toToken);
      setToToken(tokens.find((token) => token.symbol === tmp)!);
    }
    navigate({
      pathname: curPath,
      search: createSearchParams({
        fromToken: fromToken.symbol,
        toToken: toToken.symbol,
      }).toString(),
    });
  }, [fromToken]);

  useEffect(() => {
    setFromAmount("0");
    var curPath = location.pathname;
    let tmp = searchParams.get("toToken");
    if (fromToken === toToken) {
      setFromToken(tokens.find((token) => token.symbol === tmp)!);
      setToToken(fromToken);
    }
    navigate({
      pathname: curPath,
      search: createSearchParams({
        fromToken: fromToken.symbol,
        toToken: toToken.symbol,
      }).toString(),
    });
  }, [toToken]);

  return (
    <div className="bg-light-200 rounded-3xl shadow-lg flex flex-col w-[456px] overflow-hidden max-sm:w-[350px]">
      <Tabs
        className="w-full"
        variant="lifted"
        size="lg"
        value={tabValue}
        onChange={setTabValue}
      >
        <Tabs.Tab
          className={clsx("!border-0 grow", {
            "text-primary": tabValue === 0,
            "text-disabled": tabValue !== 0,
          })}
          value={0}
        >
          Swap
        </Tabs.Tab>
        <Tabs.Tab
          className={clsx("!border-0 grow", {
            "text-primary": tabValue === 1,
            "text-disabled": tabValue !== 1,
          })}
          value={1}
        >
          Limit
        </Tabs.Tab>
      </Tabs>
      {!tabValue ? (
        <div className="min-h-[446px]">
          {/* Swap from */}
          <div className="relative w-full p-8 pt-12 bg-light-100">
            <div className="absolute top-3 right-3 cursor-pointer">
              <Dropdown horizontal="left" vertical="bottom">
                <Dropdown.Toggle className="setting-btn">
                  <BiCog className="text-default" size={30} />
                </Dropdown.Toggle>
                <TransactionsSetting setSlippagePercent={setSlippagePercent} />
              </Dropdown>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="flex justify-between items-center w-full">
                <TokenSelector token={fromToken} setToken={setFromToken} />
                <span className="font-secondary">
                  Balance {fromTokenBalance.toString(2)}
                </span>
              </div>
              <div className="flex justify-between items-center w-full flex-row">
                <div className="basis-1/2">
                  <div className="flex flex-row items-baseline gap-2 justify-between">
                    <div className="text-left">
                      <CurrencyFormat
                        className="w-full bg-transparent text-default text-3xl focus:outline-none "
                        thousandSeparator={true}
                        decimalScale={2}
                        placeholder="0.0"
                        value={fromAmount}
                        onValueChange={({ value }) => setFromAmount(value)}
                      />
                    </div>
                    <div className="text-left">
                      <CurrencyFormat
                        className="w-full font-secondary text-disabled"
                        displayType="text"
                        thousandSeparator={true}
                        decimalScale={2}
                        prefix="~$"
                        value={new Decimal(fromToken!.usdPrice || "0")
                          .times(fromAmount || "0")
                          .toString()}
                      />
                    </div>
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="flex justify-end gap-x-2">
                    <Button
                      className="text-white bg-pink-200"
                      color="secondary"
                      size="xs"
                      onClick={() =>
                        setFromAmount((Number(fromTokenBalance) / 2).toString())
                      }
                    >
                      50%
                    </Button>
                    <Button
                      className="text-white bg-pink-200"
                      color="secondary"
                      size="xs"
                      onClick={() => setFromAmount(fromTokenBalance.toString())}
                    >
                      Max
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swap to */}
          <div className="w-full p-8">
            <div className="flex flex-col w-full gap-4">
              <div className="flex justify-between items-center w-full">
                <TokenSelector token={toToken} setToken={setToToken} />
                <span className="font-secondary">
                  Balance {toTokenBalance.toString(2)}
                </span>
              </div>
              <div className="flex flex-row">
                <div className="basis-1/2">
                  <div className="flex flex-row items-baseline gap-2 justify-between">
                    <div className="text-left">
                      <CurrencyFormat
                        displayType="text"
                        className="w-full bg-transparent text-default text-3xl text-left focus:outline-none"
                        thousandSeparator={true}
                        decimalScale={2}
                        placeholder="0.0"
                        value={toAmount}
                      />
                    </div>
                    <div className="text-left">
                      <CurrencyFormat
                        displayType="text"
                        className="font-secondary text-disabled"
                        thousandSeparator={true}
                        decimalScale={2}
                        prefix="~$"
                        value={new Decimal(toToken!.usdPrice || "0")
                          .times(toAmount || "0")
                          .toString()}
                      />
                    </div>
                  </div>
                </div>
                <div className="basis-1/2"></div>
              </div>
              {/* Slippage Tolerance */}

              <div className="flex justify-between text-black">
                <p> Slippage Tolerance </p>

                <p>
                  {typeof slippagePercent === "number"
                    ? new Intl.NumberFormat("en-US", {
                        style: "percent",
                        maximumFractionDigits: 2,
                      }).format(slippagePercent / 100)
                    : "Invalid"}
                </p>
              </div>

              <Button
                className="w-full h-[60px] min-h-0 shadow-md"
                color="primary"
                size="lg"
              >
                Swap
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[446px]">
          <div className="relative w-full p-8 pt-12 bg-light-100">
            <div className="absolute top-3 right-3 cursor-pointer">
              <Dropdown horizontal="left" vertical="bottom">
                <Dropdown.Toggle className="setting-btn">
                  <BiCog className="text-default" size={30} />
                </Dropdown.Toggle>
                <TransactionsSetting setSlippagePercent={setSlippagePercent} />
              </Dropdown>
            </div>
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-row w-full ">
                <div className="basis-1/2 bg-green-500 text-white h-10 rounded-l-lg cursor-pointer flex items-center justify-center">
                  Buy
                </div>
                <div className="basis-1/2 text-black h-10 rounded-r-lg cursor-pointer flex items-center justify-center bg-gray-300">
                  Sell
                </div>
              </div>
              <div className="flex justify-between items-end w-full flex-row text-black">
                <div className="flex basis-1/2 justify-start">Price</div>
                <div className="flex justify-end w-full basis-1/2 items-end">
                  <CurrencyFormat
                    className="w-10 bg-transparent text-default text-3xl focus:outline-none "
                    thousandSeparator={true}
                    decimalScale={2}
                    placeholder="0.0"
                    value={0}
                    onValueChange={({ value }) => setFromAmount(value)}
                  />
                  <span className="text-lg">MINA</span>
                </div>
              </div>
              <div className="flex justify-between items-center w-full flex-row text-black">
                <div className="basis-2/5 text-left">Amount(to sell)</div>
                <div className="flex justify-between gap-x-2 basis-1/5">
                  <Button
                    className="text-white bg-pink-200"
                    color="secondary"
                    size="xs"
                    onClick={() =>
                      setFromAmount((Number(fromTokenBalance) / 2).toString())
                    }
                  >
                    50%
                  </Button>
                  <Button
                    className="text-white bg-pink-200"
                    color="secondary"
                    size="xs"
                    onClick={() => setFromAmount(fromTokenBalance.toString())}
                  >
                    Max
                  </Button>
                </div>
                <div className="flex justify-end w-full items-end basis-2/5 pl-4">
                  <CurrencyFormat
                    className="w-10 bg-transparent text-default text-3xl focus:outline-none "
                    thousandSeparator={true}
                    decimalScale={2}
                    placeholder="0.0"
                    value={0}
                    onValueChange={({ value }) => setFromAmount(value)}
                  />
                  <span className="text-lg">ETH</span>
                </div>
              </div>
              <div className="flex justify-between items-end w-full flex-row text-black">
                <div className="flex basis-1/2 justify-start">
                  Total(to buy)
                </div>
                <div className="flex justify-end w-full basis-1/2 items-end">
                  <CurrencyFormat
                    className="w-10 bg-transparent text-default text-3xl focus:outline-none "
                    thousandSeparator={true}
                    decimalScale={2}
                    placeholder="0.0"
                    value={0}
                    onValueChange={({ value }) => setFromAmount(value)}
                  />
                  <span className="text-lg">MINA</span>
                </div>
              </div>
              <Button
                className="w-full h-[60px] min-h-0 shadow-md text-white"
                color="success"
                size="lg"
              >
                Buy
              </Button>
            </div>
          </div>

          {/* Swap to */}
          <div className="w-full p-8">
            <div className="flex flex-col w-full gap-4">
              <div>
                <Tabs value={tabValue1} onChange={setTabValue1}>
                  <Tabs.Tab value={0} className="text-lg text-purple-800">
                    Assets
                  </Tabs.Tab>
                  <Tabs.Tab value={1} className="text-lg text-gray-500">
                    Orders
                  </Tabs.Tab>
                </Tabs>
                <div className="border-1 border-purple-800"> </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwapPanel;
