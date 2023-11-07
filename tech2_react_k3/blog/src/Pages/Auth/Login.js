import React, { Component } from "react";
import { httpClient } from "../../Services/Helpers/httpClient";
import config from "../../Configs/Config.json";
import { withContext } from "../../Services/Context/withContext";
import { withRouter } from "../../Services/Helpers/withRouter";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

const { SERVER_API_AUTH } = config;

const client = httpClient(SERVER_API_AUTH);
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (e) => {
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;

    this.setState({
      form: data,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state.form;
    if (email !== "" && password !== "") {
      this.postLogin({ email, password });
    }
  };

  postLogin = async (user) => {
    const { res, data } = await client.post("/login", user);
    const { setAuth } = this.props.dispatch;
    const { navigate } = this.props;

    if (res.ok) {
      const accessToken = data.accessToken;

      toast.success("Đăng nhập thành công");

      //dispatch context
      setAuth(accessToken);

      //Gửi email
      emailjs
        .send(
          "service_8nnv6ce",
          "template_fluobk8",
          {
            name: user.email,
            to_email: user.email,
          },
          "K0-a5BUCAxXfsgo6y"
        )
        .then((res) => {
          console.log(res);
        });

      //Chuyển hướng về trang chủ
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      toast.error("Thông tin đăng nhập không hợp lệ");
    }
  };

  render() {
    return (
      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-5">
            <h1 className="text-center">Đăng nhập</h1>
            <form action="" onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email..."
                  name="email"
                  value={this.state.form.email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu..."
                  name="password"
                  value={this.state.form.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default withRouter(withContext(Login));
