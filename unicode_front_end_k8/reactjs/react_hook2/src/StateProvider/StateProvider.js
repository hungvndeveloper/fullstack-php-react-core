import React, { useReducer, createContext } from "react";
import { rootReducer } from "./rootReducer";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const initialState = {
    todos: [],
  };
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
