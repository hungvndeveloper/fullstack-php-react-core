import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const handleClass = ({ isActive }) => {
    return isActive ? "current-item nav-link" : "nav-link";
  };

  return (
    <div>
      <h3>Menus</h3>
      <nav>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/" className={handleClass}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={handleClass}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className={handleClass}>
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/news" className={handleClass}>
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={handleClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
