"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: ".footer-reveal",
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
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

  return (
    <footer className={styles.footer} id="footer" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.quote}>
          <blockquote className="footer-reveal">
            &ldquo;The true measure of a leader is not in what they achieve, but in <em>how many lives</em> they touch along the way.&rdquo;
          </blockquote>
        </div>

        <div className={`${styles.portrait} footer-reveal`}>
          <div className={styles.portraitFrame}>
            <Image
              src="/footerimage.jpeg"
              alt="Savin Jain"
              fill
              className={styles.portraitImage}
              sizes="80px"
              quality={95}
            />
          </div>
          <span className={styles.signature}>Savin Jain</span>
          <span className={styles.tagline}>Image Consultant · Social Worker · Events Organizer · Public Leader</span>
        </div>

        <div className={`${styles.cta} footer-reveal`}>
          <a href="#hero">
            Let's Create Meaningful Impact Together
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className={`${styles.bottom} footer-reveal`}>
          <div className={styles.contact}>
            <p>📧 hello@savinjain.com</p>
            <p>📱 +91 98765 43210</p>
          </div>
          <div className={styles.social}>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
          <p className={styles.copyright}>&copy; 2024 Savin Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}