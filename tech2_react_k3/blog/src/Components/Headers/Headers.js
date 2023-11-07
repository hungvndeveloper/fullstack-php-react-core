import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Headers.scss";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

import { Auth } from "../../Services/Helpers/Auth";

import { withContext } from "../../Services/Context/withContext";

import { withRouter } from "../../Services/Helpers/withRouter";

import { Url } from "../../Services/Helpers/Url";

export class Headers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { auth } = this.props.data;
    const { navigate } = this.props;
    return (
      <header className="header py-4 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h1>
                <Link to="/">Logo</Link>
              </h1>
            </div>
            <div className="col-5">
              <Navigation />
            </div>
            <div className="col-3">
              <SearchForm />
            </div>
            <div className="col-2">
              <div className="account">
                {new Auth().isLogin() ? (
                  <>
                    <p>Chào, {new Auth().user().name}</p>
                    <div className="account-list">
                      <p>
                        <a href="#">Tài khoản</a>
                      </p>
                      <p>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            new Auth().logout();
                            navigate("/");
                          }}
                        >
                          Đăng xuất
                        </a>
                      </p>
                    </div>
                  </>
                ) : (
                  <ul className="login list-unstyled d-flex gap-3">
                    <li>
                      <Link to={new Url().login}>Đăng nhập</Link>
                    </li>
                    <li>
                      <Link to={new Url().register}>Đăng ký</Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default withRouter(withContext(Headers));
