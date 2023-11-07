import React, { Component } from "react";
import withContext from "../StateProvider/withContext";

export class CommentList extends Component {
  render() {
    const { comments } = this.props.context.data;

    return (
      <div className="my-3">
        {comments.length ? (
          comments.map((comment, index) => (
            <div className="mb-3 border p-3" key={index}>
              {comment}
            </div>
          ))
        ) : (
          <p>Không có comment</p>
        )}
      </div>
    );
  }
}

export default withContext(CommentList);
