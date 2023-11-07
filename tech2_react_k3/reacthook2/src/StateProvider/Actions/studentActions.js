export const addStudent = (student) => {
  return {
    type: "student/add",
    payload: student,
  };
};
