import React from "react";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="index.html">
        <img src="/assets/images/logo/logo.svg" alt="Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="toggler-icon"> </span>
        <span className="toggler-icon"> </span>
        <span className="toggler-icon"> </span>
      </button>
      <div
        className="collapse navbar-collapse sub-menu-bar"
        id="navbarSupportedContent"
      >
        <ul id="nav" className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="page-scroll active" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="page-scroll" href="#features">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="page-scroll" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="page-scroll" href="#facts">
              Why
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)">Team</a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)">Blog</a>
          </li>
        </ul>
      </div>
      {/* navbar collapse */}
      <div className="navbar-btn d-none d-sm-inline-block">
        <a
          className="main-btn"
          data-scroll-nav={0}
          href="https://uideck.com/templates/basic/"
          rel="nofollow"
        >
          Download Now
        </a>
      </div>
    </nav>
  );
}
