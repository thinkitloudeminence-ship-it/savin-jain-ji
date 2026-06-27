// src/components/ImageConsultant.tsx
"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/ImageConsultant.module.css";

export default function ImageConsultant() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline({
              easing: "easeOutExpo",
            });

            tl.add({
              targets: ".consultant-reveal",
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              delay: anime.stagger(150),
            });

            tl.add(
              {
                targets: imageRef.current,
                scale: [0.9, 1],
                opacity: [0, 1],
                duration: 1200,
              },
              "-=400"
            );
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
    <section className={styles.consultant} id="consultant" ref={sectionRef}>
      <div className={styles.split}>
        <div className={styles.imageWrapper}>
          <div ref={imageRef} className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
              <svg viewBox="0 0 100 120" fill="none">
                <path
                  d="M50 10 C 65 10 73 24 73 40 C 73 52 67 60 60 64 C 78 70 90 84 90 105 L 10 105 C 10 84 22 70 40 64 C 33 60 27 52 27 40 C 27 24 35 10 50 10 Z"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                <circle cx="50" cy="40" r="15" stroke="#D4AF37" strokeWidth="1.2" />
              </svg>
              <span className={styles.imageHint}>Editorial portrait placeholder</span>
            </div>
            <div className={styles.lightSweep}></div>
          </div>
        </div>
        <div className={styles.content}>
          <span className={`eyebrow consultant-reveal`}>Image &amp; Presence</span>
          <h2 className={`consultant-reveal`}>
            The art of <em>presence.</em>
          </h2>
          <p className={`consultant-reveal`}>
            Every room remembers how you entered it. Tailored style, deliberate posture,
            an unhurried voice — presence is not performance, it is preparation made invisible.
          </p>
          <p className={`consultant-reveal`}>
            With over a decade of curating executive presence, Savin Jain has redefined
            how leaders show up. Not just in boardrooms, but in every arena of influence.
          </p>
        </div>
      </div>
    </section>
  );
}