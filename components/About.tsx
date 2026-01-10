'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users } from 'lucide-react';

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
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Building reliable software that ships on time and performs in production.
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
              Full-stack engineer and ML practitioner with 3+ years shipping production systems across web, mobile, and data.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Delivered 20+ engagements spanning ERPs, LMS platforms, e-commerce, and AI products—driving automation, accuracy, and new revenue.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I move fast with clear communication, tight feedback loops, and measurable outcomes. Open to selective freelance and collaborations worldwide.
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
