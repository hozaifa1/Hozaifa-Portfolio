import { projects } from '@/lib/data';

export const contactInfo = {
  email: '20hozaifa02@gmail.com',
  github: 'https://github.com/hozaifa1',
  portfolio: 'https://hozaifa-space.vercel.app',
  phone: '+8801615001456',
  location: 'Dhaka, Bangladesh',
};

export type SpecialtyItem = {
  letter: string;
  name: string;
};

export type SpecialtyPill = {
  row: number;
  label: string;
  tone: string;
  style: {
    left?: string;
    right?: string;
    top: string;
  };
};

export const specialties: SpecialtyItem[] = [
  { letter: 'A', name: 'Machine Learning' },
  { letter: 'B', name: 'Computer Vision' },
  { letter: 'C', name: 'NLP & Language Models' },
  { letter: 'D', name: 'MLOps & Production' },
  { letter: 'E', name: 'Full-Stack Engineering' },
  { letter: 'S', name: 'Sentaurus TCAD Simulations' },
];

export const specialtyPills: SpecialtyPill[] = [
  { row: 0, label: 'PyTorch', tone: 'pill-lavender', style: { left: '8%', top: '8%' } },
  { row: 0, label: 'Deep Learning', tone: 'pill-yellow', style: { right: '4%', top: '6%' } },
  { row: 0, label: 'Tandem Networks', tone: 'pill-mint', style: { left: '42%', top: '14%' } },
  { row: 0, label: 'Scikit-learn', tone: 'pill-metal', style: { right: '30%', top: '1%' } },
  { row: 0, label: 'Predictive Modeling', tone: 'pill-red', style: { left: '18%', top: '18%' } },
  { row: 1, label: 'OpenCV', tone: 'pill-red', style: { left: '5%', top: '32%' } },
  { row: 1, label: 'Pose Estimation', tone: 'pill-gold', style: { right: '8%', top: '28%' } },
  { row: 1, label: 'CNNs', tone: 'pill-mint', style: { left: '46%', top: '36%' } },
  { row: 1, label: 'FDTD Simulation', tone: 'pill-lavender', style: { right: '34%', top: '24%' } },
  { row: 1, label: 'CLIP', tone: 'pill-cream', style: { left: '22%', top: '40%' } },
  { row: 2, label: 'GPT-4o', tone: 'pill-yellow', style: { left: '10%', top: '52%' } },
  { row: 2, label: 'BERT', tone: 'pill-red', style: { right: '12%', top: '54%' } },
  { row: 2, label: 'Vector Search', tone: 'pill-lavender', style: { left: '40%', top: '46%' } },
  { row: 2, label: 'Embeddings', tone: 'pill-metal', style: { right: '38%', top: '48%' } },
  { row: 2, label: 'Transformers', tone: 'pill-mint', style: { left: '20%', top: '60%' } },
  { row: 3, label: 'Docker', tone: 'pill-mint', style: { left: '6%', top: '72%' } },
  { row: 3, label: 'FastAPI', tone: 'pill-lavender', style: { right: '6%', top: '70%' } },
  { row: 3, label: 'GCP', tone: 'pill-gold', style: { left: '44%', top: '66%' } },
  { row: 3, label: 'RabbitMQ', tone: 'pill-red', style: { right: '32%', top: '74%' } },
  { row: 3, label: 'ClickHouse', tone: 'pill-yellow', style: { left: '24%', top: '78%' } },
  { row: 4, label: 'Next.js', tone: 'pill-lavender', style: { left: '8%', top: '86%' } },
  { row: 4, label: 'TypeScript', tone: 'pill-red', style: { right: '10%', top: '84%' } },
  { row: 4, label: 'Django REST', tone: 'pill-metal', style: { left: '38%', top: '90%' } },
  { row: 4, label: 'NestJS', tone: 'pill-mint', style: { right: '36%', top: '82%' } },
  { row: 4, label: 'PostgreSQL', tone: 'pill-yellow', style: { left: '18%', top: '94%' } },
  { row: 5, label: 'GAAFET', tone: 'pill-red', style: { left: '6%', top: '98%' } },
  { row: 5, label: 'Device Physics', tone: 'pill-lavender', style: { right: '8%', top: '96%' } },
  { row: 5, label: 'TCAD', tone: 'pill-mint', style: { left: '42%', top: '102%' } },
  { row: 5, label: 'FinFET', tone: 'pill-gold', style: { right: '32%', top: '100%' } },
];

export type ShowcaseCard = {
  titleLines: string[];
  brand: string;
  brandMeta: string;
  brandMark: string;
  background: string;
  motif: string;
  motif2: string;
  client: string;
  subtitle: string;
  href?: string;
  reverse?: boolean;
  pillLabel: string;
  motif2Style?: {
    right?: string;
    top?: string;
    bottom?: string;
  };
};

export const featuredWork: ShowcaseCard[] = [
  {
    titleLines: ['Designing light', 'with neural nets'],
    brand: 'Nanophotonic',
    brandMeta: 'Inverse Design',
    brandMark: '\\u03bb',
    background: '#b8e4cc',
    motif: 'rgba(30,60,45,0.25)',
    motif2: 'rgba(30,60,45,0.18)',
    client: 'IEEE EDTM 2026',
    subtitle: 'Tandem Networks for Metasurface Inverse Design',
    href: '/about#publications',
    pillLabel: 'Read Paper',
    motif2Style: { right: '5%', top: '40%' },
  },
  {
    titleLines: ['Turning clicks', 'into intent.'],
    brand: 'Behavioral Signal',
    brandMeta: 'Event Pipeline',
    brandMark: '~',
    background: '#f0816a',
    motif: 'rgba(255,255,255,0.35)',
    motif2: 'rgba(255,255,255,0.18)',
    client: 'Open Source',
    subtitle: 'Event-Driven LLM Segmentation',
    href: '/portfolio',
    pillLabel: 'View Case Study',
    reverse: true,
  },
  {
    titleLines: ['An operating system', 'for the factory floor.'],
    brand: 'ProvaBook',
    brandMeta: 'Production SaaS',
    brandMark: 'P',
    background: '#ede9b0',
    motif: 'rgba(58,50,0,0.18)',
    motif2: 'rgba(58,50,0,0.12)',
    client: 'ProvaBook',
    subtitle: 'Production OS for Textile Buying Houses',
    href: '/portfolio/prova-erp',
    pillLabel: 'View Case Study',
    reverse: true,
  },
  {
    titleLines: ['500 students,', 'one source of truth.'],
    brand: 'IGMIS',
    brandMeta: 'University LMS',
    brandMark: 'U',
    background: '#c8cdd4',
    motif: 'rgba(26,30,36,0.25)',
    motif2: 'rgba(26,30,36,0.18)',
    client: 'IGMIS University',
    subtitle: 'Learning Management System & Grading Engine',
    href: '/portfolio/igmis-lms',
    pillLabel: 'View Case Study',
  },
];

export const publications: ShowcaseCard[] = [
  {
    titleLines: ['Designing solar cells', 'at the speed of thought.'],
    brand: 'IEEE EDTM',
    brandMeta: 'Accepted, 2026',
    brandMark: '\\u26a1',
    background: '#b8d4f0',
    motif: 'rgba(20,40,80,0.2)',
    motif2: 'rgba(20,40,80,0.14)',
    client: 'IEEE EDTM 2026',
    subtitle: 'ML-Assisted Solar Cell Design via Tandem Neural Networks',
    href: '/about#publications',
    pillLabel: 'Read Paper',
  },
  {
    titleLines: ['Scoring skill', 'from motion.'],
    brand: 'IJABC',
    brandMeta: 'Published, 2024',
    brandMark: '\\u25ce',
    background: '#d4c9f0',
    motif: 'rgba(26,16,64,0.22)',
    motif2: 'rgba(26,16,64,0.15)',
    client: 'IJABC 2024',
    subtitle: "Nurses' Skill Assessment via Computer Vision",
    href: '/about#publications',
    pillLabel: 'Read Paper',
    reverse: true,
  },
];

export type CourseItem = {
  name: string;
  provider: string;
  background: string;
  motif: string;
  mark: string;
  tag: string;
  href?: string;
};

export const courses: CourseItem[] = [
  {
    name: 'Machine Learning Specialization',
    provider: 'Stanford University',
    background: '#b8e4cc',
    motif: 'rgba(10,45,26,0.3)',
    mark: '\\u03bb',
    tag: 'ML',
    href: '/certificates/Coursera%20ML_Spec.pdf',
  },
  {
    name: 'Deep Learning Specialization',
    provider: 'DeepLearning.AI',
    background: '#ede9b0',
    motif: 'rgba(58,50,0,0.25)',
    mark: '\\u2207',
    tag: 'DL',
    href: '/certificates/Coursera%20DeepL_Spec.pdf',
  },
  {
    name: 'Generative AI with LLMs',
    provider: 'DeepLearning.AI',
    background: '#f0816a',
    motif: 'rgba(255,255,255,0.35)',
    mark: '\\u03a8',
    tag: 'LLM',
    href: '/certificates/Coursera%20GenAI.pdf',
  },
  {
    name: 'Convolutional Neural Networks',
    provider: 'DeepLearning.AI',
    background: '#d4c9f0',
    motif: 'rgba(26,16,64,0.22)',
    mark: '\\u25f1',
    tag: 'CNN',
    href: '/certificates/Coursera%20DL_CNN.pdf',
  },
  {
    name: 'Advanced Data Analytics',
    provider: 'Google / Coursera',
    background: '#c8cdd4',
    motif: 'rgba(26,30,36,0.22)',
    mark: '\\u03a3',
    tag: 'DA',
    href: '/certificates/Coursera%20Data.pdf',
  },
];

export const marqueeItems = [
  'Python',
  'PyTorch',
  'Computer Vision',
  'LLMs',
  'NLP',
  'MLOps',
  'Docker',
  'RabbitMQ',
  'ClickHouse',
  'Next.js',
  'NestJS',
  'Django',
  'TypeScript',
  'PostgreSQL',
  'FDTD',
];

export const detailThemes = [
  {
    background: '#b8e4cc',
    motif: 'rgba(30,60,45,0.25)',
    motif2: 'rgba(30,60,45,0.18)',
    brandMark: 'P',
  },
  {
    background: '#c8cdd4',
    motif: 'rgba(26,30,36,0.25)',
    motif2: 'rgba(26,30,36,0.18)',
    brandMark: 'U',
  },
  {
    background: '#f0816a',
    motif: 'rgba(255,255,255,0.35)',
    motif2: 'rgba(255,255,255,0.18)',
    brandMark: '~',
  },
  {
    background: '#d4c9f0',
    motif: 'rgba(26,16,64,0.22)',
    motif2: 'rgba(26,16,64,0.15)',
    brandMark: '\\u25ce',
  },
  {
    background: '#ede9b0',
    motif: 'rgba(58,50,0,0.18)',
    motif2: 'rgba(58,50,0,0.12)',
    brandMark: 'S',
  },
];

export function getProjectShowcase(projectId: string, index: number) {
  const theme = detailThemes[index % detailThemes.length];
  const project = projects.find((item) => item.id === projectId);

  return {
    ...theme,
    brand: project?.client ?? 'Case Study',
  };
}

