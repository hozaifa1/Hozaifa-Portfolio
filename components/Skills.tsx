'use client';

import { skills } from '@/lib/data';
import ScrollReveal from './ScrollReveal';
import TextReveal from './TextReveal';

export default function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="section-container">
        <div className="timeline-track hidden md:block" />
        
        <div className="md:ml-24">
          <ScrollReveal>
            <div className="section-header">
              <p className="text-[var(--accent-primary)] text-sm font-medium tracking-widest uppercase mb-4">
                ■ Technical Skills
              </p>
              <h2 className="section-title">
                Technologies I<br />
                <span className="text-[var(--text-secondary)]">work with daily</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="glass-card p-6 h-full group hover:border-[var(--border-active)] transition-all">
                  <h3 className="text-lg font-medium text-[var(--accent-primary)] mb-4">
                    <TextReveal delay={200} duration={40}>
                      {skillGroup.category}
                    </TextReveal>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/5 text-[var(--text-secondary)] rounded-lg text-sm hover:bg-white/10 hover:text-white transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
