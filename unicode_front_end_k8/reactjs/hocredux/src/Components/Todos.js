import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../Redux/Middlewares/todosMiddleware";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo) => (
        <h4 key={todo.id}>{todo.title}</h4>
      ))}
    </div>
  );
};

export default Todos;
