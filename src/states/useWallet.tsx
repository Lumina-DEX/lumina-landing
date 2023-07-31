import { create } from "zustand";

interface WalletModel {
  hasWallet: boolean;
  walletConnected: boolean;
  accountExists: boolean;
  publicKey58: string;
  network: string;
  balances: { [tokenId: string]: number };
}

interface WalletState extends WalletModel {
  update: (value: Partial<WalletModel>) => void;
}

const useWallet = create<WalletState>((set) => ({
  hasWallet: false,
  walletConnected: false,
  accountExists: false,
  publicKey58: "",
  network: "",
  balances: {},

  update: (value: Partial<WalletModel>) => {
    set((state) => ({ ...state, ...value }));
  },
}));

export default useWallet;
