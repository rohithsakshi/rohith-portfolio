"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { containerVariants, itemVariants } from "@/lib/animations";

export default function About() {
  const [stars, setStars] = useState<{ top: string; left: string; size: number }[]>([]);

  useEffect(() => {
    const generated = [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
    }));
    setStars(generated);
  }, []);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      
      {/* 🌟 STARS */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400 rounded-full"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
            }}
            animate={{ opacity: [0.1, 0.4, 0.1] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT → VISUAL */}
        <div className="relative flex items-center justify-center min-h-[400px] md:min-h-[500px]">
          {/* 🌙 SOFT GLOW */}
          <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 50, boxShadow: "0 0 30px rgba(6,182,212,0.2)" }}
            whileTap={{ scale: 1.1, zIndex: 100, boxShadow: "0 0 40px rgba(6,182,212,0.4)" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
            className="absolute z-10 w-64 h-36 glass rounded-[2rem] border border-black/10 flex flex-col items-center justify-center shadow-xl hover:border-cyan-500/30 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 mb-2 flex items-center justify-center text-cyan-400">⚡</div>
            <p className="text-sm font-semibold text-slate-900 tracking-wide">Backend & APIs</p>
            <p className="text-xs text-slate-500 mt-1">.NET • Node</p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 50, boxShadow: "0 0 30px rgba(99,102,241,0.2)" }}
            whileTap={{ scale: 1.1, zIndex: 100, boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}
            animate={{ y: [0, 15, 0] }}
            transition={{ y: { repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 } }}
            className="absolute z-20 w-64 h-36 glass rounded-[2rem] border border-black/10 -translate-x-20 translate-y-24 flex flex-col items-center justify-center shadow-2xl hover:border-indigo-500/30 transition-colors cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 mb-2 flex items-center justify-center text-indigo-400">✧</div>
            <p className="text-sm font-semibold text-slate-900 tracking-wide">Frontend UI</p>
            <p className="text-xs text-slate-500 mt-1">React • Next.js</p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{ scale: 1.05, zIndex: 50, boxShadow: "0 0 30px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 1.1, zIndex: 100, boxShadow: "0 0 40px rgba(0,0,0,0.1)" }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 2 } }}
            className="absolute z-0 w-56 h-32 glass rounded-[2rem] border border-black/10 translate-x-32 -translate-y-20 flex flex-col items-center justify-center shadow-lg opacity-80 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-black/5 mb-2 flex items-center justify-center text-slate-600">☁</div>
            <p className="text-sm font-semibold text-slate-900 tracking-wide">Cloud & Systems</p>
          </motion.div>
        </div>

        {/* RIGHT → TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <motion.p variants={itemVariants} className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            About Me
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Building systems that <br/>
            <span className="text-gradient">scale and perform.</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6 text-slate-600 text-lg leading-relaxed max-w-xl">
            <p>
              I’m a Full Stack Developer focused on creating robust web and cross-platform applications using .NET, React, and modern scalable technologies.
            </p>
            <p>
              My approach bridges the gap between clean, efficient backend architecture and highly intuitive frontend experiences. I don't just write code; I architect systems that are maintainable, efficient, and ready for real-world performance demands.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex gap-4">
            <div className="glass px-6 py-4 rounded-full border border-black/[0.05]">
              <span className="text-slate-900 font-bold">100%</span> 
              <span className="text-slate-500 text-sm ml-2">Clean Code</span>
            </div>
            <div className="glass px-6 py-4 rounded-full border border-black/[0.05]">
              <span className="text-slate-900 font-bold">24/7</span> 
              <span className="text-slate-500 text-sm ml-2">Scalable</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
