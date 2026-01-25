'use client';

import { useEffect } from 'react';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Contact from '@/components/Contact';
import ScrollReveal from '@/components/ScrollReveal';
import ScrollProgress from '@/components/ScrollProgress';

export default function PortfolioPage() {
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
            <div className="section-header mb-12">
              <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4">
                ■ All Projects
              </p>
              <h1 className="section-title">
                Work that<br />
                <span className="text-[var(--text-secondary)]">speaks for itself</span>
              </h1>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.id} delay={idx * 0.1}>
                <div
                  id={project.id}
                  className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center scroll-mt-24`}
                >
                  {project.image && (
                    <Link href={`/portfolio/${project.id}`} className="w-full lg:w-1/2">
                      <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--border-subtle)] group cursor-pointer">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[var(--bg-primary)]/80 transition-opacity">
                          <p className="text-white font-medium">View Details</p>
                        </div>
                      </div>
                    </Link>
                  )}

                  <div className={`${project.image ? 'lg:w-1/2' : 'lg:w-full'} space-y-5`}>
                    <span className="inline-block px-4 py-1.5 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] rounded-full text-xs font-medium">
                      {project.category}
                    </span>

                    <h3 className="text-2xl font-medium text-white">
                      {project.title}
                    </h3>

                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-[var(--accent-primary)] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[var(--text-secondary)]">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="grid grid-cols-3 gap-3 py-4">
                      {Object.entries(project.impact).map(([key, value]) => (
                        <div key={key} className="text-center p-3 rounded-lg bg-white/5">
                          <div className="font-medium text-[var(--accent-primary)] text-sm">{value}</div>
                          <div className="text-xs text-[var(--text-muted)] capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 text-[var(--text-secondary)] rounded-lg text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/5 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-primary)] text-black text-sm font-medium hover:shadow-lg hover:shadow-[var(--accent-glow)] transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Case Study
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
