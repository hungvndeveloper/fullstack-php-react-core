export const initialState = {
  todos: [
    {
      id: 1,
      name: "Learn Redux",
      completed: true,
    },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "todos/add":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "todos/remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "todos/markComplete":
      return {
        ...state,
        todos: action.payload,
      };

    default:
      return state;
  }
};
