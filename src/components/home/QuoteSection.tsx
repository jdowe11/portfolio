import React from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function QuoteSection() {
  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto rounded-xl bg-[#161B24]/80 border border-[#1E2533] p-8 sm:p-10 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#059669]" />
        <div className="font-mono text-xs text-[#10B981] mb-3 flex items-center gap-2">
          <span>{SITE_CONFIG.quote.command}</span>
        </div>
        <blockquote className="text-xl sm:text-2xl text-white font-light italic leading-relaxed">
          &ldquo;{SITE_CONFIG.quote.text}&rdquo;
        </blockquote>
        <p className="mt-4 font-mono text-sm text-[#9CA3AF] flex items-center gap-2">
          <span className="text-[#059669] font-bold">—</span>
          <span>{SITE_CONFIG.quote.author}</span>
        </p>
      </div>
    </section>
  );
}
