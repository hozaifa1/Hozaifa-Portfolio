import type { Metadata } from 'next';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, identity, pageSocial, personRef } from '@/lib/seo';
import { posts } from '@/lib/writing';

const description =
  'Writing by S M Hozaifa Hossain: first-hand technical write-ups on hardware design, high-level synthesis and semiconductor research.';

export const metadata: Metadata = {
  title: 'Writing',
  description,
  alternates: { canonical: '/writing' },
  ...pageSocial('/writing', 'Writing · S M Hozaifa Hossain', description),
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${SITE_URL}/writing#blog`,
  name: `Writing by ${identity.name}`,
  url: `${SITE_URL}/writing`,
  description,
  author: personRef,
  publisher: personRef,
  blogPost: posts.map((post) => ({
    '@type': 'BlogPosting',
    '@id': `${SITE_URL}/writing/${post.slug}#article`,
    headline: post.title,
    url: `${SITE_URL}/writing/${post.slug}`,
    datePublished: post.datePublished,
    author: personRef,
  })),
};

export default function WritingPage() {
  return (
    <main>
      <JsonLd data={blogSchema} />
      <section className="article-hero" data-theme="dark">
        <div className="content">
          <p className="section-eyebrow">Writing</p>
          <h1 className="article-title">Notes from the hardware I build.</h1>
        </div>
      </section>

      <section className="route-panel" data-theme="cream">
        <div className="content">
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.slug} className="post-row">
                <time dateTime={post.datePublished}>{post.dateLabel}</time>
                <h2>
                  <Link href={`/writing/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
