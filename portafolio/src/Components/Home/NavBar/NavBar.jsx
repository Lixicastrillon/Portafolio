import "./NavBar.css";
import logo from "./logo.png";
const NavBar = () => {
  return (
    <div className="nav">
      <div>
        <img className="imgNav" src={logo} alt="" />
      </div>
      <div>
        <p className="buttonNav">About me</p>
      </div>
      <div>
        <p className="buttonNav">My skills</p>
      </div>
      <div>
        <p className="buttonNav">Works</p>
      </div>
      <div>
        <p className="buttonNav">Contact me</p>
      </div>
      <div>
        <p className="buttonNav">red social</p>
      </div>
    </div>
  );
};

export default NavBar;
