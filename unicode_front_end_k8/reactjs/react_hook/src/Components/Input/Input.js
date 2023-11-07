import React, { useId } from "react";

const Input = ({ name, text, type = "text" }) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} name={name} placeholder={`${text}...`} />
    </div>
  );
};

export default Input;
