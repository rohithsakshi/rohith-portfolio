"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

// ✅ PREMIUM EASING
const easeOut = [0.22, 1, 0.36, 1] as const;

// 🎬 VARIANTS
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOut, // ✅ FIXED
    },
  },
};

export default function About() {
  const [stars, setStars] = useState<
    { top: string; left: string; size: number }[]
  >([]);

  useEffect(() => {
    const generated = [...Array(50)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
    }));
    setStars(generated);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
      
      {/* 🌌 NOISE */}
      <div className="absolute inset-0 noise pointer-events-none" />

      {/* 🌟 STARS */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: easeOut, // ✅ consistency boost
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        
        {/* LEFT → VISUAL */}
        <div className="relative flex items-center justify-center min-h-[400px]">

          {/* 🌙 SOFT GLOW */}
          <div className="absolute w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full" />

          {/* CARD 1 */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: easeOut }}
            className="absolute w-64 h-36 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center hover:scale-105 transition"
          >
            <p className="text-sm text-white/70">.NET · APIs · Backend</p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: easeOut }}
            className="absolute w-64 h-36 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl translate-x-28 translate-y-20 flex items-center justify-center hover:scale-105 transition"
          >
            <p className="text-sm text-white/70">React · UI · Frontend</p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 6.5, ease: easeOut }}
            className="absolute w-56 h-32 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl -translate-x-28 -translate-y-20 flex items-center justify-center hover:scale-105 transition"
          >
            <p className="text-sm text-white/70">Performance · Systems</p>
          </motion.div>
        </div>

        {/* RIGHT → TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeRight}
            className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4"
          >
            About
          </motion.p>

          <motion.h2
            variants={fadeRight}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            Building systems that scale and perform
          </motion.h2>

          <motion.p
            variants={fadeRight}
            className="text-lg text-white/60 leading-relaxed max-w-xl"
          >
            I’m a Full Stack Developer focused on creating scalable web and
            cross-platform applications using .NET, React, and modern
            technologies.
            <br /><br />
            My approach combines clean backend architecture with intuitive
            frontend experiences — delivering systems that are efficient,
            maintainable, and built for real-world performance.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}