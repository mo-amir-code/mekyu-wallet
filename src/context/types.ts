export type ChainType = "ethereum" | "solana";

export type State = {
  isLoading: boolean;
  isAuthenticated: boolean;
  password: string | null;
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
  | { type: "ADD_WALLET"; payload: string | string[] }
  | { type: "IS_AUTHENTICATED"; payload: boolean }
  | { type: "PASSWORD"; payload: string | null };

export type Dispatch = (action: Action) => void;
