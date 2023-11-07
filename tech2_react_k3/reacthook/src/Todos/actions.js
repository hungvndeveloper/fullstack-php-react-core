export const addTodo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};

export const removeTodo = (id) => {
  return {
    type: "todos/remove",
    payload: id,
  };
};

export const markCompleteTodo = (todos) => {
  return {
    type: "todos/markComplete",
    payload: todos,
  };
};
