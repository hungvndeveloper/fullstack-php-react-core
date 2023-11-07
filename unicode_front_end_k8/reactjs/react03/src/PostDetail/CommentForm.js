import React, { Component } from "react";
import withContext from "../StateProvider/withContext";

export class CommentForm extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    const message = e.target.value;
    if (e.key == "Enter") {
      const { addComment } = this.props.context.dispatch;
      if (message.trim().length) {
        addComment(message);
        e.target.value = "";
      } else {
        alert("Vui lòng nhập comment");
      }
    }
  };

  render() {
    return (
      <div>
        <form action="">
          <textarea
            name=""
            id=""
            placeholder="Write A Comment..."
            className="form-control"
            onKeyUp={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default withContext(CommentForm);
