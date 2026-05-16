import React from "react";
import styles from "./Skills.module.css";
import { profileData } from "../data/profileData";

export default function SkillsAndEducation() {
  return (
    <section id="skills" className="section container">
      <div className={styles.grid}>
        <div>
          <h2 className="section-title">Technical Skills</h2>
          <div className={styles.skillList}>
            {profileData.skills.map((skill, index) => (
              <span key={index} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="section-title">Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {profileData.education.map((edu) => (
              <div key={edu.id} className={styles.educationCard}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <p className={styles.institution}>{edu.institution}</p>
                <span className={styles.period}>{edu.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
