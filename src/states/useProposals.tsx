import { Proposal } from "$types/proposal";
import { create } from "zustand";

interface ProposalState {
  proposals: Proposal[];
  update: (proposals: Proposal[]) => void;
}

const useProposals = create<ProposalState>((set) => ({
  proposals: [
    {
      number: "Proposal 001",
      title:
        "Reduce MINA governance proposal educe MINA governance proposal educe MINA governance proposal",
      description:
        "Reduce MINA governance proposal educe MINA governance proposal educe MINA governance proposal",
      state: 0,
    },
    {
      number: "Proposal 001",
      title:
        "Reduce MINA governance proposal educe MINA governance proposal educe MINA governance proposal",
      description: "Reduce MINA governance proposal",
      state: 1,
    },
    {
      number: "Proposal 001",
      title:
        "Reduce MINA governance proposal educe MINA governance proposal educe MINA governance proposal",
      description: "Reduce MINA governance proposal",
      state: 2,
    },
    {
      number: "Proposal 001",
      title: "Proposal 004",
      description: "Reduce MINA governance proposal",
      state: 0,
    },
    {
      number: "Proposal 001",
      title: "Proposal 005",
      description: "Reduce MINA governance proposal",
      state: 1,
    },
  ],
  update: (proposals: Proposal[]) => {
    set((state) => ({ proposals: [...state.proposals, ...proposals] }));
  },
}));

export default useProposals;
