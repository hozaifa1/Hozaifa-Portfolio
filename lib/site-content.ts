import { projects } from '@/lib/data';
import { identity, SITE_URL } from '@/lib/seo';

export const contactInfo = {
  email: identity.email,
  github: identity.github,
  linkedin: identity.linkedin,
  portfolio: SITE_URL,
  phone: '+8801615001456',
  location: identity.location,
};

export type SpecialtyItem = {
  letter: string;
  name: string;
};

export type SpecialtyPill = {
  row: number;
  label: string;
  tone: string;
  // Horizontal placement only — vertical placement is anchored to the pill's own
  // row at render time so bubbles always center on their label (no global drift).
  style: {
    left?: string;
    right?: string;
  };
};

export const specialties: SpecialtyItem[] = [
  { letter: 'A', name: 'Device Simulation (Sentaurus TCAD)' },
  { letter: 'B', name: 'Ferroelectric FETs (HZO, GAA-FeFET)' },
  { letter: 'C', name: 'Neuromorphic Hardware & SNNs' },
  { letter: 'D', name: 'HLS Acceleration (Catapult HLS)' },
  { letter: 'E', name: 'Differentiable Scientific ML' },
  { letter: 'F', name: 'Agentic AI & RAG Systems' },
  { letter: 'G', name: 'Full-Stack Web (Next.js, Payload)' },
];

export const specialtyPills: SpecialtyPill[] = [
  { row: 0, label: 'Sentaurus TCAD', tone: 'pill-lavender', style: { left: '8%' } },
  { row: 0, label: 'GAA nanowire', tone: 'pill-yellow', style: { right: '4%' } },
  { row: 0, label: 'Device Physics', tone: 'pill-mint', style: { left: '42%' } },
  { row: 0, label: 'Quantum Correction', tone: 'pill-metal', style: { right: '30%' } },
  { row: 0, label: 'Strain Engineering', tone: 'pill-red', style: { left: '18%' } },
  { row: 1, label: 'HZO', tone: 'pill-red', style: { left: '5%' } },
  { row: 1, label: 'GAA-FeFET', tone: 'pill-gold', style: { right: '8%' } },
  { row: 1, label: 'Preisach Model', tone: 'pill-mint', style: { left: '46%' } },
  { row: 1, label: 'Analog Synapses', tone: 'pill-lavender', style: { right: '34%' } },
  { row: 1, label: 'Memory Window', tone: 'pill-cream', style: { left: '22%' } },
  { row: 2, label: 'SNN', tone: 'pill-yellow', style: { left: '10%' } },
  { row: 2, label: 'LIF Neurons', tone: 'pill-red', style: { right: '12%' } },
  { row: 2, label: 'SpikingJelly', tone: 'pill-lavender', style: { left: '40%' } },
  { row: 2, label: 'MIT-BIH ECG', tone: 'pill-metal', style: { right: '38%' } },
  { row: 2, label: 'Recurrent SNN', tone: 'pill-mint', style: { left: '20%' } },
  { row: 3, label: 'Catapult HLS', tone: 'pill-mint', style: { left: '6%' } },
  { row: 3, label: 'hls4ml', tone: 'pill-lavender', style: { right: '6%' } },
  { row: 3, label: 'QKeras', tone: 'pill-gold', style: { left: '44%' } },
  { row: 3, label: 'PowerPro', tone: 'pill-red', style: { right: '32%' } },
  { row: 3, label: '45 nm ASIC', tone: 'pill-yellow', style: { left: '24%' } },
  { row: 4, label: 'PyTorch', tone: 'pill-lavender', style: { left: '8%' } },
  { row: 4, label: 'JAX', tone: 'pill-red', style: { right: '10%' } },
  { row: 4, label: 'Tesseract', tone: 'pill-metal', style: { left: '38%' } },
  { row: 4, label: 'Autodiff', tone: 'pill-mint', style: { right: '36%' } },
  { row: 4, label: 'Tandem Networks', tone: 'pill-yellow', style: { left: '18%' } },
  { row: 5, label: 'LLM Agents', tone: 'pill-yellow', style: { left: '8%' } },
  { row: 5, label: 'RAG', tone: 'pill-lavender', style: { right: '12%' } },
  { row: 5, label: 'Qdrant', tone: 'pill-mint', style: { left: '40%' } },
  { row: 5, label: 'Conformal Prediction', tone: 'pill-red', style: { right: '34%' } },
  { row: 5, label: 'OpenCV', tone: 'pill-metal', style: { left: '20%' } },
  { row: 6, label: 'Next.js', tone: 'pill-lavender', style: { left: '8%' } },
  { row: 6, label: 'Payload CMS', tone: 'pill-gold', style: { right: '8%' } },
  { row: 6, label: 'TypeScript', tone: 'pill-red', style: { left: '42%' } },
  { row: 6, label: 'Django REST', tone: 'pill-metal', style: { right: '32%' } },
  { row: 6, label: 'PostgreSQL', tone: 'pill-yellow', style: { left: '22%' } },
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
    titleLines: ['915x less energy', 'per inference.'],
    brand: 'Siemens EDA',
    brandMeta: '1st Place, 2026',
    brandMark: 'μ',
    background: '#ede9b0',
    motif: 'rgba(58,50,0,0.18)',
    motif2: 'rgba(58,50,0,0.12)',
    client: 'Siemens EDA HLS Hackathon 2026',
    subtitle: '"Accelerating Inferencing Using HLS": a CNN accelerator built with Catapult HLS. Energy per inference 6,877 nJ to 7.51 nJ (915x lower) at 95.3% accuracy.',
    href: '/research#hls',
    pillLabel: 'See the Work',
    motif2Style: { right: '5%', top: '40%' },
  },
  {
    titleLines: ['Gradients through', 'a closed TCAD solver.'],
    brand: 'Differentiable Silicon',
    brandMeta: 'Best-in-Track, 2026',
    brandMark: '∇',
    background: '#f0816a',
    motif: 'rgba(255,255,255,0.35)',
    motif2: 'rgba(255,255,255,0.18)',
    client: 'Tesseract Hackathon 2026',
    subtitle: 'Best-in-track, Hybrid ML and Mechanistic Models (Pasteur Labs and ISI). Loss 1.400 to 1.018 and accuracy 0.250 to 0.688 in 64 Sentaurus TCAD solver calls.',
    href: '/portfolio/differentiable-silicon',
    pillLabel: 'View Case Study',
    reverse: true,
  },
  {
    titleLines: ['Stress-engineered', 'GAA nanowire.'],
    brand: 'IEEE EDS',
    brandMeta: 'Winner, 2026',
    brandMark: '⚡',
    background: '#d4c9f0',
    motif: 'rgba(26,16,64,0.22)',
    motif2: 'rgba(26,16,64,0.15)',
    client: 'IEEE EDS TCAD Hackathon 2026',
    subtitle: 'Winner (one of three) and the first winner from Bangladesh: a stress-engineered gate-all-around silicon nanowire nMOS, simulated in Sentaurus TCAD.',
    href: '/research#nanowire',
    pillLabel: 'See the Work',
  },
  {
    titleLines: ['A ferroelectric', 'synapse for spikes.'],
    brand: 'Thesis / CREST 2027',
    brandMeta: 'GAA HZO FeFET',
    brandMark: 'ψ',
    background: '#b8e4cc',
    motif: 'rgba(30,60,45,0.25)',
    motif2: 'rgba(30,60,45,0.18)',
    client: 'Undergraduate Thesis / CREST 2027',
    subtitle: 'GAA HZO FeFET synapse in a spiking network: 5410x memory window, retained ΔVT 0.405 V, and 83.04% accuracy on MIT-BIH ECG.',
    href: '/research#thesis',
    pillLabel: 'See the Work',
    reverse: true,
  },
];

export const publications: ShowcaseCard[] = [
  {
    titleLines: ['Reading conflict', 'in Reddit comments.'],
    brand: 'Springer Nature',
    brandMeta: 'Published, 2026',
    brandMark: '\u03a3',
    background: '#ede9b0',
    motif: 'rgba(58,50,0,0.18)',
    motif2: 'rgba(58,50,0,0.12)',
    client: 'SNAM 2026',
    subtitle:
      'Social Media Polarization During Conflict: Insights from an Ideological Stance Dataset on Reddit Comments',
    href: '/publications',
    pillLabel: 'Read Paper',
    reverse: true,
  },
  {
    titleLines: ['Designing light traps', 'with deep learning.'],
    brand: 'IEEE EDTM',
    brandMeta: 'Accepted, 2026',
    brandMark: '\u26a1',
    background: '#b8d4f0',
    motif: 'rgba(20,40,80,0.2)',
    motif2: 'rgba(20,40,80,0.14)',
    client: 'IEEE EDTM 2026',
    subtitle:
      'Deep-Learning Driven Inverse Design of Nanophotonic Metasurfaces for Enhanced Light Trapping in Tandem Solar Cells',
    href: '/publications',
    pillLabel: 'Read Paper',
  },
  {
    titleLines: ['Scoring skill', 'from motion.'],
    brand: 'IJABC',
    brandMeta: 'Published, 2024',
    brandMark: '25ce',
    background: '#d4c9f0',
    motif: 'rgba(26,16,64,0.22)',
    motif2: 'rgba(26,16,64,0.15)',
    client: 'IJABC 2024',
    subtitle:
      'Enhancing Nursing Activity Recognition During Endotracheal Suctioning Through Video-Based Pose Estimation and Machine Learning',
    href: '/publications',
    pillLabel: 'Read Paper',
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
  'Sentaurus TCAD',
  'FeFET',
  'HZO',
  'Spiking Networks',
  'Catapult HLS',
  'hls4ml',
  'PyTorch',
  'JAX',
  'Agentic AI',
  'RAG',
  'Next.js',
  'Payload CMS',
  'TypeScript',
  'Python',
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
    brandMark: '◎',
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

