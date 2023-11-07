import React, { Component } from "react";

export class UsdVnd extends Component {
  constructor(props) {
    super(props);
    this.rate = 24000;
  }

  handleConvertUsdVnd = (e) => {
    let usd = e.target.value;
    let vnd = usd * this.rate;
    const { onVnd } = this.props;
    onVnd(vnd, usd);
  };

  render() {
    // console.log("re-render usd");
    const { usd } = this.props;
    return (
      <div>
        <label>USD</label>
        <input
          type="number"
          onChange={this.handleConvertUsdVnd}
          name="usd"
          placeholder="USD"
          value={usd}
        />
      </div>
    );
  }
}

export default UsdVnd;

/*
1. Nhận dữ liệu từ input
2. Chuyển đổi thành VND
3. Đẩy dữ liệu lên component cha
*/
