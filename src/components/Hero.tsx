"use client";

import { motion } from "framer-motion";
import { containerVariants, fadeUpVariant } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center bg-slate-50 overflow-hidden pt-20 pb-10">
      {/* 🌌 BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(6,182,212,0.06),transparent_40%)] blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_70%_20%,rgba(99,102,241,0.04),transparent_50%)] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-6 relative z-10">
        
        {/* 🔥 LEFT TEXT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[60%] flex flex-col justify-center"
        >
          {/* LABEL */}
          <motion.p
            variants={fadeUpVariant}
            className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-6"
          >
            Digital Portfolio
          </motion.p>

          {/* HEADLINE */}
          <motion.h1
            variants={fadeUpVariant}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 mb-6"
          >
            Rohith Ganesan. <br/>
            <span className="text-slate-500">Full-Stack Developer.</span>
          </motion.h1>

          {/* VALUE PROPOSITION */}
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-slate-600 max-w-xl leading-relaxed mb-8"
          >
            I architect and engineer scalable web platforms and robust backend systems — focusing on <span className="text-zinc-200">performance</span>, <span className="text-zinc-200">clean code</span>, and real-world impact.
          </motion.p>

          {/* CTA & STATUS */}
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-black bg-white rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </a>
            
            <div className="flex items-center gap-3 glass px-5 py-3 rounded-full border border-black/[0.05]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
              </span>
              <span className="text-sm text-zinc-300 font-medium">Available for new roles</span>
            </div>
          </motion.div>

          {/* 💼 CREDIBILITY STRIP */}
          <motion.div
            variants={fadeUpVariant}
            className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-widest"
          >
            <span className="hover:text-cyan-400 transition-colors cursor-pointer">1.5+ Yrs Exp</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="hover:text-indigo-400 transition-colors cursor-pointer">Full Stack</span>
            <span className="w-1 h-1 rounded-full bg-black/20" />
            <span className="hover:text-slate-900 transition-colors cursor-pointer">Global</span>
          </motion.div>
        </motion.div>

        {/* 🧠 RIGHT IMAGE GLOW */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[40%] relative flex items-center justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 rounded-full blur-[80px] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500 rounded-full blur-[60px] opacity-20" />
            <img
              src="/rohith.png"
              alt="Rohith"
              className="relative z-10 w-full h-full object-cover rounded-[3rem] p-2 glass border-black/[0.05] shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700 object-[50%_20%]"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
