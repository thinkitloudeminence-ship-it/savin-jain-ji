// src/components/Footer.tsx
"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".footer-reveal",
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              delay: anime.stagger(150),
              easing: "easeOutExpo",
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={styles.footer} id="footer" ref={sectionRef}>
      <div className={styles.container}>
        <blockquote className={`${styles.quote} footer-reveal`}>
          &ldquo;The greatest legacy is not what we build&hellip;
          <br />
          It is the <em>lives we inspire.</em>&rdquo;
        </blockquote>

        <div className={styles.portrait}>
          <div className={styles.portraitFrame}>
            <svg viewBox="0 0 100 120" fill="none">
              <path
                d="M50 10 C 65 10 73 24 73 40 C 73 52 67 60 60 64 C 78 70 90 84 90 105 L 10 105 C 10 84 22 70 40 64 C 33 60 27 52 27 40 C 27 24 35 10 50 10 Z"
                stroke="#D4AF37"
                strokeWidth="1.2"
              />
            </svg>
          </div>
          <span className={styles.signature}>Savin Jain</span>
        </div>

        <a href="#hero" className={`${styles.cta} footer-reveal`}>
          Let's create meaningful impact together
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <div className={`${styles.bottom} footer-reveal`}>
          <p>hello@savinjain.com</p>
          <div className={styles.social}>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="Instagram">Instagram</a>
          </div>
          <p className={styles.copyright}>&copy; 2024 Savin Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}