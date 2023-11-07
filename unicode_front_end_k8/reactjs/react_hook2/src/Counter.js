import React, { useReducer } from "react";
import { counterReducer } from "./Reducers/counterReducer";
import { increment, decrement } from "./Actions/counterActions";

const Counter = () => {
  //Reducer => function

  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch(increment(2));
  };

  const handleDecrement = () => {
    dispatch(decrement(3));
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;

//Hook useReducer được thiết kế dưới dạng state, action

//State => Object để lưu trữ các state

//Action => Hành động từ phía UI (Component)
//+ type (Tên hành động)
//+ payload (Data)

//UI (Component) => dispatch => Update state vào reducer

//action creator => Function trả về action (object)
