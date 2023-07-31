import React, { useEffect, useState } from "react";
import { Button, Dropdown } from "react-daisyui";
import useTokens from "$states/useTokens";
import { Token } from "$types/token";
import { BsChevronDown } from "react-icons/bs";
import TokenSelecterModal from "$components/Modal/TokenSelecterModal";

interface Props {
  token: Token;
  setToken: (token: Token) => void;
}

const TokenSelector: React.FC<Props> = ({ token, setToken }) => {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    setVisible(!visible);
  };

  const showModal = (visible: boolean) => {
    setVisible(visible);
  };

  const setCurToken = (token: Token) => {
    setToken(token);
  }

  return (
    <>
      <div className="flex bg-opacity-9 rounded-lg cursor-pointer p-1" onClick={openModal}>
        <div className="flex-none grid w-10 justify-items-center items-center">
          <div
            className="w-8 h-8 bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${token.icon})` }}
          ></div>
        </div>
        <div className="flex flex-row items-center px-2">
          <div className="text-black text-xl">{token.symbol}</div>
          <div className="pl-2">
            <BsChevronDown/>
          </div>
        </div>
      </div>
      <TokenSelecterModal visible={visible} showModal={showModal} setCurToken={setCurToken} token={token} />
    </>
  );
};

export default TokenSelector;
