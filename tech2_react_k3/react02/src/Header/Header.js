import React, { Component } from "react";
import Color from "../Color/Color";

export class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Header: {this.props.title}</h1>;
  }
}

export default Color(Header);
