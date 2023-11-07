import React, { Component } from "react";
import Theme from "./Theme";

//Tạo đối tượng context (Dạng component => viết hoa ký tự đầu)
export const ThemeContext = React.createContext();

//console.log(ThemeContext);

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        msg: "Tech2",
        theme: "light",
      },
      dispatch: {
        setMsg: this.setMsg,
        setTheme: this.setTheme,
      },
    };
  }

  setMsg = (msg) => {
    const { data } = { ...this.state };

    data.msg = msg;
    this.setState(data);
  };

  setTheme = (theme) => {
    const { data } = { ...this.state };

    data.theme = theme;
    this.setState(data);
  };

  render() {
    const data = {
      msg: "Tech2",
    };
    return (
      <ThemeContext.Provider value={this.state}>
        <Theme />
      </ThemeContext.Provider>
    );
  }
}

export default Main;
