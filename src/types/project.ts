export type ProjectCategory = "secure communication" | "systems" | "webdev";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  status: string;
  category: ProjectCategory;
  featured?: boolean;
}
