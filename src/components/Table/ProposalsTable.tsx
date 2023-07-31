import React from "react";
import useTokens from "$states/useTokens";
import useProposals from "$states/useProposals";
import { Avatar, Button, Form, Table, Toggle } from "react-daisyui";
import clsx from "classnames";
import SearchInput from "$components/Input/SearchInput";
import { useNavigate } from "react-router-dom";

function ProposalsTable() {
  const proposals = useProposals((state) => state.proposals);
  const state = ["Defeated", "Executed", "Cancelled"];
  const navigate = useNavigate();
  return (
    <div className="w-full bg-light-100 rounded-3xl">
      <div className="flex justify-between items-center px-8">
        <div>
          <SearchInput
            className="bg-transparent font-secondary py-2 px-3 h-auto pr-8 border-1 border-gray-300"
            placeholder="Search"
          />
        </div>
        <div className="max-[520px]:hidden">
          <Form>
            <Form.Label title="Show Cancelled" className="font-bold">
              <Toggle className="m-2" color="primary" />
            </Form.Label>
          </Form>
        </div>
      </div>
      <Table className="rounded-box" zebra>
        <Table.Body>
          {proposals.map((proposal, index) => (
            <Table.Row
              className="text-disabled"
              key={index}
              hover
              onClick={() => navigate("detail")}
            >
              <span />
              <span className="max-[520px]:hidden"> {proposal.number} </span>
              <p className="truncate w-80 max-[456px]:w-40">
                {" "}
                {proposal.title}{" "}
              </p>
              <Button
                size="sm"
                className={clsx("bg-transparent border-1 max-sm:hidden", {
                  "  border-orange-400, text-orange-400": proposal.state === 0,
                  "  border-emerald-400, text-emerald-400":
                    proposal.state === 1,
                  "  border-gray-400, text-gray-400": proposal.state === 2,
                })}
              >
                {state[proposal.state]}
              </Button>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ProposalsTable;
