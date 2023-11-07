import React, { Component } from "react";
import clsx from "clsx";

import "bootstrap/dist/css/bootstrap.min.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
      },
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleChangeValue = (e) => {
    const formData = { ...this.state.form }; //Tham chiếu

    formData[e.target.name] = e.target.value;

    this.setState({
      form: formData,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { email, password } = this.state.form;
    //Xử lý Validate
    const errors = {};
    if (email.trim() === "") {
      errors.email = "Email không được để trống";
    }

    if (password.trim() === "") {
      errors.password = "Password không được để trống";
    }

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      //Không có lỗi => Validate thành công => Reset form
      this.setState({
        form: {
          email: "",
          password: "",
        },
      });
    }
  };

  render() {
    const { errors, form } = this.state;
    const { email, password } = form;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <h2>Login</h2>
            <form action="" onSubmit={this.handleSubmitForm}>
              <div className="mb-3">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className={clsx("form-control", errors.email && "is-invalid")}
                  placeholder="Email..."
                  name="email"
                  onChange={this.handleChangeValue}
                  value={email}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  className={clsx(
                    "form-control",
                    errors.password && "is-invalid"
                  )}
                  placeholder="Password..."
                  name="password"
                  onChange={this.handleChangeValue}
                  value={password}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
