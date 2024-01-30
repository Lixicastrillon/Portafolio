import "./NavBar.css";
// import logo from "./logo.png";
const NavBar = () => {
  return (
    <div className="container-fluid">
      {/* //button open and close mobile */}
      <div className="headerN">
        <div className="btn-container">
          <i className="bi bi-list"></i>
          <i className="bi bi-x"></i>
        </div>
      </div>
      {/* // navbar */}
      <aside className="aside">
        <div className="aside-wrapper">
          <div className="logo-section">
            <a className="logo" rel="home" href="#">
              {/* <img className="imgNav" src={} alt="logo" /> */}
              <span>Liz</span>
            </a>
            <span>web developer</span>
          </div>
          <nav className="nav-links">
            <a className="buttonNav" href="#">
              About me
            </a>
            <a className="buttonNav" href="#">
              My skills
            </a>
            <a className="buttonNav" href="#">
              Works
            </a>
            <a className="buttonNav" href="#">
              Contact me
            </a>
          </nav>
          {/* // social icons */}
          <ul className="social-icons">
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="">
              <i className="bi bi-github"></i>
            </a>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
