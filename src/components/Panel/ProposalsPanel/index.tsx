import SearchInput from "$components/Input/SearchInput";
import usePools from "$states/usePools";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Avatar, Button, Divider, Table, Tabs } from "react-daisyui";
import clsx from "classnames";
import { useNavigate } from "react-router-dom";
import ProposalsTable from "$components/Table/ProposalsTable";

const ProposalsPanel = () => {
  const navigate = useNavigate();
  const pools = usePools((state) => state.pools);
  const [tabValue, setTabValue] = useState(0);

  return (
    <div className="flex flex-col gap-6 mt-24">
      <div className="flex justify-between items-end">
        <div className="text-start font-bold text-primary text-2xl">
          Proposals
        </div>
        <div>
          <Button
            className="normal-case"
            color="secondary"
            size="sm"
            onClick={() => navigate("new")}
          >
            New Proposal
          </Button>
        </div>
      </div>
      <div className="bg-light-100 rounded-3xl shadow-lg flex flex-col overflow-hidden">
        <div className="w-full py-6">
          <ProposalsTable />
        </div>
      </div>
    </div>
  );
};

export default ProposalsPanel;
