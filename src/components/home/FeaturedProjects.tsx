"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import { ArrowTopRightOnSquareIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function FeaturedProjects() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-mono text-[#10B981] tracking-wider uppercase mb-1">
            {"// WORK REPOSITORY"}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-sm font-mono text-[#10B981] hover:text-[#34D399] flex items-center gap-1.5 transition-colors"
        >
          <span>view all projects</span>
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="group rounded-xl bg-[#161B24] border border-[#1E2533] hover:border-[#059669]/60 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300"
          >
            <div className="relative h-56 w-full bg-[#0C0F14] border-b border-[#1E2533] p-4 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#059669]/15 border border-[#059669]/40 text-[#10B981] font-mono text-[11px]">
                {project.status}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors font-sans">
                  {project.title}
                </h3>
                <p className="text-sm text-[#D1D5DB] mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-[#090B0E] text-[#10B981] border border-[#059669]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-[#10B981] transition-colors"
                >
                  <span>View Repository</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
