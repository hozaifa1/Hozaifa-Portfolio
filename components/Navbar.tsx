'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white font-mono">
            <span className="text-[#06b6d4]">Hozaifa</span>
          </Link>

          <div className="flex md:hidden items-center gap-4 text-sm">
            <Link href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</Link>
            <Link href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors">Portfolio</Link>
            <Link href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 ml-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="px-6 py-2 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-800 border-t border-slate-700"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block text-slate-300 hover:text-cyan-400 transition-colors font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-6 py-2 bg-[#06b6d4] hover:bg-cyan-500 text-white rounded-lg font-semibold text-center transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
