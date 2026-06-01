'use client';

import { ReactNode, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Native smooth-scroll wrapper.
 *
 * Relies on the browser's `scroll-behavior: smooth` (set in globals.css).
 * Intercepts same-page hash links and eases them via `scrollIntoView` so
 * in-page navigation stays smooth. Framer Motion reveals/tilt are unaffected.
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();

  const handleAnchorClick = useCallback((event: MouseEvent) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const anchor = (event.target as HTMLElement)?.closest('a');
    if (!anchor) return;

    const url = new URL(anchor.href, window.location.href);
    const isSamePage =
      url.pathname === window.location.pathname && url.hash.length > 1;
    if (!isSamePage) return;

    const target = document.querySelector(url.hash);
    if (!target) return;

    event.preventDefault();
    // Use native smooth scrollIntoView with an offset via scroll-margin-top
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', url.hash);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname, handleAnchorClick]);

  return <>{children}</>;
}
