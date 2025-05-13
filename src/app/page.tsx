'use client';

import Image from "next/image";
import { EnvelopeIcon, GithubIcon, LinkedInIcon } from '@/components/Icons';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-16"
          >
            <div className="w-full md:w-1/2 flex justify-end">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-96 h-96 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-[#004C00] shadow-2xl shadow-[#004C00]/20 hover:shadow-[#004C00]/40 transition-shadow duration-300"
              >
                <Image
                  src="/profile.jpg"
                  alt="Jayden Dowell"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-white tracking-tight">
                  Jayden Dowell
                </h1>
                <p className="text-2xl text-gray-300 font-light">
                  Full Stack Developer/Linux Enthusiast
                </p>
              </div>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-[#004C00] transition-colors duration-300">
                    <EnvelopeIcon className="h-7 w-7 text-[#004C00] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <a href="mailto:jaymdowell@gmail.com" className="text-xl text-gray-300 hover:text-white transition-colors">
                    jaymdowell@gmail.com
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-[#004C00] transition-colors duration-300">
                    <GithubIcon className="h-7 w-7 text-[#004C00] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <a
                    href="https://github.com/jdowe11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-300 hover:text-white transition-colors"
                  >
                    github.com/jdowe11
                  </a>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-gray-800/50 rounded-full group-hover:bg-[#004C00] transition-colors duration-300">
                    <LinkedInIcon className="h-7 w-7 text-[#004C00] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <a
                    href="https://linkedin.com/in/jaydendowell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-300 hover:text-white transition-colors"
                  >
                    linkedin.com/in/jaydendowell
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 max-w-3xl mx-auto text-center bg-gray-800/50 p-8 rounded-lg"
          >
            <blockquote className="text-2xl text-white italic">
              &ldquo;Success is not final, failure is not fatal: It is the courage to continue that counts.&rdquo;
            </blockquote>
            <p className="mt-4 text-gray-300">- Winston Churchill</p>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-white leading-relaxed">
                I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
                My journey in programming began with a fascination for creating things that people can interact with, 
                and this passion has only grown stronger over time.
              </p>
              <p className="text-xl text-white leading-relaxed mt-4">
                Currently pursuing my bachelor&apos;s degree in Computer Science at Ohio University, I am constantly expanding my knowledge and skills 
                in software development. I enjoy tackling complex problems and turning them into elegant solutions. 
                When I&apos;m not coding, you can find me working on personal projects or exploring new technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
