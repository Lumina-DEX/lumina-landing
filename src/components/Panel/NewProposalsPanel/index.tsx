import SearchInput from "$components/Input/SearchInput";
import usePools from "$states/usePools";
import React, { useState } from "react";
import { Button, Input, Textarea } from "react-daisyui";
import clsx from "classnames";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Proposal } from "$types/proposal";

const NewProposalsPanel = () => {
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(true);
  const [proposal, setProposal] = useState<Proposal | undefined>();

  const sendProposal = () => {
    console.log("proposal data", proposal);
  };

  const checkEmptyTitle = (value: string) => {
    if (value.length > 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }

    setProposal({
      number: proposal?.number,
      title: value,
      state: 0,
      description: proposal?.description,
    });
  };

  return (
    <div className="container flex justify-center items-center mt-16 max-sm:mt-20">
      <div className="w-[650px] py-8 px-12 flex flex-col gap-6 bg-light-100 rounded-3xl shadow-lg max-sm:w-[450px] max-[450px]:w-[300px]">
        <div className="flex justify-between items-center">
          <div>
            <IoIosArrowRoundBack
              className="text-[32px] font-bold cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="font-bold text-primary text-2xl">
            Create New Proposal
          </div>
          <div></div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-primary text-base">
                Proposal Number
              </span>
            </label>
            <Input
              size="sm"
              className="border-1 border-gray-500"
              onChange={(e) =>
                setProposal({
                  number: e.target.value,
                  title: proposal?.title,
                  state: 0,
                  description: proposal?.description,
                })
              }
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span
                className={clsx("label-text text-base", {
                  "text-primary": !empty,
                  "text-orange-400": empty,
                })}
              >
                Title *
              </span>
            </label>
            <Input
              size="sm"
              className="border-1 border-gray-500"
              onChange={(e) => checkEmptyTitle(e.target.value)}
            />
            <label className="label">
              <span
                className={clsx("label-text-alt", {
                  invisible: !empty,
                  "visible text-orange-400": empty,
                })}
              >
                Field cannot be empty.
              </span>
            </label>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-primary text-base  ">
                Description
              </span>
            </label>
            <Textarea
              className="border-1 border-gray-500 h-[300px]"
              onChange={(e) =>
                setProposal({
                  number: proposal?.number,
                  title: proposal?.title,
                  state: 0,
                  description: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div>
          <Button
            className="mt-3 w-full font-primary tracking-[10px] font-bold text-white"
            color="secondary"
            onClick={sendProposal}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewProposalsPanel;
