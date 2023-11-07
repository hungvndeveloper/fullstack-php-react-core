//Định nghĩa reducer

export const initialState = {
  students: [
    {
      id: 1,
      name: "Nguyễn Văn",
      email: "a@gmail.com",
    },
    {
      id: 2,
      name: "Nguyễn Văn",
      email: "a@gmail.com",
    },
    {
      id: 3,
      name: "Nguyễn Văn",
      email: "a@gmail.com",
    },
  ],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "student/add":
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    default:
      return state;
  }
};
