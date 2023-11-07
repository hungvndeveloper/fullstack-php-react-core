import React, { Component } from "react";

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.name = "Hoàng An";
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h2>Danh sách bài đăng: {this.name}</h2>
        {posts.map(({ id, title }) => (
          <p key={id}>{title}</p>
        ))}
      </div>
    );
  }
}

export default Posts;
