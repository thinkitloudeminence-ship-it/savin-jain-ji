import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "700"],
  style: ["italic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Savin Jain — Visionary Leader | Image Consultant | Social Worker | Public Leader",
  description: "Official website of Savin Jain - Image Consultant, Social Worker, Big Events Organizer, Public Leader, and Politician. Making a difference through leadership and service.",
  keywords: "Savin Jain, Image Consultant, Social Worker, Events Organizer, Public Leader, Politician, Leadership",
  openGraph: {
    title: "Savin Jain — Visionary Leader | Image Consultant | Social Worker",
    description: "Official website of Savin Jain - Making a difference through leadership and service.",
    url: "https://savinjain.com",
    siteName: "Savin Jain",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}