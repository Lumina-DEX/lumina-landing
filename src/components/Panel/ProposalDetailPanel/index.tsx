import SearchInput from "$components/Input/SearchInput";
import usePools from "$states/usePools";
import React, { useState } from "react";
import { Button, Input, Textarea } from "react-daisyui";
import clsx from "classnames";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Proposal } from "$types/proposal";

const ProposalDetailPanel = () => {
  const navigate = useNavigate();

  const state = ["Defeated", "Executed", "Cancelled"];

  return (
    <div className="container flex justify-center items-center mt-16 max-sm:mt-20">
      <div className="w-[700px] py-8 px-12 flex flex-col gap-4 bg-light-100 rounded-3xl shadow-lg max-sm:w-[450px] max-[450px]:w-[300px]">
        <div className="flex justify-between items-center">
          <div>
            <IoIosArrowRoundBack
              className="text-[32px] font-bold cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="font-bold text-primary text-2xl">Proposal 001</div>
          <div></div>
        </div>
        <div className="flex justify-end">
          <Button
            size="sm"
            className="bg-transparent border-1 border-orange-400, text-orange-400"
          >
            {state[0]}
          </Button>
        </div>
        <div className="text-left">
          Reduce MINA governance proposal and thresholds
        </div>
        <div className="text-left truncate">
          <label>Auther:</label>0x00000000000000000000000000000000000000000000
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div>Description</div>
          <div className="border-1 border-gray-500 p-3 min-h-[450px] rounded-xl">
            <p className="break-words">This is description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalDetailPanel;
