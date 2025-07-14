'use client'

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Hero() {
  const headingText = 'Muhammad Fauzan Amzar';
  const headingLetters = headingText.split('');

  // Overlay state
  const [showOverlay, setShowOverlay] = useState(true);
  const [overlayFade, setOverlayFade] = useState(false);

  // Duration for each word drop
  const dropDelayStep = 0.05;
  const lastDropDelay = (headingLetters.length - 1) * dropDelayStep;
  const sweepShowDelay = lastDropDelay + 0.7; // after last word lands
  const overlayFadeDelay = lastDropDelay + 1.7; // after sweep

  // Light sweep state
  const [showSweep, setShowSweep] = useState(false);

  // Schedule sweep and overlay fade
  useEffect(() => {
    // Show sweep after last letter
    const sweepTimeout = setTimeout(() => setShowSweep(true), sweepShowDelay * 1000);
    // Fade overlay after sweep
    const fadeTimeout = setTimeout(() => setOverlayFade(true), overlayFadeDelay * 1000);
    // Remove overlay after fade transition (0.8s)
    const removeTimeout = setTimeout(() => setShowOverlay(false), overlayFadeDelay * 1000 + 800);
    return () => {
      clearTimeout(sweepTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  // Helper to generate more intense glitch keyframes for x and color
  function getGlitchKeyframes() {
    return {
      color: [
        '#fff',
        '#e0e0e0',
        '#00ff00', // bright green
        '#39ff14', // neon green
        '#bdbdbd',
        '#fff', // Ensure final color is white
      ],
      textShadow: [
        '0 0 0 #fff',
        '2px 0 6px #00ff00, -2px 0 6px #39ff14',
        '1px 0 4px #e0e0e0, -1px 0 4px #bdbdbd',
        '2px 0 6px #39ff14, -2px 0 6px #00ff00',
        '0 0 0 #fff', // Ensure final shadow is white
      ],
    };
  }


  return (
    <>
      {/* Main content */}
      <section
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ position: 'relative' }}
      >
        <div className="container relative z-10">
          <div className="flex items-center justify-center">
            <div className="text-center">
              {/* Overlay with glitch effect, absolutely positioned over heading */}
              <AnimatePresence>
                {showOverlay && (
                  <motion.div
                    animate={{ opacity: overlayFade ? 0 : 1 }}
                    exit={{ opacity: 0, y: 0 }}
                    initial={{ opacity: 1, y: 0 }}
                    style={{
                      position: 'fixed',
                      inset: 0,
                      zIndex: 100,
                      pointerEvents: 'none',
                      background: '#111',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  >
                    <div className="mb-4" style={{ position: 'relative', display: 'inline-block' }}>
                      <h1 className="text-4xl md:text-6xl font-bold relative overflow-hidden text-white mb-[134px]">
                        {headingLetters.map((letter, i) => {
                          const glitch = getGlitchKeyframes();
                          return (
                            <motion.span
                              animate={{
                                opacity: 1,
                                color: glitch.color,
                                textShadow: glitch.textShadow,
                                transition: {
                                  color: { duration: 0.32, times: [0, 0.2, 0.4, 0.6, 0.8, 1], delay: i * 0.055 },
                                  textShadow: { duration: 0.32, times: [0, 0.2, 0.4, 0.6, 0.8, 1], delay: i * 0.055 },
                                  opacity: { duration: 0.13, delay: i * 0.055 },
                                },
                              }}
                              initial={{ opacity: 0, color: '#fff', textShadow: '0 0 0 #fff' }}
                              key={i}
                              style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
                              whileHover={{
                                color: ['#fff', '#00ff00', '#39ff14', '#fff'],
                                textShadow: [
                                  '0 0 0 #fff',
                                  '3px 0 8px #00ff00, -3px 0 8px #39ff14',
                                  '-3px 0 8px #39ff14, 3px 0 8px #00ff00',
                                  '0 0 0 #fff',
                                ],
                                transition: { duration: 0.18, repeat: 1 },
                              }}
                            >
                              {letter}
                            </motion.span>
                          );
                        })}
                        {/* Light sweep effect */}
                        {showSweep && (
                          <motion.span
                            animate={{ left: '110%' }}
                            initial={{ left: '-60%' }}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '60%',
                              height: '100%',
                              background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.18) 100%)',
                              filter: 'blur(2px)',
                              pointerEvents: 'none',
                              zIndex: 10,
                            }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                          />
                        )}
                      </h1>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Heading - not animated here, only in overlay */}
              <div className="mb-4">
                <h1 className="text-4xl md:text-6xl font-bold text-[#171717]">
                  Muhammad Fauzan Amzar
                </h1>
              </div>

              {/* Profession - no animation */}
              <div className="mb-8">
                <span className="text-2xl md:text-4xl font-bold text-white bg-primary px-4">
                  Frontend Developer
                </span>
              </div>

              {/* Buttons - no animation */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="text-lg px-8 py-4 bg-primary text-white border border-primary rounded-[8px] font-medium transition-all duration-200 hover:bg-primary hover:scale-105 hover:shadow-lg"
                >
                  View My Work
                </button>
                <button
                  className="text-lg px-8 py-4 bg-transparent text-primary border-2 border-primary rounded-[8px] font-medium transition-all duration-200 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg"
                  onClick={() => window.open('https://drive.google.com/file/d/1i8A_n6xZdGcNwoa4L3l8Q33qVqPKCOz_/view?usp=sharing', '_blank')}
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}