"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { CommandLineIcon, CodeBracketIcon, CpuChipIcon } from "@heroicons/react/24/outline";

export default function TerminalShowcase() {
  const [activeTab, setActiveTab] = useState<"specs" | "about" | "skills">("specs");

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl bg-[#11151C] border border-[#1E2533] shadow-2xl overflow-hidden hover:border-[#059669]/40 transition-colors"
      >
        {/* Terminal Tab Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#0C0F14] border-b border-[#1E2533]">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]/80" />
          </div>

          {/* Terminal Tabs */}
          <div className="flex items-center space-x-1 font-mono text-xs">
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                activeTab === "specs"
                  ? "bg-[#161B24] text-[#10B981] border border-[#059669]/40"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              <CommandLineIcon className="w-3.5 h-3.5" />
              <span>fastfetch.sh</span>
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                activeTab === "about"
                  ? "bg-[#161B24] text-[#10B981] border border-[#059669]/40"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              <CodeBracketIcon className="w-3.5 h-3.5" />
              <span>about_me.md</span>
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                activeTab === "skills"
                  ? "bg-[#161B24] text-[#10B981] border border-[#059669]/40"
                  : "text-[#9CA3AF] hover:text-white"
              }`}
            >
              <CpuChipIcon className="w-3.5 h-3.5" />
              <span>tech_stack.json</span>
            </button>
          </div>

          <div className="hidden sm:block text-xs font-mono text-[#6B7280]">
            utf-8
          </div>
        </div>

        {/* Tab Contents */}
        <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-relaxed overflow-x-auto bg-[#0E1218]/90 min-h-[260px]">
          <AnimatePresence mode="wait">
            {activeTab === "specs" && (
              <motion.div
                key="specs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div className="text-gray-400">
                  <span className="text-[#10B981] font-bold">jayden@{SITE_CONFIG.hostname}</span>
                  <span className="text-[#6B7280]">:</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-gray-400">$ fastfetch</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
                  <div className="space-y-1 text-gray-300">
                    <div>
                      <span className="text-[#10B981] font-semibold">User:</span>{" "}
                      {SITE_CONFIG.name}
                    </div>
                    <div>
                      <span className="text-[#10B981] font-semibold">Role:</span>{" "}
                      Full Stack Software Engineer @ JPMorganChase
                    </div>
                    <div>
                      <span className="text-[#10B981] font-semibold">Education:</span>{" "}
                      {SITE_CONFIG.degree}
                    </div>
                    <div>
                      <span className="text-[#10B981] font-semibold">Focus:</span>{" "}
                      Full Stack Development &amp; Cloud Infrastructure
                    </div>
                  </div>

                  <div className="space-y-1 text-gray-300">
                    <div>
                      <span className="text-cyan-400 font-semibold">Primary Core:</span>{" "}
                      Java (Spring Boot), React, TypeScript, C++
                    </div>
                    <div>
                      <span className="text-cyan-400 font-semibold">Current Personal Project:</span>{" "}
                      Sentry (E2EE Messenger &amp; Voice)
                    </div>
                    <div>
                      <span className="text-cyan-400 font-semibold">Environment:</span>{" "}
                      Linux &amp; macOS
                    </div>
                    <div>
                      <span className="text-cyan-400 font-semibold">Status:</span>{" "}
                      <span className="text-[#10B981]">Active &amp; Deploying</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "about" && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 font-sans text-gray-300 leading-relaxed"
              >
                {SITE_CONFIG.aboutMe.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </motion.div>
            )}

            {activeTab === "skills" && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-1 text-xs sm:text-sm"
              >
                <pre className="text-gray-300 font-mono">
{`{
  "enterprise_stack": ["Java", "Spring Boot", "PostgreSQL", "WebSocket", "Spring Security", "JWT"],
  "frontend_ui": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux Toolkit"],
  "systems_compilers": ["C++", "CMake", "AST Interpretation", "Linux/Unix"],
  "security_domains": [
    "End-to-End Encryption (E2EE)",
    "Real-Time Messaging & Voice Protocols",
    "High-Throughput Cryptographic Architectures"
  ]
}`}
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
