'use client';

import { ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

interface SmoothScrollProps {
  children: ReactNode;
}

/**
 * Lenis-powered smooth scrolling.
 *
 * Lenis drives the real document scroll, so native `scroll` events still fire
 * (ThemeShiftController, ScrollProgress, anchor offsets keep working). Same-page
 * hash links are intercepted and eased via `lenis.scrollTo` so in-page nav stays
 * smooth instead of hard-jumping. Disabled entirely when the user prefers
 * reduced motion.
 */
export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReduced) return;

    // `lerp` (continuous smoothing) — NOT `duration`/`easing`. Duration mode
    // restarts its easing timeline on every wheel tick, so a rapid mousewheel
    // stream stutters/races; lerp chases the target smoothly regardless of how
    // fast wheel events arrive.
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchorClick = (event: MouseEvent) => {
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
      lenis.scrollTo(target as HTMLElement, { offset: -90, duration: 1.2 });
      history.pushState(null, '', url.hash);
    };

    document.addEventListener('click', onAnchorClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', onAnchorClick);
      lenis.destroy();
    };
  }, [pathname]);

  return <>{children}</>;
}
