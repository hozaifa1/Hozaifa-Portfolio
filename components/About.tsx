'use client';

import { GraduationCap, Briefcase, Award, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="section-container">
        {/* Timeline track - visible on desktop */}
        <div className="timeline-track hidden md:block" />

        <div className="md:ml-24">
          {/* Section Header */}
          <ScrollReveal>
            <div className="section-header">
              <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4">
                ■ About Me
              </p>
              <h2 className="section-title">
                Turning ideas into<br />
                <span className="text-[var(--text-secondary)]">production-ready solutions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Introduction */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="glass-card p-8">
                  <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">
                    <p>
                      <TextReveal delay={200} duration={30}>
                        I&apos;m S. M. Hozaifa Hossain, a developer passionate about building scalable web applications and exploring the frontiers of AI.
                      </TextReveal>
                    </p>
                    <p>
                      <TextReveal delay={400} duration={30}>
                        Currently pursuing my B.Sc. in EEE at the University of Dhaka, I balance academics with real-world development—shipping production systems for businesses while conducting research on neuromorphic computing.
                      </TextReveal>
                    </p>
                    <p>
                      <TextReveal delay={600} duration={30}>
                        As Chair of IEEE SIGHT, I led Project Archer, deploying 10 computing systems to rural communities in Netrokona.
                      </TextReveal>
                    </p>
                  </div>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 mt-8 text-[var(--accent-primary)] hover:text-white font-medium transition-colors group"
                  >
                    Full background
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Info Cards */}
            <div className="space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="glass-card p-6 group hover:border-[var(--border-active)] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg mb-1">Education</h4>
                      <p className="text-white/90">University of Dhaka</p>
                      <p className="text-[var(--text-muted)] text-sm">B.Sc. Electrical & Electronic Engineering</p>
                      <p className="text-[var(--accent-primary)] font-medium text-sm mt-2">CGPA: 3.74/4.00</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="glass-card p-6 group hover:border-[var(--border-active)] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg mb-2">Current Roles</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-white/90">Chair, IEEE SIGHT</p>
                          <p className="text-[var(--text-muted)] text-sm">University of Dhaka Student Branch</p>
                        </div>
                        <div>
                          <p className="text-white/90">Research Assistant</p>
                          <p className="text-[var(--text-muted)] text-sm">Emerging Nanodevices Group</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="glass-card p-6 group hover:border-[var(--border-active)] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-lg mb-2">Achievements</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--text-secondary)]">Runner-Up, Line Following Robot - BRAC University</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-[var(--accent-primary)] mt-0.5 flex-shrink-0" />
                          <span className="text-[var(--text-secondary)]">Talentpool Scholarship - Bangladesh Education Board</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
