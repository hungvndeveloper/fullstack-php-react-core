import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Redux/Slices/counterSlice";
import { counterSelector } from "../Redux/Slices/counterSlice";

const { increment, decrement } = counterActions;

const Counter = () => {
  const dispatch = useDispatch();

  const { count, abc } = useSelector(counterSelector);

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>{abc}</h2>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
