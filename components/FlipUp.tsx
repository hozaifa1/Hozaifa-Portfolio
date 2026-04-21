'use client';

import { ReactNode, useEffect, useRef } from 'react';

type FlipUpProps = {
  children: ReactNode;
  className?: string;
};

export default function FlipUp({ children, className = '' }: FlipUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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

  return (
    <div ref={ref} className={`flip-up ${className}`.trim()}>
      {children}
    </div>
  );
}

