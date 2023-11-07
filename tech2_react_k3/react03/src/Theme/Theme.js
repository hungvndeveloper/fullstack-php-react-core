import React, { Component } from "react";
import Content from "./Content";
import { ThemeContext } from "./Main";
import "./Theme.css";
import { withContext } from "./withContext";

export class Theme extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <div className={`theme ${data.theme}`}>
        <h1>Tech2</h1>

        <Content />
      </div>
    );
  }
}

export default withContext(Theme);
