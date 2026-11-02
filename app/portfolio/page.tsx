import type { Metadata } from 'next';
import { pageSocial } from '@/lib/seo';
import ContactSection from '@/components/ContactSection';
import InteractiveWorkCard from '@/components/InteractiveWorkCard';
import { projects } from '@/lib/data';
import { getProjectShowcase, marqueeItems } from '@/lib/site-content';

const description =
  'Selected software and AI case studies by S M Hozaifa Hossain: differentiable TCAD research, open-source contributions, agentic AI and RAG systems, production ERP and LMS systems, and Android tools.';

export const metadata: Metadata = {
  title: 'Portfolio',
  description,
  alternates: { canonical: '/portfolio' },
  ...pageSocial('/portfolio', 'Portfolio · S M Hozaifa Hossain', description),
};

export default function PortfolioPage() {
  const visibleProjects = projects;

  return (
    <main>
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <h1 className="hero-tagline">
              Case studies from <em>research, AI systems and production software.</em>
            </h1>
            <div className="hero-meta">
              <span className="role">Selected builds</span>
              <p>Research and hardware</p>
              <p>AI systems</p>
              <p>Apps and web</p>
            </div>
            <div className="hero-sub">
              <span>Portfolio index &middot; {visibleProjects.length} projects</span>
            </div>
          </div>
        </div>
      </section>

      <section id="work" data-theme="dark">
        <div className="content">
          <div className="work-header">
            <div>
              <p className="section-eyebrow">Selected work - full archive</p>
              <h2 className="section-title">
                Recent
                <br />
                projects
              </h2>
            </div>
          </div>

          <div className="work-list">
            {visibleProjects.map((project, index) => {
              const theme = getProjectShowcase(project.id, index);

              return (
                <InteractiveWorkCard
                  key={project.id}
                  background={theme.background}
                  motif={theme.motif}
                  motif2={theme.motif2}
                  title={
                    <>
                      {project.title}
                      <br />
                      <span style={{ opacity: 0.72 }}>{project.category}</span>
                    </>
                  }
                  brand={project.client}
                  brandMeta={project.status}
                  brandMark={theme.brandMark}
                  client={project.client}
                  subtitle={project.description}
                  href={`/portfolio/${project.id}`}
                  pillLabel="View Case Study"
                  reverse={index % 2 === 1}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="route-panel" data-theme="pearl">
        <div className="content">
          <div className="route-copy-grid">
            <div className="route-copy-main">
              <p className="section-eyebrow">How the archive is shaped</p>
              <h2 className="section-title">
                Products,
                <br />
                models, and systems.
              </h2>
            </div>
            <div className="route-copy-side">
              <p className="route-copy">
                The archive runs from research and hardware work (differentiable TCAD, open-source
                contributions to Tesseract), through AI systems (crack measurement, graded
                anomaly detection, retrieval over title documents), to production apps and
                web products.
              </p>
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

      <ContactSection />
    </main>
  );
}
