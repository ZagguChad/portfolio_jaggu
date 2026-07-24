export interface Skill {
  name: string;
  level: number;
  tag?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Leadership' | 'Community' | 'Creative' | 'Engineering';
  description: string[];
  skills: string[];
  featured?: boolean;
}

export interface FilmItem {
  id: string;
  title: string;
  role: string;
  aspectRatio: string;
  specs: string;
  genre: string;
  description: string;
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  category: 'Award' | 'Education' | 'Project' | 'Creative' | 'Leadership';
  description: string;
  badge: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subTitle: string;
  category: string;
  fileName: string;
  githubUrl: string;
  liveUrl?: string;
  accentColor: string;
  previewPrompt: string;
  previewLines: string[];
  featured?: boolean;
}
