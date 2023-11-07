import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Url } from "../../Services/Helpers/Url";
import "./PostItem.scss";

const url = new Url();

export class PostItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title, thumbnail, excerpt } = this.props;

    return (
      <div className="col-3">
        <div className="post-item">
          <Link to={url.getPost(id)}>
            <img src={thumbnail} alt="" />
          </Link>
          <h2 className="title">
            <Link to={url.getPost(id)}>{title}</Link>
          </h2>
          <p>{excerpt}</p>
        </div>
      </div>
    );
  }
}

export default PostItem;
