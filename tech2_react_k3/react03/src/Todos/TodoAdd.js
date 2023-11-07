import React, { Component } from "react";
import { v4 as uniqueId } from "uuid";
import { withContext } from "../StateProvider/withContext";

export class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doName: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      doName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { doName } = this.state;
    const { dispatch } = this.props;
    console.log(dispatch);

    if (doName !== "") {
      dispatch.addTodo({
        id: uniqueId(),
        name: doName,
      });
      this.setState({
        doName: "",
      });
    }
  };

  render() {
    const { doName } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Tên công việc..."
            onChange={this.handleChange}
            value={doName}
          />
          <button type="submit">Thêm</button>
        </form>
      </div>
    );
  }
}

export default withContext(TodoAdd);
