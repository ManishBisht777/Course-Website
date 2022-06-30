import { React, useState } from "react";
import "./navbar.css";
import { BsBox } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="navbar">
      <div className={isActive ? "toggle open" : "toggle close"}>
        <div className="hamburger" onClick={toggleClass}>
          <GiHamburgerMenu />
        </div>
        <ul>
          <div className="logoopen">
            <BsBox size={30} />
            scrumverse
          </div>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <BsBox size={30} />
        <p>Scrumverse</p>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Courses</a>
          </li>
          <li>
            <a href="/">Blogs</a>
          </li>
        </ul>
      </div>
      <div className="auth">
        <button className="button">login</button>
        <button className="button button_active">signup</button>
      </div>
    </div>
  );
};

export default Navbar;
