import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from "@/lib/utils";


export default function Home() {
  return (
    <main>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedGridPattern
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
          duration={3}
          maxOpacity={0.1}
          numSquares={30}
          repeatDelay={1}
        />
      </div>
      {/* <SplashCursor /> */}
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </main>
  );
}
