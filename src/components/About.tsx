import React from "react";
import styles from "./About.module.css";
import { profileData } from "../data/profileData";

export default function About() {
  return (
    <section id="about" className="section container">
      <h2 className="section-title">About Me</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>{profileData.summary}</p>
          <p>
            With a strong foundation in both front-end and back-end development,
            I have been consistently delivering scalable and impactful solutions, 
            particularly in the banking and finance sector.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <img src="/portofolio/profile.jpg" alt="Bambang Adi Candra" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px' }} />
          </div>
          <div className={styles.imageFrame} />
        </div>
      </div>
    </section>
  );
}
