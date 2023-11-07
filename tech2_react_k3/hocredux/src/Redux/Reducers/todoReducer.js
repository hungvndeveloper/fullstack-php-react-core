import { getTodos } from "../Actions/todoActions";
const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/add":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "todos/remove":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "todos/fetch":
      return {
        todos: action.payload,
      };

    default:
      return state;
  }
};

//Redux Thunk

export const demoThunkFunc = (todo) => {
  return (dispatch, getState) => {
    //getState() => Lấy ra tất cả State của Redux
    dispatch(todo);
  };
};

export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    dispatch(getTodos(data));
  };
};
