"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white"
        >
          {/* 👤 PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
          >
            <img
  src="/rohith.png"
  alt="Rohith"
  className="w-full h-full object-cover scale-125 object-[50%_20%]"
/>
          </motion.div>

          {/* NAME */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-2xl font-medium"
          >
            Rohith Ganesan
          </motion.p>

          {/* ROLE */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-sm uppercase tracking-[0.3em] text-secondary"
          >
            Full Stack Developer
          </motion.p>

          {/* LOADING BAR */}
          <div className="mt-8 h-[2px] w-40 overflow-hidden rounded bg-white/10">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-full bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}