import React, { Component } from "react";

export class FilterTodos extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const { onFilterTodo } = this.props;
    onFilterTodo(e.target.value);
  };

  render() {
    return (
      <div>
        <input
          type="search"
          className="form-control"
          placeholder="Tìm kiếm..."
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FilterTodos;
