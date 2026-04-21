'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const themeColors = {
  dark: { bg: '#080808', fg: '#f5f4f0', light: false },
  cream: { bg: '#f5f2ea', fg: '#141414', light: true },
  pearl: { bg: '#ececec', fg: '#141414', light: true },
  ink: { bg: '#0b0b12', fg: '#f5f4f0', light: false },
  olive: { bg: '#1a1a14', fg: '#ede9b0', light: false },
} as const;

type ThemeName = keyof typeof themeColors;

function setTheme(name: ThemeName) {
  const theme = themeColors[name] ?? themeColors.dark;
  document.documentElement.style.setProperty('--bg', theme.bg);
  document.documentElement.style.setProperty('--fg', theme.fg);
  document.body.style.backgroundColor = theme.bg;
  document.body.style.color = theme.fg;

  if (theme.light) {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  } else {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
  }
}

export default function ThemeShiftController() {
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    let currentTheme: ThemeName = 'dark';

    const refreshTheme = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('section[data-theme]'),
      );

      if (sections.length === 0) {
        currentTheme = 'dark';
        setTheme('dark');
        return;
      }

      const viewportMid = window.innerHeight * 0.45;
      let active = sections[0];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportMid) {
          active = section;
        }
      }

      const nextTheme = (active.dataset.theme as ThemeName) || 'dark';
      if (nextTheme !== currentTheme) {
        currentTheme = nextTheme;
        setTheme(nextTheme);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(refreshTheme);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', refreshTheme);
    const timeout = window.setTimeout(refreshTheme, 100);
    refreshTheme();

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', refreshTheme);
    };
  }, [pathname]);

  return null;
}

