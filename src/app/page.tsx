"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Journey = dynamic(() => import("@/components/Journey"), { ssr: false });
const Impact = dynamic(() => import("@/components/Impact"), { ssr: false });
const ImageConsultant = dynamic(() => import("@/components/ImageConsultant"), { ssr: false });
const SocialImpact = dynamic(() => import("@/components/SocialImpact"), { ssr: false });
const Business = dynamic(() => import("@/components/Business"), { ssr: false });
const Events = dynamic(() => import("@/components/Events"), { ssr: false });
const Leadership = dynamic(() => import("@/components/Leadership"), { ssr: false });
const Sports = dynamic(() => import("@/components/Sports"), { ssr: false });
const Story = dynamic(() => import("@/components/Story"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

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

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Impact />
        <Business />
        <ImageConsultant />
        <SocialImpact />
        <Events />
        <Leadership />
        <Sports />
        <Story />
        <Footer />
      </main>
    </>
  );
}