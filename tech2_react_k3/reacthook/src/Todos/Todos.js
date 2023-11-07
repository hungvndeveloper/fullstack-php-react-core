import React, { useReducer, useState } from "react";
import { v4 as uniqueId } from "uuid";

import { todoReducer } from "./reducer";

import { addTodo, removeTodo, markCompleteTodo } from "./actions";

import { initialState } from "./reducer";

const Todos = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [name, setName] = useState("");

  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: uniqueId(),
        name: name,
        completed: false,
      })
    );
    setName("");
  };

  const handleRemove = (id) => {
    if (window.confirm("Bạn có chắc chắn")) {
      dispatch(removeTodo(id));
    }
  };

  const handleMarkComplete = (id, status) => {
    const todos = [...state.todos];

    const index = todos.findIndex((todo) => todo.id === id);

    todos[index].completed = !status;
    dispatch(markCompleteTodo(todos));
  };

  console.log(state.todos);

  return (
    <div>
      <h1>Todos</h1>
      <div className="lists">
        {state.todos.map((todo) => (
          <div className="item" key={todo.id}>
            <span>
              <input
                type="checkbox"
                onChange={() => {
                  handleMarkComplete(todo.id, todo.completed);
                }}
                checked={todo.completed}
              />
            </span>
            <span>{todo.name}</span>
            <span
              onClick={() => {
                handleRemove(todo.id);
              }}
            >
              &times;
            </span>
          </div>
        ))}
      </div>
      <form action="" onSubmit={handleAddTodo}>
        <input
          type="text"
          name="name"
          onChange={handleChangeValue}
          placeholder="Tên công việc"
          value={name}
        />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default Todos;
