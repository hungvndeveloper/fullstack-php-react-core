import React, { useReducer } from "react";

import { increment, decrement } from "./Actions/counterAction";

const CounterAdvanced = () => {
  const rootReducer = (state, action) => {
    console.log(state, action);
    /*
    action sẽ là 1 object

    - type: Mô tả cho hành động: 
    + todos/add => Thêm vào todos list
    + todos/remove => Xóa todos list
    + todos/get => hiển thị danh sách

    - payload: Data gửi đi
    */
    switch (action.type) {
      case "counter/increment":
        return { ...state, count: state.count + action.payload };

      case "counter/decrement":
        return { ...state, count: state.count - action.payload };

      default:
        return state;
    }
  };

  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  const handleIncrement = () => {
    dispatch(increment(3));
  };

  const handeDecrement = () => {
    dispatch(decrement(5));
  };

  const { count } = state;
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handeDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default CounterAdvanced;

/*
- reducer => function nhận vào 2 đối số: state, action
- action => là 1 object bao gồm 2 phần tử: type, payload
- dispatch => Hàm có tác dụng gửi dữ liệu lên reducer, đối số sẽ là 1 action (object)
- action creator => 1 function trả về 1 object
*/
