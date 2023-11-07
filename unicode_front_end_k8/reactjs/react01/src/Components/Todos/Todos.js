import React, { Component } from "react";
import ShowTodos from "./ShowTodos";
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Todos.scss";
import FilterTodos from "./FilterTodos";

export class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      search: [],
    };
  }

  handleAddTodo = (todo) => {
    // const todoList = [...this.state.todos];
    // todoList.push(todo);
    // this.setState({ todos: todoList });
    this.setState({
      todos: this.state.todos.concat(todo),
      search: [],
    });
  };

  handleRemoveTodo = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      const todoList = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({ todos: todoList, search: [] });
      toast.success("Xóa thành công");
    }
  };

  handleMarkCompleted = (id) => {
    const todoList = [...this.state.todos];

    const index = this.state.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const todo = this.state.todos[index];
      todo.completed = !todo.completed;
      todoList[index] = todo;
      this.setState({ todos: todoList, search: [] });
      toast.success("Cập nhật thành công");
    }
  };

  handleFilterTodo = (keyword) => {
    const todoList = [...this.state.todos];
    const searchResult = todoList.filter((todo) => {
      return todo.name.toLowerCase().includes(keyword.toLowerCase());
    });
    this.setState({ search: searchResult });
  };

  render() {
    let { todos, search } = this.state;

    if (search.length > 0) {
      todos = search;
    }

    return (
      <div className="todos">
        <h2>Todos App</h2>
        <FilterTodos onFilterTodo={this.handleFilterTodo} />
        <hr />
        <ShowTodos
          todos={todos}
          onRemoveTodo={this.handleRemoveTodo}
          onMarkCompleted={this.handleMarkCompleted}
        />
        <hr />
        <AddTodo onAddTodo={this.handleAddTodo} />
        <ToastContainer autoClose={1000} />
      </div>
    );
  }
}

export default Todos;
