import React, { Component } from "react";
import { httpClient } from "../../Services/Helpers/httpClient";

const client = httpClient();

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { menus: [] };
  }
  componentDidMount = () => {
    this.getAllMenus();
  };

  getAllMenus = async () => {
    const { data } = await client.get("/options");

    const { menus } = data;

    this.setState({ menus });
  };

  getMenus = (menus, isSub = false) => {
    return (
      <ul className={`${!isSub ? "nav" : ""}`}>
        {menus.map((menu, index) => {
          return (
            <li key={index} className={`${!isSub ? "nav-item" : ""}`}>
              <a className={`${!isSub ? "nav-link" : ""}`} href={menu.link}>
                {menu.title}
              </a>
              {menu.children && this.getMenus(menu.children, true)}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    const { menus } = this.state;

    console.log(menus);
    return (
      <nav className="menu">
        {/* <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu
            </a>
            <ul>
              <li>
                <a href="#">Item 01</a>
              </li>
              <li>
                <a href="#">Item 01</a>
              </li>
              <li>
                <a href="#">Item 01</a>
              </li>
              <li>
                <a href="#">Item 01</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu
            </a>
          </li>
        </ul> */}
        {this.getMenus(menus)}
      </nav>
    );
  }
}

export default Navigation;
