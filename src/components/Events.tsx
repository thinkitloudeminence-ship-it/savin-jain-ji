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
              targets: ".event-card",
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

  const events = [
    {
      tag: "Leadership Summit",
      title: "Global Leadership Conference",
      year: "2024",
      description: "Bringing together visionaries and change-makers from across the world.",
    },
    {
      tag: "Social Impact",
      title: "Community Development Forum",
      year: "2024",
      description: "Addressing key social challenges and building sustainable solutions.",
    },
    {
      tag: "Business",
      title: "Entrepreneurship & Innovation Expo",
      year: "2023",
      description: "Empowering the next generation of business leaders and innovators.",
    },
    {
      tag: "Youth",
      title: "Youth Leadership Workshop",
      year: "2023",
      description: "Developing leadership skills in young changemakers.",
    },
    {
      tag: "Awards",
      title: "Excellence & Achievement Gala",
      year: "2023",
      description: "Celebrating outstanding contributions to society and community service.",
    },
  ];

  return (
    <section className={styles.events} id="events" ref={sectionRef}>
      <span className="eyebrow">Events</span>
      <h2 className={styles.title}>
        Creating <em>Unforgettable</em> Experiences
      </h2>
      <p className={styles.subtitle}>
        As a premier <em>Events Organizer</em>, Savin Jain has orchestrated large-scale events that bring people together, inspire action, and create lasting memories.
      </p>

      <div className={styles.grid}>
        {events.map((event, i) => (
          <div key={i} className={`event-card ${styles.card}`}>
            <div className={styles.cardHeader}>
              <span className={styles.tag}>{event.tag}</span>
              <span className={styles.year}>{event.year}</span>
            </div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}