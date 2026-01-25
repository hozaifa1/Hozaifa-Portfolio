import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-[var(--border-subtle)]">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-semibold text-[var(--accent-primary)] mb-4 block">
              hozaifa
            </Link>
            <p className="text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Building production-grade web applications and AI solutions. Currently studying EEE at the University of Dhaka.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Navigate</h4>
            <div className="space-y-3">
              <Link href="#about" className="block text-[var(--text-muted)] hover:text-white transition-colors text-sm">About</Link>
              <Link href="#portfolio" className="block text-[var(--text-muted)] hover:text-white transition-colors text-sm">Projects</Link>
              <Link href="#certifications" className="block text-[var(--text-muted)] hover:text-white transition-colors text-sm">Credentials</Link>
              <Link href="#contact" className="block text-[var(--text-muted)] hover:text-white transition-colors text-sm">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/hozaifa1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/30 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/hozaifa1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:20hozaifa02@gmail.com"
                aria-label="Email Contact"
                className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)] hover:text-white hover:border-white/30 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--border-subtle)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            © {currentYear} Hozaifa. All rights reserved.
          </p>
          <p className="text-[var(--text-muted)] text-sm">
            Remote Worldwide • 20hozaifa02@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
