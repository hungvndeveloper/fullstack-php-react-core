import React, { Component } from "react";
import TodoAdd from "./TodoAdd";
import TodoShow from "./TodoShow";

export class Todos extends Component {
  render() {
    return (
      <div>
        <TodoShow />
        <hr />
        <TodoAdd />
      </div>
    );
  }
}

export default Todos;
