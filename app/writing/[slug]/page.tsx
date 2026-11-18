import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, identity, pageSocial, personId, websiteId } from '@/lib/seo';
import { getPost, posts, type InlinePart, type PostBlock } from '@/lib/writing';

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const path = `/writing/${post.slug}`;
  const social = pageSocial(path, post.seoTitle, post.description, 'article');

  return {
    title: { absolute: post.seoTitle },
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: path },
    ...social,
    openGraph: {
      ...social.openGraph,
      type: 'article',
      publishedTime: post.datePublished,
      authors: [`${SITE_URL}/about`],
    },
  };
}

function Inline({ parts }: { parts: InlinePart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          <span key={index}>{part}</span>
        ) : (
          <a key={index} className="text-link" href={part.href} target="_blank" rel="noopener noreferrer">
            {part.label}
          </a>
        ),
      )}
    </>
  );
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case 'h2':
      return <h2>{block.text}</h2>;
    case 'p':
      return (
        <p>
          <Inline parts={block.parts} />
        </p>
      );
    case 'ul':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <div className="article-table" role="region" aria-label={block.label} tabIndex={0}>
          <table>
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th key={cell} scope="col">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, index) => (
                    <td key={`${index}-${cell}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/writing/${post.slug}`;
  const author = { '@type': 'Person', '@id': personId, name: identity.name, url: SITE_URL };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        isPartOf: { '@id': websiteId },
        datePublished: post.datePublished,
        dateModified: post.datePublished,
        author,
        publisher: author,
        image: `${SITE_URL}/opengraph-image`,
        inLanguage: 'en',
        keywords: post.keywords,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Writing', item: `${SITE_URL}/writing` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <main>
      <JsonLd data={schema} />
      <article>
        <section className="article-hero" data-theme="dark">
          <div className="content">
            <p className="section-eyebrow">
              <Link href="/writing">Writing</Link>
            </p>
            <h1 className="article-title">{post.title}</h1>
            <p className="article-byline">
              By <Link href="/about">{identity.name}</Link> &middot;{' '}
              <time dateTime={post.datePublished}>{post.dateLabel}</time>
            </p>
          </div>
        </section>

        <section className="route-panel" data-theme="cream">
          <div className="content">
            <div className="article-body">
              <p className="article-lead">{post.summary}</p>
              {post.body.map((block, index) => (
                <Block key={index} block={block} />
              ))}
              <p className="article-author">
                <Link href="/about">{identity.name}</Link> {post.authorNote}
              </p>
            </div>
          </div>
        </section>
      </article>

      <ContactSection />
    </main>
  );
}
