"use client";

import { motion, type Variants } from "framer-motion";

// ✅ GLOBAL EASING
const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 VARIANTS
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut, // ✅ FIXED
    },
  },
};

export default function Resume() {
  return (
    <section className="py-24 md:py-32 px-6 bg-black text-white relative overflow-hidden">
      
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.05),transparent_40%)] blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto text-center mb-12">
        
        {/* HEADER */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4"
        >
          Resume
        </motion.p>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          Experience & Work Summary
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white/60 max-w-xl mx-auto"
        >
          Explore my professional journey, technical experience, and project work in detail.
        </motion.p>

        {/* 🔥 QUICK STATS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 flex justify-center gap-6 flex-wrap text-sm text-white/50"
        >
          <span>1.5+ Years Experience</span>
          <span>10+ Projects</span>
          <span>Full Stack (.NET + React)</span>
        </motion.div>

        {/* DOWNLOAD BUTTON */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Download Resume ↓
          </a>
        </motion.div>
      </div>

      {/* RESUME VIEWER */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_40px_rgba(255,255,255,0.05)]"
      >
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
          className="w-full h-[85vh]"
        />
      </motion.div>
    </section>
  );
}