import React from "react";
import ShowStudents from "./ShowStudents";
import AddStudent from "./AddStudent";

const Students = () => {
  return (
    <div style={{ margin: "3%" }}>
      <ShowStudents />
      <AddStudent />
    </div>
  );
};

export default Students;
