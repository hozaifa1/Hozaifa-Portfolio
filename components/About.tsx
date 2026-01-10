'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Expert in building scalable web applications using Next.js, Django, and modern tech stacks"
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      description: "Specialized in computer vision, NLP, and deploying intelligent systems in production"
    },
    {
      icon: Rocket,
      title: "Product Development",
      description: "From concept to deployment - I build complete solutions that solve real business problems"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "100% client satisfaction delivering projects on time with measurable impact"
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
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Passionate developer building impactful software solutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I'm a full-stack developer and ML engineer with over 3 years of experience building production-grade applications. My expertise spans web development, mobile apps, and AI/ML solutions.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              I've successfully delivered 20+ projects including enterprise ERPs, learning management systems, e-commerce platforms, and cutting-edge AI applications. My work has helped businesses automate operations, reduce costs by up to 85%, and serve thousands of users.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I thrive on challenging problems and am always exploring new technologies to deliver innovative solutions. Available for freelance projects and collaborations worldwide.
            </p>
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
