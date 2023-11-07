import React, { Component, createContext } from "react";
import Content from "./Content";
import Header from "./Header";
import Text from "./Text";
import "./Theme.css";

export const ThemeContext = createContext();

// console.log(ThemeContext);

export class Theme extends Component {
  constructor() {
    super();
    this.state = {
      theme: "light",
      color: "#333",
    };
  }

  setTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
      color: this.state.theme === "light" ? "red" : "#333",
    });
  };

  render() {
    const { theme, color } = this.state;
    return (
      <div className={`wrapper theme-${theme}`}>
        <ThemeContext.Provider
          value={{
            theme: theme,
            setTheme: this.setTheme,
            color: color,
          }}
        >
          <Header />
          <Content />
          {/* <Text /> */}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Theme;
