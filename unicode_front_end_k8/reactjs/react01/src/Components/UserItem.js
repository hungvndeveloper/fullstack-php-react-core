import React from "react";

const UserItem = ({ id, name, email }) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserItem;
