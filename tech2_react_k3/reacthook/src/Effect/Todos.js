import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, settodos] = useState([]);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //Call api
  const getTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todos = await res.json();
    settodos(todos);
  };

  //componentDidMount
  useEffect(() => {
    //getTodos();
    return () => {
      //cleanup
      console.log("unmount");
    };
  }, []);

  //   useEffect(() => {
  //     console.log("didUpdate");
  //   });

  //console.log(todos);

  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    }

    setCount2(count2 + 1);
  };

  useEffect(() => {
    console.log("Count thay đổi");
  }, [count]);

  console.log(count, count2);

  return (
    <div>
      {/* {todos.map((todo, index) => (
        <h3 key={index}>{todo.title}</h3>
      ))} */}
      <button type="button" onClick={handleClick}>
        Button
      </button>
    </div>
  );
};

export default Todos;

/*
setState() => Chạy lại Todos()
setState() => Chạy lại Todos()

deps có các trường hợp: 
- [] => Chạy 1 lần => giống componentDidMount
- null => Cứ render là chạy componentDidUpdate
- [bien1] => Khi bien1 thay đổi => Chạy
- [bien1, bien2,...] => Khi 1 trong các biến thay đổi => Chạy
- return về 1 function trong hàm callback của useEffect componentWillUnmount

Lưu ý: Không nhất thiết các biến trong deps phải là state
*/
