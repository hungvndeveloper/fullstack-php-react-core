import React, { Component, createContext } from "react";

export const StateContext = createContext();

export class StateProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Unicode Academy",
      comments: [],
    };
    this.dispatch = {
      setMessage: this.setMessage,
      addComment: this.addComment,
    };
  }

  addComment = (comment) => {
    const commentList = this.state.comments.concat(comment);

    this.setState({ comments: commentList.reverse() });
  };

  setMessage = (msgContent) => {
    this.setState({
      msg: msgContent,
    });
  };

  render() {
    const { children } = this.props;
    return (
      <StateContext.Provider
        value={{
          data: this.state,
          dispatch: this.dispatch,
        }}
      >
        {children}
      </StateContext.Provider>
    );
  }
}

export default StateProvider;
