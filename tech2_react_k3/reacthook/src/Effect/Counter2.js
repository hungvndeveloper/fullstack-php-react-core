import React, { useEffect, useLayoutEffect, useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count === 5) {
      setCount(1);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        Up
      </button>
    </div>
  );
};

export default Counter2;

/*
useEffect
Khi state thanh đổi => Cập nhật ui
Hàm callback trong useEffect sẽ chạy

useLayoutEffect
Khi state thanh đổi => chạy hàm callback
Cập nhật ui
*/
