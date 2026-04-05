"use client";

import { motion, type Variants } from "framer-motion";

// ✅ GLOBAL EASING (CONSISTENT)
const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 VARIANTS
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, // ✅ FIXED
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 overflow-hidden">
      
      {/* 🌌 SUBTLE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.05),transparent_50%)] blur-2xl pointer-events-none"></div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center text-center gap-6"
      >
        {/* NAME */}
        <h3 className="text-lg font-semibold tracking-wide">
          Rohith Ganesan
        </h3>

        {/* ROLE */}
        <p className="text-white/50 text-sm max-w-md">
          Full Stack Developer building scalable applications with .NET, React, and modern web technologies.
        </p>

        {/* LINKS */}
        <div className="flex gap-6 text-sm text-white/60">
          <a
            href="https://github.com/rohithsakshi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/rohith-ganesan-94a206200/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:rohithganesan2002@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 my-2"></div>

        {/* COPYRIGHT */}
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Rohith Ganesan. Built with precision.
        </p>
      </motion.div>
    </footer>
  );
}