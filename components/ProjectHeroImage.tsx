'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectHeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1200px) 100vw, 1200px"
        priority
      />
    </motion.div>
  );
}
