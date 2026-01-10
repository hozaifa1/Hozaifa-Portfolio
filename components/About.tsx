'use client';

import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Users, GraduationCap, Award, BookOpen, Trophy } from 'lucide-react';

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
              I&apos;m <span className="text-cyan-400 font-semibold">S. M. Hozaifa Hossain</span>, a Backend Software Engineer specializing in Laravel and Django, currently pursuing my B.Sc. in Electrical and Electronic Engineering at the <span className="text-cyan-400 font-semibold">University of Dhaka</span> (CGPA: 3.74/4.00, Expected Dec 2026).
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              With 3+ years of experience, I&apos;ve delivered 20+ production systems across web, mobile, and AI—spanning ERPs, LMS platforms, e-commerce, and distributed systems. I&apos;m also a researcher in the Emerging Nanodevices Group, working on neuromorphic computing and solar cell optimization using deep learning.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              As Chair of IEEE SIGHT Student Branch at DU, I led Project Archer, deploying 10 Orange Pi systems in rural Netrokona—recognized by the IEEE Humanitarian Technologies Board. I move fast with clear communication and measurable outcomes.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-white font-semibold">University of Dhaka</p>
                <p className="text-slate-400 text-sm">B.Sc. Electrical & Electronic Engineering</p>
                <p className="text-cyan-400 text-sm">CGPA: 3.74/4.00 | Expected Dec 2026</p>
                <p className="text-slate-500 text-xs mt-1">Emerging Nanodevices Research Group</p>
              </div>
              <div>
                <p className="text-white font-semibold">Notre Dame College, Dhaka</p>
                <p className="text-slate-400 text-sm">HSC (Science)</p>
                <p className="text-cyan-400 text-sm">GPA: 5.00/5.00</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-white font-semibold text-sm">Machine Learning Specialization</p>
                <p className="text-slate-400 text-xs">Stanford Online</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Deep Learning Specialization</p>
                <p className="text-slate-400 text-xs">DeepLearning.AI</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Advanced Data Analytics</p>
                <p className="text-slate-400 text-xs">Google</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Linux and Shell Scripting</p>
                <p className="text-slate-400 text-xs">IBM</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Research & Publications</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-white font-semibold text-sm">Nurses&apos; Skill Assessment in Endotracheal Suctioning</p>
                <p className="text-slate-400 text-xs">International Journal of Advanced Biomedical and Clinical Research, 2024</p>
                <p className="text-slate-500 text-xs mt-1">Applied multi-view pose estimation to clinical assessment; improved F1-score by 9%</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">DL-based Solar Cell Design Optimization</p>
                <p className="text-slate-400 text-xs">Ongoing Research - Emerging Nanodevices Group</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">GAA-FeFET based Spiking Neural Networks</p>
                <p className="text-slate-400 text-xs">Ongoing Research - Neuromorphic Computing</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Leadership & Honors</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-3">
                <p className="text-white font-semibold text-sm">Chair, IEEE SIGHT Student Branch, DU</p>
                <p className="text-cyan-400 text-xs mb-1">2025 | ID: 23-HTB-115</p>
                <p className="text-slate-400 text-xs">Led Project Archer: Deployed 10 Orange Pi systems in rural Netrokona, recognized by IEEE Humanitarian Technologies Board</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Runner-Up: Line Following Robot Competition</p>
                <p className="text-slate-400 text-xs">Brac University, 2024</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Talentpool Scholarship</p>
                <p className="text-slate-400 text-xs">Bangladesh Education Board</p>
              </div>
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
