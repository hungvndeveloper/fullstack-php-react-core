import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { todoSelector, todoListSelector } from "./Redux/Selector/todoSelector";
import { addTodo } from "./Redux/Actions/todoActions";
import { demoThunkFunc, fetchTodos } from "./Redux/Reducers/todoReducer";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  // const todos = useSelector(todoSelector);
  // console.log(todos);

  const todoList = useSelector(todoListSelector);

  console.log(todoList);

  const handleAdd = () => {
    dispatch(demoThunkFunc(addTodo(Math.random())));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App;
