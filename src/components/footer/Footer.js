import React from "react";
import "./footer.css";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { MdPlayLesson } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { FaBaseballBall } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot">
        <div className="foot1">
          <h3>Logo</h3>
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Reiciendis, animi!
          </p>
          <div className="submenu">
            <div className="link">
              <div className="icon">
                <BsBookmarkHeartFill />
              </div>
              <div className="sub">
                <p>Have any questions ?</p>
                <h3>1234567899</h3>
              </div>
            </div>
            <div className="link">
              <div className="icon">
                <FaBaseballBall />
              </div>
              <div className="sub">
                <p>Have any questions ?</p>
                <h3>1234567899</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="foot2">
          <h3>Newsletter</h3>
          <p>
            Be the first one to know about discounts, offers and events weekly
            in your mailbox. Unsubscribe whenever you like with one click.
          </p>
          <div className="news">
            <BsBookmarkHeartFill />
            <input type="text" placeholder="Enter Your Email" />
            <button className="button">Button</button>
          </div>
        </div>
      </div>

      <div className="foot3">
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
          <li>
            <a href="/">Site Map</a>
          </li>
          <li>
            <a href="/">Terms Of Use</a>
          </li>
        </ul>
        <div className="foot4">
          <div className="foot5">
            <div className="icon">
              <BsBookmarkHeartFill />
            </div>
            <div className="icon">
              <MdPlayLesson />
            </div>
            <div className="icon">
              <BsBookmarkHeartFill />
            </div>
            <div className="icon">
              <AiFillEye />
            </div>
            <div className="icon">
              <FaBaseballBall />
            </div>
          </div>
          <div className="foot6">All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
