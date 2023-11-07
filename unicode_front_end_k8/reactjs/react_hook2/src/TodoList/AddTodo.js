import React, { useContext, useState } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import { v4 as uuid } from "uuid";

const AddTodo = () => {
  const [doName, setDoName] = useState("");

  const { dispatch } = useContext(StateContext);

  const handleAdd = (e) => {
    e.preventDefault();
    if (doName.length) {
      const todo = {
        id: uuid(),
        name: doName,
      };
      //Thêm vào StateProvider
      dispatch({
        type: "todos/add",
        payload: todo,
      });

      setDoName("");
    } else {
      alert("Vui lòng nhập tên công việc");
    }
  };

  const handleChange = (e) => {
    setDoName(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleAdd}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          onChange={handleChange}
          value={doName}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
