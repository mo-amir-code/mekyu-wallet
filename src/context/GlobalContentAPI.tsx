import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Action, Dispatch, State } from "./types";
import { STORAGE_KEY } from "@/lib/data";

// 2. Initial state
const initialState: State = {
  isLoading: true,
  isAuthenticated: false,
  password: null,
  seed: null,
  selectedChain: "solana",
  totalAmount: 0,
  wallets: [],
};

// 3. Reducer
function userReducer(state: State, action: Action): State {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "IS_AUTHENTICATED":
      return { ...state, isAuthenticated: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "SEED":
      return { ...state, seed: action.payload };
    case "SELECT_CHAIN":
      return { ...state, selectedChain: action.payload };
    case "TOTAL_AMOUNT":
      return { ...state, totalAmount: action.payload };
    case "ADD_WALLET":
      const updatedWallets = [
        ...state.wallets,
        ...(typeof action.payload == "string"
          ? [action.payload]
          : action.payload),
      ];
      return { ...state, wallets: updatedWallets };
    default:
      return state;
  }
}

// 4. Create context
const UserStateContext = createContext<State | undefined>(undefined);
const UserDispatchContext = createContext<Dispatch | undefined>(undefined);

// 5. Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleSetUp = async () => {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "");
      if (data?.seed) {
        dispatch({
          type: "SEED",
          payload: data.seed,
        });
      }

      if (data?.wallets) {
        dispatch({
          type: "ADD_WALLET",
          payload: data.wallets,
        });
      }

      if (data?.totalAmount) {
        dispatch({
          type: "TOTAL_AMOUNT",
          payload: data.totalAmount,
        });
      }

      if (data?.selectedChain) {
        dispatch({
          type: "SELECT_CHAIN",
          payload: data.selectedChain,
        });
      }

      if (data?.password) {
        dispatch({
          type: "PASSWORD",
          payload: data.password,
        });
      }
    } catch (error) {
      console.error(error);
    }

    dispatch({
      type: "IS_LOADING",
      payload: false,
    });
  };

  useEffect(() => {
    handleSetUp();
  }, []);

  return (
    <UserStateContext.Provider value={{ ...state }}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

// 6. Custom Hooks
export const useUserState = () => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
};

export const useUserDispatch = () => {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
};
