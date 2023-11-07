import React, { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";

const TodoItem = ({ id, name }) => {
  const { dispatch } = useContext(StateContext);

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove")) {
      dispatch({
        type: "todos/remove",
        payload: id,
      });
    }
  };

  return (
    <div className="todo-item">
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
