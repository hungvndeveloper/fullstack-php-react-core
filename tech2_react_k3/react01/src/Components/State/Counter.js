import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      msg: "",
    };
    console.log("constructor");
  }

  //Event Handler
  handleChangeText = () => {
    //Để cập nhật State => Sử dụng phương thức setState()
    //Lưu ý: Không được phép thay đổi trực tiếp this.state
    this.setState({
      msg: "Tech2 Solutions",
    });
    console.log("handleChangeText");
  };

  handleIncrement = () => {
    //this.setState({ count: this.state.count + 1 });
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("render");
    const { msg, count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <h2>{msg}</h2>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
        <button type="button" onClick={this.handleChangeText}>
          Change Text
        </button>
      </div>
    );
  }
}

export default Counter;

/*
State sẽ thay đổi dữ liệu trong nội bộ component
Khi state thay đổi => Component sẽ re-render
*/
