import React, { Component } from "react";
import clsx from "clsx";

export class ShowTodos extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    const { onRemoveTodo, onMarkCompleted } = this.props;

    return (
      <div className="todos__list">
        {todos.length > 0 &&
          todos.map(({ id, name, completed }) => (
            <div
              className={clsx(
                "todos--item d-flex justify-content-between",
                completed && "completed"
              )}
              key={id}
            >
              <span>
                <input
                  type="checkbox"
                  onChange={() => {
                    onMarkCompleted(id);
                  }}
                />
              </span>
              <span>{name}</span>
              <span
                className="remove"
                onClick={() => {
                  onRemoveTodo(id);
                }}
              >
                &times;
              </span>
            </div>
          ))}
      </div>
    );
  }
}

export default ShowTodos;
