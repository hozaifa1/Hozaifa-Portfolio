import Link from 'next/link';

const navItems = [
  { label: 'Work', href: '/#work' },
  { label: 'Research', href: '/#publications' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Principles', href: '/#principles' },
  { label: 'CV', href: '/#education' },
];

export default function PillNav() {
  return (
    <div className="navwrap">
      <nav className="pillnav">
        <Link href="/" className="nav-brand" aria-label="Hozaifa home">
          <span className="nav-brand-dot" />
          Hozaifa
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>
        <a href="mailto:20hozaifa02@gmail.com" className="nav-cta">
          Get in touch
        </a>
      </nav>
    </div>
  );
}

