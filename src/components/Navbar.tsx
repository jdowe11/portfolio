"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { GithubIcon, LinkedInIcon, EnvelopeIcon } from "./Icons";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isHome = pathname === "/";
  const isProjects = pathname.startsWith("/projects");

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto rounded-xl bg-[#0C0F14]/98 border border-[#1E2533] shadow-2xl shadow-black/80 transition-all duration-300 hover:border-[#059669]/40">
        {/* Terminal Window Header / Titlebar */}
        <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-[#1E2533]/80 bg-[#090B0E]/60 rounded-t-xl text-xs font-mono select-none">
          {/* Mac / Linux Terminal Window Controls */}
          <div className="flex items-center space-x-2">
            <span
              className="w-3 h-3 rounded-full bg-[#EF4444] inline-block shadow-sm transition-opacity hover:opacity-80 cursor-pointer"
              title="Close window"
            />
            <span
              className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block shadow-sm transition-opacity hover:opacity-80 cursor-pointer"
              title="Minimize"
            />
            <span
              className="w-3 h-3 rounded-full bg-[#10B981] inline-block shadow-sm transition-opacity hover:opacity-80 cursor-pointer"
              title="Maximize"
            />
            <span className="hidden sm:inline-block ml-2 text-[#6B7280]">
              terminal — zsh — 80×24
            </span>
          </div>

          {/* Central Host / Session Indicator */}
          <div className="text-[#9CA3AF] font-medium tracking-tight flex items-center gap-1.5 truncate max-w-[200px] sm:max-w-none">
            <span className="text-[#10B981]">jayden</span>
            <span className="text-[#6B7280]">@</span>
            <span className="text-gray-300">{SITE_CONFIG.hostname}</span>
            <span className="text-[#6B7280]">:</span>
            <span className="text-cyan-400 font-semibold truncate">
              {isProjects ? "~/projects" : "~"}
            </span>
          </div>

          {/* Shell Status Indicator */}
          <div className="flex items-center space-x-2 text-[11px] text-[#9CA3AF]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="hidden md:inline text-[#10B981] font-semibold">
              CONNECTED
            </span>
          </div>
        </div>

        {/* Oh My Zsh Prompt & Interactive Navigation */}
        <div className="px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 font-mono text-sm">
          {/* Oh My Zsh classic Prompt (robbyrussell style) */}
          <div className="flex items-center space-x-2 select-none overflow-x-auto scrollbar-none py-0.5">
            {/* Emerald Arrow */}
            <span className="text-[#10B981] font-bold text-base leading-none">
              ➜
            </span>

            {/* Current Directory */}
            <span className="text-cyan-400 font-semibold tracking-wide">
              {isProjects ? "projects" : "~"}
            </span>

            {/* Git Branch & Status */}
            <span className="text-[#9CA3AF] flex items-center gap-1 text-xs sm:text-sm">
              <span className="text-[#6B7280]">git:(</span>
              <span className="text-[#EF4444] font-semibold">main</span>
              <span className="text-[#6B7280]">)</span>
              <span className="text-[#10B981] font-bold" title="Clean working tree">
                ✔
              </span>
            </span>

            {/* Pulsing Command Cursor */}
            <span className="text-[#10B981] animate-pulse font-bold ml-0.5 hidden xs:inline">
              _
            </span>
          </div>

          {/* Navigation Commands & Quick Shell Links */}
          <nav className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm">
            <Link
              href="/"
              className={cn(
                "px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 border",
                isHome
                  ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_12px_rgba(5,150,105,0.2)] font-semibold"
                  : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]/70 hover:border-[#1E2533]"
              )}
            >
              <span className="text-[#059669] select-none">$</span>
              <span>cd ~</span>
            </Link>

            <Link
              href="/projects"
              className={cn(
                "px-2.5 sm:px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 border",
                isProjects
                  ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_12px_rgba(5,150,105,0.2)] font-semibold"
                  : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]/70 hover:border-[#1E2533]"
              )}
            >
              <span className="text-[#059669] select-none">$</span>
              <span>projects</span>
            </Link>

            {/* Separator */}
            <span className="text-[#1E2533] px-0.5 select-none">|</span>

            {/* GitHub Quick Link */}
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-[#9CA3AF] hover:text-[#10B981] hover:bg-[#161B24] rounded-lg transition-colors border border-transparent hover:border-[#1E2533]"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>

            {/* LinkedIn Quick Link */}
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-[#9CA3AF] hover:text-[#10B981] hover:bg-[#161B24] rounded-lg transition-colors border border-transparent hover:border-[#1E2533]"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </a>

            {/* Email / Copy Quick Action */}
            <button
              onClick={copyEmail}
              aria-label="Copy Email"
              className="p-1.5 text-[#9CA3AF] hover:text-[#10B981] hover:bg-[#161B24] rounded-lg transition-colors border border-transparent hover:border-[#1E2533] relative group"
              title={`Copy ${SITE_CONFIG.email}`}
            >
              <EnvelopeIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              {copied && (
                <span className="absolute -bottom-8 right-0 bg-[#059669] text-white text-[10px] font-sans px-2 py-0.5 rounded shadow-md whitespace-nowrap animate-in fade-in zoom-in-95">
                  Copied!
                </span>
              )}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}