import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "sentry-frontend",
    title: "Sentry (Frontend)",
    tagline: "End-to-End Encrypted Messenger & Voice Client",
    description:
      "A high-performance React & Vite frontend for Sentry, an end-to-end encrypted messaging platform designed with real-time voice calls, TypeScript type-safety, Tailwind CSS, and Redux Toolkit state management.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "WebSockets",
      "E2EE",
    ],
    image: "/projects/sentry-logo-no-back.png",
    link: "https://github.com/jdowe11/sentry-frontend",
    status: "Active Development",
    category: "secure communication",
    featured: true,
  },
  {
    id: "sentry-backend",
    title: "Sentry (Backend)",
    tagline: "E2EE & WebSocket Messaging Engine",
    description:
      "An enterprise-grade Spring Boot backend for Sentry providing real-time WebSocket communication, PostgreSQL persistence, JWT authentication, Spring Security, and cryptographic protocol coordination.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "WebSocket",
      "JWT",
      "Spring Security",
      "Docker",
    ],
    image: "/projects/sentry-logo-no-back.png",
    link: "https://github.com/jdowe11/sentry-backend",
    status: "Active Development",
    category: "secure communication",
    featured: true,
  },
  {
    id: "nba-lottery",
    title: "NBA 3-2-1 Lottery Simulator",
    tagline: "Visualizes NBA Lottery Odds (Post Lottery Odd Changes)",
    description:
      "A web-based tool that visualizes NBA Lottery Odds using the updated lottery odds. Users can order teams based on standings and simulate the lottery to see their odds of winning. Made with Next.js, Tailwind CSS, and Redux Toolkit.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Open Source",
    ],
    image: "/projects/nba.jpg",
    link: "https://github.com/jdowe11/nba-lottery",
    status: "Open Source",
    category: "webdev",
    featured: false,
  },
  {
    id: "iwc-plus-plus",
    title: "IWC++",
    tagline: "Custom Runtime Language & Interpreter",
    description:
      "IWC++ is a custom runtime language and AST interpreter written from the ground up in C++. Structured with CMake, it parses, evaluates expressions, and executes instructions in an isolated runtime environment.",
    technologies: [
      "C++",
      "CMake",
      "Language Design",
      "AST & Parsing",
      "Memory Management",
    ],
    image: "/projects/IWC++.png",
    link: "https://github.com/jdowe11/IWCPlusPlus",
    status: "Active Development",
    category: "systems",
    featured: false,
  },
];
