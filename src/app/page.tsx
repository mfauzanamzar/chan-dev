import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import SplashCursor from '@/components/animation/SplashCursor';

export default function Home() {
  return (
    <main>
      <SplashCursor />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
