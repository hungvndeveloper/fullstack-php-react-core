import React from "react";
import HeaderHero from "./HeaderHero";
import Navigation from "./Navigation";

export default function Headers() {
  return (
    <header className="header-area">
      <div className="navbar-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Navigation />
              {/* navbar */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* container */}
      </div>
      {/* navbar area */}
      <HeaderHero />
      {/* header hero */}
    </header>
  );
}
