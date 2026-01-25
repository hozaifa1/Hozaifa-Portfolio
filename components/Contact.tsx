'use client';

import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="section-container">
        <div className="timeline-track hidden md:block" />
        
        <div className="md:ml-24">
          <ScrollReveal>
            <div className="section-header text-center md:text-left">
              <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4">
                ■ Get in Touch
              </p>
              <h2 className="section-title">
                Let&apos;s build<br />
                <span className="text-[var(--text-secondary)]">something together</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ScrollReveal delay={0.1}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=20hozaifa02@gmail.com&su=Portfolio%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card p-6 group hover:border-[var(--border-active)] transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                <p className="text-[var(--text-muted)] text-sm">Share context and next steps</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <a
                href="https://wa.me/8801615001456"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card p-6 group hover:border-[var(--border-active)] transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">WhatsApp</h3>
                <p className="text-[var(--text-muted)] text-sm">Quick, informal sync</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <a
                href="tel:+8801615001456"
                className="block glass-card p-6 group hover:border-[var(--border-active)] transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                <p className="text-[var(--text-muted)] text-sm">Direct call for decisions</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="glass-card p-6 group hover:border-[var(--border-active)] transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-medium text-white mb-1">Location</h3>
                <p className="text-[var(--text-muted)] text-sm">Remote-first, worldwide</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
