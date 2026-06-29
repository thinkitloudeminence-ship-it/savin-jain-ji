"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import styles from "@/styles/Journey.module.css";

export default function Journey() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = document.querySelectorAll(".journey-item");
            anime({
              targets: items,
              opacity: [0, 1],
              translateX: [-30, 0],
              duration: 800,
              delay: anime.stagger(200),
              easing: "easeOutExpo",
            });

            // Animate image
            anime({
              targets: imageRef.current,
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 1200,
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

  const journeyData = [
    {
      year: "1998",
      title: "Began Public Service",
      description: "Started journey as a dedicated community worker, serving the people at the grassroots level.",
    },
    {
      year: "2005",
      title: "Image Consulting Practice",
      description: "Established professional image consulting practice, helping individuals transform their personal and professional presence.",
    },
    {
      year: "2010",
      title: "Social Work Initiatives",
      description: "Launched multiple community development programs focusing on education, health, and women empowerment.",
    },
    {
      year: "2015",
      title: "Event Management Enterprise",
      description: "Founded a successful event management organization, creating memorable experiences for thousands.",
    },
    {
      year: "2020",
      title: "Public Leadership",
      description: "Emerged as a prominent public leader, representing the voice of the people in various forums.",
    },
    {
      year: "2024",
      title: "Continuing the Mission",
      description: "Actively working towards building a better future through service, leadership, and community engagement.",
    },
  ];

  return (
    <section className={styles.journey} id="journey" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftContent}>
            <span className="eyebrow">My Journey</span>
            <h2 className={styles.title}>
              From Service to <em>Leadership</em>
            </h2>
            <p className={styles.subtitle}>
              A journey of dedication, transformation, and unwavering commitment to the people.
            </p>

            <div className={styles.timeline}>
              {journeyData.map((item, i) => (
                <div key={i} className={`journey-item ${styles.item}`}>
                  <div className={styles.year}>{item.year}</div>
                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className={styles.dot}></div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightContent}>
            <div ref={imageRef} className={styles.imageWrapper}>
              <Image
                src="/My Journey.png"
                alt="Savin Jain - My Journey"
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
              />
              <div className={styles.imageOverlay}></div>
              <div className={styles.imageBadge}>
                <span>25+ Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}