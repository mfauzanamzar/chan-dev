'use client'

import { motion } from 'framer-motion';
import Lanyard from './animation/Lanyard';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary opacity-5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="flex items-center justify-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I&apos;m <span className="text-primary">Alex</span>
              <br />
              <span className="text-secondary">Frontend Developer</span>
            </h1>

            <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto">
            Crafting beautiful and functional web experiences with modern technologies
            </p>

            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            View My Work
            </motion.button>
          </motion.div>
        </div>
      </div>

      <Lanyard gravity={[0, -40, 0]} position={[0, 0, 30]} />
    </section>
  );
}