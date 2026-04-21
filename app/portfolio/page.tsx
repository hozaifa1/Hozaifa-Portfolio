import ContactSection from '@/components/ContactSection';
import InteractiveWorkCard from '@/components/InteractiveWorkCard';
import { projects } from '@/lib/data';
import { getProjectShowcase, marqueeItems } from '@/lib/site-content';

export default function PortfolioPage() {
  const visibleProjects = projects.slice(0, 8);

  return (
    <main>
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <div className="hero-tagline">
              Case studies with the <em>same tactile design language</em> carried through
              every project.
            </div>
            <div className="hero-meta">
              <span className="role">Selected builds</span>
              <p>Production software</p>
              <p>AI prototypes</p>
              <p>Research-to-product systems</p>
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
                The collection spans production SaaS, university systems, Android tools,
                LLM experiments, and computer vision prototypes. Every case study keeps
                the same motion language, hover response, and tonal palette as the main
                homepage.
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
