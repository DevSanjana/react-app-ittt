import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "./../images/facebook.svg";
import youtube from "./../images/youtube.svg";
import linkedin from "./../images/linkedin.svg";
import twitter from "./../images/twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-ui">
        <svg
          width="1726"
          height="911"
          viewBox="0 0 1726 911"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1726 189.768V870.768L0 870.768V33.7679C76.1118 1.26794 287.067 -33.7321 325.423 63.7679C386.814 219.824 800.672 49.7679 983.46 17.2679C1174.63 -16.7229 1395.54 41.7489 1495.87 151.768C1633.11 302.268 1707.02 222.435 1726 189.768Z"
            fill="#181D27"
            fill-opacity="0.5"
          />
          <path
            d="M1726 229.768V910.768L0 910.768V58.7679C76.1118 26.2679 249.671 -11.4321 325.423 103.768C420.113 247.768 786.141 86.1289 976 39.7679C1115.5 5.70398 1354 31.7679 1495.87 191.768C1630.99 344.168 1707.02 262.435 1726 229.768Z"
            fill="#181D27"
          />
        </svg>
      </div>
      <div className="footer-wrapper">
        <div className="footer-top">
          <h6>
            &copy; Copyright 2021 <span>ISDAAT CONSULTING</span>
          </h6>
          <ul className="social-links">
            <li>
              <Link to="/">
                <img src={facebook} alt="Facebook-social-media" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={twitter} alt="Twitter-social-media" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={linkedin} alt="Linkedin-social-media" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <img src={youtube} alt="Youtube-social-media" />
              </Link>
            </li>
          </ul>
        </div>
        <ul className="footer-nav">
          <Link to="/">
            <li>ABOUT</li>
          </Link>
          <Link to="/">
            <li>COURSES</li>
          </Link>
          <Link to="/">
            <li>CAREERS</li>
          </Link>

          <Link to="/">
            <li>TERMS</li>
          </Link>

          <Link to="/">
            <li>PRIVACY</li>
          </Link>

          <Link to="/">
            <li>CONTACT US</li>
          </Link>

          <Link to="/">
            <li>BUSINESS LOGIN</li>
          </Link>

          <Link to="/">
            <li>AFFILIATE LOGIN</li>
          </Link>
        </ul>
        <div className="footer-text">
          <p>
            The trademarks and trade names of third parties mentioned in this
            website and all courses are the property of their respective owners,
            and itToolsTraining(a brand of ISDAAT) is not affiliated with or
            endorsed by these parties.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
