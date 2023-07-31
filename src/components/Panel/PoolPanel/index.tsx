import SearchInput from "$components/Input/SearchInput";
import usePools from "$states/usePools";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Avatar, Button, Divider, Table, Tabs } from "react-daisyui";
import clsx from "classnames";
import { useNavigate } from "react-router-dom";

const PoolPanel = () => {
  const navigate = useNavigate();
  const pools = usePools((state) => state.pools);
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className="bg-light-100 rounded-3xl shadow-lg flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-12 py-6">
        <Tabs size="lg" value={tabValue} onChange={setTabValue}>
          <Tabs.Tab
            className={clsx("font-medium", {
              "text-primary text-2xl ": tabValue === 0,
              "text-default text-xl": tabValue !== 0,
            })}
            value={0}
          >
            Public Pools
          </Tabs.Tab>
          <Tabs.Tab
            className={clsx("font-medium", {
              "text-primary text-2xl ": tabValue === 1,
              "text-default text-xl": tabValue !== 1,
            })}
            value={1}
          >
            Permissioned Pools
          </Tabs.Tab>
        </Tabs>
        <Button
          className="normal-case"
          color="secondary"
          onClick={() => navigate("/add")}
        >
          + Add Liquidity
        </Button>
      </div>

      <Divider className="bg-primary h-1 m-0" />

      <div className="w-full py-6">
        <Table className="rounded-box px-8" zebra>
          <Table.Head className="text-base text-default">
            <span />
            <div className="flex items-center gap-4">
              <span>Name</span>
              <SearchInput
                className="bg-transparent font-secondary py-2 px-3 h-auto pr-8"
                placeholder="Search"
              />
            </div>
            <span className="max-md:hidden">Your Liquidity</span>
            <span className="max-sm:hidden">Total Liquidity</span>
            <span>APR</span>
            <span />
          </Table.Head>

          <Table.Body>
            {pools.map((pool, index) => {
              return (
                <Table.Row key={index} className="text-disabled">
                  <span />
                  <div className="flex items-center gap-2">
                    <Avatar.Group space={20}>
                      <Avatar
                        className="border-0"
                        src={pool.x.icon}
                        shape="circle"
                        size={30}
                      />
                      <Avatar
                        className="border-0"
                        src={pool.y.icon}
                        shape="circle"
                        size={30}
                      />
                    </Avatar.Group>
                    <span className="uppercase text-base">
                      {pool.x.symbol} / {pool.y.symbol}
                    </span>
                  </div>
                  <CurrencyFormat
                    displayType="text"
                    className="font-secondary text-left text-base max-md:hidden"
                    thousandSeparator
                    decimalScale={2}
                    value={0}
                  />
                  <CurrencyFormat
                    displayType="text"
                    className="font-secondary text-left text-base max-sm:hidden"
                    thousandSeparator
                    decimalScale={2}
                    value={pool.liquidity}
                  />
                  <CurrencyFormat
                    displayType="text"
                    className="font-secondary text-left text-base"
                    decimalScale={2}
                    suffix="%"
                    value={pool.apr}
                  />
                  <span />
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default PoolPanel;
