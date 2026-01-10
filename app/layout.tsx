import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Spotlight from '@/components/Spotlight';

export const metadata: Metadata = {
  title: 'Hozaifa - Personal Portfolio',
  description: 'Personal portfolio showcasing projects and experience across web development, mobile apps, and AI/ML solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#09090b] text-white">
        <Spotlight />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
