import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Spotlight from '@/components/Spotlight';

export const metadata: Metadata = {
  title: 'Hozaifa - Full-Stack Developer & ML Engineer',
  description: 'Personal portfolio of Hozaifa - Full-Stack Developer specializing in Next.js, Django, and AI/ML solutions',
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
