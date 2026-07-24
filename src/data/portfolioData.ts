import {
  SkillCategory,
  ExperienceItem,
  FilmItem,
  TimelineMilestone,
  Certification,
  ProjectItem,
} from '@/types';

export const PERSONAL_INFO = {
  name: 'ZAGGU',
  fullName: 'Jagadish Sai Ram Kancharla Palli',
  title: 'AI Engineer & Creative Technologist',
  altTitle: 'B.Tech CSE Student · AI/ML & Computer Vision Engineer',
  tagline:
    'Building intelligent products that solve real-world problems through AI, automation, and thoughtful engineering.',
  bio: [
    "I'm Zaggu — a creative technologist and B.Tech Computer Science student at Amrita Vishwa Vidyapeetham, building at the convergence of AI, systems engineering, and human-centered design.",
    'From federated edge learning architectures for EV battery intelligence to gesture-controlled real-time games, I gravitate towards complex challenges across multi-disciplinary boundaries. My technical focus encompasses AI/ML research, computer vision, local LLM orchestration, and full-stack software systems.',
    'Beyond software engineering, I am a Director of Photography with independent short film credits (High Stakes, Echoes of Silence). I hold a deep conviction that exceptional engineering and cinematic storytelling share the same core discipline: crafting experiences with precision, intentionality, and empathy.',
  ],
  education: {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Amrita Vishwa Vidyapeetham (Amaravati)',
    cgpa: '8.34 / 10.0',
    expectedGraduation: '2027',
  },
  location: 'Vijayawada, India · UTC+5:30',
  email: 'jagadeeshsairam007@gmail.com',
  github: 'https://github.com/ZagguChad',
  linkedin:
    'https://www.linkedin.com/in/jagadish-sai-ram-kancharla-palli-b88680371/',
  x: 'https://x.com/Zaggu_boi',
  instagram: 'https://www.instagram.com/zaggu.chad/',
  avatarUrl: '/assets/avatar.jpg',
  resumeUrl: '/assets/Zaggu_Resume.pdf',
};

export const NAV_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Cinematic', href: '#cinematic' },
  { name: 'Projects', href: '#work' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Connect', href: '#connect' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    description: 'Models, federated learning systems, and local LLM orchestration.',
    skills: [
      { name: 'Federated Learning (Flower)', level: 92, tag: 'Core' },
      { name: 'LSTM & Digital Twins', level: 88, tag: 'Core' },
      { name: 'Local LLMs (Ollama)', level: 86, tag: 'Core' },
      { name: 'Random Forest & BRF', level: 88 },
      { name: 'TF-IDF & K-Means Clustering', level: 85 },
      { name: 'scikit-learn & PyTorch', level: 84 },
    ],
  },
  {
    title: 'Computer Vision & Media',
    description: 'Real-time gesture analysis, tracking, and video processing.',
    skills: [
      { name: 'OpenCV', level: 90, tag: 'Core' },
      { name: 'MediaPipe Pose & Hand Tracking', level: 92, tag: 'Core' },
      { name: 'Unity3D AR Integration', level: 78 },
      { name: 'Depth AI Cameras', level: 80 },
      { name: 'FFmpeg & Video Parsing', level: 84 },
    ],
  },
  {
    title: 'Programming Languages',
    description: 'Polyglot foundation across compiled, scripting, and functional paradigms.',
    skills: [
      { name: 'Python (pandas, pdfplumber)', level: 95, tag: 'Primary' },
      { name: 'JavaScript & TypeScript', level: 90, tag: 'Primary' },
      { name: 'Haskell', level: 74, tag: 'Functional' },
      { name: 'Bash & Shell Scripting', level: 86 },
      { name: 'SQL & Database Design', level: 84 },
    ],
  },
  {
    title: 'Backend, Cloud & Architecture',
    description: 'Distributed services, APIs, containers, and deployment.',
    skills: [
      { name: 'AWS Cloud Services', level: 82 },
      { name: 'Docker & Containerization', level: 84 },
      { name: 'Node.js & Express', level: 88 },
      { name: 'REST & WebSocket APIs', level: 90 },
      { name: 'Prisma & PostgreSQL', level: 82 },
    ],
  },
  {
    title: 'Emerging & Systems Tech',
    description: 'Web3 APIs, automated workflows, and visual design.',
    skills: [
      { name: 'Gemini API & LLM Integration', level: 92, tag: 'Core' },
      { name: 'Playwright Automation', level: 88 },
      { name: 'Data Structures & Algorithms', level: 86 },
      { name: 'LaTeX Document Engineering', level: 88 },
      { name: 'UI Layout & Graphic Design', level: 88 },
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'mlsa-executive',
    role: 'Head Executive (Media)',
    organization: 'Microsoft Learn Student Ambassadors',
    period: '2024 — Present',
    type: 'Leadership',
    description: [
      'Directed visual strategy, graphic design, and media production for community tech initiatives and hackathons.',
      'Led cross-functional teams in delivering event visual identities, promotional material, and technical livestreams.',
      'Mentored junior student ambassadors in technical media production and digital engagement.',
    ],
    skills: ['Leadership', 'Media Production', 'Graphic Design', 'Event Direction'],
    featured: true,
  },
  {
    id: 'datacamp-lead',
    role: 'Program Lead',
    organization: 'DataCamp Donates',
    period: '2024 — Present',
    type: 'Community',
    description: [
      'Managed and distributed educational sponsorship access to over 100+ underprivileged student developers.',
      'Tracked curriculum completion metrics across Data Science, Machine Learning, and SQL learning tracks.',
      'Organized peer study cohorts and data science problem-solving workshops.',
    ],
    skills: ['Program Management', 'Data Analytics', 'Mentorship', 'Community Operations'],
    featured: true,
  },
  {
    id: 'drishya-core',
    role: 'Core Executive Member',
    organization: 'Drishya Multimedia Club',
    period: '2023 — Present',
    type: 'Creative',
    description: [
      'Supervised technical camera operations, lighting setups, and post-production workflows for campus productions.',
      'Collaborated with creative directors to produce high-impact promo films and live stage broadcasts.',
    ],
    skills: ['Cinematography', 'Video Editing', 'Lighting Design', 'Team Management'],
    featured: true,
  },
  {
    id: 'dop-filmmaker',
    role: 'Director of Photography & Independent Filmmaker',
    organization: 'Independent Cinema',
    period: '2023 — Present',
    type: 'Creative',
    description: [
      'Served as Cinematographer / DOP for short films including "High Stakes" and "Echoes of Silence".',
      'Handled camera direction, color grading, lens selection, and visual moodboards.',
      'Blended technical narrative pacing with visual composition principles.',
    ],
    skills: ['Director of Photography', 'Color Grading', 'Visual Storytelling', 'Short Filmmaking'],
    featured: true,
  },
];

export const CINEMATIC_DATA: FilmItem[] = [
  {
    id: 'high-stakes',
    title: 'HIGH STAKES',
    role: 'Director of Photography',
    aspectRatio: '2.39:1 Anamorphic',
    specs: 'f/1.8 • 24 FPS • 4K Noir',
    genre: 'Narrative Noir Short',
    description:
      'A high-contrast visual exploration blending dramatic low-key lighting, moody atmospheric haze, and tight camera framing to heighten tension.',
  },
  {
    id: 'echoes-of-silence',
    title: 'ECHOES OF SILENCE',
    role: 'Director of Photography',
    aspectRatio: '1.85:1 Spherical',
    specs: 'f/2.0 • 24 FPS • Cinematic Palette',
    genre: 'Independent Short Film',
    description:
      'An intimate narrative driven by subtle ambient natural lighting, handheld dynamic tracking shots, and delicate color grading.',
  },
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    id: 'tata-innovent-2026',
    year: '2026',
    title: 'Tata Technologies InnoVent Submission',
    category: 'Award',
    description:
      'Submitted FedEdgeTwin+ — Federated Edge AI & Digital Twin architecture for EV battery intelligence.',
    badge: 'Competition Submission',
  },
  {
    id: 'mlsa-appointment',
    year: '2024',
    title: 'Appointed MLSA Head Executive (Media)',
    category: 'Leadership',
    description:
      'Selected to lead media strategy and visual identity for Microsoft Learn Student Ambassadors chapter.',
    badge: 'Leadership',
  },
  {
    id: 'datacamp-lead-appointment',
    year: '2024',
    title: 'DataCamp Donates Program Lead',
    category: 'Education',
    description:
      'Appointed to manage educational access grants and empower students with data science resources.',
    badge: 'Community',
  },
  {
    id: 'motion-arena-hackathon',
    year: '2024',
    title: 'Built Motion Arena at Hack Amrita',
    category: 'Project',
    description:
      'Developed gesture-driven multiplayer interactive platform using MediaPipe pose detection.',
    badge: 'Hackathon Project',
  },
  {
    id: 'film-dop-high-stakes',
    year: '2023',
    title: 'DOP for "High Stakes" & "Echoes of Silence"',
    category: 'Creative',
    description:
      'Directing photography for independent narrative short films exploring visual storytelling.',
    badge: 'Short Film',
  },
  {
    id: 'amrita-btech',
    year: '2023',
    title: 'Started B.Tech CSE at Amrita Vishwa Vidyapeetham',
    category: 'Education',
    description:
      'Commenced Computer Science & Engineering degree program at Amaravati campus.',
    badge: 'CGPA 8.34',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'tata-innovent-2026',
    title: 'Tata Technologies InnoVent 2026',
    issuer: 'Tata Technologies',
    date: '2026',
    category: 'Hackathon',
    description:
      'Submitted FedEdgeTwin+ project focusing on Federated Edge AI for EV battery intelligence.',
  },
  {
    id: 'hack-amrita-2024',
    title: 'Hack Amrita Finalist / Participant',
    issuer: 'Amrita Vishwa Vidyapeetham',
    date: '2024',
    category: 'Hackathon',
    description:
      'Developed Motion Arena — real-time gesture-controlled multiplayer game using MediaPipe.',
  },
  {
    id: 'datacamp-grant',
    title: 'DataCamp Donates Leadership Recognition',
    issuer: 'DataCamp',
    date: '2024',
    category: 'Honor',
    description:
      'Recognized for successfully leading the educational grant distribution program.',
  },
  {
    id: 'mlsa-ambassador',
    title: 'Microsoft Learn Student Ambassador',
    issuer: 'Microsoft',
    date: '2024',
    category: 'Certification',
    description:
      'Active ambassador leading media initiatives and technical workshops.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fededgetwin',
    title: 'FEDEDGETWIN+',
    subTitle: 'Federated Edge AI & Digital Twin for EV Battery Intelligence',
    category: 'EDGE AI & DIGITAL TWINS',
    fileName: 'fed_edge_twin.py',
    githubUrl: 'https://github.com/ZagguChad/FedEdgeTwin-Plus',
    accentColor: '#FF6B6B',
    previewPrompt: 'python fed_edge_twin.py --fl-rounds 10',
    previewLines: [
      'Connecting to Flower FL server...',
      'Client #04 selected for training round 10/10',
      'LSTM model weights updated — global metric converged',
      '✓ Battery Remaining Useful Life (RUL) predicted: 94.2%',
    ],
    featured: true,
  },
  {
    id: 'linkedin-automation',
    title: 'LINKEDIN AUTOMATION',
    subTitle: 'Playwright-driven automated networking script',
    category: 'AUTOMATION & BOT',
    fileName: 'bot.js',
    githubUrl:
      'https://github.com/ZagguChad/Linkedn_Connect-Accept_Automation',
    accentColor: '#4ECDC4',
    previewPrompt: 'npx playwright test linkedin.spec.ts',
    previewLines: [
      'Launching Chromium browser in headless mode...',
      'Scanning targeted profile queries...',
      'Sent 15 personalized connect requests',
      '✓ Logged output to analytics dashboard',
    ],
    featured: true,
  },
  {
    id: 'speedbond',
    title: 'SPEEDBOND',
    subTitle: 'Real-time peer matchmaking web engine',
    category: 'FULL-STACK & WEBSOCKETS',
    fileName: 'server.js',
    githubUrl: 'https://github.com/ZagguChad/SpeedBond',
    accentColor: '#FFE66D',
    previewPrompt: 'npm run start:server',
    previewLines: [
      'WebSocket server listening on port 8080...',
      'User matched in queue #492 (Latency: 12ms)',
      'WebRTC peer-to-peer data channel established',
      '✓ Session active — 0 packet drop',
    ],
    featured: true,
  },
  {
    id: 'motion-arena',
    title: 'MOTION ARENA',
    subTitle: 'MediaPipe pose gesture controlled arcade game',
    category: 'COMPUTER VISION',
    fileName: 'vision_game.py',
    githubUrl: 'https://github.com/ZagguChad/Motion_Arena',
    accentColor: '#1A535C',
    previewPrompt: 'python vision_game.py --cam 0',
    previewLines: [
      'Initialising OpenCV camera stream...',
      'MediaPipe Holistic landmarks detected at 60 FPS',
      'Gesture [PUNCH_RIGHT] registered — Combo x3',
      '✓ Multi-player canvas rendered',
    ],
    featured: true,
  },
  {
    id: 'phasefind',
    title: 'PHASEFIND',
    subTitle: 'Crystal structure phase identification tool',
    category: 'SCIENTIFIC ML',
    fileName: 'phasefind.py',
    githubUrl: 'https://github.com/ZagguChad/Phasefind',
    accentColor: '#F7FFF7',
    previewPrompt: 'python phasefind.py --xrd sample_42.raw',
    previewLines: [
      'Parsing X-ray diffraction spectrum raw data...',
      'Peak detection algorithm matched peak #12',
      'Random Forest Classifier confidence score: 98.4%',
      '✓ Phase identified: Face-Centered Cubic (FCC)',
    ],
    featured: true,
  },
  {
    id: 'archivegram',
    title: 'ARCHIVEGRAM',
    subTitle: 'Automated social archive & asset pipeline',
    category: 'FULL-STACK TOOL',
    fileName: 'archive.ts',
    githubUrl: 'https://github.com/ZagguChad/Archivegram',
    accentColor: '#A8DADC',
    previewPrompt: 'bun run archive.ts --export all',
    previewLines: [
      'Fetching media endpoints...',
      'Downloaded 124 high-res assets & metadata',
      'Zipping bundle to local storage',
      '✓ Archive created in 2.4s',
    ],
    featured: true,
  },
];
