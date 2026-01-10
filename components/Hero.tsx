'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useMemo } from 'react';

export default function Hero() {
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  const particles = useMemo(
    () =>
      [...Array(50)].map((_, i) => {
        const base = i + 1;
        return {
          id: i,
          left: seededRandom(base) * 100,
          top: seededRandom(base * 1.3) * 100,
          duration: 2 + seededRandom(base * 1.7) * 3,
          delay: seededRandom(base * 2.1) * 5,
        };
      }),
    []
  );

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#09090b]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-cyan-400 text-xl md:text-2xl font-mono mb-2">Hi, I&apos;m</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hozaifa
            </h1>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06b6d4] to-cyan-300">
              Full-Stack Developer & ML Engineer
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I design production-ready platforms across web and AI, blending reliable engineering with sharp execution to ship products that move businesses forward.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/portfolio"
              className="group px-8 py-3 border-2 border-[#06b6d4] bg-[#06b6d4] text-white hover:bg-cyan-500 hover:border-cyan-500 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              View portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-[#06b6d4] text-[#06b6d4] hover:bg-[#06b6d4] hover:text-white rounded-lg font-semibold transition-all"
            >
              Book a call
            </Link>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://github.com/hozaifa1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-12 h-12 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/hozaifa1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-12 h-12 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:20hozaifa02@gmail.com"
              aria-label="Email Contact"
              className="w-12 h-12 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {[
            { value: '20+', label: 'Projects Completed' },
            { value: '3+', label: 'Years Experience' },
            { value: '25+', label: 'Technologies' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-cyan-400 rounded-full p-1">
          <div className="w-1 h-2 bg-cyan-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
}
