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

export default function Home() {
  return (
    <main>
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <div className="hero-tagline">
              I build <em>intelligent systems</em> that turn complex data into working
              products.
            </div>
            <div className="hero-meta">
              <span className="role">AI/ML Engineer &amp; Full-Stack Developer</span>
              <p>Computer Vision</p>
              <p>NLP &amp; LLMs</p>
              <p>Production AI</p>
              <p style={{ marginTop: '14px' }}>{contactInfo.location}</p>
            </div>
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
                Good ML engineering is more than a high score on a validation set. It
                means models that survive real data, pipelines that don&apos;t quietly fail
                at 3 a.m., and systems that solve problems people actually have.
              </p>
              <p>
                I work at the intersection of research rigor and production pragmatism,
                trained on EEE fundamentals and sharpened by peer review and production
                users.
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
              <p className="edu-meta">Expected July 2026 &middot; CGPA 3.74 / 4.00</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
