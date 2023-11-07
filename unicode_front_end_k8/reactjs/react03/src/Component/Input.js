import React, { forwardRef } from "react";

// const Input = ({ title }, ref) => {
//   return (
//     <>
//       <h2>{title}</h2>
//       <input type="text" placeholder="Tìm kiếm..." ref={ref} />
//     </>
//   );
// };

// export default forwardRef(Input); //Higher Order Component

const Input = forwardRef(({ title }, ref) => {
  return (
    <>
      <h2>{title}</h2>
      <input type="text" placeholder="Tìm kiếm..." ref={ref} />
    </>
  );
});

export default Input;
