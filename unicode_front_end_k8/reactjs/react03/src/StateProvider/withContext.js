import React, { useContext } from "react";
import { StateContext } from "./StateProvider";
const withContext = (ParentComponent) => (props) => {
  const context = useContext(StateContext);
  return <ParentComponent context={context} {...props} />;
};

export default withContext;
