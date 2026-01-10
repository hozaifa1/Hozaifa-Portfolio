'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users, GraduationCap, Award, BookOpen, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Delivery",
      description: "Ship resilient web platforms with Next.js, Django, and cloud-native tooling."
    },
    {
      icon: Brain,
      title: "Applied AI/ML",
      description: "Deploy computer vision and NLP systems that serve real users—not just demos."
    },
    {
      icon: Rocket,
      title: "End-to-End Product",
      description: "Own the journey from discovery to launch with clear metrics and fast iteration."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Communicate often, hit deadlines, and keep stakeholders confident throughout delivery."
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
                <span className="text-white font-semibold">I&apos;m a full-stack developer and ML engineer</span> with over <span className="text-cyan-400 font-bold">3 years</span> of experience building production-grade applications.
              </p>
              <div className="pl-6 border-l-4 border-cyan-500/50">
                <p className="text-slate-300 text-lg leading-relaxed">
                  My expertise spans:
                </p>
                <ul className="mt-2 space-y-1 text-slate-400">
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Web development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> Mobile apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-400">▸</span> AI/ML solutions
                  </li>
                </ul>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                I&apos;ve successfully delivered <span className="text-cyan-400 font-bold">20+ projects</span> including <em className="text-slate-200">enterprise ERPs, learning management systems, e-commerce platforms,</em> and cutting-edge AI applications.
              </p>
              <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-slate-300 text-lg leading-relaxed">
                  <span className="text-cyan-400 font-semibold">Impact:</span> My work has helped businesses automate operations, reduce costs by up to <span className="text-white font-bold">85%</span>, and serve <span className="text-white font-bold">thousands of users</span>.
                </p>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Currently pursuing <span className="text-white font-semibold">B.Sc. in Electrical and Electronic Engineering</span> at the <span className="text-cyan-400 font-semibold">University of Dhaka</span> <span className="text-slate-400">(Expected Aug 2026)</span>, I blend academic research with hands-on engineering to deliver solutions that work.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold transition-all"
              >
                Get to Know Me Better
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
