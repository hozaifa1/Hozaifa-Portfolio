'use client';

import { useEffect } from 'react';
import { GraduationCap, Award, BookOpen, Trophy, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Contact from '@/components/Contact';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollProgress from '@/components/ScrollProgress';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <ScrollProgress />
      <section className="relative py-16">
        <div className="section-container">
          
          <ScrollReveal>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-medium text-white mb-6">Introduction</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I&apos;m <span className="text-cyan-400 font-semibold">S. M. Hozaifa Hossain</span>, a developer who enjoys working on web applications and machine learning projects.
              </p>
              <p>
                I&apos;m studying Electrical and Electronic Engineering at the <span className="text-cyan-400 font-semibold">University of Dhaka</span> (Expected Aug 2026), where I&apos;m part of the Emerging Nanodevices Research Group working on neuromorphic computing and solar cell optimization.
              </p>
              <p>
                I also serve as <span className="text-cyan-400 font-semibold">Chair of IEEE SIGHT Student Branch at DU</span>, where I led Project Archer—a humanitarian initiative that deployed 10 Orange Pi systems in rural Netrokona.
              </p>
            </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal delay={0.2} direction="left">
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-xl font-medium text-white">Education</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-medium">University of Dhaka</p>
                    <p className="text-[var(--text-secondary)] text-sm">B.Sc. in Electrical and Electronic Engineering</p>
                    <p className="text-[var(--accent-primary)] font-medium text-sm mt-2">CGPA: 3.74/4.00</p>
                    <p className="text-[var(--text-muted)] text-xs mt-1">Expected Graduation: August 2026</p>
                  </div>
                  <div className="border-t border-[var(--border-subtle)] pt-4">
                    <p className="text-white font-medium">Notre Dame College, Dhaka</p>
                    <p className="text-[var(--text-secondary)] text-sm">Higher Secondary Certificate (Science)</p>
                    <p className="text-[var(--accent-primary)] font-medium text-sm mt-2">GPA: 5.00/5.00</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} direction="right">
              <div className="glass-card p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-xl font-medium text-white">Certifications</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/5">
                    <p className="text-white font-medium text-sm mb-2">Specializations</p>
                    <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                      <li>Machine Learning — Stanford Online</li>
                      <li>Deep Learning — DeepLearning.AI</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <p className="text-white font-medium text-sm mb-2">Technical</p>
                    <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                      <li>Advanced Data Analytics — Google</li>
                      <li>Linux & Shell Scripting — IBM</li>
                      <li>Version Control with Git — Atlassian</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="glass-card p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-[var(--accent-primary)]" />
                </div>
                <h3 className="text-xl font-medium text-white">Research & Publications</h3>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-[var(--accent-primary)] pl-6 py-2">
                  <p className="text-white font-medium mb-2">Nurses&apos; Skill Assessment in Endotracheal Suctioning</p>
                  <p className="text-[var(--accent-primary)] text-sm mb-2">IJABC, 2024</p>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Research applying multi-view pose estimation to clinical assessment using computer vision.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-lg bg-white/5">
                    <p className="text-white font-medium text-sm mb-2">Computational Modeling for PV Materials</p>
                    <p className="text-[var(--accent-primary)] text-xs mb-2">Ongoing Research</p>
                    <p className="text-[var(--text-muted)] text-sm">
                      Deep learning models to predict and optimize photovoltaic efficiency.
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-lg bg-white/5">
                    <p className="text-white font-medium text-sm mb-2">Neuromorphic Device Simulation</p>
                    <p className="text-[var(--accent-primary)] text-xs mb-2">Ongoing Research</p>
                    <p className="text-[var(--text-muted)] text-sm">
                      Exploring neuromorphic architectures using ferroelectric transistors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="glass-card p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[var(--accent-primary)]" />
                </div>
                <h3 className="text-xl font-medium text-white">Leadership & Honors</h3>
              </div>
              <div className="space-y-6">
                <div className="p-6 rounded-xl border border-[var(--border-active)] bg-[var(--accent-primary)]/5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-white font-medium">Chair, IEEE SIGHT Student Branch</p>
                      <p className="text-[var(--accent-primary)] text-sm">University of Dhaka</p>
                    </div>
                    <span className="text-xs bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] px-3 py-1 rounded-full">
                      ID: 23-HTB-115
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm">
                    Led Project Archer, deploying 10 Orange Pi systems in rural Netrokona for underserved communities.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-lg bg-white/5">
                    <p className="text-white font-medium text-sm mb-1">Runner-Up: Line Following Robot</p>
                    <p className="text-[var(--text-muted)] text-xs">Brac University, 2024</p>
                  </div>
                  
                  <div className="p-5 rounded-lg bg-white/5">
                    <p className="text-white font-medium text-sm mb-1">Talentpool Scholarship</p>
                    <p className="text-[var(--text-muted)] text-xs">Bangladesh Education Board</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <Contact />
    </main>
  );
}
