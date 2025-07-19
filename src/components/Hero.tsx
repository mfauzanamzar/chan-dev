'use client'

import { motion } from 'framer-motion';
import {
  FaLinkedin, FaEnvelope,
  FaReact, FaBootstrap,
  FaWhatsapp,
  FaInstagram,
  FaPhp,
  FaJs
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss, SiFigma
} from 'react-icons/si';
import { Dock, DockLink } from "./ui/Dock";
import { ThemeToggle } from "./ui/ThemeToggle";

const techStack = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Javascript', icon: FaJs, color: 'text-yellow-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
  { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
  { name: 'PHP', icon: FaPhp, color: 'text-blue-500' },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden ">
      {/* Theme Toggle */}
      <ThemeToggle />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Left Side - Name and Description */}
        <div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ delay: 4.0, duration: 0.8, ease: "easeOut" }}
          >
            <Dock>
              <DockLink href="https://instagram.com/mfauzanamzar" label="Follow me on Instagram">
                <FaInstagram className="text-primary" size={40} />
              </DockLink>
              <DockLink href="https://linkedin.com/in/mfauzanamzar/" label="Connect with me on LinkedIn">
                <FaLinkedin className="text-primary" size={40} />
              </DockLink>
              <DockLink href="https://wa.me/6281248615822" label="Message me on WhatsApp">
                <FaWhatsapp className="text-primary" size={40} />
              </DockLink>
              <DockLink href="mailto:mfauzanamzar@gmail.com" label="Send me an email">
                <FaEnvelope className="text-primary" size={40} />
              </DockLink>
            </Dock>
          </motion.div>

          {/* Name */}
          <motion.h1
            animate={{  scale: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6"
            initial={{  scale: 50 }}
            transition={{ delay: 3.0, duration: 1, ease: "easeInOut" }}
          >
            FauzanAmzar
          </motion.h1>

          {/* Tech Stack */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 4, duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {techStack.map((tech, index) => (
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  key={tech.name}
                  transition={{ delay: 4 + index * 0.05, duration: 0.4 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-secondary/20 group-hover:shadow-xl transition-all duration-300">
                    <tech.icon className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 4.0, duration: 0.6 }}
          >
            <a
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              href="https://drive.google.com/file/d/1EvosgujdTlRMGW9lIw7k2qUiGtCExxMt/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
                Download CV
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </div>


      </div>
    </section>
  );
}