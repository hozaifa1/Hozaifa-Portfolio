import Hero from '@/components/Hero';
import TechStackMarquee from '@/components/TechStackMarquee';
import About from '@/components/About';
import Certifications from '@/components/Certifications';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <TechStackMarquee />
      <About />
      <Certifications />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}
