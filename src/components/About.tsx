"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline({ easing: "easeOutExpo" });

            tl.add({
              targets: ".about-reveal",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              delay: anime.stagger(150),
            });

            tl.add(
              {
                targets: ".about-stats",
                opacity: [0, 1],
                translateY: [30, 0],
                duration: 800,
                delay: anime.stagger(100),
              },
              "-=400"
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.about} id="about" ref={sectionRef}>
      <div className={styles.container}>
        <span className="eyebrow about-reveal">About Me</span>
        <h2 className={`${styles.title} about-reveal`}>
          A Life Dedicated to <em>Service & Leadership</em>
        </h2>

        <div ref={textRef} className={styles.content}>
          <p className="about-reveal">
            Savin Jain is a distinguished <em>Image Consultant</em>, dedicated <em>Social Worker</em>, visionary <em>Events Organizer</em>, and committed <em>Public Leader</em>. With a career spanning over two decades, he has touched countless lives through his multifaceted approach to community service and professional excellence.
          </p>
          <p className="about-reveal">
            From transforming individual personas through expert image consulting to organizing large-scale events that bring communities together, Savin Jain has consistently demonstrated an unwavering commitment to creating meaningful impact. His work in the social sector has empowered thousands, while his leadership in public affairs has inspired a new generation of change-makers.
          </p>
          <p className="about-reveal">
            As a <em>Politician</em> and public figure, Savin Jain represents the voice of the people, championing causes that matter and bridging the gap between governance and grassroots. His journey is a testament to the power of vision, integrity, and tireless dedication to the greater good.
          </p>
        </div>

        <div className={`${styles.stats} about-stats`}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>25+</span>
            <span className={styles.statLabel}>Years of Service</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Events Organized</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10000+</span>
            <span className={styles.statLabel}>Lives Impacted</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Community Initiatives</span>
          </div>
        </div>
      </div>
    </section>
  );
}