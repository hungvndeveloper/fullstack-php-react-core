import React, { Component } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "bootstrap/dist/css/bootstrap.min.css";

export class PostDetail extends Component {
  render() {
    return (
      <div className="container">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          praesentium, aperiam quis quasi consectetur similique alias incidunt
          facilis magnam a sit commodi, repellat voluptatum doloribus magni
          vitae, necessitatibus possimus provident.
        </p>
        <h3>Write A Comment</h3>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}

export default PostDetail;
