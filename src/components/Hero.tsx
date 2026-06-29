"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const rolesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const descRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const tl = anime.timeline({ easing: "easeOutExpo" });

    tl.add({
      targets: imageRef.current,
      opacity: [0, 1],
      translateX: [-60, 0],
      scale: [0.95, 1],
      duration: 1200,
    });

    tl.add({
      targets: contentRef.current,
      opacity: [0, 1],
      translateX: [60, 0],
      duration: 1000,
    }, "-=600");

    tl.add({
      targets: badgeRef.current,
      opacity: [0, 1],
      translateY: [-20, 0],
      scale: [0.9, 1],
      duration: 600,
    }, "-=400");

    const nameText = "Savin Jain";
    const nameContainer = document.querySelector('.hero-name');
    if (nameContainer) {
      nameContainer.innerHTML = '';
      nameText.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(40px)';
        span.style.fontFamily = 'var(--font-inter), sans-serif';
        span.style.fontWeight = '700';
        span.style.fontSize = 'inherit';
        if (char === ' ') span.style.width = '0.3em';
        nameContainer.appendChild(span);

        setTimeout(() => {
          anime({
            targets: span,
            opacity: [0, 1],
            translateY: [40, 0],
            duration: 800,
            easing: "easeOutExpo",
            delay: i * 40,
          });
        }, 300);
      });
    }

    setTimeout(() => {
      anime({
        targets: descRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: "easeOutExpo",
      });
    }, 1600);

    setTimeout(() => {
      const roles = rolesRef.current.filter(Boolean);
      roles.forEach((role, i) => {
        if (!role) return;
        anime({
          targets: role,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          delay: i * 100,
          easing: "easeOutExpo",
        });
      });
    }, 2000);

    setTimeout(() => {
      const cta = ctaRef.current;
      if (cta) {
        anime({
          targets: cta,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          easing: "easeOutExpo",
        });
      }
    }, 2600);

    setTimeout(() => {
      anime({
        targets: ".hero-scroll",
        opacity: [0, 0.5],
        translateY: [10, 0],
        duration: 600,
        easing: "easeOutExpo",
      });
    }, 3000);

    return () => tl.pause();
  }, []);

  const roles = ["Image Consultant", "Social Worker", "Big Events Organizer", "Public Leader", "Politician"];

  const particles = mounted
    ? [...Array(25)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 20,
        size: 1.5 + Math.random() * 3,
        opacity: 0.02 + Math.random() * 0.06,
        xMovement: (Math.random() - 0.5) * 60,
        yMovement: (Math.random() - 0.5) * 60,
      }))
    : [];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        <div ref={imageRef} className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/savinjainhero.jpeg"
              alt="Savin Jain"
              fill
              priority
              className={styles.heroImage}
              sizes="50vw"
              quality={85}
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div className={styles.imageOverlay} />
            <div className={styles.imageGlow} />
            <div className={styles.imageBadge}>
              <span>25+ Years of Excellence</span>
            </div>
            <div className={styles.imageBorder} />
          </div>
        </div>

        <div ref={contentRef} className={styles.contentWrapper}>
          <div className={styles.content}>
            <div ref={badgeRef} className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Personal Profile
            </div>

            <h1 className={`${styles.name} hero-name`}>Savin Jain</h1>

            <p ref={descRef} className={styles.description}>
              A visionary leader dedicated to <span className={styles.gold}>transforming lives</span> through image consulting, social work, and public service. With a passion for community development and a commitment to excellence, Savin Jain has become a trusted name in leadership and influence.
            </p>

            <div className={styles.rolesContainer}>
              {roles.map((role, i) => (
                <span
                  key={i}
                  ref={(el) => { rolesRef.current[i] = el; }}
                  className={styles.role}
                  style={{ opacity: 0, transform: "translateY(20px)" }}
                >
                  {role}
                  {i < roles.length - 1 && <span className={styles.separator}>•</span>}
                </span>
              ))}
            </div>

            <div ref={ctaRef} className={`${styles.cta} hero-cta`}>
              <button
                onClick={() => scrollToSection("about")}
                className={styles.ctaButton}
              >
                <span>Explore the Journey</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.scroll} hero-scroll`}>
        <span className={styles.scrollLine}></span>
        <span>Scroll</span>
      </div>

      {mounted && (
        <div className={styles.floatingParticles}>
          {particles.map((p) => (
            <div
              key={p.id}
              className={styles.particle}
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                '--tx': `${p.xMovement}px`,
                '--ty': `${p.yMovement}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}
    </section>
  );
}