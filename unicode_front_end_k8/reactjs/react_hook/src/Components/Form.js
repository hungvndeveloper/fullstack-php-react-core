import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    console.log(email, password);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
