import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [doName, setDoName] = useState("");

  const handleChange = (e) => {
    setDoName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (doName.length) {
      const todo = {
        name: doName,
        isCompleted: false,
      };
      dispatch(addTodo(todo));
      setDoName("");
    } else {
      alert("Vui lòng nhập");
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name..."
            onChange={handleChange}
            value={doName}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
