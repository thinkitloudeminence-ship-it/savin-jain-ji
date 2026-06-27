// src/components/Story.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs";
import styles from "../styles/Story.module.css";

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = document.querySelectorAll('.story-line');
            
            // Background pulse animation
            anime({
              targets: '.story-bg-glow',
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3],
              duration: 4000,
              loop: true,
              easing: "easeInOutQuad",
            });

            lines.forEach((line, index) => {
              const delay = index * 1000;
              
              // Main text reveal
              setTimeout(() => {
                anime({
                  targets: line,
                  opacity: [0, 1],
                  translateY: [60, 0],
                  scale: [0.85, 1],
                  filter: ["blur(20px)", "blur(0px)"],
                  duration: 1400,
                  easing: "easeOutExpo",
                  begin: () => {
                    setActiveIndex(index);
                  }
                });
              }, delay);

              // Particle burst effect
              setTimeout(() => {
                const particleCount = 20;
                const container = containerRef.current;
                if (!container) return;

                for (let i = 0; i < particleCount; i++) {
                  const particle = document.createElement('div');
                  particle.className = 'story-particle';
                  const angle = (Math.PI * 2 * i) / particleCount;
                  const distance = 80 + Math.random() * 120;
                  const x = Math.cos(angle) * distance;
                  const y = Math.sin(angle) * distance;
                  
                  particle.style.cssText = `
                    position: absolute;
                    width: ${2 + Math.random() * 4}px;
                    height: ${2 + Math.random() * 4}px;
                    background: rgba(212, 175, 55, ${0.2 + Math.random() * 0.3});
                    border-radius: 50%;
                    pointer-events: none;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                  `;
                  container.appendChild(particle);

                  anime({
                    targets: particle,
                    translateX: [0, x],
                    translateY: [0, y],
                    opacity: [1, 0],
                    scale: [1, 0],
                    duration: 1200 + Math.random() * 400,
                    easing: "easeOutExpo",
                    complete: () => {
                      particle.remove();
                    }
                  });
                }
              }, delay + 400);

              // Gold line sweep effect
              setTimeout(() => {
                const lineEl = line as HTMLElement;
                const sweep = document.createElement('div');
                sweep.className = 'story-sweep';
                sweep.style.cssText = `
                  position: absolute;
                  left: -100%;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.15), transparent);
                  transform: skewX(-20deg);
                  pointer-events: none;
                `;
                lineEl.style.position = 'relative';
                lineEl.appendChild(sweep);

                anime({
                  targets: sweep,
                  left: ['-100%', '200%'],
                  duration: 1200,
                  easing: "easeInOutQuad",
                  complete: () => {
                    sweep.remove();
                  }
                });
              }, delay + 200);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const storyLines = [
    "A vision that refused to stay silent…",
    "became <em>a mission</em> that moved mountains.",
    "The mission grew into <em>impact</em> that touched thousands.",
    "And the impact became <em>a legacy</em> of change.",
  ];

  return (
    <section className={styles.story} id="story" ref={sectionRef}>
      <div className={styles.sticky}>
        <div className={styles.bgGlow}></div>
        <div className={styles.bgGlowTwo}></div>
        
        <div className={styles.linesContainer} ref={containerRef}>
          {storyLines.map((line, i) => (
            <p
              key={i}
              className={`story-line ${styles.line} ${i === activeIndex ? styles.active : ''}`}
              style={{
                opacity: 0,
                transform: "translateY(60px) scale(0.85)",
                filter: "blur(20px)",
                position: 'relative',
              }}
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
      </div>
    </section>
  );
}