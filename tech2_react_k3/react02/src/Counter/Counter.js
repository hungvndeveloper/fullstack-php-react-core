import React, { Component } from "react";
import Content from "./Content";
import { withRouter } from "./withRouter";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    console.log(this.props);
    // console.log("re-render");
    const { params } = this.props;
    return (
      <div>
        <h1>ID: {params.id}</h1>
        <h1>Count: {count}</h1>
        <button type="button" onClick={this.handleIncrement}>
          Up
        </button>
        <Content />
      </div>
    );
  }
}

// const Counter = () => {
//   const params = useParams();
//   return <h1>Counter: {params.id}</h1>;
// };

export default withRouter(Counter);
