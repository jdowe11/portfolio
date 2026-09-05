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
  const isTerminal = pathname.startsWith("/terminal");
  const isProjects = pathname.startsWith("/projects");

  const currentPathDisplay = isProjects
    ? "~/projects"
    : isTerminal
    ? "~/terminal"
    : "~";

  const promptDirDisplay = isProjects
    ? "projects"
    : isTerminal
    ? "terminal"
    : "~";

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
          </div>

          {/* Central Host / Session Indicator */}
          <div className="text-[#9CA3AF] font-medium tracking-tight flex items-center gap-1.5 truncate max-w-[180px] sm:max-w-none">
            <span className="text-[#10B981]">jayden</span>
            <span className="text-[#6B7280]">@</span>
            <span className="text-gray-300">{SITE_CONFIG.hostname}</span>
            <span className="text-[#6B7280]">:</span>
            <span className="text-cyan-400 font-semibold truncate">
              {currentPathDisplay}
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

        {/* Prompt Row + Right-Aligned Contacts */}
        <div className="px-3 sm:px-4 py-2 flex items-center justify-between gap-2 font-mono text-xs sm:text-sm">
          {/* Oh My Zsh Prompt */}
          <div className="flex items-center space-x-1.5 select-none overflow-x-auto scrollbar-none py-0.5 min-w-0">
            {/* Emerald Arrow */}
            <span className="text-[#10B981] font-bold text-sm sm:text-base leading-none">
              ➜
            </span>

            {/* Current Directory */}
            <span className="text-cyan-400 font-semibold tracking-wide truncate">
              {promptDirDisplay}
            </span>

            {/* Git Branch & Status with ❯ Symbol */}
            <span className="text-[#9CA3AF] flex items-center gap-0.5 text-xs whitespace-nowrap">
              <span className="text-[#6B7280]">git:(</span>
              <span className="text-[#EF4444] font-semibold">main</span>
              <span className="text-[#6B7280]">)</span>
              <span className="text-[#10B981] font-bold" title="Git status: clean">
                ❯
              </span>
            </span>

            {/* Pulsing Cursor */}
            <span className="text-[#10B981] animate-pulse font-bold ml-0.5">
              _
            </span>
          </div>

          {/* Right-Aligned Group: Desktop Navigation + Contacts */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 shrink-0 ml-auto">
            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <nav className="hidden md:flex items-center space-x-1.5 text-xs sm:text-sm mr-1">
              <Link
                href="/"
                className={cn(
                  "px-2.5 py-1 rounded-lg transition-all duration-200 flex items-center gap-1.5 border",
                  isHome
                    ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_12px_rgba(5,150,105,0.2)] font-semibold"
                    : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]/70 hover:border-[#1E2533]"
                )}
              >
                <span className="text-[#059669] select-none">$</span>
                <span>cd ~</span>
              </Link>

              <Link
                href="/terminal"
                className={cn(
                  "px-2.5 py-1 rounded-lg transition-all duration-200 flex items-center gap-1.5 border",
                  isTerminal
                    ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_12px_rgba(5,150,105,0.2)] font-semibold"
                    : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]/70 hover:border-[#1E2533]"
                )}
              >
                <span className="text-[#059669] select-none">$</span>
                <span>terminal</span>
              </Link>

              <Link
                href="/projects"
                className={cn(
                  "px-2.5 py-1 rounded-lg transition-all duration-200 flex items-center gap-1.5 border",
                  isProjects
                    ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_12px_rgba(5,150,105,0.2)] font-semibold"
                    : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]/70 hover:border-[#1E2533]"
                )}
              >
                <span className="text-[#059669] select-none">$</span>
                <span>projects</span>
              </Link>

              {/* Desktop Separator */}
              <span className="text-[#1E2533] px-0.5 select-none">|</span>
            </nav>

            {/* Contact Icons (Visible on Both Mobile & Desktop) */}
            <div className="flex items-center space-x-1">
              {/* GitHub */}
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

              {/* LinkedIn */}
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

              {/* Email / Copy Action */}
              <button
                onClick={copyEmail}
                aria-label="Copy Email"
                className="p-1.5 text-[#9CA3AF] hover:text-[#10B981] hover:bg-[#161B24] rounded-lg transition-colors border border-transparent hover:border-[#1E2533] relative group"
                title={`Copy ${SITE_CONFIG.email}`}
              >
                <EnvelopeIcon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                {copied && (
                  <span className="absolute -bottom-8 right-0 bg-[#059669] text-white text-[10px] font-sans px-2 py-0.5 rounded shadow-md whitespace-nowrap animate-in fade-in zoom-in-95 z-50">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Row (Placed Below on Mobile Viewports) */}
        <nav className="md:hidden px-2.5 pb-2 pt-1 border-t border-[#1E2533]/70 grid grid-cols-3 gap-1.5 font-mono text-[11px] text-center">
          <Link
            href="/"
            className={cn(
              "py-1.5 px-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 border",
              isHome
                ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_8px_rgba(5,150,105,0.2)] font-semibold"
                : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]/70"
            )}
          >
            <span className="text-[#059669]">$</span>
            <span>cd ~</span>
          </Link>

          <Link
            href="/terminal"
            className={cn(
              "py-1.5 px-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 border",
              isTerminal
                ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_8px_rgba(5,150,105,0.2)] font-semibold"
                : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]/70"
            )}
          >
            <span className="text-[#059669]">$</span>
            <span>terminal</span>
          </Link>

          <Link
            href="/projects"
            className={cn(
              "py-1.5 px-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 border",
              isProjects
                ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_8px_rgba(5,150,105,0.2)] font-semibold"
                : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]/70"
            )}
          >
            <span className="text-[#059669]">$</span>
            <span>projects</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}