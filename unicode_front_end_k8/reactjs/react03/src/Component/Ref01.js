import React, { Component } from "react";
import Color from "./Color";
import Input from "./Input";
import "./Style.css";

export class Ref01 extends Component {
  constructor() {
    super();
    this.state = {
      color: "",
    };
    this.inputRef = React.createRef();
  }

  changeColor = () => {
    this.setState({ color: "red" });
  };

  handleFocus = () => {
    this.inputRef.current.focus();
    this.inputRef.current.classList.toggle("search");
  };

  componentDidMount = () => {
    this.inputRef.current.focus();
    this.inputRef.current.classList.add("search");
  };

  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>Unicode Academy</h1>
        <button type="button" onClick={this.changeColor}>
          Change
        </button>
        <hr />
        <Input ref={this.inputRef} title="Hoàng An Unicode" />
        <button type="button" onClick={this.handleFocus}>
          Focus
        </button>
      </>
    );
  }
}

export default Color(Ref01);
