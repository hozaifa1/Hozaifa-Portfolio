import type { Metadata } from 'next';
import Link from 'next/link';
import AwardRows from '@/components/AwardRows';
import ContactSection from '@/components/ContactSection';
import InteractiveCourseRow from '@/components/InteractiveCourseRow';
import InteractiveWorkCard from '@/components/InteractiveWorkCard';
import SpecialtiesList from '@/components/SpecialtiesList';
import {
  contactInfo,
  courses,
  featuredWork,
  marqueeItems,
  publications,
} from '@/lib/site-content';
import { identity } from '@/lib/seo';

export const metadata: Metadata = {
  description: identity.oneLineBio,
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main>
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <h1 className="hero-name">{identity.name}</h1>
            <div className="hero-tagline">
              I build <em>brain-inspired hardware</em>, from transistor physics to
              working AI systems.
            </div>
            <div className="hero-meta">
              <span className="role">Semiconductor Device &amp; Neuromorphic Hardware Researcher</span>
              <p>TCAD &amp; Device Physics</p>
              <p>FeFET Neuromorphic Hardware</p>
              <p>AI/ML &amp; Full-Stack</p>
              <p style={{ marginTop: '14px' }}>{contactInfo.location}</p>
            </div>
            <p className="hero-bio">{identity.bio}</p>
            <div className="hero-sub">
              <span>Portfolio &middot; 2026</span>
            </div>
          </div>
        </div>
      </section>

      <section id="specialties" data-theme="cream">
        <div className="content">
          <p className="spec-header">My specialties</p>
          <SpecialtiesList />
        </div>
      </section>

      <section id="work" data-theme="dark">
        <div className="content">
          <div className="work-header">
            <div>
              <p className="section-eyebrow">Selected work - 01/05</p>
              <h2 className="section-title">
                Recent
                <br />
                projects
              </h2>
            </div>
          </div>

          <div className="work-list">
            {featuredWork.map((item) => (
              <InteractiveWorkCard
                key={item.client}
                background={item.background}
                motif={item.motif}
                motif2={item.motif2}
                title={
                  <>
                    {item.titleLines[0]}
                    <br />
                    {item.titleLines[1]}
                  </>
                }
                brand={item.brand}
                brandMeta={item.brandMeta}
                brandMark={item.brandMark}
                client={item.client}
                subtitle={item.subtitle}
                href={item.href}
                pillLabel={item.pillLabel}
                reverse={item.reverse}
                motif2Style={item.motif2Style}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="publications" data-theme="pearl">
        <div className="content">
          <p className="section-eyebrow">Academic output</p>
          <h2 className="section-title">
            Research &amp;
            <br />
            publications
          </h2>
          <div className="work-list" style={{ marginTop: '64px' }}>
            {publications.map((item) => (
              <InteractiveWorkCard
                key={item.client}
                background={item.background}
                motif={item.motif}
                motif2={item.motif2}
                title={
                  <>
                    {item.titleLines[0]}
                    <br />
                    {item.titleLines[1]}
                  </>
                }
                brand={item.brand}
                brandMeta={item.brandMeta}
                brandMark={item.brandMark}
                client={item.client}
                subtitle={item.subtitle}
                href={item.href}
                pillLabel={item.pillLabel}
                reverse={item.reverse}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="awards" data-theme="cream">
        <div className="content">
          <p className="section-eyebrow">Honors</p>
          <h2 className="section-title">
            Awards &amp;
            <br />
            recognition
          </h2>
          <AwardRows />
          <p style={{ marginTop: '32px' }}>
            <Link href="/awards" className="text-link">
              Full details on every award &rarr;
            </Link>
            {' '}&middot;{' '}
            <Link href="/research" className="text-link">
              Research &rarr;
            </Link>
            {' '}&middot;{' '}
            <Link href="/publications" className="text-link">
              All publications &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section id="principles" data-theme="ink">
        <div className="content">
          <div className="principles-grid">
            <p className="principles-label">The principles behind my practice</p>
            <div className="principles-words">
              <h2>
                <span>Rigorous.</span>
                <span>Scalable.</span>
                <span>Purposeful.</span>
              </h2>
            </div>
            <div className="principles-desc">
              <p>
                Good research is more than a headline number. It means devices and models
                that survive real data, simulations you can reproduce, and systems that
                solve problems people actually have.
              </p>
              <p>
                I work between semiconductor device physics, neuromorphic hardware, and
                production software, trained on EEE fundamentals and sharpened by peer
                review and real users.
              </p>
              <a href={`mailto:${contactInfo.email}`} className="cta-pill">
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills-marquee" data-theme="ink">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`} className="mq-item">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="courses" data-theme="dark">
        <div className="content">
          <p className="section-eyebrow">Continuing education</p>
          <h2 className="section-title">
            Certifications
            <br />
            &amp; courses
          </h2>
          <div className="courses-stack">
            {courses.map((course, index) => (
              <InteractiveCourseRow key={course.name} index={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      <section id="education" data-theme="olive">
        <div className="content">
          <p className="section-eyebrow">Academic grounding</p>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            Education
          </h2>
          <div className="edu-block flip-up visible">
            <div className="edu-left">
              <div className="edu-label">University of Dhaka</div>
            </div>
            <div className="edu-right">
              <h3 className="edu-degree">B.Sc. in Electrical &amp; Electronic Engineering</h3>
              <p className="edu-meta">Graduated 2026 &middot; CGPA 3.72 / 4.00</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
