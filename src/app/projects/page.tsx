import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/constants/projects";
import { CommandLineIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Projects | Jayden Dowell",
  description:
    "Explore projects engineered by Jayden Dowell — including Sentry (End-to-End Encrypted Messenger), IWC++ language runtime, and 2d-val.",
};

export default function Projects() {
  return (
    <main className="min-h-screen text-[#F3F4F6] selection:bg-[#059669]/30 selection:text-[#A7F3D0]">
      <Navbar />

      <div className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Terminal Header & Breadcrumbs */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#9CA3AF] hover:text-[#10B981] transition-colors"
          >
            <ArrowLeftIcon className="w-3.5 h-3.5" />
            <span>cd ~ (Return to Home)</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1E2533] pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#161B24] border border-[#1E2533] font-mono text-xs text-[#10B981] mb-2">
                <CommandLineIcon className="w-3.5 h-3.5 text-[#10B981]" />
                <span>~/projects (git:main)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Featured Projects
              </h1>
              <p className="text-sm text-[#D1D5DB] mt-2 max-w-2xl">
                A showcase of some of my personal projects and software.
              </p>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Reusable Terminal Footer */}
        <Footer />
      </div>
    </main>
  );
}