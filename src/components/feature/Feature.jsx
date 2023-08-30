import React from "react";
import MainImg from "../../assets/Assets_mfoh/queens_picture/2.jpeg";
import styles from "./Feature.module.css";
const Feature = () => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureContent}>
        <h1 className={styles.featureTitle}>Miss Face of Humanity</h1>
        <h3 className={styles.featureSubTitle}>NIGERIA</h3>
        <p>
          Miss Face of Humanity is a global platform that focuses on amplifying
          the voices of female Change-makers who are creating impact in the
          world.
        </p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
};

export default Feature;
