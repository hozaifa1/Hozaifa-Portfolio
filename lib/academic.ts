export type Award = {
  slug: string;
  date: string;
  shortDate: string;
  title: string;
  organiser: string;
  summary: string;
  built: string;
  numbers: string[];
  href?: string;
  sourceHref?: string;
  sourceLabel?: string;
  image?: { src: string; width: number; height: number; alt: string };
  background: string;
};

export const awards: Award[] = [
  {
    slug: 'crest-2027',
    date: 'Selected 30 October 2026 (fellowship January to December 2027)',
    shortDate: '30 Oct 2026',
    title: 'CREST 2027 Research Fellow',
    organiser: 'Silicon River Bangladesh (Center for Research Excellence on Semiconductor Technology)',
    summary: 'Research fellowship at Silicon River Bangladesh, advised by Dr. Mainul Hossain.',
    built:
      'Selected through a competitive national review for the Center for Research Excellence on Semiconductor Technology, supported by Neural Semiconductor Ltd. Project: a TCAD and machine-learning study of how channel curvature limits the number of reliable analog states in GAA FeFET synapses, advised by Dr. Mainul Hossain.',
    numbers: ['Fellowship: Jan to Dec 2027', 'Advisor: Dr. Mainul Hossain'],
    background: '#b8e4cc',
  },
  {
    slug: 'siemens-eda-hls-2026',
    date: '2026',
    shortDate: '2026',
    title: '1st Place, Siemens EDA "Accelerating Inferencing Using HLS" Hackathon',
    organiser: 'Siemens EDA',
    summary: 'An ultra-low-power CNN accelerator: 915x lower energy per inference.',
    built:
      'An ultra-low-power CNN accelerator for edge roadside-object recognition in the Siemens Catapult AI NN high-level synthesis flow: QKeras and hls4ml into Catapult HLS, a 45 nm ASIC library, and PowerPro gate-level power analysis.',
    numbers: [
      'Energy per inference 6,877 nJ to 7.51 nJ (915x lower)',
      '95.3% accuracy',
      '365 synthesis runs',
    ],
    sourceHref: 'https://hls.academy/roadside-recognition-using-hls-hackathon/?Watch%3A+How+the+Winning+Team+Did+It=expanded',
    sourceLabel: 'HLS Academy results page',
    image: { src: '/images/slides/hls-academy-results.webp', width: 1482, height: 826, alt: 'HLS Academy results page for the Roadside Recognition Using HLS hackathon, with the winning-team video' },
    background: '#ede9b0',
  },
  {
    slug: 'ieee-eds-tcad-2026',
    date: '2026',
    shortDate: '2026',
    title: 'Winner (one of three), IEEE EDS TCAD Hackathon',
    organiser: 'IEEE Electron Devices Society (EDS) Educational Activities Committee',
    summary: 'One of three international winners, and the first winner from Bangladesh.',
    built:
      'A sub-10 nm stress-engineered gate-all-around (GAA) silicon nanowire nMOS, designed, simulated and optimized in Synopsys Sentaurus TCAD on consumer hardware, showing quantum transport and subthreshold physics. Geometry: gate length 15 nm, diameter 6 nm, EOT 0.9 nm. He is the first winner from Bangladesh.',
    numbers: [
      '+35% ION and +32% gm from 1 GPa uniaxial tensile stress',
      'SS 61 mV/dec at VDD 0.7 V',
      'ION/IOFF 5.5e6, IOFF 0.99 pA',
    ],
    sourceHref: 'https://eds.ieee.org/education/competitions',
    sourceLabel: 'IEEE EDS competitions page',
    image: { src: '/images/slides/ieee-eds-tcad-results.webp', width: 1487, height: 817, alt: 'IEEE EDS 2026 TCAD Hackathon results announcement listing the three winners' },
    background: '#d4c9f0',
  },
  {
    slug: 'tesseract-2026',
    date: '2026',
    shortDate: '2026',
    title: 'Best-in-Track, Tesseract Hackathon 2026',
    organiser: 'Pasteur Labs and ISI (Hybrid ML x Mechanistic Models track)',
    summary: 'Differentiable Silicon: gradients through a closed TCAD solver.',
    built:
      'Differentiable Silicon: one gradient carried from ECG classification loss through a PyTorch LSNN and a JAX device-to-neuron transducer into Synopsys Sentaurus TCAD, recovering gradients for four FeFET fabrication parameters. The closed solver binary has no adjoint, so one was built from trust-region finite-difference probes with a Broyden update.',
    numbers: [
      'Balanced cross-entropy 1.400 to 1.018',
      'Accuracy 0.250 to 0.688',
      '64 solver calls',
    ],
    href: 'https://github.com/hozaifa1/differentiable-silicon',
    sourceHref: 'https://docs.pasteurlabs.ai/projects/tesseract-core/latest/blog/2026-09-30-tesseract-hackathon-winners/#track-3-differentiable-silicon',
    sourceLabel: 'Pasteur Labs winners blog',
    image: { src: '/images/slides/tesseract-winners-blog.webp', width: 1474, height: 777, alt: 'Pasteur Labs Tesseract Hackathon winners blog, Track 3 Differentiable Silicon' },
    background: '#f0816a',
  },
  {
    slug: 'ieee-htb-2025',
    date: '2025',
    shortDate: '2025',
    title: 'IEEE Humanitarian Technologies Board Certificate of Recognition',
    organiser: 'IEEE HTB Project Monitoring Subcommittee',
    summary: 'For directing IEEE HTB Project 23-HTB-115 in rural schools.',
    built:
      'Awarded for directing and deploying Project 23-HTB-115: energy-efficient Orange Pi computing labs in underserved schools in Netrokona, Bangladesh.',
    numbers: ['Project 23-HTB-115'],
    background: '#c8cdd4',
  },
];

export type Publication = {
  id: string;
  type: 'Journal article' | 'Conference paper';
  title: string;
  authors: string[];
  venue: string;
  venueDetail: string;
  year: number;
  status: 'Published' | 'Accepted';
  note?: string;
  summary: string;
};

export const publications: Publication[] = [
  {
    id: 'J2',
    type: 'Journal article',
    title:
      'Social Media Polarization During Conflict: Insights from an Ideological Stance Dataset on Reddit Comments',
    authors: ['Hasin Jawad Ali', 'Ajwad Abrar', 'S M Hozaifa Hossain', 'M. Firoz Mridha'],
    venue: 'Social Network Analysis and Mining (Springer Nature)',
    venueDetail: '',
    year: 2026,
    status: 'Published',
    summary:
      'Benchmarks pre-trained language models and open-source LLMs across 9,969 comments; a Scoring and Reflective Re-read prompting method with Mixtral 8x7B reaches 74.08% stance classification accuracy.',
  },
  {
    id: 'C1',
    type: 'Conference paper',
    title:
      'Deep-Learning Driven Inverse Design of Nanophotonic Metasurfaces for Enhanced Light Trapping in Tandem Solar Cells',
    authors: [
      'Mohammad Ajmain Fatin',
      'Arpan Saha',
      'S M Hozaifa Hossain',
      'Samiul Islam',
      'Mainul Hossain',
    ],
    venue: 'IEEE International Electron Devices and Technology Meeting (EDTM)',
    venueDetail: '',
    year: 2026,
    status: 'Accepted',
    note: 'Mohammad Ajmain Fatin and Arpan Saha contributed equally.',
    summary:
      'A multi-branch tandem neural network trained on 6,000 FDTD-simulated metasurface designs: 95.6% shape-parameter classification accuracy, forward-model MSE of 3.20e-5, and simulated power conversion efficiency raised from 23.47% to 27.93% for perovskite tandem cells.',
  },
  {
    id: 'J1',
    type: 'Journal article',
    title:
      'Enhancing Nursing Activity Recognition During Endotracheal Suctioning Through Video-Based Pose Estimation and Machine Learning',
    authors: [
      'Samiul Islam',
      'S M Hozaifa Hossain',
      'Md. Zasim Uddin',
      'Shahera Hossain',
      'Md Atiqur Rahman Ahad',
    ],
    venue: 'International Journal of Activity and Behavior Computing (IJABC)',
    venueDetail: 'vol. 6, no. 2, pp. 1-15',
    year: 2024,
    status: 'Published',
    note: 'Samiul Islam and S M Hozaifa Hossain contributed equally.',
    summary:
      'A YOLOv7 pose estimation and XGBoost classification pipeline for nine critical medical procedures, reaching 97.0% F1-score on the 6th ABC Challenge dataset.',
  },
];

export const leadership = [
  { role: 'Chair, IEEE SIGHT Student Branch, University of Dhaka', period: '2025' },
  {
    role: 'Treasurer, Optica Bangladesh Student Chapter, University of Dhaka',
    period: '2023 to present',
  },
  {
    role: 'Joint Secretary (Technical Affairs), Silicon River Student Branch Central Committee',
    period: '2026 to 2027',
  },
];
