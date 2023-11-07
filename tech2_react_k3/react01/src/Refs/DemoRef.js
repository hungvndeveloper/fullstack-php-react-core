import React, { Component } from "react";
import Input from "./Input";

export class DemoRef extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  handleClick = () => {
    this.inputRef.current.style.border = `1px solid red`;
    this.inputRef.current.value = `Tech2`;
  };

  render() {
    return (
      <div style={{ margin: "5%" }}>
        <Input ref={this.inputRef} name="Hoàng An" />
        <button type="button" onClick={this.handleClick}>
          Change
        </button>
      </div>
    );
  }
}

export default DemoRef;
