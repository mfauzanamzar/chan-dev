'use client'

import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container relative z-10">
        <div className="flex items-center justify-center">
          <div className="text-center">
            {/* Heading - from top */}
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className="mb-4"
              initial={{ y: -120, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.35, stiffness: 400, damping: 22, duration: 0.9, delay: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-[#171717] font-unbounded">
                Hi, I'm <span className="text-[#171717]">Fauzan</span>
              </h1>
            </motion.div>

            {/* Profession - from top, slight delay */}
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className="mb-8"
              initial={{ y: -120, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0.35, stiffness: 400, damping: 22, duration: 0.9, delay: 0.15 }}
            >
              <span className="text-2xl md:text-4xl font-bold text-white font-Inter bg-primary px-4">
                Frontend Developer
              </span>
            </motion.div>

            {/* Buttons - fade in from bottom */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                animate={{ y: 0, opacity: 1 }}
                className="text-lg px-8 py-4 bg-primary text-white border border-primary rounded-[8px] font-medium transition-all duration-200 hover:bg-primary hover:scale-105 hover:shadow-lg"
                initial={{ y: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              >
                View My Work
              </motion.button>
              <motion.button
                animate={{ y: 0, opacity: 1 }}
                className="text-lg px-8 py-4 bg-transparent text-primary border-2 border-primary rounded-[8px] font-medium transition-all duration-200 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg"
                initial={{ y: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
              >
                Download CV
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}