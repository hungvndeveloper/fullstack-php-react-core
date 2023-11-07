import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await res.json();
    setTodos(data);
    setLoading(false);
  };

  useEffect(() => {
    getTodos();
    console.log("didmount");
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todos.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)
      )}
      {/* <button type="button" onClick={getTodos}>
        Load Data
      </button> */}
    </div>
  );
};

export default Todos;

/*
useEffect(callback, deps)

deps = null hoặc không có => giống componentDidUpdate
deps = [] => Giống componentDidMount
deps = [bien1, bien2,..] => Khi bien1 hoặc bien2 thay đổi => Chạy
Nếu return hàm trong callback => Giống componentWillUnmount, hay còn gọi là cleanup

Thứ tự chạy của useEffect
- State cập nhật
- Component Re-render
- Dom cập nhật
- Cập nhật UI
- Chạy cleanup
- Hàm trong useEffect sẽ chạy
*/
