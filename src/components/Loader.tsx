// src/components/Loader.tsx
"use client";

import { useState, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = anime.timeline({
      easing: "easeOutExpo",
    });

    tl.add({
      targets: { value: 0 },
      value: 100,
      duration: 2000,
      round: 1,
      update: (anim: any) => {
        setProgress(Math.round(anim.animations[0].currentValue));
      },
    });

    tl.add({
      targets: ".loading-screen",
      opacity: 0,
      scale: 1.05,
      duration: 1200,
      easing: "easeInOutQuad",
      complete: () => {
        setIsLoading(false);
      },
    });

    return () => {
      tl.pause();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-text">Savin Jain</div>
      <div className="loading-bar">
        <div
          className="loading-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}