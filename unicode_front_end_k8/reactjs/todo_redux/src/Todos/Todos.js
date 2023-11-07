import React from "react";
import ShowTodos from "./ShowTodos";
import AddTodo from "./AddTodo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todos.scss";

const Todos = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <h1>Todo App</h1>
          <ShowTodos />
          <AddTodo />
        </div>
      </div>
    </div>
  );
};

export default Todos;
