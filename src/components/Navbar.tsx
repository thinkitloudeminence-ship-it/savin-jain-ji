// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Story", href: "#story" },
    { label: "Business", href: "#business" },
    { label: "Consultant", href: "#consultant" },
    { label: "Impact", href: "#social" },
    { label: "Events", href: "#events" },
    { label: "Leadership", href: "#leadership" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoGold}>S</span>J
          <span className={styles.logoSub}>Savin Jain</span>
        </a>

        <button
          className={`${styles.menuBtn} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#footer" className={styles.navCTA}>
              Connect
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}