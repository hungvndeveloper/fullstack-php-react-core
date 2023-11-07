import React, { Component, forwardRef } from "react";

// const Input = forwardRef((props, ref) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <input type="text" placeholder="Fullname..." ref={ref} />
//     </div>
//   );
// });

// export default Input;

function Input(props, ref) {
  return (
    <div>
      <h2>{props.name}</h2>
      <input type="text" placeholder="Fullname..." ref={ref} />
    </div>
  );
}

export default forwardRef(Input); //Higher Order Component
