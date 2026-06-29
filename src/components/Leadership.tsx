"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/Leadership.module.css";

export default function Leadership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stars with staggered delay
            starsRef.current.forEach((star, i) => {
              if (!star) return;
              anime({
                targets: star,
                opacity: [0, 1],
                scale: [0.5, 1],
                rotate: [0, 360],
                duration: 800,
                delay: i * 100,
                easing: "easeOutExpo",
              });
            });

            // Animate quote
            anime({
              targets: quoteRef.current,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              delay: 1200,
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

  const values = [
    { text: "Integrity", icon: "⚡" },
    { text: "Vision", icon: "✦" },
    { text: "Service", icon: "♥" },
    { text: "Excellence", icon: "★" },
    { text: "Empathy", icon: "◈" },
    { text: "Courage", icon: "▲" },
    { text: "Innovation", icon: "◆" },
    { text: "Community", icon: "●" },
  ];

  const positions = [
    { left: "15%", top: "25%" },
    { left: "45%", top: "5%" },
    { left: "75%", top: "20%" },
    { left: "10%", top: "60%" },
    { left: "35%", top: "45%" },
    { left: "65%", top: "50%" },
    { left: "85%", top: "70%" },
    { left: "25%", top: "85%" },
  ];

  return (
    <section className={styles.leadership} id="leadership" ref={sectionRef}>
      <div className={styles.backgroundGlow}></div>
      
      <div className={styles.container}>
        <span className="eyebrow">Public Leadership</span>
        <h2 className={styles.title}>
          Values That <em>Guide</em>
        </h2>
        <p className={styles.lede}>
          Eight core principles that define the leadership philosophy of Savin Jain — each one a guiding star in the journey of service.
        </p>

        <div className={styles.constellation}>
          {values.map((item, i) => (
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
              <span className={styles.starIcon}>{item.icon}</span>
              <span className={styles.starText}>{item.text}</span>
              <span className={styles.starGlow}></span>
            </span>
          ))}
        </div>

        <div ref={quoteRef} className={styles.leadershipQuote}>
          <div className={styles.quoteLine}></div>
          <blockquote>
            &ldquo;Leadership is not about being in charge — it's about <em>taking care</em> of those in your charge.&rdquo;
          </blockquote>
          <div className={styles.quoteLine}></div>
        </div>
      </div>
    </section>
  );
}