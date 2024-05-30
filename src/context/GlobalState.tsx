/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useReducer, Dispatch } from "react";
import { ReactNode } from "react";
import AppReducer, { initialState } from "./AppReducer";
import { TAction, TinitailState } from "../types/types";

type ValueContext = {
  state: TinitailState;
  dispatch: Dispatch<TAction>;
};

type GlobalContextProviderProps = {
  children: ReactNode;
};

const GlobalContext = createContext({} as ValueContext);

const GlobalStateProvider = ({
  children,
}: GlobalContextProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(GlobalContext);
