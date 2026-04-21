import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import PillNav from '@/components/PillNav';
import ThemeShiftController from '@/components/ThemeShiftController';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'S. M. Hozaifa Hossain',
  description:
    'AI/ML engineer and full-stack developer building intelligent systems, research-led products, and tactile digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={dmSans.className}>
        <ThemeShiftController />
        <PillNav />
        {children}
      </body>
    </html>
  );
}
