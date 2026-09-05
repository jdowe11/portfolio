import React from "react";
import Image from "next/image";
import { Project } from "@/types/project";
import { GithubIcon } from "@/components/Icons";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="group rounded-xl bg-[#161B24] border border-[#1E2533] hover:border-[#059669]/60 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(5,150,105,0.15)] hover:-translate-y-1"
    >
      {/* Image Preview Container */}
      <div className="relative h-64 w-full bg-[#0C0F14] border-b border-[#1E2533] p-4 flex items-center justify-center overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Status Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#090B0E]/95 border border-[#059669]/50 text-[#10B981] font-mono text-xs shadow-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span>{project.status}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <div className="text-xs font-mono text-cyan-400">
            {project.tagline}
          </div>
          <h2 className="text-2xl font-bold text-white group-hover:text-[#10B981] transition-colors font-sans">
            {project.title}
          </h2>
          <p className="text-sm text-[#D1D5DB] leading-relaxed pt-1">
            {project.description}
          </p>
        </div>

        <div className="space-y-5 pt-3">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#090B0E] text-[#10B981] border border-[#059669]/30 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-2 border-t border-[#1E2533]/80 flex items-center justify-between">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#090B0E] hover:bg-[#059669] text-[#D1D5DB] hover:text-white border border-[#1E2533] hover:border-[#059669] font-mono text-xs sm:text-sm transition-all duration-200 group/btn"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View on GitHub</span>
              <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
