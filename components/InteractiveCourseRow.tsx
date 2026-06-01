'use client';

import Link from 'next/link';
import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

type InteractiveCourseRowProps = {
  index: number;
  name: string;
  provider: string;
  background: string;
  motif: string;
  mark: string;
  tag: string;
  href?: string;
};

function isExternalHref(href: string) {
  return href.startsWith('http') || href.startsWith('/');
}

const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;
const TILT_SPRING = { stiffness: 160, damping: 18, mass: 0.4 };
const HOVER_SPRING = { stiffness: 200, damping: 26 };

export default function InteractiveCourseRow({
  index,
  name,
  provider,
  background,
  motif,
  mark,
  tag,
  href,
}: InteractiveCourseRowProps) {
  const pillRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const hover = useMotionValue(0);

  const sx = useSpring(nx, TILT_SPRING);
  const sy = useSpring(ny, TILT_SPRING);
  const sHover = useSpring(hover, HOVER_SPRING);

  const rotateY = useTransform(sx, (v) => v * 8);
  const rotateX = useTransform(sy, (v) => -v * 8);
  const scale = useTransform(sHover, (v) => 1 + v * 0.04);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (pillRef.current) {
      pillRef.current.style.left = `${x}px`;
      pillRef.current.style.top = `${y}px`;
    }

    if (reduce) return;
    nx.set(x / rect.width - 0.5);
    ny.set(y / rect.height - 0.5);
    hover.set(1);
  };

  const onLeave = () => {
    nx.set(0);
    ny.set(0);
    hover.set(0);
  };

  const tile = (
    <div className="cr-tile-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div
        className="cr-tile"
        style={{
          background,
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          scale: reduce ? 1 : scale,
          transformPerspective: 600,
          transition: 'none',
        }}
      >
        <div className="cr-tile-motif" style={{ background: motif }} />
        <div className="cr-tile-bg">
          <span className="cr-tile-mark">{mark}</span>
          <span className="cr-tile-tag">{tag}</span>
        </div>
      </motion.div>
      <span ref={pillRef} className="cred-pill">
        Credentials
      </span>
    </div>
  );

  return (
    <motion.div
      className="course-row"
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.9, ease: REVEAL_EASE, delay: index * 0.08 }}
    >
      {href ? (
        isExternalHref(href) ? (
          <a href={href} target="_blank" rel="noreferrer" aria-label={name}>
            {tile}
          </a>
        ) : (
          <Link href={href} aria-label={name}>
            {tile}
          </Link>
        )
      ) : (
        tile
      )}
      <div className="cr-name">{name}</div>
      <div className="cr-provider">{provider}</div>
    </motion.div>
  );
}
