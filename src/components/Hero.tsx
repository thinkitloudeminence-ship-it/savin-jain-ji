// src/components/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeOutExpo",
    });

    // Name reveal with split letters
    const nameText = "Savin Jain";
    const nameContainer = document.querySelector('.hero-name');
    if (nameContainer) {
      nameContainer.innerHTML = '';
      nameText.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(80px) rotateX(40deg)';
        span.style.transition = 'all 0.6s ease';
        span.style.fontFamily = 'var(--font-playfair)';
        span.style.fontWeight = '900';
        if (char === ' ') {
          span.style.width = '0.3em';
        }
        nameContainer.appendChild(span);

        setTimeout(() => {
          anime({
            targets: span,
            opacity: [0, 1],
            translateY: [80, 0],
            rotateX: [40, 0],
            duration: 1000,
            easing: "easeOutExpo",
            delay: i * 60,
          });
        }, 200);
      });
    }

    // Roles reveal with stagger
    setTimeout(() => {
      const roles = rolesRef.current.filter(Boolean);
      anime({
        targets: roles,
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.9, 1],
        duration: 800,
        delay: anime.stagger(150),
        easing: "easeOutExpo",
      });
    }, 1800);

    // CTA reveal
    setTimeout(() => {
      anime({
        targets: ".hero-cta",
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: "easeOutExpo",
      });
    }, 2800);

    // Scroll indicator
    setTimeout(() => {
      anime({
        targets: ".hero-scroll",
        opacity: [0, 0.6],
        duration: 800,
        easing: "easeOutExpo",
      });
    }, 3200);

    return () => {
      tl.pause();
    };
  }, []);

  const roles = [
    "Image Consultant",
    "Social Worker",
    "Big Events Organizer",
    "Public Leader"
  ];

  return (
    <section className={styles.hero} id="hero" ref={containerRef}>
      {/* Background Image */}
      <div className={styles.heroBackground}>
        <Image
          src="/savinjainhero.jpeg"
          alt="Savin Jain - Hero Background"
          fill
          priority
          className={styles.heroImage}
          sizes="100vw"
          quality={100}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.heroContent}>
        <div className={styles.badge}>Personal Profile</div>
        
        <h1 className={`${styles.name} hero-name`}>Savin Jain</h1>
        
        <div className={styles.rolesContainer}>
          {roles.map((role, i) => (
            <span
              key={i}
              ref={(el) => {
                rolesRef.current[i] = el;
              }}
              className={styles.role}
              style={{
                opacity: 0,
                transform: "translateY(30px) scale(0.9)",
              }}
            >
              {role}
              {i < roles.length - 1 && <span className={styles.separator}>•</span>}
            </span>
          ))}
        </div>

        <div className={`${styles.cta} hero-cta`}>
          <a href="#story" className={styles.ctaButton}>
            Discover the journey
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className={`${styles.scroll} hero-scroll`}>
          <span className={styles.scrollLine}></span>
          <span>Scroll</span>
        </div>
      </div>

      <div className={styles.heroGlow}></div>
      <div className={styles.heroGlowTwo}></div>
      
      <div className={styles.floatingParticles}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
}