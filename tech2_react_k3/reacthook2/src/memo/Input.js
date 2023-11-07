import React, { useId } from "react";

const Input = ({ label, type, name, value, onChangeValue }) => {
  const id = useId();

  return (
    <p>
      <label htmlFor={id}>{label} </label> <br />
      <input
        type={type}
        name={name}
        id={id}
        placeholder={`${label}...`}
        required
        onChange={onChangeValue}
        value={value}
      />
    </p>
  );
};

export default Input;
