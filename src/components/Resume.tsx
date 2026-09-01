"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function Resume() {
  return (
    <section id="resume" className="relative py-32 md:py-48 px-6 bg-[#050505] overflow-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-8 bg-purple-500" />
          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-zinc-500 text-[10px] font-semibold tracking-[0.3em] uppercase"
          >
            Resume
          </motion.p>
          <div className="h-[1px] w-8 bg-purple-500" />
        </div>

        <motion.h2
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight"
        >
          Comprehensive <br className="hidden md:block"/>
          <span className="text-purple-500">Timeline.</span>
        </motion.h2>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-zinc-400 max-w-xl mx-auto mb-16 text-sm md:text-base leading-relaxed font-light"
        >
          Dive deeply into my professional track record, technical foundations, and project history.
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#050505] text-xs font-bold uppercase tracking-[0.2em] hover:bg-purple-500 hover:text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500 group"
          >
            Download PDF
            <svg className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}