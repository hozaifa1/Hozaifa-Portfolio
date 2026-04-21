import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactSection from '@/components/ContactSection';
import FlipUp from '@/components/FlipUp';
import InteractiveCourseRow from '@/components/InteractiveCourseRow';
import { projects } from '@/lib/data';
import { contactInfo } from '@/lib/site-content';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

const erpFeatures = [
  { name: 'Live Production Cockpit', provider: 'Realtime output visibility', tag: 'OPS' },
  { name: 'Precision Loss Tracking', provider: 'Waste and mixed fabric control', tag: 'QA' },
  { name: "The 'Mega-Timeline'", provider: 'Chronological audit story', tag: 'LOG' },
  { name: 'True-Finish Progress', provider: 'Shipment honesty layer', tag: 'FIN' },
  { name: "Centralized Order 'Brain'", provider: 'Docs and order context together', tag: 'DOC' },
  { name: 'Financial Control', provider: 'LCs, invoices, reporting', tag: 'FIN' },
];

const lmsFeatures = [
  { name: 'Multi-Program Coverage', provider: 'Academic model breadth', tag: 'EDU' },
  { name: 'Official Syllabi Integration', provider: 'Source-aligned curriculum data', tag: 'SYNC' },
  { name: 'Exam & Result Automation', provider: 'Assessment workflow engine', tag: 'EXAM' },
  { name: 'Major-Aware Result Entry', provider: 'Mismatch prevention layer', tag: 'QA' },
  { name: 'Biometric Integration', provider: 'Attendance sync for 500+ students', tag: 'ID' },
  { name: 'Academic Payment Processing', provider: 'Finance and release automation', tag: 'PAY' },
];

const featureThemeBackgrounds = ['#b8e4cc', '#ede9b0', '#f0816a', '#d4c9f0', '#c8cdd4', '#f5f2ea'];
const featureThemeMotifs = [
  'rgba(10,45,26,0.3)',
  'rgba(58,50,0,0.25)',
  'rgba(255,255,255,0.35)',
  'rgba(26,16,64,0.22)',
  'rgba(26,30,36,0.22)',
  'rgba(20,20,20,0.16)',
];

const projectScreens: Record<string, { src: string; title: string; description: string }[]> = {
  'prova-erp': [
    {
      src: '/projects/erp/erp-dashboard.jpg',
      title: 'Dashboard & control layer',
      description: 'A production cockpit with top-level metrics and fast status visibility.',
    },
    {
      src: '/projects/erp/erp-local-orders.jpg',
      title: 'Local order tracking',
      description: 'Floor-level progress and shipment-sensitive operational context.',
    },
    {
      src: '/projects/erp/erp-samples.jpg',
      title: 'Sample workflow',
      description: 'Sampling, approval states, and document coordination in one place.',
    },
  ],
  'igmis-lms': [
    {
      src: '/projects/lms/home.jpg',
      title: 'Academic dashboard',
      description: 'A single front door for program-level visibility and quick actions.',
    },
    {
      src: '/projects/lms/students.jpg',
      title: 'Student directory',
      description: 'Course and major-aware student management with clearer records.',
    },
    {
      src: '/projects/lms/attendance.jpg',
      title: 'Attendance tracking',
      description: 'Biometric attendance integration surfaced in a usable interface.',
    },
    {
      src: '/projects/lms/results.jpg',
      title: 'Results console',
      description: 'Result management designed to reduce mismatches and manual overhead.',
    },
    {
      src: '/projects/lms/reportcard.jpg',
      title: 'Report card preview',
      description: 'Output views shaped for review, export, and institutional workflows.',
    },
  ],
};

function buildFeatureRows(items: { name: string; provider: string; tag: string }[]) {
  return items.map((item, index) => ({
    ...item,
    background: featureThemeBackgrounds[index % featureThemeBackgrounds.length],
    motif: featureThemeMotifs[index % featureThemeMotifs.length],
    mark: String.fromCharCode(65 + index),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const featureRows =
    project.id === 'prova-erp'
      ? buildFeatureRows(erpFeatures)
      : project.id === 'igmis-lms'
        ? buildFeatureRows(lmsFeatures)
        : [];

  const screens =
    projectScreens[project.id] ??
    (project.image
      ? [
          {
            src: project.image,
            title: project.title,
            description: project.description,
          },
        ]
      : []);

  return (
    <main>
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <div className="hero-tagline">
              {project.title}
              <br />
              <em>{project.client}</em>
            </div>
            <div className="hero-meta">
              <span className="role">Case study</span>
              <p>{project.category}</p>
              <p>{project.status}</p>
              <p>{contactInfo.location}</p>
            </div>
            <div className="hero-sub">
              <span>{project.category} &middot; Detailed breakdown</span>
            </div>
          </div>
        </div>
      </section>

      <section className="route-panel" data-theme="cream">
        <div className="content">
          <div className="route-copy-grid">
            <div className="route-copy-main">
              <p className="section-eyebrow">Project overview</p>
              <h2 className="section-title">
                Why this build
                <br />
                mattered.
              </h2>
              <p className="route-copy" style={{ marginTop: '32px' }}>
                {project.description}
              </p>
              <div className="route-actions" style={{ marginTop: '40px' }}>
                <Link href="/portfolio" className="ghost-cta">
                  Back to archive
                </Link>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="big-cta">
                    View source
                  </a>
                ) : null}
              </div>
            </div>
            <div className="route-copy-side">
              <div className="meta-card">
                <h3>Snapshot</h3>
                <p>
                  {project.client} / {project.status} / {project.tech.slice(0, 3).join(', ')}
                </p>
                <div className="stack-pills">
                  {project.tech.map((tech) => (
                    <span key={tech} className="stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="impact-grid" style={{ marginTop: '56px' }}>
            {Object.entries(project.impact).map(([key, value]) => (
              <div key={key} className="impact-card">
                <div className="value">{value}</div>
                <div className="label">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" data-theme="dark">
        <div className="content">
          <p className="section-eyebrow">System views</p>
          <h2 className="section-title">
            Screens and
            <br />
            surfaces
          </h2>
          <div className="screen-grid">
            {screens.map((screen) => (
              <FlipUp key={screen.src}>
                <div className="screen-card">
                  <div className="screen-frame">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      fill
                      sizes="(max-width: 960px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="screen-copy">
                    <strong>{screen.title}</strong>
                    <p>{screen.description}</p>
                  </div>
                </div>
              </FlipUp>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" data-theme="ink">
        <div className="content">
          <div className="route-copy-grid">
            <div className="route-copy-main">
              <p className="section-eyebrow">What shipped inside</p>
              <h2 className="section-title">
                Key features
                <br />
                and modules
              </h2>
            </div>
            <div className="route-copy-side">
              <p className="route-copy">
                The same motion language from the main homepage carries through here, but
                the content turns toward the architecture, workflow, and operational
                details that made this project useful.
              </p>
            </div>
          </div>

          {featureRows.length > 0 ? (
            <div className="courses-stack" style={{ marginTop: '56px' }}>
              {featureRows.map((feature, index) => (
                <InteractiveCourseRow
                  key={feature.name}
                  index={index}
                  name={feature.name}
                  provider={feature.provider}
                  background={feature.background}
                  motif={feature.motif}
                  mark={feature.mark}
                  tag={feature.tag}
                />
              ))}
            </div>
          ) : (
            <div className="note-grid" style={{ marginTop: '56px' }}>
              {project.highlights.map((highlight) => (
                <FlipUp key={highlight}>
                  <div className="note-card">
                    <h3>Highlight</h3>
                    <p>{highlight}</p>
                  </div>
                </FlipUp>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="education" data-theme="olive">
        <div className="content">
          <p className="section-eyebrow">Delivery summary</p>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            Build notes
          </h2>
          <FlipUp>
            <div className="edu-block">
              <div className="edu-left">
                <div className="edu-label">Project essentials</div>
              </div>
              <div className="edu-right">
                <h3 className="edu-degree">{project.title}</h3>
                <p className="edu-meta">
                  {project.client} &middot; {project.status} &middot; {project.category}
                </p>
                <div className="course-list">
                  {project.highlights.map((highlight, index) => (
                    <div key={highlight}>
                      <span>{highlight}</span>
                      <span>{index + 1}</span>
                    </div>
                  ))}
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
