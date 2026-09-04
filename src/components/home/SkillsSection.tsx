"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/constants/skills";
import { CpuChipIcon, CodeBracketIcon, ServerIcon } from "@heroicons/react/24/outline";

export default function SkillsSection() {
  const getIcon = (type: string) => {
    switch (type) {
      case "cpu":
        return <CpuChipIcon className="w-5 h-5" />;
      case "code":
        return <CodeBracketIcon className="w-5 h-5" />;
      case "server":
        return <ServerIcon className="w-5 h-5" />;
      default:
        return <CpuChipIcon className="w-5 h-5" />;
    }
  };

  return (
    <section className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-[#10B981] tracking-wider uppercase mb-1">
            // TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-xl bg-[#161B24] border border-[#1E2533] hover:border-[#059669]/60 shadow-xl transition-all duration-300 space-y-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#059669]/15 border border-[#059669]/30 flex items-center justify-center text-[#10B981]">
              {getIcon(category.icon)}
            </div>
            <h3 className="text-lg font-semibold text-white font-sans">
              {category.title}
            </h3>
            <p className="text-xs text-[#9CA3AF]">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded bg-[#090B0E] text-gray-300 border border-[#1E2533] hover:border-[#059669]/40 hover:text-[#10B981] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
