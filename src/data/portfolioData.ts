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
    org: 'FREELANCE / INTERNSHIP',
    orgUrl: null,
    role: 'Editor & Creative',
    type: 'FREELANCE',
    period: '2023 — NOW',
    location: 'Remote',
    current: true,
    bullets: [
      'Video editing and post-production for short films, creative media, and branded content',
      'Graphic design, poster design, and visual brand identity for digital campaigns',
      'Director of Photography and creative direction on independent short films'
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
      'Led data literacy workshops reaching 100+ students and aspiring developers',
      'Organized data science bootcamps, coding workshops, and mentorship sessions',
      'Coordinated directly with DataCamp for educational resource distribution'
    ]
  },
  {
    id: 'role-3',
    freq: '102.5',
    org: 'DRISHYA MULTIMEDIA',
    orgUrl: null,
    role: 'Club Head',
    type: 'LEADERSHIP',
    period: '2023 — 2026',
    location: 'Amaravati',
    current: true,
    bullets: [
      'Directing the official college multimedia club — photography, videography, and design',
      'Organized campus-wide film festivals, media hackathons, and creative workshops',
      'Mentored 30+ junior members in video post-production, color grading, and visual storytelling'
    ]
  },
  {
    id: 'role-4',
    freq: '106.3',
    org: 'MICROSOFT LEARN SA',
    orgUrl: 'https://mvp.microsoft.com/studentambassadors',
    role: 'Head Executive — Media',
    type: 'AMBASSADOR',
    period: '2023 — 2025',
    location: 'Amaravati',
    current: false,
    bullets: [
      'Led media, visual design, and content strategy for Microsoft Learn Student Ambassadors',
      'Organized technical workshops on Azure, AI, GitHub, and modern developer tools',
      'Created visual assets, promotional videos, and branding for 10+ campus tech events'
    ]
  }
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'proj-1',
    filename: 'linkedin_auto.py',
    title: 'LINKEDIN AUTOMATION',
    subtitle: 'Automated connections & invitations',
    summary: 'Automates profile connections and invitation accepts securely with Playwright and stealth execution.',
    fullDescription: 'A headless Python automation script built with Playwright that streamlines networking by sending personalized connection requests, handling incoming invitations, and applying anti-detection stealth patterns with human-like delays.',
    techStack: ['Python', 'Playwright', 'Automation', 'Stealth Mode'],
    featured: true,
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
    subtitle: 'High-performance network bonding',
    summary: 'High-throughput Rust network utility that aggregates internet connections for zero-copy transmission.',
    fullDescription: 'SpeedBond is a system-level networking tool written in Rust that bonds multiple network interfaces (Wi-Fi, Ethernet, Cellular) into a single high-bandwidth channel with real-time failover and zero-copy socket processing.',
    techStack: ['Rust', 'Tokio', 'Networking', 'Systems Programming'],
    featured: true,
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
    subtitle: 'Gesture-controlled webcam game',
    summary: 'Real-time gesture-controlled browser game powered by MediaPipe pose tracking & OpenCV.',
    fullDescription: 'Developed for Hack Amrita 2026, Motion Arena translates live camera feed into real-time in-game movement. Players dodge obstacles and trigger abilities using computer vision without touching a keyboard or mouse.',
    techStack: ['JavaScript', 'MediaPipe', 'OpenCV', 'WebSockets', 'Canvas API'],
    featured: true,
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
    subtitle: 'Blockchain Rx validation & AI monitor',
    summary: 'Verifies medical prescription authenticity on Ethereum blockchain with Gemini AI drug safety checks.',
    fullDescription: 'BlockRx prevents prescription fraud and unsafe drug interactions by recording medical prescriptions on Ethereum smart contracts while using Google Gemini AI to analyze contraindications and dosages in real time.',
    techStack: ['Solidity', 'Ethereum', 'Gemini AI API', 'React', 'Ethers.js'],
    featured: true,
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
    subtitle: 'Signal phase detection & analysis',
    summary: 'Algorithmic signal processing tool for detecting state transitions and phase shifts in complex datasets.',
    fullDescription: 'Phasefind parses time-series signal data to automatically detect phase boundaries, shift anomalies, and waveform transitions with custom mathematical filters and automated report generation.',
    techStack: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
    featured: false,
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
    subtitle: 'Media archival & deduplication backup',
    summary: 'CLI utility to archive, organize, and deduplicate social media posts and media files automatically.',
    fullDescription: 'Archivegram backs up media content across multiple platforms, extracts high-res assets, removes duplicate files using cryptographic hashing, and structures everything into structured JSON archives.',
    techStack: ['Python', 'Requests', 'SQLite', 'CLI'],
    featured: false,
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
    subtitle: 'Traffic accident ML severity model',
    summary: 'Machine learning research model predicting traffic accident severity with Balanced Random Forest.',
    fullDescription: 'Academic research project replicating and extending Akour et al. (2022) methodology on the Leeds accident dataset. Fixes data leakage issues and achieves high True Negative Rate (TNR) on severe collision classifications.',
    techStack: ['Jupyter', 'Python', 'scikit-learn', 'Pandas', 'Imbalanced-Learn'],
    featured: false,
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
    subtitle: 'IoT network intrusion detection',
    summary: 'Machine learning model for real-time anomaly and intrusion detection in IoT device networks.',
    fullDescription: 'Analyzes network telemetry from smart devices to detect unauthorized access, DDoS flooding, and port scans using trained ensemble classifiers with real-time alert notifications.',
    techStack: ['Python', 'Jupyter', 'XGBoost', 'Scikit-Learn', 'IoT Security'],
    featured: false,
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
    subtitle: 'LLVM bug clustering & NLP parser',
    summary: 'Clusters LLVM compiler bug reports using TF-IDF feature vectorization and K-Means clustering.',
    fullDescription: 'Built for Compiler Design coursework, this tool parses raw compiler bug reports, extracts AST tokens, computes TF-IDF similarity vectors, and groups redundant compiler bug reports using unsupervised K-Means.',
    techStack: ['Python', 'TF-IDF', 'K-Means', 'NLP', 'Compiler Design'],
    featured: false,
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
    subtitle: 'Neo-brutalist UI design system',
    summary: 'Comprehensive design system token library with responsive components and custom animations.',
    fullDescription: 'A modular, high-performance UI kit featuring custom brutalist design tokens, accessible components, smooth Framer Motion animations, and reusable layout primitive components.',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
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
  { id: 1, text: 'Building things people actually use' },
  { id: 2, text: 'AI that solves real problems' },
  { id: 3, text: 'Shipping ideas instead of collecting them' },
  { id: 4, text: 'Learning something new every week' }
];

export const SOCIAL_LINKS = {
  email: 'mailto:jagadeeshsairam007@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jagadish-sai-ram-kancharla-palli-b88680371/',
  github: 'https://github.com/ZagguChad',
  x: 'https://x.com/Zaggu_boi',
  instagram: 'https://www.instagram.com/zaggu.chad/',
  resumePdf: 'assets/Zaggu_Resume.pdf'
};
