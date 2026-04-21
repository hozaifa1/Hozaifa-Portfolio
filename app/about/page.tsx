import ContactSection from '@/components/ContactSection';
import FlipUp from '@/components/FlipUp';
import InteractiveCourseRow from '@/components/InteractiveCourseRow';
import InteractiveWorkCard from '@/components/InteractiveWorkCard';
import { contactInfo, courses, publications } from '@/lib/site-content';

export default function AboutPage() {
  return (
    <main>
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <div className="hero-tagline">
              I care about the <em>thinking behind the build</em> as much as the shipped
              surface.
            </div>
            <div className="hero-meta">
              <span className="role">Research, leadership &amp; academic context</span>
              <p>University of Dhaka</p>
              <p>Emerging Nanodevices Research Group</p>
              <p>IEEE SIGHT Student Branch</p>
              <p style={{ marginTop: '14px' }}>{contactInfo.location}</p>
            </div>
            <div className="hero-sub">
              <span>Profile &middot; Research &middot; Education</span>
            </div>
          </div>
        </div>
      </section>

      <section className="route-panel" data-theme="cream">
        <div className="content">
          <div className="route-copy-grid">
            <div className="route-copy-main">
              <p className="section-eyebrow">A little more context</p>
              <h2 className="section-title">
                Engineering that
                <br />
                stays close to reality.
              </h2>
              <p className="route-copy" style={{ marginTop: '32px' }}>
                I&apos;m S. M. Hozaifa Hossain, an Electrical and Electronic Engineering
                student at the University of Dhaka working across AI systems, software
                products, and computational research. I enjoy taking messy, high-context
                problems and turning them into interfaces, models, and pipelines that feel
                deliberate.
              </p>
            </div>
            <div className="route-copy-side">
              <div className="note-grid">
                <FlipUp>
                  <div className="note-card">
                    <h3>Research lens</h3>
                    <p>
                      Neuromorphic devices, photovoltaic optimization, and computer vision
                      have shaped how I think about rigor, validation, and constraints.
                    </p>
                  </div>
                </FlipUp>
                <FlipUp>
                  <div className="note-card">
                    <h3>Leadership</h3>
                    <p>
                      As Chair of IEEE SIGHT at DU, I led Project Archer and coordinated
                      real deployments in underserved communities.
                    </p>
                  </div>
                </FlipUp>
                <FlipUp>
                  <div className="note-card">
                    <h3>Practice</h3>
                    <p>
                      My favorite work lives where research discipline meets the realities
                      of product delivery and user trust.
                    </p>
                  </div>
                </FlipUp>
              </div>
            </div>
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
                <span>Curious.</span>
                <span>Methodical.</span>
                <span>Accountable.</span>
              </h2>
            </div>
            <div className="principles-desc">
              <p>
                I like systems that explain themselves under pressure. That means
                inspectable metrics, plain-language interfaces, and enough structure that
                the next person can keep moving.
              </p>
              <p>
                My strongest work usually starts with careful listening, then narrows into
                models and software that can survive real people, real data, and real
                deadlines.
              </p>
              <a href={`mailto:${contactInfo.email}`} className="cta-pill">
                Start a conversation
              </a>
            </div>
          </div>
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
          <FlipUp>
            <div className="edu-block">
              <div className="edu-left">
                <div className="edu-label">University of Dhaka</div>
              </div>
              <div className="edu-right">
                <h3 className="edu-degree">B.Sc. in Electrical &amp; Electronic Engineering</h3>
                <p className="edu-meta">Expected July 2026 &middot; CGPA 3.74 / 4.00</p>
                <div className="course-list">
                  <div>
                    <span>Emerging Nanodevices Research Group</span>
                    <span>Research</span>
                  </div>
                  <div>
                    <span>Chair, IEEE SIGHT Student Branch</span>
                    <span>Leadership</span>
                  </div>
                  <div>
                    <span>Nurses&apos; Skill Assessment via CV</span>
                    <span>Publication</span>
                  </div>
                  <div>
                    <span>Project Archer field deployment</span>
                    <span>Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </FlipUp>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
