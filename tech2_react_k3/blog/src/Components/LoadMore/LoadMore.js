import React, { Component } from "react";
import config from "../../Configs/Config.json";
const { POST_LIMIT } = config;

export class LoadMore extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { postCount, postLoaded } = this.props;
    console.log(postCount, postLoaded);
    return (
      postCount > postLoaded && (
        <>
          <div className="loadmore text-center pt-5">
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.props.onLoadMore}
            >
              Xem thêm
            </button>
          </div>
        </>
      )
    );
  }
}

export default LoadMore;
