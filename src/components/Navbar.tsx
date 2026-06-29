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

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    
    // Try to find section
    let section = document.getElementById(sectionId);
    
    // If not found, try common variations
    if (!section) {
      const idMap: Record<string, string> = {
        "story": "story",
        "business": "business", 
        "consultant": "consultant",
        "impact": "impact",
        "events": "events",
        "leadership": "leadership",
        "footer": "footer",
        "hero": "hero"
      };
      section = document.getElementById(idMap[sectionId] || sectionId);
    }
    
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      console.log(`✅ Scrolled to: ${sectionId}`);
    } else {
      console.error(`❌ Section not found: ${sectionId}`);
      alert(`Section "${sectionId}" not found on page. Please check IDs.`);
    }
  };

  const navItems = [
    { label: "Story", id: "story" },
    { label: "Business", id: "business" },
    { label: "Consultant", id: "consultant" },
    { label: "Impact", id: "impact" },
    { label: "Events", id: "events" },
    { label: "Leadership", id: "leadership" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navContainer}>
        <button
          onClick={() => scrollToSection("hero")}
          className={styles.logo}
        >
          <span className={styles.logoGold}>S</span>J
          <span className={styles.logoSub}>Savin Jain</span>
        </button>

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
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={styles.navLinkBtn}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection("footer")}
              className={styles.navCTA}
            >
              Connect
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}