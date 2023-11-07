import React, { Component } from "react";
import { withRouter } from "../Services/withRouter";

export class Products extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { search, location } = this.props;
    const [searchParam, setSearchParams] = search;

    //console.log(searchParam.get("page"));

    console.log(location);

    //console.log(window.location);

    const handleClick = (e) => {
      const page = e.target.innerText;
      setSearchParams({
        page: page,
      });
    };

    return (
      <div>
        <p>Products</p>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>4</button>
      </div>
    );
  }
}

export default withRouter(Products);
