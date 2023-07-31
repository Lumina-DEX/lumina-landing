import React from "react";
import CurrencyFormat from "react-currency-format";
import useTokens from "$states/useTokens";
import { Avatar, Table } from "react-daisyui";

function TopTokensTable() {
  const tokens = useTokens((state) => state.tokens);

  return (
    <div className="w-full bg-light-100 rounded-3xl">
      <Table className="rounded-box" zebra>
        <Table.Head className="text-base text-default">
          <span />
          <span>Name</span>
          <span>Liquidity</span>
          <span className="max-lg:hidden">Price</span>
          <span className="max-lg:hidden">Price Change</span>
          <span className="max-sm:hidden">Volume 24h</span>
          <span />
        </Table.Head>

        <Table.Body>
          {tokens.map((token, index) => (
            <Table.Row className="text-disabled" key={index}>
              <span />
              <span className="flex items-center flex-row gap-x-2">
                <Avatar
                  className="border-0"
                  src={token.icon}
                  shape="circle"
                  size={30}
                />
                {token.symbol}
              </span>
              <span>
                {new Intl.NumberFormat("en-US", {
                  maximumSignificantDigits: 3,
                }).format(token.liquidity)}
              </span>
              <CurrencyFormat
                displayType="text"
                className="font-secondary text-left text-base max-lg:hidden"
                decimalScale={2}
                prefix="$"
                value={token.usdPrice}
              />
              <CurrencyFormat
                displayType="text"
                className="font-secondary text-emerald-600 text-base max-lg:hidden"
                decimalScale={2}
                suffix="%"
                value={token.priceChange}
              />
              <span className="max-sm:hidden">
                {new Intl.NumberFormat("en-US", {
                  maximumSignificantDigits: 3,
                }).format(token.dayVolume)}
              </span>

              <span />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TopTokensTable;
