import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Assets_mfoh/logo/logo.jpg";
import styles from "./Navbar.module.css";
import { BiUserCircle } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  const [onScroll, settOnScroll] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  // function to handle smooth scrolling to section
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  window.onscroll = function () {
    if (Math.round(window.pageYOffset) > 100) {
      settOnScroll(true);
    } else {
      settOnScroll(false);
    }
  };
  return (
    <div
      id="navbar"
      className={`${styles.NavContainer} ${onScroll && styles.sticky} `}
    >
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navListContainer}>
          <div
            className={
              styles.navList + " " + `${isToggled ? styles.active : ""}`
            }
          >
            <NavLink
              to="/"
              className={styles.list}
              onClick={() => smoothScrollTo("sectionFeature")}
            >
              Home
            </NavLink>
            {/* <NavLink to="/">Home</NavLink> */}
            <NavLink
              to="/about-us"
              className={styles.list}
              onClick={() => smoothScrollTo("section-about")}
            >
              About
            </NavLink>
            <NavLink
              to="/team"
              className={styles.list}
              onClick={() => smoothScrollTo("section-team")}
            >
              Team
            </NavLink>
            <NavLink
              to="/ambassador"
              className={styles.list}
              onClick={() => smoothScrollTo("section-Ambassador")}
            >
              Ambassador
            </NavLink>
            <NavLink
              to="/apply"
              className={styles.list}
              onClick={() => smoothScrollTo("section-application")}
            >
              Application
            </NavLink>
            {/* <NavLink to="/contact-us" className={styles.list}>
              Contact
            </NavLink> */}
            <li className={styles.list}>
              More
              <ul className={styles.dropDown}>
                <li className={styles.list}>
                  {" "}
                  <NavLink
                    to="/project"
                    onClick={() => smoothScrollTo("section-project")}
                  >
                    Project
                  </NavLink>
                </li>

                <li className={styles.list}>
                  <NavLink to="/partner-with-us">Partner with us</NavLink>
                </li>
              </ul>
            </li>
            {/* <li>Home</li>
            <li>About Us</li>
            <li>Team</li>
            <li>Our ambassador</li>
            <li>Application</li>
            <li>Contact </li>
            <li>
              More
              <ul className={styles.dropDown}>
                <li>Project</li>
                <li>Partner with us</li>
              </ul>
            </li> */}
          </div>
        </div>
        <div className={styles.login}>
          <button className={styles.loginButton}>
            <BiUserCircle /> Log in
          </button>
        </div>
        <div className={styles.phoneMenu}>
          <CiMenuFries
            onClick={() => setIsToggled((isToggled) => !isToggled)}
          />
        </div>
      </div>
    </div>
  );
}
