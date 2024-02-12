import React, { useState } from "react";
import "./NavBar.css";
import logo from "./logo.png";
const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(isExpanded);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  const [menu, setMenu] = useState();
  return (
    <nav className="nav-links">
      <div className="container background">
        <h3>Web Developer</h3>
        <div className={`links ${isExpanded ? "active" : " "} `}>
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
        <div
          onClick={handleClick}
          className={`icon nav-icon-2 ${isExpanded ? "open" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`initial ${isExpanded ? "active" : ""}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;
