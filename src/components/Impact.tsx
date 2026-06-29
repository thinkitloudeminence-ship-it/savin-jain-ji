"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/Impact.module.css";

export default function Impact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numEls = document.querySelectorAll(".impact-number");
            numEls.forEach((el, i) => {
              const target = parseInt(el.getAttribute("data-target") || "0");
              anime({
                targets: el,
                innerHTML: [0, target],
                round: 1,
                duration: 2500,
                delay: i * 200,
                easing: "easeOutExpo",
                update: (anim: any) => {
                  el.textContent = Math.round(anim.animations[0]?.currentValue || 0).toLocaleString();
                },
              });
            });

            anime({
              targets: ".impact-card",
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const impacts = [
    { number: 25000, label: "People Mentored", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
    { number: 500, label: "Events Organized", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { number: 150, label: "Community Projects", icon: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2zM17 21v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4" },
    { number: 100, label: "Awards & Recognition", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" },
    { number: 50, label: "NGO Partnerships", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { number: 30, label: "Cities Reached", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <section className={styles.impact} id="impact" ref={sectionRef}>
      <div className={styles.container}>
        <span className="eyebrow">Impact & Reach</span>
        <h2 className={styles.title}>
          Making a <em>Difference</em> Every Day
        </h2>
        <p className={styles.subtitle}>
          The numbers speak for themselves — a testament to unwavering dedication and service.
        </p>

        <div className={styles.grid}>
          {impacts.map((item, i) => (
            <div key={i} className={`impact-card ${styles.card}`}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </div>
              <span className={`impact-number ${styles.number}`} data-target={item.number}>
                0
              </span>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}