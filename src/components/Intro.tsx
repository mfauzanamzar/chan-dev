'use client'

import { useEffect, useState } from 'react';
import FauzanAnimated from "./ui/FauzanAnimated";
import { AnimatePresence, motion } from "framer-motion";


const Intro: React.FC = () => {



  // Overlay state
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const removeTimeout = setTimeout(() => setShowOverlay(false), showOverlay ? 3000 : 0);
    return () => {
      clearTimeout(removeTimeout);
    };
  }, []);

  return (
    <>
      {/* Main content */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            animate={{ opacity: 1 }}
            className="h-screen fixed inset-0 z-50 bg-[#0f0f0f] flex items-center justify-center w-full "
            exit={{ opacity: 0, y: 0 }}
            initial={{ opacity: 1, y: 0 }}
            key="intro-overlay"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <FauzanAnimated />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Intro