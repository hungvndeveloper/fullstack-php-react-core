export const addTodo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};

export const getTodos = (todos) => {
  return {
    type: "todos/fetch",
    payload: todos,
  };
};
