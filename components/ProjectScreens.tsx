'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectScreensProps {
  title: string;
  images: {
    src: string;
    title: string;
    description: string;
  }[];
}

export default function ProjectScreens({ title, images }: ProjectScreensProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>
      <div className="space-y-12">
        {images.map((image, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
            <p className="text-slate-300">{image.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
