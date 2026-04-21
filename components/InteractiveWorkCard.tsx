'use client';

import Link from 'next/link';
import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';

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
  const cardRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const nx = x / rect.width - 0.5;
    const ny = y / rect.height - 0.5;
    const rotateY = (reverse ? -1 : 1) * nx * 8;
    const rotateX = -ny * 5;

    if (pillRef.current) {
      pillRef.current.style.left = `${x}px`;
      pillRef.current.style.top = `${y}px`;
      pillRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      pillRef.current.style.opacity = '1';
    }

    if (thumbRef.current) {
      thumbRef.current.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
    }
  };

  const onLeave = () => {
    if (pillRef.current) {
      pillRef.current.style.opacity = '0';
      pillRef.current.style.transform = 'translate(-50%, -50%) scale(0.7)';
    }

    if (thumbRef.current) {
      thumbRef.current.style.transform = '';
    }
  };

  const thumbInner = (
    <div ref={thumbRef} className="work-thumb" style={{ background }}>
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
    </div>
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
    <div
      ref={cardRef}
      className={`work-item flip-up${reverse ? ' reverse' : ''}${visible ? ' visible' : ''}`}
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
    </div>
  );
}
