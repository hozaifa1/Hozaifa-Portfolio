'use client';

import Link from 'next/link';
import { CSSProperties, ReactNode, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';

type InteractiveWorkCardProps = {
  background: string;
  motif: string;
  motif2: string;
  title: ReactNode;
  brand: string;
  brandMeta: string;
  brandMark: string;
  client: string;
  subtitle: string;
  pillLabel: string;
  href?: string;
  reverse?: boolean;
  motif2Style?: CSSProperties;
};

function isExternalHref(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
}

const REVEAL_EASE = [0.16, 1, 0.3, 1] as const;
const TILT_SPRING = { stiffness: 150, damping: 18, mass: 0.4 };
const HOVER_SPRING = { stiffness: 200, damping: 26 };

export default function InteractiveWorkCard({
  background,
  motif,
  motif2,
  title,
  brand,
  brandMeta,
  brandMark,
  client,
  subtitle,
  pillLabel,
  href,
  reverse = false,
  motif2Style,
}: InteractiveWorkCardProps) {
  const pillRef = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  // Pointer-driven tilt, smoothed by springs instead of raw per-frame DOM writes.
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const hover = useMotionValue(0);

  const sx = useSpring(nx, TILT_SPRING);
  const sy = useSpring(ny, TILT_SPRING);
  const sHover = useSpring(hover, HOVER_SPRING);

  const rotateY = useTransform(sx, (v) => (reverse ? -1 : 1) * v * 8);
  const rotateX = useTransform(sy, (v) => -v * 5);
  const scale = useTransform(sHover, (v) => 1 + v * 0.015);

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

  const thumbInner = (
    <motion.div
      className="work-thumb"
      style={{
        background,
        rotateX: reduce ? 0 : rotateX,
        rotateY: reduce ? 0 : rotateY,
        scale: reduce ? 1 : scale,
        transformPerspective: 2000,
        transition: 'none',
      }}
    >
      <div className="thumb-motif" style={{ background: motif }} />
      <div className="thumb-motif-2" style={{ background: motif2, ...motif2Style }} />
      <div className="thumb-bg">
        <h3 className="thumb-title">{title}</h3>
        <div className="thumb-brand">
          <span className="thumb-brand-mark">{brandMark}</span>
          <span className="thumb-brand-label">
            {brand}
            <small>{brandMeta}</small>
          </span>
        </div>
      </div>
    </motion.div>
  );

  const thumbContent = href ? (
    isExternalHref(href) ? (
      <a href={href} target="_blank" rel="noreferrer" className="block" aria-label={subtitle}>
        {thumbInner}
      </a>
    ) : (
      <Link href={href} className="block" aria-label={subtitle}>
        {thumbInner}
      </Link>
    )
  ) : (
    thumbInner
  );

  return (
    <motion.div
      className={`work-item${reverse ? ' reverse' : ''}`}
      style={{ transformOrigin: 'center bottom' }}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 60, rotateX: 8 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.9, ease: REVEAL_EASE }}
    >
      <div className="work-thumb-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
        {thumbContent}
        <span ref={pillRef} className="case-pill">
          {pillLabel}
        </span>
      </div>
      <div className="work-info">
        <div className="client">
          <u>{client}</u>
        </div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </motion.div>
  );
}
