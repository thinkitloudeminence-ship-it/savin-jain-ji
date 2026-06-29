import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#050505" />
      </head>
      <body>{children}</body>
    </html>
  );
}