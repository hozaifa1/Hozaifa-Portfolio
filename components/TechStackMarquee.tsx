'use client';

import { useEffect, useRef } from 'react';
import { SiNextdotjs, SiDjango, SiPostgresql, SiRust, SiDocker, SiPython, SiReact, SiTypescript, SiKotlin, SiTensorflow, SiPhp, SiLaravel, SiMysql, SiFirebase, SiAndroidstudio, SiPytorch, SiOpencv, SiTailwindcss, SiCloudflare, SiVercel } from 'react-icons/si';

const techStack = [
  { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'Django', Icon: SiDjango, color: '#092E20' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'Kotlin', Icon: SiKotlin, color: '#7F52FF' },
  { name: 'Rust', Icon: SiRust, color: '#CE422B' },
  { name: 'PHP', Icon: SiPhp, color: '#777BB4' },
  { name: 'Laravel', Icon: SiLaravel, color: '#FF2D20' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Android Studio', Icon: SiAndroidstudio, color: '#3DDC84' },
  { name: 'PyTorch', Icon: SiPytorch, color: '#EE4C2C' },
  { name: 'TensorFlow', Icon: SiTensorflow, color: '#FF6F00' },
  { name: 'OpenCV', Icon: SiOpencv, color: '#5C3EE8' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Cloudflare', Icon: SiCloudflare, color: '#F38020' },
  { name: 'Vercel', Icon: SiVercel, color: '#FFFFFF' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
];

export default function TechStackMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const duplicatedTech = [...techStack, ...techStack];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const animate = () => {
      position -= speed;
      if (position <= -(techStack.length * 152)) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 border-y border-[var(--border-subtle)] overflow-hidden">
      <div className="section-container mb-8">
        <p className="text-center text-[var(--text-muted)] text-xs uppercase tracking-[0.2em]">
          Technologies I work with
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10" />
        
        <div
          ref={marqueeRef}
          className="flex gap-12 will-change-transform"
        >
          {duplicatedTech.map((tech, idx) => {
            const IconComponent = tech.Icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center min-w-[140px] group cursor-pointer flex-shrink-0"
              >
                <div className="text-center transition-all duration-300">
                  <div className="flex items-center justify-center mb-3 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                    <IconComponent 
                      className="w-8 h-8" 
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] transition-colors block">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
