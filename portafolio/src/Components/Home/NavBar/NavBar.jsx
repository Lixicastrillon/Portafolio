import React, { useState } from "react";
import "./NavBar.css";
import logo from "./logo.png";
const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="container-fluid">
      {/* //button open and close mobile */}
      <div className="headerN">
        <div
          onClick={handleClick}
          className={`icon nav-icon-2 ${isExpanded ? "open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* // navbar */}
      <aside className="aside">
        <div className="aside-wrapper">
          <div className="logo-section">
            <a className="logo" rel="home" href="#">
              <img src={logo} alt="logo" />
              <span>Liz</span>
            </a>
            <span>Web Developer</span>
          </div>

          <nav className="nav-links">
            <a className="" href="#">
              About me
            </a>
            <a className="" href="#">
              My skills
            </a>
            <a className="" href="#">
              Works
            </a>
            <a className="" href="#">
              Contact me
            </a>
          </nav>
          {/* // social icons */}
          <ul className="social-icons">
            <li>
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
