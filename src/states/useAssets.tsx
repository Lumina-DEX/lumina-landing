import { Asset } from "$types/Asset";
import { create } from "zustand";

interface AssetState {
  assets: Asset[];
  update: (tokens: Asset[]) => void;
}

const useTokens = create<AssetState>((set) => ({
  assets: [
    {
      tokenId: "id1",
      symbol: "mina1",
      icon: "/tokens/lumina.png",
      price1: 111,
      price2: 222,
    },
    {
      tokenId: "id2",
      symbol: "dai2",
      icon: "/tokens/dai.png",
      price1: 100,
      price2: 200,
    },
    {
      tokenId: "id3",
      symbol: "mina3",
      icon: "/tokens/dai.png",
      price1: 50,
      price2: 80,
    },
  ],
  update: (assets: Asset[]) => {
    set(() => ({ assets }));
  },
}));

export default useTokens;
