import React from "react";
import "./navbar.css";
import { BsBox } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="navbar">
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
            <a href="/">Ciurses</a>
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
