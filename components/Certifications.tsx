'use client';

import { Award, ExternalLink, GraduationCap, Trophy, FileText } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
    <section id="certifications" className="relative py-32">
      <div className="section-container">
        <div className="timeline-track hidden md:block" />
        
        <div className="md:ml-24">
          <ScrollReveal>
            <div className="section-header">
              <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4">
                ■ Credentials
              </p>
              <h2 className="section-title">
                Certifications &<br />
                <span className="text-[var(--text-secondary)]">Recognitions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="mb-16">
            <ScrollReveal delay={0.1}>
              <h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3">
                <Award className="w-5 h-5 text-[var(--accent-primary)]" />
                Professional Certifications
              </h3>
            </ScrollReveal>
            
            <div className="space-y-6">
              {certifications.map((category, catIdx) => {
                const CategoryIcon = category.icon;
                return (
                  <ScrollReveal key={catIdx} delay={catIdx * 0.1 + 0.2}>
                    <div className="glass-card p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center">
                          <CategoryIcon className="w-5 h-5 text-[var(--accent-primary)]" />
                        </div>
                        <h4 className="text-lg font-medium text-white">{category.category}</h4>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {category.items.map((cert, idx) => (
                          <a
                            key={idx}
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start justify-between gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-[var(--border-active)] transition-all"
                          >
                            <div className="flex-1">
                              <p className="text-white font-medium group-hover:text-[var(--accent-primary)] transition-colors text-sm">
                                {cert.title}
                              </p>
                              <p className="text-[var(--text-muted)] text-xs mt-1">{cert.issuer}</p>
                            </div>
                            <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors flex-shrink-0 mt-0.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3">
                <Trophy className="w-5 h-5 text-[var(--accent-primary)]" />
                Recognitions & Achievements
              </h3>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 gap-6">
              {recognitions.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <ScrollReveal key={idx} delay={idx * 0.1 + 0.2}>
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block glass-card p-6 group hover:border-[var(--border-active)] transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                          <ItemIcon className="w-6 h-6 text-[var(--accent-primary)]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-white font-medium group-hover:text-[var(--accent-primary)] transition-colors">
                              {item.title}
                            </h4>
                            <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors flex-shrink-0 mt-0.5" />
                          </div>
                          <p className="text-[var(--text-secondary)] text-sm mt-2">{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
