'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: -20 }}
      transition={{ delay: 5.0, duration: 0.6, ease: "easeOut" }}
    >
      <motion.button
        className="relative w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group overflow-hidden"
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Background gradient animation */}
        <motion.div
          animate={{
            rotate: isDark ? 180 : 0,
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <motion.div
            animate={{
              rotateY: isDark ? 180 : 0,
              scale: isDark ? 1 : 0.8,
            }}
            className="flex items-center justify-center"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {isDark ? (
              <FaMoon className="w-6 h-6 text-yellow-300" />
            ) : (
              <FaSun className="w-6 h-6 text-yellow-500" />
            )}
          </motion.div>
        </div>

        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white/20"
          initial={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          whileTap={{ scale: 1, opacity: 1 }}
        />
      </motion.button>

      {/* Tooltip */}
      <motion.div
        className="absolute -bottom-12 right-1/2 transform translate-x-1/2 bg-black/80 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </motion.div>
    </motion.div>
  );
}