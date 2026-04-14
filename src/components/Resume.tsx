"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 md:py-32 px-6 bg-slate-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
        >
          Resume
        </motion.p>

        <motion.h2
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Comprehensive <span className="text-gradient">Timeline.</span>
        </motion.h2>

        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-slate-500 max-w-xl mx-auto mb-10"
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            Download PDF
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </a>
        </motion.div>
      </div>


    </section>
  );
}