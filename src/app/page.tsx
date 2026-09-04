import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TerminalShowcase from "@/components/home/TerminalShowcase";
import SkillsSection from "@/components/home/SkillsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import QuoteSection from "@/components/home/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-[#F3F4F6] selection:bg-[#059669]/30 selection:text-[#A7F3D0]">
      <Navbar />
      <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <HeroSection />
        <TerminalShowcase />
        <SkillsSection />
        <FeaturedProjects />
        <QuoteSection />
        <Footer />
      </div>
    </main>
  );
}
