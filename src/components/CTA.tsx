"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants } from "@/lib/animations";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 bg-[#050505] overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#9B3CFF]/5 rounded-[100%] blur-[150px] pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative p-12 md:p-20 rounded-[2.5rem] bg-[#101014] border border-white/10 text-center overflow-hidden group">
          {/* Subtle animated border gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          
          {/* Ambient Glow inside CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-[#9B3CFF]/10 blur-[80px] pointer-events-none" />

          <motion.h2 
            variants={fadeUpVariant}
            className="relative z-10 text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Let’s build something <br className="hidden sm:block" />
            <span className="text-[#9B3CFF]">impactful together.</span>
          </motion.h2>

          <motion.p 
            variants={fadeUpVariant}
            className="relative z-10 text-[#A1A1AA] mb-10 text-lg md:text-xl max-w-2xl mx-auto font-light"
          >
            Ready to scale your product or need help architecting your next big system? Let's turn complex problems into elegant solutions.
          </motion.p>

          <motion.div variants={fadeUpVariant} className="relative z-10 inline-block">
            <a 
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 bg-[#9B3CFF] rounded-full hover:bg-[#B45CFF] hover:shadow-[0_0_25px_rgba(155,60,255,0.4)] hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="mr-3">Initiate Contact</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}