'use client'

import { Terminal, TypingAnimation, AnimatedSpan } from "./ui/Terminal";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      <div className="container relative ">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center gap-10 justify-between">
            <div className="text-left">
              <h1 className="text-4xl md:text-7xl font-bold text-primary tracking-[0.3em]">
                  MUHAMMAD <br/> FAUZAN<br/> AMZAR
              </h1>
            </div>


            <Terminal >
              <TypingAnimation delay={3500}>&gt; skill -v</TypingAnimation>
              <AnimatedSpan className="text-yellow-400" delay={3700}>
                React.js
              </AnimatedSpan>
              <AnimatedSpan className="text-yellow-400" delay={3900}>
                Next.js
              </AnimatedSpan>
              <AnimatedSpan className="text-yellow-400" delay={4100}>
                Laravel
              </AnimatedSpan>
              <AnimatedSpan className="text-yellow-400" delay={4300}>
                 PHP
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-500 " delay={4500}>
                Bootstrap
              </AnimatedSpan>
              <AnimatedSpan className="text-blue-500" delay={4700}>
              Tailwind CSS
              </AnimatedSpan>
              <TypingAnimation className="text-green-500" delay={5000}>
                All skills loaded. Ready to build!
              </TypingAnimation>
            </Terminal>
          </div>
        </div>
      </div>
    </section>

  );
}