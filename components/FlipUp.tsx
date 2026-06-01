'use client';

import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type FlipUpProps = {
  children: ReactNode;
  className?: string;
};

// Mirrors the original `.flip-up` CSS: rise + subtle flip on enter, eased with
// the same cubic-bezier(.16, 1, .3, 1) curve, revealed once on scroll-in.
const EASE = [0.16, 1, 0.3, 1] as const;

export default function FlipUp({ children, className = '' }: FlipUpProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ transformOrigin: 'center bottom' }}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60, rotateX: 8 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
