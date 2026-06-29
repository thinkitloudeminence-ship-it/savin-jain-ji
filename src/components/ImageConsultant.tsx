"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import styles from "@/styles/ImageConsultant.module.css";

export default function ImageConsultant() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = anime.timeline({ easing: "easeOutExpo" });

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.consultant} id="consultant" ref={sectionRef}>
      <div className={styles.split}>
        <div className={styles.imageWrapper}>
          <div ref={imageRef} className={styles.imageContainer}>
            <Image
              src="/Image Consulting Portfolio.jpeg"
              alt="Savin Jain - Image Consulting Portfolio"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={85}
              priority
            />
            <div className={styles.imageOverlay}></div>
            <div className={styles.imagePlaceholder}>
              <span className={styles.imageHint}>Image Consulting Portfolio</span>
            </div>
            <div className={styles.lightSweep}></div>
          </div>
        </div>
        <div className={styles.content}>
          <span className={`eyebrow consultant-reveal`}>Image Consulting</span>
          <h2 className={`consultant-reveal`}>
            The Art of <em>Presence</em>
          </h2>
          <p className={`consultant-reveal`}>
            As a leading <em>Image Consultant</em>, Savin Jain has transformed the personal and professional personas of countless individuals. From corporate leaders to public figures, his expertise in personal branding, style curation, and presence development has helped people unlock their true potential.
          </p>
          <p className={`consultant-reveal`}>
            With a deep understanding of psychology, fashion, and communication, Savin Jain creates holistic image strategies that go beyond appearance — building confidence, credibility, and lasting impact.
          </p>
          <p className={`consultant-reveal`}>
            His clientele includes business executives, politicians, celebrities, and aspiring professionals who seek to make a lasting impression in their respective fields.
          </p>
        </div>
      </div>
    </section>
  );
}