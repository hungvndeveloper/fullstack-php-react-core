import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doName: "",
    };
  }

  handleChange = (e) => {
    this.setState({ doName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { doName } = this.state;
    const { onAddTodo } = this.props;
    if (doName.trim() === "") {
      toast.error("Vui lòng nhập tên công việc");
    } else {
      const todo = {
        id: uuidv4(),
        name: doName,
        completed: false,
      };

      onAddTodo(todo);

      this.setState({
        doName: "",
      });

      toast.success("Thêm công việc thành công");
    }
  };

  render() {
    const { doName } = this.state;

    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Name..."
            onChange={this.handleChange}
            value={doName}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
        <ToastContainer autoClose={1000} />
      </form>
    );
  }
}

export default AddTodo;
