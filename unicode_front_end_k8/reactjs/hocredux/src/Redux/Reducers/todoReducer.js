const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/add":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "todos/fetch":
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};
