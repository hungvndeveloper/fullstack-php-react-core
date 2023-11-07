export const fetchTodos = () => {
  return async (dispatch) => {
    //Call api, update lại state
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todos = await res.json();
    dispatch({
      type: "todos/fetch",
      payload: todos,
    });
  };
};

export const addTodo = () => {
  return async (dispatch) => {
    //call api add todo
    //dispatch tới Reducer
  };
};
