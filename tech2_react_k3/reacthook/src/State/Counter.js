import React, { useState } from "react";
function Counter(props) {
  //useState()
  //Nhận vào 1 đối số => Giá trị mặc định của State (initial state)

  //Trả về 1 array
  //+ Phần tử đầu: Tên state
  //+ Phần tử thứ hai: callback để cập nhật giá trị cho State

  //const a = count++

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Up</button>
      <button onClick={handleDecrement}>Down</button>
    </div>
  );
}
export default Counter;
