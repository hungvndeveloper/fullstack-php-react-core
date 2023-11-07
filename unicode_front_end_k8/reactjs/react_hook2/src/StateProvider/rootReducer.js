export const rootReducer = (state, action) => {
  switch (action.type) {
    case "todos/add":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "todos/remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };

    default:
      return state;
  }
};
