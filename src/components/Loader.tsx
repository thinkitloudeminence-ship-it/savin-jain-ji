"use client";

import { useState, useEffect } from "react";
import anime from "animejs";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = anime.timeline({ easing: "easeOutExpo" });

    tl.add({
      targets: { value: 0 },
      value: 100,
      duration: 5000,
      round: 1,
      update: (anim: any) => {
        setProgress(Math.round(anim.animations[0]?.currentValue || 0));
      },
    });

    tl.add({
      targets: ".loading-screen",
      opacity: 0,
      scale: 1.05,
      duration: 800,
      easing: "easeInOutQuad",
      complete: () => setIsLoading(false),
    });

    return () => tl.pause();
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-icon">
        <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 10 C 65 10 73 24 73 40 C 73 52 67 60 60 64 C 78 70 90 84 90 105 L 10 105 C 10 84 22 70 40 64 C 33 60 27 52 27 40 C 27 24 35 10 50 10 Z"
            stroke="#D4AF37"
            strokeWidth="1.5"
            className="loading-icon-path"
          />
        </svg>
      </div>
      <div className="loading-text">Savin Jain</div>
      <div className="loading-subtitle">
        Image Consultant · Social Worker · Big Events Organizer · Public Leader · Politician
      </div>
      <div className="loading-bar">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="loading-percent">{progress}%</div>
      <div className="loading-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  );
}