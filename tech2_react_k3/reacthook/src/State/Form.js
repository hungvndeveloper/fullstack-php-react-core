import React, { useState } from "react";

const Form = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
    age: 0,
  });

  const handleChangeValue = (e) => {
    // if (e.target.name === "email") {
    //   setEmail(e.target.value);
    // }
    // if (e.target.name === "password") {
    //   setPassword(e.target.value);
    // }

    const data = { ...form };
    data[e.target.name] = e.target.value;

    setForm(data);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, password, age } = form;
    console.log(email, password, age);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="">Email</label> <br />
          <input
            type="text"
            placeholder="Email..."
            name="email"
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <label htmlFor="">Password</label> <br />
          <input
            type="password"
            placeholder="Password..."
            name="password"
            onChange={handleChangeValue}
          />
        </div>
        <div>
          <label htmlFor="">Age</label> <br />
          <input
            type="number"
            placeholder="Age..."
            name="age"
            onChange={handleChangeValue}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
