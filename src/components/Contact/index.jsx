import React from "react";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.content}>
        <h1>join the movement</h1>
        <a href="mailto:hello@goamadeus.com">hello@goamadeus.com</a>
      </div>
    </div>
  );
}
