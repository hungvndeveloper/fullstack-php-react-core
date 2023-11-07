import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, todoSelector } from "../Redux/Slices/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos, status } = useSelector(todoSelector);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h1>Todo App</h1>
      {status !== "idle" &&
        (status === "pending" ? (
          <p>Loading...</p>
        ) : (
          todos.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)
        ))}
    </div>
  );
};

export default Todos;
