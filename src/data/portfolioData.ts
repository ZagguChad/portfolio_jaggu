import { RoleItem, WorkProject, ChecklistItem } from '@/types/portfolio';

export const GREETINGS = [
  'Hello',
  'Bonjour',
  'Hola',
  'Ciao',
  'नमस्ते',
  'こんにちは',
  '안녕하세요',
  '你好',
  'Olá',
  'Привет',
  'Hallo',
  'مرحبًا',
  'ZAGGU'
];

export const ROLES: RoleItem[] = [
  {
    id: 'role-1',
    freq: '94.1',
    org: 'FREELANCE',
    orgUrl: null,
    role: 'Editor & Creative',
    type: 'FREELANCE',
    period: '2023 — NOW',
    location: 'Remote',
    current: true,
    bullets: [
      'Video editing and post-production for short films and branded content',
      'Graphic design for social media, posters, and digital campaigns',
      'Director of Photography on independent short films'
    ]
  },
  {
    id: 'role-2',
    freq: '98.7',
    org: 'DATACAMP DONATES',
    orgUrl: 'https://www.datacamp.com/donates',
    role: 'Program Lead',
    type: 'VOLUNTEER',
    period: '2024 — 2025',
    location: 'Amaravati',
    current: false,
    bullets: [
      'Led data literacy workshops reaching 100+ students',
      'Organized coding bootcamps and mentorship sessions',
      'Coordinated with DataCamp for resource allocation'
    ]
  },
  {
    id: 'role-3',
    freq: '102.5',
    org: 'DRISHYA MULTIMEDIA',
    orgUrl: null,
    role: 'Club Head',
    type: 'LEADERSHIP',
    period: '2024 — NOW',
    location: 'Amaravati',
    current: true,
    bullets: [
      'Directing the college multimedia club — photography, videography, and design',
      'Organized campus-wide film screenings and creative workshops',
      'Mentored 30+ junior members in video production and editing'
    ]
  },
  {
    id: 'role-4',
    freq: '106.3',
    org: 'MICROSOFT LEARN SA',
    orgUrl: 'https://mvp.microsoft.com/studentambassadors',
    role: 'Head Executive — Media',
    type: 'AMBASSADOR',
    period: '2024 — NOW',
    location: 'Amaravati',
    current: true,
    bullets: [
      'Lead media and content strategy for Microsoft Learn Student Ambassadors chapter',
      'Organized technical workshops on Azure, AI, and developer tools',
      'Created visual content and branding for 10+ campus tech events'
    ]
  }
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'proj-1',
    filename: 'linkedin_auto.py',
    title: 'LINKEDIN AUTOMATION',
    subtitle: 'Automated connections with Playwright · Python',
    githubUrl: 'https://github.com/ZagguChad/Linkedn_Connect-Accept_Automation',
    accentColor: 'lime',
    promptType: 'terminal',
    promptCommand: 'python auto_connect.py',
    rotationClass: '-rotate-1',
    previewLines: [
      { text: '→ Session loaded — stealth mode active', delay: 0 },
      { text: '→ 47 connections sent — CAPTCHA-safe ✓', delay: 120 },
      { text: '→ Human-like delay patterns applied', delay: 240 }
    ]
  },
  {
    id: 'proj-2',
    filename: 'speedbond.rs',
    title: 'SPEEDBOND',
    subtitle: 'High-performance networking tool · Rust',
    githubUrl: 'https://github.com/ZagguChad/SpeedBond',
    accentColor: 'cyan',
    promptType: 'terminal',
    promptCommand: 'cargo build --release',
    rotationClass: 'rotate-1',
    previewLines: [
      { text: 'Compiling speedbond v0.1.0', delay: 0 },
      { text: 'Finished release [optimized] in 2.3s', delay: 120 },
      { text: '✓ Binary ready — zero-copy networking', delay: 240, highlight: true }
    ]
  },
  {
    id: 'proj-3',
    filename: 'motion_arena.js',
    title: 'MOTION ARENA',
    subtitle: 'Gesture-controlled multiplayer game · Hack Amrita',
    githubUrl: 'https://github.com/ZagguChad/Motion_Arena',
    accentColor: 'pink',
    promptType: 'gesture',
    promptIcon: '🎮',
    promptCommand: 'Gesture Arena — HackXAmrita 2026',
    rotationClass: 'rotate-2',
    previewLines: [
      { text: '✋ Hand tracking: MediaPipe + OpenCV', delay: 0 },
      { text: '🎯 Multiplayer gesture-controlled gameplay', delay: 120 },
      { text: '⚡ Real-time at 30fps — zero latency', delay: 240 }
    ]
  },
  {
    id: 'proj-4',
    filename: 'blockrx.sol',
    title: 'BLOCKRX',
    subtitle: 'Blockchain healthcare dApp · Gemini API · JavaScript',
    githubUrl: 'https://github.com/ZagguChad/SDE_Blockchain_Prescription_validation_InteligentMonitoring',
    accentColor: 'lavender',
    promptType: 'chat',
    promptCommand: '',
    rotationClass: '-rotate-2',
    previewLines: [
      { text: 'BLOCKCHAIN · prescription validator', delay: 0, header: true },
      { text: '🔗 Smart contract verifies Rx authenticity', delay: 120 },
      { text: '🤖 Gemini AI flags drug interactions', delay: 240 },
      { text: '✓ prescription validated on-chain', delay: 360, highlight: true }
    ]
  },
  {
    id: 'proj-5',
    filename: 'phasefind.py',
    title: 'PHASEFIND',
    subtitle: 'Phase detection & analysis tool · Python',
    githubUrl: 'https://github.com/ZagguChad/Phasefind',
    accentColor: 'yellow',
    promptType: 'terminal',
    promptCommand: 'phasefind analyze',
    rotationClass: 'rotate-1',
    previewLines: [
      { text: 'Scanning signal patterns...', delay: 0 },
      { text: 'Phase boundaries detected: 4 transitions', delay: 120 },
      { text: '✓ Analysis complete — report saved', delay: 240, highlight: true }
    ]
  },
  {
    id: 'proj-6',
    filename: 'archivegram.py',
    title: 'ARCHIVEGRAM',
    subtitle: 'Media archival & backup tool · Python',
    githubUrl: 'https://github.com/ZagguChad/Archivegram',
    accentColor: 'cyan',
    promptType: 'terminal',
    promptCommand: 'archivegram --fetch',
    rotationClass: '-rotate-1',
    previewLines: [
      { text: 'Archiving media content...', delay: 0 },
      { text: 'Downloaded 128 items — deduplicated', delay: 120 },
      { text: '✓ Archive saved · MIT licensed', delay: 240, highlight: true }
    ]
  },
  {
    id: 'proj-7',
    filename: 'severity_pred.ipynb',
    title: 'SEVERITY PREDICTOR',
    subtitle: 'Traffic accident ML research · Jupyter · scikit-learn',
    githubUrl: 'https://github.com/ZagguChad/Traffic_Accident_sev_pred',
    accentColor: 'pink',
    promptType: 'data',
    promptCommand: '',
    rotationClass: '-rotate-2',
    previewLines: [
      { text: 'ML · accident severity research', delay: 0, header: true },
      { text: '📊 Balanced Random Forest on Leeds dataset', delay: 120 },
      { text: '🔬 Replicated Akour et al. (2022) methodology', delay: 240 },
      { text: '📈 TNR validation · data leakage corrected', delay: 360 }
    ]
  },
  {
    id: 'proj-8',
    filename: 'intrusion_detect.ipynb',
    title: 'CYBER IOT DEFENSE',
    subtitle: 'IoT intrusion detection system · Jupyter · ML',
    githubUrl: 'https://github.com/ZagguChad/Cyber_IOT_intrusion',
    accentColor: 'lime',
    promptType: 'terminal',
    promptIcon: '🛡',
    promptCommand: 'IoT Network Monitor',
    rotationClass: 'rotate-2',
    previewLines: [
      { text: 'Scanning IoT traffic patterns...', delay: 0 },
      { text: '⚠ Anomaly detected — port 8080', delay: 120 },
      { text: '✗ Intrusion classified — alert sent', delay: 240, error: true }
    ]
  },
  {
    id: 'proj-9',
    filename: 'compiler.py',
    title: 'COMPILER BUG CLUSTERS',
    subtitle: 'LLVM bug clustering · TF-IDF + K-Means · Python',
    githubUrl: 'https://github.com/ZagguChad/Compiler_Design_PROJECT',
    accentColor: 'lavender',
    promptType: 'terminal',
    promptCommand: 'python compiler.py --parse',
    rotationClass: '-rotate-1',
    previewLines: [
      { text: 'Lexical analysis... 342 tokens', delay: 0 },
      { text: 'Syntax tree generated — AST valid', delay: 120 },
      { text: '✓ Bug clusters identified via K-Means', delay: 240, highlight: true }
    ]
  },
  {
    id: 'proj-10',
    filename: 'design_system.tsx',
    title: 'DESIGN SYSTEM',
    subtitle: 'Component library & design tokens · TypeScript',
    githubUrl: 'https://github.com/ZagguChad/DesignSystemOverview',
    accentColor: 'yellow',
    promptType: 'terminal',
    promptCommand: 'npm run build',
    rotationClass: 'rotate-1',
    previewLines: [
      { text: 'Compiling design tokens...', delay: 0 },
      { text: 'Components: 24 · Variants: 86', delay: 120 },
      { text: '✓ Design system documented', delay: 240, highlight: true }
    ]
  }
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 1, text: 'hard problems with real-world impact' },
  { id: 2, text: 'AI-shaped opportunities' },
  { id: 3, text: 'teams that ship ambitious products' },
  { id: 4, text: 'India, remote, or anywhere ambitious' }
];

export const SOCIAL_LINKS = {
  email: 'mailto:jagadeeshsairam007@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jagadish-sai-ram-kancharla-palli-b88680371/',
  github: 'https://github.com/ZagguChad',
  x: 'https://x.com/Zaggu_boi',
  instagram: 'https://www.instagram.com/zaggu.chad/',
  resumePdf: 'assets/Zaggu_Resume.pdf'
};
