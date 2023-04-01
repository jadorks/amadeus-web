import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div id="hero" className={styles.container}>
      <div className={styles.content}>
        <h1>
          Transform any text
          <br /> into an original
          <br /> musical composition
        </h1>
        <p>with our text-to-music AI Desktop DApp</p>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
