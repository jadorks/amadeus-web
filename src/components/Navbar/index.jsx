import Link from "next/link";
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
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
