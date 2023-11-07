import React, { Component } from "react";
import Content from "./Content";
import withContext from "../StateProvider/withContext";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleSetMessage = () => {
    const { setMessage } = this.props.context.dispatch;
    setMessage("xin chào React JS");
  };

  render() {
    console.log(`re-render counter`);
    const { count } = this.state;
    const { msg } = this.props.context.data;

    return (
      <div>
        <Content count={1} />
        <h1>Count: {count}</h1>
        <h3>{msg}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <hr />
        <button onClick={this.handleSetMessage}>Set Message</button>
      </div>
    );
  }
}

export default withContext(Counter);
