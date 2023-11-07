import React, { useContext, useState } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import { addStudent } from "../StateProvider/Actions/studentActions";
import { v4 as uniqueId } from "uuid";
const AddStudent = () => {
  const { dispatch } = useContext(StateContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChangeValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() !== "" && email.trim() !== "") {
      const student = {
        id: uniqueId(),
        name,
        email,
      };

      dispatch(addStudent(student));

      setForm({
        name: "",
        email: "",
      });

      alert("Thành công");
    }
  };

  const { name, email } = form;

  console.log('add student');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChangeValue}
            value={name}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChangeValue}
            value={email}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddStudent;
