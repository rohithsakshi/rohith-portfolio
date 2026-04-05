"use client";

import { motion, type Variants } from "framer-motion";

const name = "Rohith Ganesan";

// ✅ REUSABLE EASING (premium smooth)
const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 ANIMATION VARIANTS
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut, // ✅ FIXED
    },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easeOut, // ✅ FIXED
    },
  },
};

export default function Hero() {
  return (
    <section className="h-screen w-full flex bg-black text-white relative overflow-hidden">
      
      {/* 🌌 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none"></div>

      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,255,255,0.06),transparent_30%)] blur-3xl"></div>

      {/* LEFT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-[65%] flex flex-col justify-center px-20 z-10"
      >
        
        {/* PORTFOLIO */}
        <motion.p
          variants={fadeUp}
          className="text-sm tracking-[0.2em] uppercase text-white/40 mb-4"
        >
          Portfolio
        </motion.p>

        {/* NAME */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl font-semibold leading-tight"
        >
          {name}
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg text-white/60 max-w-md leading-relaxed"
        >
          Full Stack Developer building scalable web applications with .NET,
          React, and modern backend systems.
        </motion.p>

        {/* TECH STACK */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap gap-3 text-sm text-white/40"
        >
          {[".NET", "React", "Next.js", "SQL", "REST APIs"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.03] transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 hover:scale-[1.02] transition">
            Contact Me
          </button>
        </motion.div>

        {/* STATUS */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-sm text-white/40"
        >
          Open to freelance & full-time opportunities
        </motion.p>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        variants={imageReveal}
        initial="hidden"
        animate="show"
        className="w-[35%] relative flex items-center justify-center overflow-hidden"
      >
        <img
          src="/rohith.png"
          alt="Rohith"
          className="w-full h-full object-cover object-[70%_center] opacity-95 contrast-105 brightness-95"
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent"></div>

        {/* SOFT LIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.06),transparent_60%)]"></div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40"
      >
        <span className="text-xs tracking-widest">Scroll</span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-2"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}