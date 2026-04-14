"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-slate-50/70 backdrop-blur-2xl border-b border-black/[0.03] shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-black/10 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 shrink-0">
            <img src="/rohith.png" alt="Rohith" className="w-full h-full object-cover scale-110 object-[50%_20%]" />
          </div>
          <span className="text-xl font-bold tracking-widest text-slate-900">ROHITH</span>
        </Link>

        {/* 🧭 NAV LINKS */}
        <div className="hidden md:flex items-center gap-1 glass px-2 py-1.5 rounded-full border border-black/[0.03]">
          {["About", "Skills", "Projects", "Experience", "Certifications"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900 hover:bg-black/5 rounded-full transition-all duration-300"
            >
              {item}
            </Link>
          ))}
          <div className="w-px h-4 bg-black/10 mx-2" />
          <Link 
            href="#resume" 
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 hover:bg-black/5 rounded-full transition-all duration-300"
          >
            Resume
          </Link>
        </div>

        {/* 🚀 CTA BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs uppercase tracking-wider font-bold hover:scale-105 hover:bg-slate-700 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)]"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
