import React from "react";
import styles from "./roadmap.module.css";

export default function Roadmap() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mission}>
          <h1>
            We are on a global mission <br /> to empower creators.
          </h1>
          <p>
            With a unique collaborative platform that pairs musicians with AI,
            we are redefining the way <br />
            music is created, experienced and licensed.
          </p>
          <p>
            From streamers to filmmakers to app builders, we've made it easier
            than ever for content <br />
            creators of all kinds to license custom, high-quality, royalty-free
            music.
          </p>
        </div>
        <div id="roadmap" className={styles.roadmap}>
          <h1 className="font-montserrat text-[51px] font-bold mb-10">
            Roadmap
          </h1>
          <div className={styles.roadmap__wrapper}>
            <div className={styles.roadmap__container_left}>
              <div className={styles.roadmap__item}>
                <h3>LAUNCH</h3>
                <ul>
                  <li>Concept Devlopment</li>
                  <li>Influencer Marketing Campaign</li>
                  <li>Technical Documentation</li>
                  <li>Community Establishment</li>
                </ul>
              </div>
            </div>
            <div className={styles.roadmap__container_right}>
              <div className={styles.roadmap__item}>
                <h3>PHASE 1</h3>
                <ul>
                  <li>Concept reveal</li>
                  <li>Whitepaper</li>
                </ul>
              </div>
            </div>
            <div className={styles.roadmap__container_left}>
              <div className={styles.roadmap__item}>
                <h3>PHASE 2</h3>
                <ul>
                  <li>Beta Release Web App</li>
                </ul>
              </div>
            </div>
            <div className={styles.roadmap__container_right}>
              <div className={styles.roadmap__item}>
                <h3>PHASE 3</h3>
                <ul>
                  <li>Alpha Release of web app</li>
                </ul>
              </div>
            </div>
            <div className={styles.roadmap__container_left}>
              <div className={styles.roadmap__item}>
                <h3>PHASE 4</h3>
                <ul>
                  <li>Alpha mobile app</li>
                  <li>Alpha telegram bot</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.roadmap__wrapper_mobile}>
            <div className={styles.roadmap__item_mobile}>
              <h3>LAUNCH</h3>
              <ul>
                <li>Concept Devlopment</li>
                <li>Influencer Marketing Campaign</li>
                <li>Technical Documentation</li>
                <li>Community Establishment</li>
              </ul>
            </div>
            <div className={styles.roadmap__item_mobile}>
              <h3>PHASE 2</h3>
              <ul>
                <li>Beta Release Web App</li>
              </ul>
            </div>
            <div className={styles.roadmap__item_mobile}>
              <h3>PHASE 3</h3>
              <ul>
                <li>Alpha Release of web app</li>
              </ul>
            </div>
            <div className={styles.roadmap__item_mobile}>
              <h3>PHASE 4</h3>
              <ul>
                <li>Alpha mobile app</li>
                <li>Alpha telegram bot</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
