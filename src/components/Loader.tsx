"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
        >
          {/* Subtle glowing grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(155,60,255,0.1),transparent_50%)] pointer-events-none" />

          {/* 👤 PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-32 h-32 md:w-40 md:h-40 mb-8 overflow-hidden"
          >
            <img
              src="/rohithbg.png"
              alt="Rohith"
              className="w-full h-full object-cover object-[50%_10%] mix-blend-lighten scale-125"
            />
          </motion.div>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2"
          >
            Rohith Ganesan
          </motion.h1>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#9B3CFF] font-semibold"
          >
            Engineering Systems
          </motion.p>

          {/* LOADING BAR */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 h-[2px] w-48 md:w-64 overflow-hidden rounded-full bg-white/10 relative"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9B3CFF] to-[#B45CFF] rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}