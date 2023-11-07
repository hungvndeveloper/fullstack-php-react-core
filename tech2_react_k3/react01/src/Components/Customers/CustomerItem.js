import React from "react";

const getStatusBtn = (status) => {
  return (
    <button className={`btn btn-${status ? "success" : "danger"}`}>
      {status ? "Active" : "Inactive"}
    </button>
  );
};

export default function CustomerItem({ name, email, status, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{getStatusBtn(status)}</td>
    </tr>
  );
}
