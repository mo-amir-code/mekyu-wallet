export type ChainType = "ethereum" | "solana";

export type State = {
  isLoading: boolean;
  seed: Buffer | null;
  selectedChain: ChainType;
  totalAmount: number;
  wallets: string[];
};

export type Action =
  | { type: "IS_LOADING"; payload: boolean }
  | { type: "SEED"; payload: Buffer | null }
  | { type: "SELECT_CHAIN"; payload: ChainType }
  | { type: "TOTAL_AMOUNT"; payload: number }
  | { type: "ADD_WALLET"; payload: string | string[] };

export type Dispatch = (action: Action) => void;
