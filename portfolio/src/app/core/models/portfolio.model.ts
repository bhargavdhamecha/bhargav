export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  meta: string;
}
