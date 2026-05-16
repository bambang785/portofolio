"use client";

import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.nav}`}>
        <a href="#" className={styles.logo}>
          Portofolio<span>.</span>
        </a>
        <ul className={styles.links}>
          <li className={styles.linkItem}>
            <a href="#about">About</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#experience">Experience</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
