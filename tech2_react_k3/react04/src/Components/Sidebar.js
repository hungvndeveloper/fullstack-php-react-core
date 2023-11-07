import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Url from "../Services/Url";
import "./Sidebar.css";

const url = new Url();

export class Sidebar extends Component {
  render() {
    const handleActive = ({ isActive }) => {
      return isActive ? "nav-link current" : "nav-link";
    };

    return (
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink to={url.home} className={handleActive}>
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={url.about} className={handleActive}>
            Giới thiệu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={url.products} className={handleActive}>
            Sản phẩm
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={url.contact} className={handleActive}>
            Liên hệ
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/profile/account"} className={handleActive}>
            Tài khoản
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
