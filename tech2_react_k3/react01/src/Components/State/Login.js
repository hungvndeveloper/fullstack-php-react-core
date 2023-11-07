import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
      btnStatus: true,
    };
  }

  handleSubmitForm = (e) => {
    e.preventDefault();

    const { email, password } = this.state.form;

    const errors = {};

    if (typeof email === "string" && email.trim() === "") {
      errors.email = "Vui lòng nhập email";
    }

    if (typeof password === "string" && password.trim() === "") {
      errors.password = "Vui lòng nhập password";
    }

    this.setState({
      errors: errors,
    });

    if (Object.keys(errors).length === 0) {
      this.setState({
        form: {
          email: "",
          password: "",
        },
      });
    }
  };

  handleChangeValue = (e) => {
    //console.log(e.target.name, e.target.value);
    const dataForm = { ...this.state.form }; //clone object
    dataForm[e.target.name] = e.target.value;

    this.setState({
      form: dataForm,
    });

    const { email, password } = dataForm;

    if (email.trim() !== "" && password.trim() !== "") {
      this.setState({
        btnStatus: false,
      });
    } else {
      this.setState({
        btnStatus: true,
      });
    }
  };

  render() {
    const { form, errors, btnStatus } = this.state;
    const { email, password } = form;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <form onSubmit={this.handleSubmitForm}>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email..."
                  onChange={this.handleChangeValue}
                  value={email}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Password..."
                  onChange={this.handleChangeValue}
                  value={password}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={btnStatus}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
