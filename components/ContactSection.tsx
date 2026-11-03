import Link from 'next/link';
import { identity } from '@/lib/seo';
import { contactInfo } from '@/lib/site-content';

export default function ContactSection() {
  return (
    <section id="contact" data-theme="dark">
      <div className="content">
        <h2 className="contact-heading">
          Let&apos;s build something <em>worth building.</em>
        </h2>
        <div className="contact-cta-row">
          <a href={`mailto:${contactInfo.email}`} className="big-cta">
            Email me &rarr;
          </a>
          <a href={contactInfo.github} target="_blank" rel="noreferrer" className="ghost-cta">
            View GitHub &rarr;
          </a>
        </div>
        <div className="contact-links">
          <div className="contact-link-card">
            <span className="label">Email</span>
            <a className="value" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </div>
          <div className="contact-link-card">
            <span className="label">GitHub</span>
            <a className="value" href={contactInfo.github} target="_blank" rel="noreferrer">
              github.com/hozaifa1
            </a>
          </div>
          <div className="contact-link-card">
            <span className="label">LinkedIn</span>
            <a className="value" href={contactInfo.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/s-m-hozaifa-hossain
            </a>
          </div>
          <div className="contact-link-card">
            <span className="label">Phone</span>
            <a className="value" href={`tel:${contactInfo.phone}`}>
              +880 161 500 1456
            </a>
          </div>
        </div>
        <nav className="contact-links" aria-label="Site pages" style={{ marginTop: '48px' }}>
          <Link className="value" href="/research">Research</Link>
          <Link className="value" href="/awards">Awards</Link>
          <Link className="value" href="/publications">Publications</Link>
          <Link className="value" href="/about">About</Link>
        </nav>
        <div className="footer-bottom">
          <span>{identity.name} &middot; {contactInfo.location}</span>
          <span>&copy; 2026 &middot; Designed in Dhaka</span>
        </div>
      </div>
    </section>
  );
}
