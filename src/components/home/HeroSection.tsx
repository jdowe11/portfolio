"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { GithubIcon, LinkedInIcon, EnvelopeIcon } from "@/components/Icons";
import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-6 sm:pt-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-3/5 space-y-6 text-left"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#161B24]/90 border border-[#059669]/40 text-xs font-mono text-[#10B981] shadow-[0_0_15px_rgba(5,150,105,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
            </span>
            <span>{SITE_CONFIG.systemStatus}</span>
          </div>

          {/* Headline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans">
              Jayden{" "}
              <span className="bg-gradient-to-r from-[#10B981] via-[#34D399] to-[#6EE7B7] bg-clip-text text-transparent">
                Dowell
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light font-mono flex items-center gap-2">
              <span className="text-[#10B981] font-bold">➜</span>
              <span>{SITE_CONFIG.role}</span>
            </p>
          </div>

          {/* Bio summary */}
          <p className="text-base sm:text-lg text-[#D1D5DB] leading-relaxed max-w-2xl">
            {SITE_CONFIG.bioShort}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/projects"
              className="px-5 py-3 rounded-lg bg-[#059669] hover:bg-[#047857] text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-[#059669]/20 hover:shadow-[#059669]/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Projects</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            <button
              onClick={copyEmail}
              className="px-4 py-3 rounded-lg bg-[#161B24] hover:bg-[#1C232E] text-[#D1D5DB] hover:text-white border border-[#1E2533] hover:border-[#059669]/50 font-mono text-sm flex items-center gap-2 transition-all duration-200"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4 text-[#10B981]" />
                  <span className="text-[#10B981]">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <EnvelopeIcon className="w-4 h-4 text-[#10B981]" />
                  <span>{SITE_CONFIG.email}</span>
                </>
              )}
            </button>

            {/* Social Icon Buttons */}
            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#161B24] hover:bg-[#1C232E] text-[#9CA3AF] hover:text-[#10B981] border border-[#1E2533] hover:border-[#059669]/50 transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#161B24] hover:bg-[#1C232E] text-[#9CA3AF] hover:text-[#10B981] border border-[#1E2533] hover:border-[#059669]/50 transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Profile Frame */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full lg:w-2/5 flex justify-center"
        >
          <div className="relative group">
            {/* Background Ambient Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#059669] to-[#10B981] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />

            {/* Cyber Frame Container */}
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 rounded-3xl bg-[#11151C] p-2.5 border border-[#1E2533] group-hover:border-[#059669]/60 transition-all duration-500 shadow-2xl">
              {/* Corner Accent Brackets */}
              <div className="absolute top-2 left-2 text-[#10B981] font-mono text-xs font-bold select-none">
                +
              </div>
              <div className="absolute top-2 right-2 text-[#10B981] font-mono text-xs font-bold select-none">
                +
              </div>
              <div className="absolute bottom-2 left-2 text-[#10B981] font-mono text-xs font-bold select-none">
                +
              </div>
              <div className="absolute bottom-2 right-2 text-[#10B981] font-mono text-xs font-bold select-none">
                +
              </div>

              {/* Photo Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#090B0E]">
                <Image
                  src="/profile.jpg"
                  alt={SITE_CONFIG.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B0E]/70 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <div className="absolute -bottom-3 left-4 px-3 py-1 bg-[#161B24]/95 border border-[#059669]/50 rounded-md font-mono text-xs text-[#10B981] shadow-lg flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>
                  {"Full Stack Developer"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
