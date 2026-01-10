import Hero from '@/components/Hero';
import TechStackMarquee from '@/components/TechStackMarquee';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStackMarquee />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}
