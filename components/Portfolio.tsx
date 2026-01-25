'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

export default function Portfolio() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="portfolio" className="relative py-32">
      <div className="section-container">
        <div className="timeline-track hidden md:block" />
        
        <div className="md:ml-24">
          <ScrollReveal>
            <div className="section-header">
              <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4">
                ■ Selected Work
              </p>
              <h2 className="section-title">
                Projects that<br />
                <span className="text-[var(--text-secondary)]">solve real problems</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400/60 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {project.image && (
                  <Link href={`/portfolio/${project.id}`} className="block relative aspect-video overflow-hidden cursor-pointer">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#09090b]/80 transition-opacity">
                      <p className="text-white text-lg font-semibold">View Details</p>
                    </div>
                  </Link>
                )}

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-xs font-semibold mb-3">
                  {project.category}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4 line-clamp-2">
                  <TextReveal delay={300} duration={20}>
                    {project.description}
                  </TextReveal>
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-800 text-slate-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="flex items-center gap-2 px-4 py-2 border border-[#06b6d4] text-[#06b6d4] rounded-lg hover:bg-[#06b6d4]/10 transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Case study
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 text-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 group"
              >
                View all projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
