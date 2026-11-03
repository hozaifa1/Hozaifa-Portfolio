import type { Metadata } from 'next';
import AwardRows from '@/components/AwardRows';
import ContactSection from '@/components/ContactSection';
import { identity, pageSocial } from '@/lib/seo';

const description =
  'Awards and recognition for S M Hozaifa Hossain: CREST 2027 Research Fellow, Siemens EDA HLS Hackathon 2026 1st place, IEEE EDS TCAD Hackathon 2026 winner, Tesseract 2026 Best-in-Track.';

export const metadata: Metadata = {
  title: 'Awards & recognition',
  description,
  alternates: { canonical: '/awards' },
  ...pageSocial('/awards', 'Awards & recognition · S M Hozaifa Hossain', description),
};

export default function AwardsPage() {
  return (
    <main>
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <h1 className="hero-tagline">
              Awards &amp; recognition for <em>{identity.name}.</em>
            </h1>
            <div className="hero-meta">
              <span className="role">Honors</span>
              <p>CREST 2027 Research Fellow</p>
              <p>Siemens EDA HLS: 1st place</p>
              <p>IEEE EDS TCAD: winner</p>
              <p style={{ marginTop: '14px' }}>{identity.location}</p>
            </div>
            <p className="hero-bio">
              Five recognitions from 2025 to 2026, each with what was built and the numbers
              behind it.
            </p>
            <div className="hero-sub">
              <span>Awards &middot; 2025 &ndash; 2027</span>
            </div>
          </div>
        </div>
      </section>

      <section id="awards" className="route-panel" data-theme="cream">
        <div className="content">
          <p className="section-eyebrow">Honors &amp; awards</p>
          <h2 className="section-title">
            What have
            <br />
            I won?
          </h2>
          <AwardRows detailed />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
