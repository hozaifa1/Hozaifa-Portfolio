import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import PillNav from '@/components/PillNav';
import ThemeShiftController from '@/components/ThemeShiftController';
import SmoothScroll from '@/components/SmoothScroll';
import JsonLd from '@/components/JsonLd';
import {
  SITE_URL,
  agencyId,
  awardStrings,
  identity,
  keywords,
  knowsAbout,
  personId,
  sameAs,
  websiteId,
} from '@/lib/seo';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'S M Hozaifa Hossain · Semiconductor & Neuromorphic Hardware Researcher',
    template: '%s · S M Hozaifa Hossain',
  },
  description: identity.oneLineBio,
  alternates: { canonical: '/' },
  authors: [{ name: identity.name, url: SITE_URL }],
  creator: identity.name,
  keywords,
  openGraph: {
    type: 'profile',
    siteName: identity.name,
    locale: 'en_US',
    url: SITE_URL,
    title: 'S M Hozaifa Hossain · Semiconductor & Neuromorphic Hardware Researcher',
    description: identity.oneLineBio,
    firstName: 'Hozaifa',
    lastName: 'Hossain',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'S M Hozaifa Hossain · Semiconductor & Neuromorphic Hardware Researcher',
    description: identity.oneLineBio,
  },
};

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': personId,
      name: identity.name,
      alternateName: identity.alternateName,
      url: SITE_URL,
      image: identity.image,
      description: identity.bio,
      jobTitle: identity.jobTitle,
      worksFor: {
        '@type': 'Organization',
        name: identity.employerName,
        alternateName: 'KPMG Bangladesh (former name)',
        url: identity.employerUrl,
      },
      affiliation: { '@type': 'Organization', name: 'Silicon River Bangladesh' },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'University of Dhaka',
        url: 'https://www.du.ac.bd',
      },
      award: awardStrings,
      knowsAbout,
      email: `mailto:${identity.email}`,
      address: { '@type': 'PostalAddress', addressLocality: 'Dhaka', addressCountry: 'BD' },
      sameAs,
    },
    {
      '@type': 'Organization',
      '@id': agencyId,
      name: identity.agencyName,
      url: identity.agencyUrl,
      founder: { '@id': personId },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      name: identity.name,
      url: SITE_URL,
      publisher: { '@id': personId },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={dmSans.className}>
        <JsonLd data={graph} />
        <ThemeShiftController />
        <PillNav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
