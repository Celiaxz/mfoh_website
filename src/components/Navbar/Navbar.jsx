import React, { useState } from "react";
import logo from "../../assets/Assets_mfoh/logo/logo.jpg";
import styles from "./Navbar.module.css";
import { BiUserCircle } from "react-icons/bi";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navListContainer}>
          <ul
            className={
              styles.navList + " " + `${isToggled ? styles.active : ""}`
            }
          >
            <li>Home</li>
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
            </li>
          </ul>
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
