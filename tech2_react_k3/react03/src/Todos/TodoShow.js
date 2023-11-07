import React, { Component } from "react";
import { withContext } from "../StateProvider/withContext";

export class TodoShow extends Component {
  constructor(props) {
    super(props);
  }

  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch.deleteTodo(id);
  };

  render() {
    const { todoList } = this.props.data;

    return (
      <div className="todo-list">
        {todoList.map(({ id, name }) => {
          return (
            <div key={id} className="todo-item">
              <span>{name}</span>{" "}
              <span
                onClick={() => {
                  this.handleDelete(id);
                }}
              >
                Xóa
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withContext(TodoShow);
