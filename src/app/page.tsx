// src/app/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import Hero from "@/components/Hero";
import Business from "../components/Business";
import ImageConsultant from "../components/ImageConsultant";
import SocialImpact from "../components/SocialImpact";
import Events from "../components/Events";
import Leadership from "../components/Leadership";
import Story from "../components/Story";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import CustomCursor from "../components/CustomCursor";
import BackgroundCanvas from "../components/BackgroundCanvas";
import Particles from "../components/Particles";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <BackgroundCanvas />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Business />
        <ImageConsultant />
        <SocialImpact />
        <Events />
        <Leadership />
        <Footer />
      </main>
    </>
  );
}