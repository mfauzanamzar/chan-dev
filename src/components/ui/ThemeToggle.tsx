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
        className="relative w-20 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-blue-900 dark:to-purple-900 rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-500 group overflow-hidden"
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated background */}
        <motion.div
          animate={{
            backgroundPosition: isDark ? "100% 50%" : "0% 50%",
          }}
          className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-orange-300 to-pink-300 dark:from-blue-400 via-purple-400 to-indigo-400"
          style={{
            backgroundSize: "200% 200%",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Toggle handle */}
        <motion.div
          animate={{
            x: isDark ? 40 : 0,
            rotate: isDark ? 180 : 0,
          }}
          className="relative z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            duration: 0.6
          }}
        >
          <motion.div
            animate={{
              scale: isDark ? 0 : 1,
              opacity: isDark ? 0 : 1,
            }}
            className="absolute"
            transition={{ duration: 0.3 }}
          >
            <FaSun className="w-4 h-4 text-yellow-500" />
          </motion.div>

          <motion.div
            animate={{
              scale: isDark ? 1 : 0,
              opacity: isDark ? 1 : 0,
            }}
            className="absolute"
            transition={{ duration: 0.3 }}
          >
            <FaMoon className="w-4 h-4 text-blue-600" />
          </motion.div>
        </motion.div>

        {/* Particle effects */}
        <motion.div
          animate={{
            background: isDark
              ? "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)"
              : "radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)"
          }}
          className="absolute inset-0"
          transition={{ duration: 0.8 }}
        />

        {/* Glow effect */}
        <motion.div
          animate={{
            boxShadow: isDark
              ? "0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(147, 51, 234, 0.3)"
              : "0 0 20px rgba(251, 191, 36, 0.5), inset 0 0 20px rgba(249, 115, 22, 0.3)"
          }}
          className="absolute inset-0 rounded-full"
          transition={{ duration: 0.8 }}
        />
      </motion.button>

      {/* Animated tooltip */}
      <motion.div
        className="absolute -bottom-12 right-1/2 transform translate-x-1/2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none shadow-lg border border-yellow-200 dark:border-blue-700"
        initial={{ y: 10, scale: 0.8 }}
        whileHover={{ y: 0, scale: 1 }}
      >
        {isDark ? 'Switch to Light' : 'Switch to Dark'}
      </motion.div>
    </motion.div>
  );
}