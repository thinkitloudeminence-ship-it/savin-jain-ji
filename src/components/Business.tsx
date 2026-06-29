"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/Business.module.css";

export default function Business() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statRefs.current.forEach((stat, i) => {
              if (!stat) return;
              const numEl = stat.querySelector(".stat-num") as HTMLElement;
              if (!numEl) return;
              const target = parseInt(numEl.dataset.target || "0", 10);

              anime({
                targets: numEl,
                innerHTML: [0, target],
                round: 1,
                duration: 2000,
                delay: i * 200,
                easing: "easeOutExpo",
                update: (anim: any) => {
                  const value = Math.round(
                    anim.animations[0]?.currentValue || 0
                  );
                  numEl.textContent = value.toString();
                },
              });

              anime({
                targets: stat,
                opacity: [0, 1],
                translateY: [40, 0],
                duration: 800,
                delay: i * 150,
                easing: "easeOutExpo",
              });
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

  const stats = [
    { value: 120, label: "Ventures Mentored", suffix: "+" },
    { value: 15, label: "Years in Motion", suffix: "" },
    { value: 40, label: "Cities Reached", suffix: "+" },
    { value: 10000, label: "Lives Touched", suffix: "+" },
  ];

  return (
    <section className={styles.business} id="business" ref={sectionRef}>
      <span className="eyebrow">Enterprise</span>
      <h2 className={styles.title}>
        Built on <em>conviction.</em>
      </h2>
      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <div
            key={i}
            ref={(el) => {
              statRefs.current[i] = el;
            }}
            className={styles.stat}
          >
            <div className={styles.statNumber}>
              <span className="stat-num" data-target={stat.value}>
                0
              </span>
              {stat.suffix}
            </div>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}