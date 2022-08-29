import { createContext } from "react";
import { useGlobalProvider } from "../hooks/useGlobalProvider";

// @ts-ignore
export const GlobalContext = createContext({});

export function GlobalProvider(props) {
  const globalProvider = useGlobalProvider();

  return (
    <GlobalContext.Provider value={globalProvider} >
      {props.children}
    </GlobalContext.Provider>
  );
};
