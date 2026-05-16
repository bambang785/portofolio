import React from "react";
import styles from "./Experience.module.css";
import { profileData } from "../data/profileData";

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 className="section-title">Where I've Worked</h2>
      <div className={styles.experienceList}>
        {profileData.experience.map((job) => (
          <div key={job.id} className={styles.card}>
            <div className={styles.header}>
              <div>
                <h3 className={styles.role}>
                  {job.role} <span className={styles.company}>@ {job.company}</span>
                </h3>
                <p className={styles.location}>{job.location}</p>
              </div>
              <span className={styles.period}>{job.period}</span>
            </div>
            <ul className={styles.description}>
              {job.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
