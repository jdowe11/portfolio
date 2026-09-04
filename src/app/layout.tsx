import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import BackgroundMatrix from "@/components/BackgroundMatrix";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayden Dowell | Full Stack Developer & Linux Enthusiast",
  description:
    "Personal portfolio of Jayden Dowell — Full Stack Developer, Systems Builder, and Linux Enthusiast crafting high-performance, robust software.",
  keywords: [
    "Jayden Dowell",
    "Full Stack Developer",
    "C++",
    "Next.js",
    "Linux",
    "Godot",
    "Software Engineer",
    "Ohio University",
  ],
  authors: [{ name: "Jayden Dowell" }],
  openGraph: {
    title: "Jayden Dowell | Full Stack Developer & Linux Enthusiast",
    description:
      "Personal portfolio of Jayden Dowell — Full Stack Developer, Systems Builder, and Linux Enthusiast.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <body
        className={`${inter.className} bg-[#090B0E] text-[#F3F4F6] min-h-screen relative antialiased selection:bg-[#059669]/30 selection:text-[#A7F3D0]`}
      >
        <BackgroundMatrix />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
