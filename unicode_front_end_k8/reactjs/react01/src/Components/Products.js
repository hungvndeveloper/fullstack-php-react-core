import React, { Component } from "react";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Xin chào Unicode",
    };
  }

  handleClickButton = () => {
    console.log("Bạn vừa click");
  };

  handleChangeTitle = () => {
    // this.setState({
    //   title: "Xin chào React JS",
    // });
    this.setState(() => ({
      title: "Xin chào React JS",
    }));
  };

  render() {
    console.log("re-render");
    const { name } = this.props;

    //Viết Event Handler tại đây
    const { title } = this.state;

    return (
      <div>
        <h1>Products</h1>
        <h2>{name}</h2>
        <h2>{title}</h2>
        <button type="button" onClick={this.handleClickButton}>
          Click me
        </button>
        <button type="button" onClick={this.handleChangeTitle}>
          Change Title
        </button>
      </div>
    );
  }
}

export default Products;
