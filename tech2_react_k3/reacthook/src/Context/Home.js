import React, { useContext } from "react";

import { StateContext } from "./StateProvider";

const Home = () => {
  const { data, dispatch } = useContext(StateContext);

  const handleChange = () => {
    console.log(dispatch);

    dispatch.setMessage("Unicode Academy");
  };

  console.log(data);

  return (
    <div>
      <h1>{data.msg}</h1>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default Home;
