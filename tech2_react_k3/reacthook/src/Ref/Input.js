import React, { forwardRef } from "react";

const Input = ({ name }, ref) => {
  return (
    <>
      <h3>{name}</h3>
      <input
        ref={ref}
        type="text"
        name="keyword"
        placeholder="Từ khóa tìm kiếm..."
        style={{ outline: "none" }}
      />
    </>
  );
};

export default forwardRef(Input);
