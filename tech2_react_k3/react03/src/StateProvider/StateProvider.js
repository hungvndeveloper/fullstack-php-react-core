import React, { Component, createContext } from "react";

export const StateContext = createContext();

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };

    this.dispatch = {
      addTodo: this.addTodo,
      deleteTodo: this.deleteTodo,
    };
  }

  addTodo = (todo) => {
    this.setState({
      todoList: this.state.todoList.concat(todo),
    });
  };

  deleteTodo = (id) => {
    const data = [...this.state.todoList];

    const index = data.findIndex((todo) => todo.id == id);
    data.splice(index, 1);
    this.setState({
      todoList: data,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <StateContext.Provider
        value={{
          data: this.state,
          dispatch: this.dispatch,
        }}
      >
        {children}
      </StateContext.Provider>
    );
  }
}

export default StateProvider;
