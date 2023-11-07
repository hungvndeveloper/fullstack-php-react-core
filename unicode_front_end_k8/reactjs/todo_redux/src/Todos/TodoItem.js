import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, completedTodo } from "./todoSlice";

const TodoItem = ({ id, name, isCompleted }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    if (window.confirm("Bạn có chắc chắn")) {
      dispatch(removeTodo(id));
    }
  };

  const handleCompleted = (id, status) => {
    dispatch(
      completedTodo({
        id,
        status,
      })
    );
  };

  return (
    <div
      className={`todo-item d-flex justify-content-between mb-3 ${
        isCompleted ? "completed" : ""
      }`}
    >
      <input
        type="checkbox"
        onChange={() => {
          handleCompleted(id, !isCompleted);
        }}
        checked={isCompleted}
      />
      <span>{name}</span>
      <span
        className="remove"
        onClick={() => {
          handleRemove(id);
        }}
      >
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
