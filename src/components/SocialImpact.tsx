// src/components/SocialImpact.tsx
"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/SocialImpact.module.css";

export default function SocialImpact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: textRef.current,
              opacity: [0, 1],
              translateY: [30, 0],
              scale: [0.95, 1],
              duration: 1200,
              easing: "easeOutExpo",
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.social} id="social" ref={sectionRef}>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <p ref={textRef} className={styles.quote}>
        Where ambition kneels, <em>service stands.</em>
      </p>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>50+</span>
          <span className={styles.statLabel}>Community Initiatives</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>100K+</span>
          <span className={styles.statLabel}>Lives Impacted</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>25+</span>
          <span className={styles.statLabel}>NGO Partnerships</span>
        </div>
      </div>
    </section>
  );
}