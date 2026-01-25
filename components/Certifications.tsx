'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, GraduationCap, Trophy, FileText } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      category: "AI & Machine Learning",
      icon: Award,
      color: "from-purple-500/20 to-pink-500/20 border-purple-500/50",
      iconColor: "text-purple-400",
      items: [
        {
          title: "Deep Learning Specialization",
          issuer: "DeepLearning.AI",
          file: "/certificates/Coursera DeepL_Spec.pdf"
        },
        {
          title: "Machine Learning Specialization",
          issuer: "DeepLearning.AI",
          file: "/certificates/Coursera ML_Spec.pdf"
        },
        {
          title: "Neural Networks and Deep Learning",
          issuer: "DeepLearning.AI",
          file: "/certificates/Coursera NN_DL.pdf"
        },
        {
          title: "Convolutional Neural Networks",
          issuer: "DeepLearning.AI",
          file: "/certificates/Coursera DL_CNN.pdf"
        },
        {
          title: "Hyperparameter Tuning & Optimization",
          issuer: "DeepLearning.AI",
          file: "/certificates/Coursera hyperparam_tun.pdf"
        },
        {
          title: "Unsupervised Learning & Reinforcement Learning",
          issuer: "DeepLearning.AI",
          file: "/certificates/Coursera UL_RL.pdf"
        },
        {
          title: "Generative AI Fundamentals",
          issuer: "Google Cloud",
          file: "/certificates/Coursera GenAI.pdf"
        }
      ]
    },
    {
      category: "Data Science & Analytics",
      icon: GraduationCap,
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/50",
      iconColor: "text-cyan-400",
      items: [
        {
          title: "Advanced Data Analytics",
          issuer: "Google",
          file: "/certificates/Coursera Data.pdf"
        }
      ]
    },
    {
      category: "Development Tools",
      icon: FileText,
      color: "from-green-500/20 to-emerald-500/20 border-green-500/50",
      iconColor: "text-green-400",
      items: [
        {
          title: "Git and Version Control",
          issuer: "Atlassian",
          file: "/certificates/Coursera Git_Version_Control.pdf"
        },
        {
          title: "Linux Commands & Shell Scripting",
          issuer: "IBM",
          file: "/certificates/Coursera Linux_Shell_Script.pdf"
        }
      ]
    }
  ];

  const recognitions = [
    {
      title: "IEEE SIGHT Chair - Project Archer",
      description: "Led humanitarian tech initiative deploying 10 Orange Pi systems in rural Netrokona",
      icon: Trophy,
      color: "from-amber-500/20 to-orange-500/20 border-amber-500/50",
      iconColor: "text-amber-400",
      file: "/certificates/IEEE_HTB_SIGHT.pdf"
    },
    {
      title: "Academic Transcript",
      description: "University of Dhaka - CGPA 3.74/4.00",
      icon: GraduationCap,
      color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/50",
      iconColor: "text-cyan-400",
      file: "/certificates/DU Academic Report.pdf"
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-[#09090b] relative">
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
            Certifications & Recognitions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional certifications and recognitions that validate my expertise
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="w-6 h-6 text-cyan-400" />
            Professional Certifications
          </motion.h3>
          
          <div className="space-y-8">
            {certifications.map((category, catIdx) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={catIdx}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center border-2`}>
                      <CategoryIcon className={`w-5 h-5 ${category.iconColor}`} />
                    </div>
                    <h4 className="text-xl font-bold text-white">{category.category}</h4>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.items.map((cert, idx) => (
                      <motion.a
                        key={idx}
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-slate-900/50 hover:bg-slate-900 rounded-lg p-4 border border-slate-700 hover:border-cyan-400/50 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {cert.title}
                            </p>
                            <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <motion.h3
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Trophy className="w-6 h-6 text-cyan-400" />
            Recognitions & Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {recognitions.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-xl p-6 border-2 hover:shadow-xl hover:shadow-cyan-500/10 transition-all`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-slate-900/50 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <ItemIcon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-white font-bold text-lg group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>
                        <ExternalLink className={`w-4 h-4 ${item.iconColor} opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1`} />
                      </div>
                      <p className="text-slate-300 text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
