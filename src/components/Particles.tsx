// src/components/Particles.tsx
"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(212, 175, 55, 0.15);
        border-radius: 50%;
        pointer-events: none;
      `;
      container.appendChild(particle);
      particles.push(particle);

      const x = Math.random() * 100;
      const y = Math.random() * 100;

      anime({
        targets: particle,
        translateX: [
          `${x}vw`,
          `${x + (Math.random() - 0.5) * 20}vw`,
          `${x}vw`,
        ],
        translateY: [
          `${y}vh`,
          `${y + (Math.random() - 0.5) * 20}vh`,
          `${y}vh`,
        ],
        duration: 8000 + Math.random() * 4000,
        loop: true,
        easing: "easeInOutQuad",
        delay: Math.random() * 2000,
      });
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}