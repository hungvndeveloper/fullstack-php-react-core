import React, { useEffect, useState, useLayoutEffect } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count === 6) {
      setCount(0);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Counter2;
