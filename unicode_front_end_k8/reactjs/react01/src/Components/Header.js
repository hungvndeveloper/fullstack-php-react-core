import React from "react";

const Header = ({ name, onGetData }) => {
  console.log(name);

  const handleClick = () => {
    onGetData("Unicode");
  };

  return (
    <div>
      <h1>HEADER</h1>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Header;
