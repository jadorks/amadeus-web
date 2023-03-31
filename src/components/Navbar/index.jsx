import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.nav__logo}>
          <img src="/amadeus_logo.png" alt="logo" />
        </div>
        <div>
          <ul className={styles.menu}>
            <li>Home</li>
            <li>About Us</li>
            <li>Roadmap</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
