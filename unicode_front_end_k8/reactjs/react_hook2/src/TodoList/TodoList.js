import React, { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import ShowTodo from "./ShowTodo";
import AddTodo from "./AddTodo";
import "./TodoList.css";
import useColor from "../Hooks/useColor";

const TodoList = () => {
  const color = useColor();
  //const { state, dispatch } = useContext(StateContext);

  //console.log(state);

  return (
    <div style={{ background: color }}>
      <h1>TodoList App</h1>
      <ShowTodo />
      <hr />
      <AddTodo />
    </div>
  );
};

export default TodoList;
