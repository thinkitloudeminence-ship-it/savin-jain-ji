// src/app/layout.tsx
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
  title: "Savin Jain — Vision. Leadership. Influence.",
  description: "Entrepreneur, Image Consultant, Social Worker, Public Leader",
  keywords: "Savin Jain, entrepreneur, leadership, influence, social impact",
  openGraph: {
    title: "Savin Jain — Vision. Leadership. Influence.",
    description: "Entrepreneur, Image Consultant, Social Worker, Public Leader",
    url: "https://savinjain.com",
    siteName: "Savin Jain",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savin Jain — Vision. Leadership. Influence.",
    description: "Entrepreneur, Image Consultant, Social Worker, Public Leader",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}