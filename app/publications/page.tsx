import type { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';
import { publications } from '@/lib/academic';
import { SITE_URL, identity, personId, pageSocial } from '@/lib/seo';

const description =
  'Publications by S M Hozaifa Hossain: IJABC 2024 on nursing activity recognition, Social Network Analysis and Mining 2026 on Reddit polarization, and IEEE EDTM 2026 on metasurface inverse design.';

export const metadata: Metadata = {
  title: 'Publications',
  description,
  alternates: { canonical: '/publications' },
  ...pageSocial('/publications', 'Publications · S M Hozaifa Hossain', description),
};

const articles = {
  '@context': 'https://schema.org',
  '@graph': publications.map((pub) => ({
    '@type': 'ScholarlyArticle',
    '@id': `${SITE_URL}/publications#${pub.id}`,
    headline: pub.title,
    name: pub.title,
    datePublished: String(pub.year),
    author: pub.authors.map((name) =>
      name === identity.name ? { '@id': personId } : { '@type': 'Person', name },
    ),
    isPartOf: { '@type': 'Periodical', name: pub.venue },
    url: `${SITE_URL}/publications`,
  })),
};

export default function PublicationsPage() {
  return (
    <main>
      <JsonLd data={articles} />
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <h1 className="hero-tagline">
              Publications by <em>{identity.name}.</em>
            </h1>
            <div className="hero-meta">
              <span className="role">Peer-reviewed</span>
              <p>2 journal articles</p>
              <p>1 conference paper</p>
              <p style={{ marginTop: '14px' }}>{identity.location}</p>
            </div>
            <p className="hero-bio">
              Papers in activity recognition, social network analysis and nanophotonic
              device design, with co-authors from the University of Dhaka and beyond.
            </p>
            <div className="hero-sub">
              <span>Publications &middot; 2024 &ndash; 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section id="publications" className="route-panel" data-theme="pearl">
        <div className="content">
          <p className="section-eyebrow">Academic output</p>
          <h2 className="section-title">
            Full
            <br />
            citation list
          </h2>
          <div className="cite-list">
            {publications.map((pub) => (
              <article key={pub.id} className="cite" id={pub.id}>
                <div className="cite-id">
                  [{pub.id}] {pub.type} &middot; {pub.status} &middot; {pub.year}
                </div>
                <h2>{pub.title}</h2>
                <p>{pub.authors.join(', ')}.</p>
                <p>
                  <em>{pub.venue}</em>
                  {pub.venueDetail ? `, ${pub.venueDetail}` : ''}, {pub.year}.
                  {pub.note ? ` ${pub.note}` : ''}
                </p>
                <p>{pub.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
