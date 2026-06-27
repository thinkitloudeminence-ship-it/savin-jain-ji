// src/components/Events.tsx
"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/Events.module.css";

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".event-item",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 800,
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

  const events = [
    { tag: "Summit", title: "Global Leadership Forum", year: "2024" },
    { tag: "Founders", title: "Founder's Circle Retreat", year: "2024" },
    { tag: "Keynote", title: "Vision & Scale Conference", year: "2023" },
    { tag: "Community", title: "Youth Empowerment Roundtable", year: "2023" },
    { tag: "Gala", title: "Impact Awards Ceremony", year: "2023" },
  ];

  return (
    <section className={styles.events} id="events" ref={sectionRef}>
      <span className="eyebrow">On Stage</span>
      <h2 className={styles.title}>
        Curating <em>moments</em> that matter.
      </h2>
      <div className={styles.track}>
        {events.map((event, i) => (
          <div key={i} className={`event-item ${styles.card}`}>
            <div className={styles.cardImage}>
              <div className={styles.cardOverlay}></div>
              <span className={styles.cardYear}>{event.year}</span>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardTag}>{event.tag}</span>
              <h3>{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}