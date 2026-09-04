"use client";

import React from "react";
import { ProjectCategory } from "@/types/project";

interface ProjectFilterProps {
  currentFilter: "all" | ProjectCategory;
  onSelectFilter: (category: "all" | ProjectCategory) => void;
  counts: {
    all: number;
    systems: number;
    gamedev: number;
  };
}

export default function ProjectFilter({
  currentFilter,
  onSelectFilter,
  counts,
}: ProjectFilterProps) {
  return (
    <div className="flex items-center space-x-2 font-mono text-xs">
      <button
        onClick={() => onSelectFilter("all")}
        className={`px-3 py-1.5 rounded-lg border transition-all ${
          currentFilter === "all"
            ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_10px_rgba(5,150,105,0.2)] font-semibold"
            : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]"
        }`}
      >
        all ({counts.all})
      </button>
      <button
        onClick={() => onSelectFilter("systems")}
        className={`px-3 py-1.5 rounded-lg border transition-all ${
          currentFilter === "systems"
            ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_10px_rgba(5,150,105,0.2)] font-semibold"
            : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]"
        }`}
      >
        systems ({counts.systems})
      </button>
      <button
        onClick={() => onSelectFilter("gamedev")}
        className={`px-3 py-1.5 rounded-lg border transition-all ${
          currentFilter === "gamedev"
            ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_10px_rgba(5,150,105,0.2)] font-semibold"
            : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]"
        }`}
      >
        game-dev ({counts.gamedev})
      </button>
    </div>
  );
}
