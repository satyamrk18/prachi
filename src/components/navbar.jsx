import "./navbar.css";
import Logo from "../assets/farm-link-logo.png";
import { Link, useLocation } from "react-router";
import { useState } from "react";
import Hamburger from "../assets/image/hamburger.png";
import Close from "../assets/image/close.png";
const Navbar = () => {
    const [isOpne, setIsOpne] = useState(false);
    const tandleClose = ()=>
    {
        setIsOpne(!isOpne);
    }
  const location = useLocation();
  return (
    <div className="nav-container">
      <div className="img-container">
        <img src={isOpne ? Close : Hamburger} alt="hamburger" className="ham" onClick={tandleClose}/>
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className={`item-container ${isOpne ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname == "/" ? "active" : "nav-item"}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname == "/about" ? "active" : "nav-item"}
        >
          About
        </Link>
        <Link
          to="/blog"
          className={location.pathname == "/blog" ? "active" : "nav-item"}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className={location.pathname == "/contact" ? "active" : "nav-item"}
        >
          Contact
        </Link>
        <Link
          to="/login"
          className={location.pathname == "/login" ? "active" : "nav-item"}
        >
          Log In
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
