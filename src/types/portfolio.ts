export interface RoleItem {
  id: string;
  freq: string;
  org: string;
  orgUrl?: string | null;
  role: string;
  type: string;
  period: string;
  location: string;
  current: boolean;
  bullets: string[];
}

export interface WorkProject {
  id: string;
  filename: string;
  title: string;
  subtitle: string;
  githubUrl: string;
  accentColor: 'lime' | 'cyan' | 'pink' | 'lavender' | 'yellow';
  promptType: 'terminal' | 'gesture' | 'chat' | 'data';
  promptIcon?: string;
  promptCommand: string;
  rotationClass: string;
  previewLines: Array<{
    text: string;
    delay: number;
    highlight?: boolean;
    error?: boolean;
    header?: boolean;
  }>;
}

export interface ChecklistItem {
  id: number;
  text: string;
}
