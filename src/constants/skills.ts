import { SkillCategory } from "@/types/skills";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages & Core",
    description: "Compiled languages, backend engines, and modern typed systems.",
    icon: "cpu",
    skills: ["Java", "C++", "TypeScript", "JavaScript", "Python", "SQL", "GDScript", "CMake"],
  },
  {
    id: "security-backend",
    title: "Full Stack & Cybersecurity",
    description: "Enterprise backend architecture, real-time messaging, and reactive frontends.",
    icon: "code",
    skills: [
      "Spring Boot",
      "React",
      "Next.js",
      "WebSockets",
      "PostgreSQL",
      "JWT & Spring Security",
      "E2EE Cryptography",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  },
  {
    id: "systems",
    title: "Systems & Infrastructure",
    description: "Developer workflows, Unix/Linux environments, and build orchestration.",
    icon: "server",
    skills: ["Linux", "Docker", "Git & GitHub", "Godot Engine", "Zsh / Bash", "Maven / CMake"],
  },
];
