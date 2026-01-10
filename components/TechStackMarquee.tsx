'use client';

import { motion } from 'framer-motion';
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
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <section className="py-12 bg-[#09090b] border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-slate-400 text-sm font-mono uppercase tracking-wider">
          Technologies I work with
        </p>
      </div>
      
      <div className="relative overflow-hidden py-4">
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, `-${(techStack.length * 152)}px`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, idx) => {
            const IconComponent = tech.Icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center min-w-[140px] group cursor-pointer flex-shrink-0"
              >
                <div className="text-center transition-all duration-300">
                  <div className="flex items-center justify-center mb-2 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <IconComponent 
                      className="w-10 h-10" 
                      style={{ color: tech.color }}
                    />
                  </div>
                  <span className="text-xs font-mono text-slate-500 group-hover:text-[#06b6d4] transition-colors block">
                    {tech.name}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
