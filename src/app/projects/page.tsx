'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'IWC++',
    description: 'IWC++ is a runtime language that is interpreted with a program build in c++ I am currently working on.',
    technologies: ['C++', 'CMake'],
    image: '/projects/IWC++.png',
    link: 'https://github.com/jdowe11/IWCPlusPlus',
  },
  {
    title: '2d-val',
    description: 'A 2d version of the game Valorant, built with the Godot Game Engine.',
    technologies: ['Godot', 'GDScript'],
    image: '/projects/2d-val.png',
    link: 'https://github.com/jdowe11/2d-val',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-12">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#004C00]"
              >
                <div className="relative h-64 w-full bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/projects/placeholder.png';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#004C00] text-white rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004C00] hover:text-white font-medium transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 