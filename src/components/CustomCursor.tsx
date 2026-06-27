// src/components/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/CustomCursor.module.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null
      );
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", updateHover);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", updateHover);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`${styles.cursor} ${isHovering ? styles.hover : ""}`}
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        }}
      />
      <div
        className={`${styles.cursorDot} ${isHovering ? styles.hover : ""}`}
        style={{
          transform: `translate(${position.x - 18}px, ${position.y - 18}px)`,
        }}
      />
    </>
  );
}