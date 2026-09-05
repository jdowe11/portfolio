import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveTerminal from "@/components/terminal/InteractiveTerminal";
import { CommandLineIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Terminal | Jayden Dowell",
  description:
    "Interactive Zsh terminal shell for Jayden Dowell's portfolio.",
};

export default function TerminalPage() {
  return (
    <main className="min-h-screen text-[#F3F4F6] selection:bg-[#059669]/30 selection:text-[#A7F3D0]">
      <Navbar />

      <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Terminal Header & Breadcrumbs */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#9CA3AF] hover:text-[#10B981] transition-colors"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <span>cd ~ (Return to Home)</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#1E2533] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161B24] border border-[#1E2533] font-mono text-xs text-[#10B981] mb-2">
                <CommandLineIcon className="w-3.5 h-3.5 text-[#10B981]" />
                <span>~/terminal (git:main)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Jayden&apos;s Interactive Terminal
              </h1>
              <p className="text-sm text-[#D1D5DB] mt-2 max-w-2xl">
                Browser-based Zsh CLI shell for my portfolio. Use commands at your own risk.
              </p>
            </div>
          </div>
        </div>

        {/* The Interactive Terminal Widget */}
        <InteractiveTerminal />

        {/* Reusable Terminal Footer */}
        <Footer />
      </div>
    </main>
  );
}
