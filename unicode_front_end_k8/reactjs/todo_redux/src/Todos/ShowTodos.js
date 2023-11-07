import React, { useEffect } from "react";
import { fetchTodos } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { todoSelector } from "./todoSlice";
import TodoItem from "./TodoItem";

const ShowTodos = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector(todoSelector);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default ShowTodos;
