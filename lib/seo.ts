export const SITE_URL = 'https://hozaifa.dev';

export const identity = {
  name: 'S M Hozaifa Hossain',
  alternateName: ['S. M. Hozaifa Hossain', 'SM Hozaifa Hossain', 'Hozaifa Hossain'],
  url: SITE_URL,
  image: `${SITE_URL}/headshot.jpg`,
  imagePath: '/headshot.jpg',
  email: '20hozaifa02@gmail.com',
  location: 'Dhaka, Bangladesh',
  jobTitle: 'IT Consultant',
  oneLineBio:
    'Semiconductor device & neuromorphic hardware researcher. EEE, University of Dhaka. CREST 2027 Fellow. Siemens EDA + IEEE EDS hackathon winner.',
  bio: 'S M Hozaifa Hossain is a semiconductor device and neuromorphic hardware researcher from Bangladesh. An EEE graduate of the University of Dhaka (2026), he is an IT Consultant at Rahman Rahman Huq (formerly KPMG Bangladesh) and a CREST 2027 Research Fellow at Silicon River Bangladesh, advised by Dr. Mainul Hossain, and won the Siemens EDA HLS Hackathon 2026 and the IEEE EDS TCAD Hackathon 2026.',
  linkedin: 'https://www.linkedin.com/in/s-m-hozaifa-hossain',
  github: 'https://github.com/hozaifa1',
  employerName: 'Rahman Rahman Huq',
  employerUrl: 'https://rrh.com.bd',
  agencyName: 'Nexora Systems',
  agencyUrl: 'https://nexora-solves.vercel.app',
} as const;

export const sameAs = [identity.linkedin, identity.github];

export const personId = `${SITE_URL}/#person`;
export const websiteId = `${SITE_URL}/#website`;
export const agencyId = `${SITE_URL}/#nexora`;

export const knowsAbout = [
  'Neuromorphic computing',
  'Ferroelectric field-effect transistors',
  'FeFET',
  'Gate-all-around transistors',
  'Semiconductor device physics',
  'TCAD',
  'Synopsys Sentaurus',
  'Spiking neural networks',
  'High-level synthesis',
  'Machine learning',
];

export const awardStrings = [
  'CREST 2027 Research Fellow, Silicon River Bangladesh (selected 30 October 2026)',
  '1st Place, Siemens EDA "Accelerating Inferencing Using HLS" Hackathon 2026',
  'Winner (one of three), IEEE EDS TCAD Hackathon 2026',
  'Best-in-Track, Tesseract Hackathon 2026 (Hybrid ML x Mechanistic Models)',
  'IEEE Humanitarian Technologies Board Certificate of Recognition, 2025',
];

export const keywords = [
  'S M Hozaifa Hossain',
  'S. M. Hozaifa Hossain',
  'SM Hozaifa Hossain',
  'Hozaifa Hossain',
  'neuromorphic computing',
  'FeFET',
  'TCAD',
  'University of Dhaka',
  'IEEE EDS TCAD Hackathon 2026',
  'Siemens EDA HLS Hackathon 2026',
  'CREST 2027',
];

/** Serialise JSON-LD safely for inline <script> use. */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const personRef = { '@id': personId };

const ogImages = [
  { url: '/opengraph-image', width: 1200, height: 630, alt: `${identity.name}, ${identity.jobTitle}` },
];

/** Shared openGraph + twitter blocks so child pages keep the social image. */
export function pageSocial(
  path: string,
  title: string,
  description: string,
  type: 'website' | 'profile' | 'article' = 'website',
) {
  return {
    openGraph: {
      type,
      url: path,
      title,
      description,
      siteName: identity.name,
      locale: 'en_US',
      images: ogImages,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: ['/opengraph-image'],
    },
  };
}
