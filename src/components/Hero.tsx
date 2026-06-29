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

    const tl = anime.timeline({
      easing: "easeOutExpo",
    });

    // Image reveal from left with parallax
    tl.add({
      targets: imageRef.current,
      opacity: [0, 1],
      translateX: [-80, 0],
      scale: [0.9, 1],
      duration: 1400,
      easing: "easeOutExpo",
    });

    // Content reveal from right
    tl.add({
      targets: contentRef.current,
      opacity: [0, 1],
      translateX: [80, 0],
      duration: 1200,
      easing: "easeOutExpo",
    }, "-=800");

    // Badge animation
    tl.add({
      targets: badgeRef.current,
      opacity: [0, 1],
      translateY: [-20, 0],
      scale: [0.8, 1],
      duration: 800,
      easing: "easeOutExpo",
    }, "-=600");

    // Name reveal with split letters (enhanced)
    const nameText = "Savin Jain";
    const nameContainer = document.querySelector('.hero-name');
    if (nameContainer) {
      nameContainer.innerHTML = '';
      nameText.split('').forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(60px) rotateX(30deg) scale(0.7)';
        span.style.fontFamily = 'var(--font-playfair)';
        span.style.fontWeight = '900';
        span.style.fontSize = 'inherit';
        span.style.textShadow = '0 0 0px rgba(212, 175, 55, 0)';
        if (char === ' ') span.style.width = '0.3em';
        nameContainer.appendChild(span);

        setTimeout(() => {
          anime({
            targets: span,
            opacity: [0, 1],
            translateY: [60, 0],
            rotateX: [30, 0],
            scale: [0.7, 1],
            duration: 1000,
            easing: "easeOutExpo",
            delay: i * 40,
            update: (anim: any) => {
              const progress = anim.progress / 100;
              const glowIntensity = progress * 50;
              span.style.textShadow = `0 0 ${glowIntensity}px rgba(212, 175, 55, ${progress * 0.3})`;
            },
          });
        }, 400);
      });
    }

    // Description reveal
    setTimeout(() => {
      anime({
        targets: descRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        easing: "easeOutExpo",
      });
    }, 1800);

    // Roles reveal with stagger and 3D flip
    setTimeout(() => {
      const roles = rolesRef.current.filter(Boolean);
      roles.forEach((role, i) => {
        if (!role) return;
        anime({
          targets: role,
          opacity: [0, 1],
          translateY: [30, 0],
          scale: [0.6, 1],
          rotateX: [40, 0],
          duration: 700,
          delay: i * 120,
          easing: "easeOutExpo",
        });
      });
    }, 2200);

    // CTA reveal with pulse
    setTimeout(() => {
      const cta = ctaRef.current;
      if (cta) {
        anime({
          targets: cta,
          opacity: [0, 1],
          translateY: [30, 0],
          scale: [0.9, 1],
          duration: 900,
          easing: "easeOutExpo",
        });

        // Gentle pulse loop
        anime({
          targets: cta,
          scale: [1, 1.03, 1],
          duration: 3000,
          loop: true,
          easing: "easeInOutQuad",
        });
      }
    }, 3000);

    // Scroll indicator
    setTimeout(() => {
      anime({
        targets: ".hero-scroll",
        opacity: [0, 0.6],
        translateY: [20, 0],
        duration: 800,
        easing: "easeOutExpo",
      });
    }, 3500);

    // Decorative lines animation
    anime({
      targets: ".decorative-line",
      scaleX: [0, 1],
      duration: 1200,
      delay: 500,
      easing: "easeOutExpo",
    });

    return () => {
      tl.pause();
    };
  }, []);

  const roles = ["Image Consultant", "Social Worker", "Big Events Organizer", "Public Leader", "Politician"];

  const particles = mounted
    ? [...Array(30)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 20,
        size: 1.5 + Math.random() * 3,
        opacity: 0.02 + Math.random() * 0.08,
        xMovement: (Math.random() - 0.5) * 80,
        yMovement: (Math.random() - 0.5) * 80,
      }))
    : [];

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContainer}>
        {/* Left Side - Image */}
        <div ref={imageRef} className={styles.imageWrapper}>
          <div className={styles.imageContainer}>
            <Image
              src="/savinjainhero.jpeg"
              alt="Savin Jain"
              fill
              priority
              className={styles.heroImage}
              sizes="50vw"
              quality={95}
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div className={styles.imageOverlay} />
            <div className={styles.imageGlow} />
            
            {/* Decorative elements on image */}
            <div className={styles.imageBadge}>
              <span>25+ Years of Excellence</span>
            </div>
            <div className={styles.imageBorder}></div>
            
            {/* Floating decorative lines */}
            <div className={styles.decorativeLines}>
              <div className="decorative-line" style={{ width: '60px', height: '2px', background: 'var(--gold)', position: 'absolute', top: '15%', right: '10%', transform: 'scaleX(0)', transformOrigin: 'right' }}></div>
              <div className="decorative-line" style={{ width: '40px', height: '2px', background: 'var(--gold)', position: 'absolute', bottom: '20%', left: '10%', transform: 'scaleX(0)', transformOrigin: 'left' }}></div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div ref={contentRef} className={styles.contentWrapper}>
          <div className={styles.content}>
            <div ref={badgeRef} className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Personal Profile
            </div>
            
            <h1 className={`${styles.name} hero-name`}>Savin Jain</h1>
            
            <p ref={descRef} className={styles.description}>
              A visionary leader dedicated to <em>transforming lives</em> through image consulting, social work, and public service. With a passion for community development and a commitment to excellence, Savin Jain has become a trusted name in leadership and influence.
            </p>
            
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
                    transform: "translateY(30px) scale(0.6) rotateX(40deg)",
                    display: 'inline-block',
                  }}
                >
                  {role}
                  {i < roles.length - 1 && <span className={styles.separator}>•</span>}
                </span>
              ))}
            </div>

            <div ref={ctaRef} className={`${styles.cta} hero-cta`}>
              <a href="#about" className={styles.ctaButton}>
                <span className={styles.ctaText}>Explore the Journey</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <span className={styles.ctaGlow}></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`${styles.scroll} hero-scroll`}>
        <span className={styles.scrollLine}></span>
        <span>Scroll</span>
      </div>

      {/* Floating Particles */}
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