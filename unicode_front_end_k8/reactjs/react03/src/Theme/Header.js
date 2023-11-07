import React, { Component } from "react";
import { ThemeContext } from "./Theme";
import withContext from "./withContext";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  handleToggleTheme = () => {
    const { setTheme } = this.props.context;
    setTheme();
  };

  render() {
    //console.log(this.props.context);
    const { theme } = this.props.context;

    return (
      <header>
        <h1>Header</h1>
        <button onClick={this.handleToggleTheme}>
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </header>
    );
  }
}

export default withContext(Header);
