import React from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function Footer() {
  return (
    <footer className="pt-8 border-t border-[#1E2533] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6B7280]">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#10B981]" />
        <span>
          {SITE_CONFIG.name} · Portfolio
        </span>
      </div>
    </footer>
  );
}
