import React, { Component } from "react";
import { ThemeContext } from "./Main";
import { withContext } from "./withContext";

export class Content extends Component {
  constructor(props) {
    super(props);
  }

  //   setMsg = () => {
  //     const { dispatch } = this.props;
  //     dispatch.setMsg("Xin chào React JS");
  //   };

  toggleTheme = () => {
    const { dispatch, data } = this.props;
    dispatch.setTheme(data.theme == "light" ? "dark" : "light");
  };

  render() {
    //const { data } = this.props;
    return (
      <div>
        {/* <h2>{data.msg}</h2>
        <button type="button" onClick={this.setMsg}>
          Send Data
        </button> */}
        <button type="button" onClick={this.toggleTheme}>
          Toggle Theme
        </button>
        <hr />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        laboriosam magnam atque doloremque enim et molestiae aperiam, aspernatur
        dolorum quis est quas perferendis aliquam ex perspiciatis! Omnis
        voluptatibus iure dignissimos?
      </div>
    );
  }
}

export default withContext(Content);
