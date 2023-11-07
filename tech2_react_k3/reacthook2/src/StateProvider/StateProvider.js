import React, { createContext, useReducer } from "react";
import { rootReducer, initialState } from "./rootReducer";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [data, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StateContext.Provider
      value={{
        data,
        dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
