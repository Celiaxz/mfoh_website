import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/Assets_mfoh/logo/logo.jpg";
import styles from "./Navbar.module.css";
import { BiUserCircle } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  const [onScroll, settOnScroll] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
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
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/">Home</NavLink> */}
            <NavLink to="/about-us">About Us</NavLink>

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
