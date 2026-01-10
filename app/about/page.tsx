'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Trophy, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Contact from '@/components/Contact';

export default function AboutPage() {
  return (
    <main className="pt-16">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white text-center relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <Link 
            href="/#about" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-300">
            A deeper look into my academic journey, certifications, research, and leadership experiences
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#09090b] relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I&apos;m <span className="text-cyan-400 font-semibold">S. M. Hozaifa Hossain</span>, a full-stack developer and ML engineer with a passion for building production-ready systems that solve real-world problems.
              </p>
              <p>
                Currently pursuing my B.Sc. in Electrical and Electronic Engineering at the <span className="text-cyan-400 font-semibold">University of Dhaka</span> (CGPA: 3.74/4.00, Expected Aug 2026), I&apos;m part of the Emerging Nanodevices Research Group where I work on cutting-edge research in neuromorphic computing and solar cell optimization using deep learning.
              </p>
              <p>
                Beyond academics, I serve as <span className="text-cyan-400 font-semibold">Chair of IEEE SIGHT Student Branch at DU</span>, where I led Project Archer—a humanitarian initiative that deployed 10 Orange Pi systems in rural Netrokona, recognized by the IEEE Humanitarian Technologies Board.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-white font-bold text-lg">University of Dhaka</p>
                  <p className="text-slate-400">B.Sc. in Electrical and Electronic Engineering</p>
                  <p className="text-cyan-400 font-semibold mt-1">CGPA: 3.74/4.00</p>
                  <p className="text-slate-500 text-sm mt-1">Expected Graduation: August 2026</p>
                  <p className="text-slate-400 text-sm mt-2 italic">Emerging Nanodevices Research Group</p>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-white font-bold">Notre Dame College, Dhaka</p>
                  <p className="text-slate-400">Higher Secondary Certificate (Science)</p>
                  <p className="text-cyan-400 font-semibold mt-1">GPA: 5.00/5.00</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-white font-bold">Specializations</p>
                  <ul className="mt-2 space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span><strong>Machine Learning Specialization</strong> — Stanford Online</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span><strong>Deep Learning Specialization</strong> — DeepLearning.AI</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-white font-bold">Technical Proficiency</p>
                  <ul className="mt-2 space-y-2 text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span><strong>Advanced Data Analytics</strong> — Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span><strong>Linux and Shell Scripting</strong> — IBM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span><strong>Version Control with Git</strong> — Atlassian</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Research & Publications</h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6 py-2">
                <p className="text-white font-bold text-lg mb-2">Nurses&apos; Skill Assessment in Endotracheal Suctioning</p>
                <p className="text-cyan-400 text-sm mb-2">International Journal of Advanced Biomedical and Clinical Research (IJABC), 2024</p>
                <p className="text-slate-300">
                  Published research applying multi-view pose estimation to clinical assessment. Improved F1-score by 9% through custom post-processing techniques. This work demonstrates the practical application of computer vision in healthcare settings.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                  <p className="text-white font-bold mb-2">DL-based Optimization of Solar Cell Design Parameters</p>
                  <p className="text-cyan-400 text-sm mb-2">Ongoing Research</p>
                  <p className="text-slate-400 text-sm">
                    Training deep learning models on simulated data to predict and optimize photovoltaic efficiency with the Emerging Nanodevices Group.
                  </p>
                </div>
                
                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
                  <p className="text-white font-bold mb-2">GAA-FeFET based Spiking Neural Networks (SNN)</p>
                  <p className="text-cyan-400 text-sm mb-2">Ongoing Research</p>
                  <p className="text-slate-400 text-sm">
                    Exploring neuromorphic architectures using ferroelectric transistors via device-level simulations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Leadership & Honors</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/50 rounded-xl p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-white font-bold text-lg">Chair, IEEE SIGHT Student Branch</p>
                    <p className="text-cyan-400 font-semibold">University of Dhaka</p>
                  </div>
                  <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-mono">
                    ID: 23-HTB-115
                  </span>
                </div>
                <p className="text-slate-300 mb-3">
                  Leading humanitarian technology initiatives as Chair for 2025. Directed <strong>Project Archer</strong>, overseeing the deployment of 10 Orange Pi systems in rural Netrokona to provide computing access to underserved communities.
                </p>
                <p className="text-cyan-400 text-sm font-semibold">
                  ✓ Recognized by the IEEE Humanitarian Technologies Board
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700">
                  <p className="text-white font-bold mb-2">🏆 Runner-Up: Line Following Robot Competition</p>
                  <p className="text-slate-400 text-sm">Brac University, 2024</p>
                </div>
                
                <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-700">
                  <p className="text-white font-bold mb-2">🎓 Talentpool Scholarship</p>
                  <p className="text-slate-400 text-sm">Bangladesh Education Board</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Contact />
    </main>
  );
}
