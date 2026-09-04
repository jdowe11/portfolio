"use client";

import React from "react";
import { ProjectCategory } from "@/types/project";

interface ProjectFilterProps {
  currentFilter: "all" | ProjectCategory;
  onSelectFilter: (category: "all" | ProjectCategory) => void;
  counts: Record<"all" | ProjectCategory, number>;
}

export default function ProjectFilter({
  currentFilter,
  onSelectFilter,
  counts,
}: ProjectFilterProps) {
  const categories: Array<{ id: "all" | ProjectCategory; label: string }> = [
    { id: "all", label: "all" },
    { id: "secure communication", label: "secure communication" },
    { id: "systems", label: "systems" },
    { id: "webdev", label: "webdev" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onSelectFilter(id)}
          className={`px-3 py-1.5 rounded-lg border transition-all ${
            currentFilter === id
              ? "bg-[#161B24] text-[#10B981] border-[#059669]/50 shadow-[0_0_10px_rgba(5,150,105,0.2)] font-semibold"
              : "text-[#9CA3AF] border-transparent hover:text-white hover:bg-[#161B24]"
          }`}
        >
          {label} ({counts[id] || 0})
        </button>
      ))}
    </div>
  );
}
