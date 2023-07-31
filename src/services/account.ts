import React, { useEffect } from "react";
// import { zkClient } from "../lib/wallet";
import useAccount from "$states/useAccount";

const userId = "user";
let timer: number;

const AccountService: React.FC = () => {
  const { update } = useAccount();
  const accountState = useAccount((state) => ({
    address: state.address,
    key: state.key,
    balances: state.balances,
  }));

  useEffect(() => {
    // zkClient.getPair({ id: userId }).then((response: unknown) => {
    //   console.log("getPair", response);
    //   update(response as { address: string; key: string });
    // });
  }, []);

  useEffect(() => {
    const getBalances = () => {
      // zkClient.getBalances().then((response: unknown) => {
      //   console.log("getBalances", response);
      //   const userBalances: { [tokenId: string]: bigint } = (
      //     response as { [address: string]: { [tokenId: string]: bigint } }
      //   )[userId];
      //   if (!!userBalances) {
      //     update({ balances: userBalances });
      //   }
      // });
    };

    getBalances();
    timer = setInterval(() => {
      getBalances();
    }, 1000 * 30);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return null;
};

export default AccountService;
