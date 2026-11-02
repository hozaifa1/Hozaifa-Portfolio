import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';
import FlipUp from '@/components/FlipUp';
import InteractiveCourseRow from '@/components/InteractiveCourseRow';
import InteractiveWorkCard from '@/components/InteractiveWorkCard';
import JsonLd from '@/components/JsonLd';
import { leadership } from '@/lib/academic';
import { SITE_URL, identity, knowsAbout, personId, websiteId, pageSocial } from '@/lib/seo';
import { contactInfo, courses, publications } from '@/lib/site-content';

const description =
  'About S M Hozaifa Hossain: semiconductor device and neuromorphic hardware researcher, EEE graduate of the University of Dhaka, IT Consultant at Rahman Rahman Huq, CREST 2027 Research Fellow and founder of Nexora Systems.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: '/about' },
  ...pageSocial('/about', 'About · S M Hozaifa Hossain', description, 'profile'),
};

const profilePage = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/about#profile`,
  url: `${SITE_URL}/about`,
  name: `About ${identity.name}`,
  isPartOf: { '@id': websiteId },
  mainEntity: { '@id': personId },
};

const qa = [
  {
    q: 'Who is S M Hozaifa Hossain?',
    a: 'S M Hozaifa Hossain is a semiconductor device and neuromorphic hardware researcher from Dhaka, Bangladesh. He graduated in 2026 with a B.Sc. in Electrical and Electronic Engineering from the University of Dhaka (CGPA 3.72/4.00), has been an IT Consultant at Rahman Rahman Huq (formerly KPMG Bangladesh) since September 2026, is a CREST 2027 Research Fellow at Silicon River Bangladesh, and founded Nexora Systems. Earlier in 2026 he completed a separate contract as Web Design and Development Consultant for the firm\'s official site, rrh.com.bd.',
  },
  {
    q: 'What does S M Hozaifa Hossain research?',
    a: 'He researches ferroelectric gate-all-around transistors (FeFETs) as low-energy artificial synapses for neuromorphic computing. His work combines Synopsys Sentaurus TCAD device simulation, spiking neural networks and high-level synthesis. His thesis device reached a 5410x memory window, and a spiking network built on it classified ECG heartbeats at 83.04% accuracy.',
  },
  {
    q: 'What has he won?',
    a: 'He is a CREST 2027 Research Fellow, won first place at the Siemens EDA HLS Hackathon 2026, and was one of three winners of the IEEE EDS TCAD Hackathon 2026, the first winner from Bangladesh. He also took Best-in-Track at the Tesseract Hackathon 2026 and received an IEEE Humanitarian Technologies Board recognition in 2025.',
  },
  {
    q: 'Where did he study?',
    a: 'He studied Electrical and Electronic Engineering at the University of Dhaka, graduating in 2026 with a CGPA of 3.72 out of 4.00. His undergraduate thesis, defended in September 2026 under Dr. Mainul Hossain, modeled ferroelectric gate-all-around FETs for neuromorphic systems and implemented a spiking network on top of them.',
  },
];

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={profilePage} />
      <section id="hero" data-theme="dark">
        <div className="content">
          <div className="hero-grid">
            <h1 className="hero-name">{identity.name}</h1>
            <div className="hero-tagline">
              I care about the <em>thinking behind the build</em> as much as the shipped
              surface.
            </div>
            <div className="hero-meta">
              <span className="role">Research Fellow &amp; Founder</span>
              <p>IT Consultant, Rahman Rahman Huq</p>
              <p>University of Dhaka (EEE, 2026)</p>
              <p>CREST 2027, Silicon River Bangladesh</p>
              <p>Founder, Nexora Systems</p>
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
                I&apos;m {identity.name}, a semiconductor device and neuromorphic hardware
                researcher. I graduated in Electrical and Electronic Engineering from the
                University of Dhaka in 2026, and I work across TCAD device simulation,
                spiking neural networks, AI systems, and software products. I also founded
                and run{' '}
                <a className="text-link" href={identity.agencyUrl} target="_blank" rel="noreferrer">
                  {identity.agencyName}
                </a>
                , a software and AI agency.
              </p>
            </div>
            <div className="route-copy-side">
              <div className="headshot-frame">
                <Image
                  src={identity.imagePath}
                  alt={identity.name}
                  fill
                  priority
                  sizes="(max-width: 960px) 100vw, 320px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="note-grid">
                <FlipUp>
                  <div className="note-card">
                    <h3>Research lens</h3>
                    <p>
                      Neuromorphic devices, TCAD, photovoltaic optimization, and computer
                      vision have shaped how I think about rigor, validation, and
                      constraints.
                    </p>
                  </div>
                </FlipUp>
                <FlipUp>
                  <div className="note-card">
                    <h3>Leadership</h3>
                    <p>
                      Chair of the IEEE SIGHT Student Branch at DU (2025), where I directed
                      IEEE HTB Project 23-HTB-115 in rural schools. Treasurer of Optica
                      Bangladesh Student Chapter, DU (2023 to present). Joint Secretary
                      (Technical Affairs), Silicon River Student Branch Central Committee
                      (2026 to 2027).
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

      <section id="faq" className="route-panel" data-theme="pearl">
        <div className="content">
          <p className="section-eyebrow">Quick answers</p>
          <h2 className="section-title" style={{ marginBottom: '56px' }}>
            In short
          </h2>
          {qa.map((item) => (
            <div key={item.q} className="qa-block">
              <h2>{item.q}</h2>
              <p>{item.a}</p>
              {item.q.startsWith('Who') ? (
                <p>
                  Founder of{' '}
                  <a className="text-link" href={identity.agencyUrl} target="_blank" rel="noreferrer">
                    {identity.agencyName}
                  </a>
                  . Email{' '}
                  <a className="text-link" href={`mailto:${identity.email}`}>
                    {identity.email}
                  </a>
                  ,{' '}
                  <a className="text-link" href={identity.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                  ,{' '}
                  <a className="text-link" href={identity.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  .
                </p>
              ) : null}
              {item.q.startsWith('What does') ? (
                <p>
                  Expertise: {knowsAbout.join(', ')}.{' '}
                  <Link href="/research" className="text-link">
                    Read the research
                  </Link>
                  .
                </p>
              ) : null}
              {item.q.startsWith('What has') ? (
                <p>
                  <Link href="/awards" className="text-link">
                    See all awards
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="publications" data-theme="cream">
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

      <section id="experience" data-theme="cream">
        <div className="content">
          <p className="section-eyebrow">Work</p>
          <h2 className="section-title" style={{ marginBottom: '24px' }}>
            Experience
          </h2>
          <FlipUp>
            <div className="edu-block">
              <div className="edu-left">
                <div className="edu-label">Rahman Rahman Huq</div>
              </div>
              <div className="edu-right">
                <h3 className="edu-degree">IT Consultant</h3>
                <p className="edu-meta">
                  Dhaka &middot; September 2026 to present &middot; formerly KPMG Bangladesh
                </p>
              </div>
            </div>
          </FlipUp>
          <FlipUp>
            <div className="edu-block">
              <div className="edu-left">
                <div className="edu-label">Rahman Rahman Huq</div>
              </div>
              <div className="edu-right">
                <h3 className="edu-degree">Web Design and Development Consultant (contract)</h3>
                <p className="edu-meta">
                  Dhaka &middot; 2026 &middot; completed &middot; formerly KPMG Bangladesh
                </p>
                <div className="course-list">
                  <div>
                    <span>
                      Consultant for the design and development of the firm&apos;s official
                      website, rrh.com.bd (Next.js + Payload CMS)
                    </span>
                    <a
                      className="text-link"
                      href="https://rrh.com.bd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  </div>
                  <div>
                    <span>Client-side technical lead; wrote the content seeding pipeline</span>
                    <span>Lead</span>
                  </div>
                </div>
              </div>
            </div>
          </FlipUp>
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
                <p className="edu-meta">Graduated 2026 &middot; CGPA 3.72 / 4.00</p>
                <div className="course-list">
                  <div>
                    <span>IELTS Academic: 8.0 overall</span>
                    <span>Test score</span>
                  </div>
                  <div>
                    <span>Thesis: Ferroelectric GAA FETs for neuromorphic systems</span>
                    <span>Defended Sep 2026</span>
                  </div>
                  <div>
                    <span>Advisor: Dr. Mainul Hossain</span>
                    <span>Research</span>
                  </div>
                  {leadership.map((item) => (
                    <div key={item.role}>
                      <span>{item.role}</span>
                      <span>{item.period}</span>
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
