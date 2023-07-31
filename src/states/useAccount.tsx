import { create } from "zustand";

interface AccountModel {
  address: string;
  key: string;
  balances: { [tokenId: string]: bigint };
}

interface AccountState extends AccountModel {
  update: (value: Partial<AccountModel>) => void;
}

const useAccount = create<AccountState>((set) => ({
  address: "",
  key: "",
  balances: {},
  update: (value: Partial<AccountState>) => {
    set((state) => ({ ...state, ...value }));
  },
}));

export default useAccount;
