import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = async () => {
    await this.setState((prevState) => ({ count: prevState.count + 1 }));
    console.log(this.state.count);
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button type="button" onClick={this.handleDecrement}>
          -
        </button>
        <button type="button" onClick={this.handleIncrement}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
