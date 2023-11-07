import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  todosActions,
  todosSelector,
  demoThunkFunc,
  fetchTodos,
  addTodoFetch,
} from "./todosSlice";

import todosStyle from "./Todos.module.scss";

import clsx from "clsx";

import logo from "../../logo.svg";
import logo2 from "../../Images/logo.jpg";

const { btn, "btn-success": btnSuccess } = todosStyle;

const { addTodo } = todosActions;

const Todos = () => {
  const { loading, loadingAdd, todos } = useSelector(todosSelector);

  const dispatch = useDispatch();

  //console.log(todos);

  const handleAdd = () => {
    //dispatch(addTodo("Learn Redux"));
    //dispatch(demoThunkFunc());
    const todoName = "Todo " + Math.random();

    dispatch(
      addTodoFetch({
        userId: 1,
        id: todos.length + 1,
        title: todoName,
        completed: false,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const check = false;

  return (
    <div>
      {/* {loading === "pending" ? (
        <p>Loading...</p>
      ) : (
        todos.map((todo) => {
          return <h3 key={todo.id}>{todo.title}</h3>;
        })
      )}

      {loadingAdd == "pending" ? <p>Đang thêm...</p> : false} */}

      <button onClick={handleAdd} className={clsx(btn, check && btnSuccess)}>
        Add
      </button>

      <img src={logo} />
      <img src={logo2} />
    </div>
  );
};

export default Todos;
