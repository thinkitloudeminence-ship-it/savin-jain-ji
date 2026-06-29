"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/Sports.module.css";

export default function Sports() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards
            anime({
              targets: ".sports-reveal",
              opacity: [0, 1],
              translateY: [40, 0],
              duration: 1000,
              delay: anime.stagger(150),
              easing: "easeOutExpo",
            });

            // Animate icons with rotation
            anime({
              targets: ".sports-icon",
              rotate: [0, 360],
              scale: [0.5, 1],
              duration: 800,
              delay: anime.stagger(200),
              easing: "easeOutExpo",
            });

            // Animate stats with counting
            const statNumbers = document.querySelectorAll(".stat-number-animate");
            statNumbers.forEach((el, i) => {
              const target = parseInt(el.getAttribute("data-target") || "0");
              const suffix = el.getAttribute("data-suffix") || "";
              anime({
                targets: el,
                innerHTML: [0, target],
                round: 1,
                duration: 2500,
                delay: i * 300,
                easing: "easeOutExpo",
                update: (anim: any) => {
                  const value = Math.round(anim.animations[0]?.currentValue || 0);
                  el.textContent = value + suffix;
                },
              });
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activities = [
    {
      title: "Chess in Schools",
      description: "Introduced chess in 50+ schools to develop strategic thinking and cognitive skills in students.",
      impact: "10,000+ Students",
      icon: "♟️",
      color: "#D4AF37",
    },
    {
      title: "Sports Infrastructure",
      description: "Developed world-class sports facilities for youth and community development.",
      impact: "25+ Facilities",
      icon: "🏟️",
      color: "#C0A060",
    },
    {
      title: "Youth Sports League",
      description: "Organized inter-school sports competitions promoting teamwork, discipline, and healthy competition.",
      impact: "100+ Teams",
      icon: "⚽",
      color: "#B8963A",
    },
  ];

  return (
    <section className={styles.sports} id="sports" ref={sectionRef}>
      <div className={styles.bgGlow}></div>
      <div className={styles.bgGlowTwo}></div>

      <div className={styles.container}>
        <span className="eyebrow sports-reveal">Sports & Recreation</span>
        <h2 className={`${styles.title} sports-reveal`}>
          Building <em>Champions</em> Through Sports
        </h2>
        <p className={`${styles.subtitle} sports-reveal`}>
          A passionate advocate for sports and youth development, Savin Jain has been instrumental in promoting sports culture and building world-class infrastructure.
        </p>

        <div className={styles.grid}>
          {activities.map((item, i) => (
            <div key={i} className={`sports-reveal ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <span className="sports-icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <div className={styles.iconGlow} style={{ background: item.color }}></div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.impact}>{item.impact}</span>
              <div className={styles.cardNumber}>0{i + 1}</div>
            </div>
          ))}
        </div>

        <div className={`${styles.stats} sports-reveal`}>
          <div className={styles.stat}>
            <span className={`${styles.statNumber} stat-number-animate`} data-target={50} data-suffix="+">
              0+
            </span>
            <span className={styles.statLabel}>Schools Reached</span>
            <div className={styles.statBar}>
              <div className={styles.statBarFill} style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className={styles.stat}>
            <span className={`${styles.statNumber} stat-number-animate`} data-target={10000} data-suffix="+">
              0+
            </span>
            <span className={styles.statLabel}>Students Impacted</span>
            <div className={styles.statBar}>
              <div className={styles.statBarFill} style={{ width: "92%" }}></div>
            </div>
          </div>
          <div className={styles.stat}>
            <span className={`${styles.statNumber} stat-number-animate`} data-target={100} data-suffix="+">
              0+
            </span>
            <span className={styles.statLabel}>Events Organized</span>
            <div className={styles.statBar}>
              <div className={styles.statBarFill} style={{ width: "78%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}