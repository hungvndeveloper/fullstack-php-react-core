import React, { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import TodoItem from "./TodoItem";

const ShowTodo = () => {
  const { state } = useContext(StateContext);

  const { todos } = state;

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default ShowTodo;
