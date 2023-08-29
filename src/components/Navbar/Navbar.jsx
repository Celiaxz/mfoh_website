import React from "react";
import logo from "../../assets/Assets_mfoh/logo/logo.jpg";
import styles from "./navBar.module.css";

export default function Navbar() {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navList">hello</div>
    </div>
  );
}
