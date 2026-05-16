import React from "react";
import styles from "./Projects.module.css";
import { profileData } from "../data/profileData";

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>
      <div className={styles.projectList}>
        {profileData.projects.map((proj) => (
          <div key={proj.id} className={styles.projectCard}>
            <h3 className={styles.title}>{proj.title}</h3>
            <div className={styles.meta}>
              <span className={styles.associated}>@ {proj.associatedWith}</span>
              <span className={styles.period}>{proj.period}</span>
            </div>
            <p className={styles.description}>{proj.description}</p>
            <div className={styles.skills}>
              {proj.skills.map((skill, i) => (
                <span key={i} className={styles.skillBadge}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
