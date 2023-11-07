import React, { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
const ShowStudents = () => {
  const { data } = useContext(StateContext);

  const { students } = data;

  console.log("show student");

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Tên</th>
          <th>Email</th>
          <th>Sửa</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ id, name, email }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              <button type="button">Sửa</button>
            </td>
            <td>
              <button type="button">Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ShowStudents;
