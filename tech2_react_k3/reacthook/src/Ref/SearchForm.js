import React, { useRef, useEffect, useState } from "react";
import Input from "./Input";

const SearchForm = () => {
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
  }, []);

  const handleChange = () => {
    inputRef.current.focus();
    inputRef.current.style.border = "1px solid red";
  };

  return (
    <div>
      <Input ref={inputRef} name="Hoàng An" />
      <button type="button" onClick={handleChange}>
        Change
      </button>
    </div>
  );
};

export default SearchForm;
