import type { MetadataRoute } from 'next';
import { projects } from '@/lib/data';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number }[] = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.9 },
    { path: '/research', priority: 0.9 },
    { path: '/awards', priority: 0.8 },
    { path: '/publications', priority: 0.8 },
    { path: '/portfolio', priority: 0.7 },
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE_URL}${r.path}`,
      lastModified: now,
      priority: r.priority,
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}/portfolio/${p.id}`,
      lastModified: now,
      priority: 0.5,
    })),
  ];
}
