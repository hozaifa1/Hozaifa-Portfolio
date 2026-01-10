'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users, GraduationCap, Award, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building applications with Next.js, Django, and modern web technologies."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Working with computer vision and NLP systems."
    },
    {
      icon: Rocket,
      title: "Product Development",
      description: "From idea to deployment, I enjoy the full process."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with others to bring projects to life."
    }
  ];

  return (
    <section id="about" className="py-16 bg-slate-900/50 relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;m a developer who enjoys building web applications and experimenting with machine learning. Most of my time is spent working with Next.js, Django, and various AI tools.
              </p>
              <div className="pl-6 border-l-4 border-cyan-500/50">
                <p className="text-slate-300 text-lg leading-relaxed">
                  I work on:
                </p>
                <ul className="mt-2 space-y-1 text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Web and mobile applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Enterprise systems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Computer vision and NLP projects
                  </li>
                </ul>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;ve built things like ERPs, learning management systems, e-commerce platforms, and various AI experiments. You can check them out in my portfolio.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Currently studying <span className="text-white font-semibold">Electrical and Electronic Engineering</span> at the <span className="text-cyan-400 font-semibold">University of Dhaka</span> <span className="text-slate-400">(graduating Aug 2026)</span>.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold transition-all"
              >
                More about me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/60 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
