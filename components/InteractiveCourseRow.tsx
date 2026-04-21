'use client';

import Link from 'next/link';
import { CSSProperties, useEffect, useRef, useState } from 'react';

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
  const rowRef = useRef<HTMLDivElement>(null);
  const tileRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = rowRef.current;
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
        threshold: 0.25,
        rootMargin: '0px 0px -40px 0px',
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

    if (pillRef.current) {
      pillRef.current.style.left = `${x}px`;
      pillRef.current.style.top = `${y}px`;
      pillRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      pillRef.current.style.opacity = '1';
    }

    if (tileRef.current) {
      tileRef.current.style.transform = `perspective(600px) rotateX(${-ny * 8}deg) rotateY(${nx * 8}deg) scale(1.04)`;
    }
  };

  const onLeave = () => {
    if (pillRef.current) {
      pillRef.current.style.opacity = '0';
      pillRef.current.style.transform = 'translate(-50%, -50%) scale(0.7)';
    }

    if (tileRef.current) {
      tileRef.current.style.transform = '';
    }
  };

  const rowStyle = { '--row-delay': `${index * 80}ms` } as CSSProperties;

  const tile = (
    <div className="cr-tile-wrap" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div ref={tileRef} className="cr-tile" style={{ background }}>
        <div className="cr-tile-motif" style={{ background: motif }} />
        <div className="cr-tile-bg">
          <span className="cr-tile-mark">{mark}</span>
          <span className="cr-tile-tag">{tag}</span>
        </div>
      </div>
      <span ref={pillRef} className="cred-pill">
        Credentials
      </span>
    </div>
  );

  return (
    <div
      ref={rowRef}
      className={`course-row${visible ? ' visible' : ''}`}
      style={rowStyle}
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
    </div>
  );
}

