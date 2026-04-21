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
            <span className="label">Portfolio</span>
            <a className="value" href={contactInfo.portfolio} target="_blank" rel="noreferrer">
              hozaifa-space.vercel.app
            </a>
          </div>
          <div className="contact-link-card">
            <span className="label">Phone</span>
            <a className="value" href={`tel:${contactInfo.phone}`}>
              +880 161 500 1456
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>S. M. Hozaifa Hossain &middot; {contactInfo.location}</span>
          <span>&copy; 2026 &middot; Designed in Dhaka</span>
        </div>
      </div>
    </section>
  );
}
