'use client';

import { useEffect, useRef, useState } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  type?: 'word' | 'char';
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 50,
  type = 'word',
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const units = type === 'word' ? children.split(' ') : children.split('');
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex <= units.length) {
          if (type === 'word') {
            setDisplayedText(units.slice(0, currentIndex).join(' ') + (currentIndex < units.length ? ' ' : ''));
          } else {
            setDisplayedText(units.slice(0, currentIndex).join(''));
          }
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, duration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, children, delay, duration, type]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isVisible && displayedText.length < children.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
