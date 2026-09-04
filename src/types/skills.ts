export type SkillIconType = "cpu" | "code" | "server";

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: SkillIconType;
  skills: string[];
}
