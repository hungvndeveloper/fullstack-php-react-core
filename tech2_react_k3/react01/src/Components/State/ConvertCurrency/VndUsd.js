import React, { Component } from "react";

export class VndUsd extends Component {
  constructor(props) {
    super(props);
    this.rate = 24000;
  }

  handleConvertVndUsd = (e) => {
    let vnd = e.target.value;
    //vnd = vnd.replaceAll(",", "");

    let usd = vnd / this.rate;
    usd = usd.toFixed(2);
    const { onUsd } = this.props;
    onUsd(usd, vnd);
  };

  preventCharactor = (e) => {
    const numbers = "1234567890";

    // console.log(e.key);
    if (
      numbers.indexOf(e.key) == -1 &&
      e.key !== "Backspace" &&
      e.key !== "Delete"
    ) {
      e.preventDefault();
    }
  };

  render() {
    // console.log("re-render vnd");
    const { vnd } = this.props;

    return (
      <div>
        <label>VND</label>
        <input
          type="number"
          name="vnd"
          placeholder="VND"
          value={vnd}
          onChange={this.handleConvertVndUsd}
          //   onKeyDown={this.preventCharactor}
        />
      </div>
    );
  }
}

export default VndUsd;
