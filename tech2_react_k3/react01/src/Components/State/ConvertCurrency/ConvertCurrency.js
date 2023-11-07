import React, { Component } from "react";
import UsdVnd from "./UsdVnd";
import VndUsd from "./VndUsd";

export class ConvertCurrency extends Component {
  constructor() {
    super();
    this.state = {
      usd: "",
      vnd: "",
    };
  }

  handleVnd = (vnd, usd) => {
    this.setState({
      vnd: vnd,
      usd: usd,
    });
  };

  handleUsd = (usd, vnd) => {
    this.setState({
      usd: usd,
      vnd: vnd,
    });
  };

  render() {
    const { vnd, usd } = this.state;

    return (
      <div style={{ margin: "5%" }}>
        <UsdVnd onVnd={this.handleVnd} usd={usd} />
        <hr />
        <VndUsd onUsd={this.handleUsd} vnd={vnd} />
      </div>
    );
  }
}

export default ConvertCurrency;
