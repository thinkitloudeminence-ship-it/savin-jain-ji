"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/SocialWork.module.css";

export default function SocialWork() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".social-reveal",
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              delay: anime.stagger(200),
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

  const initiatives = [
    {
      title: "Education for All",
      description: "Providing quality education and scholarships to underprivileged children.",
      impact: "500+ Students Supported",
    },
    {
      title: "Women Empowerment",
      description: "Skill development and entrepreneurship programs for women in rural areas.",
      impact: "1000+ Women Empowered",
    },
    {
      title: "Healthcare Access",
      description: "Medical camps and health awareness programs in underserved communities.",
      impact: "50+ Health Camps",
    },
    {
      title: "Youth Development",
      description: "Leadership training and mentorship programs for young leaders.",
      impact: "2000+ Youth Mentored",
    },
  ];

  return (
    <section className={styles.social} id="social" ref={sectionRef}>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <span className="eyebrow social-reveal">Social Work</span>
        <h2 className={`${styles.title} social-reveal`}>
          Service to <em>Humanity</em>
        </h2>
        <p className={`${styles.subtitle} social-reveal`}>
          Driven by a deep sense of responsibility, Savin Jain has dedicated himself to creating positive change in society through various initiatives.
        </p>

        <div className={styles.grid}>
          {initiatives.map((item, i) => (
            <div key={i} className={`social-reveal ${styles.card}`}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className={styles.impact}>{item.impact}</span>
            </div>
          ))}
        </div>

        <blockquote className={`${styles.quote} social-reveal`}>
          &ldquo;True leadership is not about power — it's about <em>service</em> to those who need it most.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}