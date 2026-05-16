import React from "react";
import styles from "./Hero.module.css";
import { profileData } from "../data/profileData";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={`container ${styles.heroContent}`}>
        <span className={`${styles.greeting} animate-fade-in delay-1`}>
          Hi, my name is
        </span>
        <h1 className={`${styles.name} animate-fade-in delay-2 text-gradient`}>
          {profileData.name}.
        </h1>
        <h2 className={`${styles.role} animate-fade-in delay-3`}>
          I build robust and modern web applications.
        </h2>
        <p className={`${styles.description} animate-fade-in delay-4`}>
          I am a {profileData.title} based in {profileData.location}, currently working
          at bank bjb. I specialize in building exceptional digital experiences.
        </p>
        <div className={`${styles.actions} animate-fade-in delay-4`}>
          <a href={`mailto:${profileData.email}`} className="btn btn-primary">
            Get In Touch
          </a>
          <a
            href={`https://${profileData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
