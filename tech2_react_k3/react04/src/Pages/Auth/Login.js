import React, { Component } from "react";
import { withRouter } from "../../Services/withRouter";

export class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props;
    const handleSubmit = () => {
      navigate("/gioi-thieu");
    };

    return (
      <div>
        <p>Login</p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default withRouter(Login);
