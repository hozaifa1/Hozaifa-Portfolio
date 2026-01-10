'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Contact from '@/components/Contact';

export default function PortfolioPage() {
  return (
    <main className="pt-16">
      <section className="py-16 bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="mb-8">
            <Link 
              href="/#portfolio" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                id={project.id}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center scroll-mt-24`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                {project.image && (
                  <Link href={`/portfolio/${project.id}`} className="w-full lg:w-1/2">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-slate-800 group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/10 to-transparent group-hover:opacity-0 transition-opacity"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[#09090b]/90 transition-opacity">
                        <p className="text-white text-lg font-semibold">Click to view details</p>
                      </div>
                    </div>
                  </Link>
                )}

                <div className={`${project.image ? 'lg:w-1/2' : 'lg:w-full'} space-y-4`}>
                  <div className="inline-block px-4 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm font-semibold">
                    {project.category}
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-lg text-slate-400">
                    {project.description}
                  </p>

                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-300 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-3 py-4">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                        <div className="font-bold text-[#06b6d4] text-sm">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors border border-slate-700"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="flex items-center gap-2 px-4 py-2 border-2 border-[#06b6d4] text-[#06b6d4] rounded-lg hover:bg-[#06b6d4]/10 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Case Study
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
