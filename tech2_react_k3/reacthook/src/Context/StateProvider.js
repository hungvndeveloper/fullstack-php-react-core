import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, setState] = useState({
    msg: "Tech2",
    name: "Hoàng An",
  });

  const setMessage = (msg) => {
    setState({ ...state, msg: msg });
  };

  const dispatch = {
    setMessage,
  };

  return (
    <StateContext.Provider
      value={{
        data: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
