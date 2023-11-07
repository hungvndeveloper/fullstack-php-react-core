import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/Actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.counter.count;
  });

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
