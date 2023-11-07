import React, { Component } from "react";
import { withRouter } from "../Services/withRouter";

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id } = this.props.params;

    return <div>ProductDetail: {id}</div>;
  }
}

export default withRouter(ProductDetail);
