// src/components/Leadership.tsx
"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/Leadership.module.css";

export default function Leadership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            starsRef.current.forEach((star, i) => {
              if (!star) return;
              anime({
                targets: star,
                opacity: [0, 1],
                scale: [0.8, 1],
                duration: 600,
                delay: i * 80,
                easing: "easeOutExpo",
              });
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

  const values = [
    "Leadership",
    "Vision",
    "Community",
    "Development",
    "Integrity",
    "Youth",
    "Progress",
    "Hope",
  ];

  const positions = [
    { left: "18%", top: "20%" },
    { left: "48%", top: "8%" },
    { left: "78%", top: "24%" },
    { left: "12%", top: "58%" },
    { left: "38%", top: "46%" },
    { left: "64%", top: "54%" },
    { left: "86%", top: "68%" },
    { left: "30%", top: "84%" },
  ];

  return (
    <section className={styles.leadership} id="leadership" ref={sectionRef}>
      <span className="eyebrow">Public Leadership</span>
      <h2 className={styles.title}>
        Values, <em>constellated.</em>
      </h2>
      <p className={styles.lede}>
        Eight ideas that quietly govern every decision. Each one a guiding star.
      </p>
      <div className={styles.constellation}>
        {values.map((value, i) => (
          <span
            key={i}
            ref={(el) => {
              starsRef.current[i] = el;
            }}
            className={styles.star}
            style={{
              left: positions[i].left,
              top: positions[i].top,
              transitionDelay: `${i * 0.06}s`,
            }}
          >
            {value}
          </span>
        ))}
      </div>
    </section>
  );
}