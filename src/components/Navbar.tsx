"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Skills", "Projects", "Experience", "Certifications"];

  return (
    <div className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ${scrolled ? "pt-4 px-4" : "pt-0 px-0"}`}>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`transition-all duration-500 flex items-center justify-between relative ${
          scrolled 
            ? "bg-[#050505]/70 backdrop-blur-lg border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)] h-14 px-5 lg:px-6 gap-6 w-[95%] md:w-max max-w-5xl mx-auto" 
            : "w-full border-b border-transparent h-24 px-6 lg:px-12 max-w-[1400px]"
        }`}
      >
        {/* 🚀 BRANDING */}
        <Link href="/" className="group flex items-center gap-3 relative z-20">
          <span className={`font-bold tracking-[0.3em] text-white transition-all duration-300 ${scrolled ? "text-sm" : "text-lg"}`}>ROHITH</span>
        </Link>

        {/* 🧭 DESKTOP NAV LINKS */}
        <div className={`hidden md:flex items-center transition-all duration-300 ${scrolled ? "gap-5 mx-6" : "gap-8"}`}>
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-[#9B3CFF] transition-colors duration-300 ${scrolled ? "text-[9px]" : "text-[10px]"}`}
            >
              {item}
            </Link>
          ))}
          <div className="w-px h-3 bg-white/10" />
          <Link 
            href="#resume" 
            className={`font-semibold uppercase tracking-[0.2em] text-zinc-400 hover:text-[#9B3CFF] transition-colors duration-300 ${scrolled ? "text-[9px]" : "text-[10px]"}`}
          >
            Resume
          </Link>
        </div>

        {/* 🚀 DESKTOP CTA BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className={`group flex items-center justify-center gap-2 rounded-full border border-purple-500/50 bg-transparent text-white uppercase tracking-[0.2em] font-bold hover:bg-purple-500/10 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(155,60,255,0.4)] transition-all duration-300 ${
              scrolled ? "px-4 py-1.5 text-[9px]" : "px-6 py-2.5 text-[10px]"
            }`}
          >
            Let's Talk
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* 🍔 MOBILE MENU TOGGLE */}
        <button 
          className="md:hidden relative z-20 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* 📱 FULLSCREEN MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[-1] bg-[#050505]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center min-h-screen w-full"
            >
              <div className="flex flex-col items-center gap-10">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-medium tracking-wide text-zinc-200 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="#resume"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-medium tracking-wide text-zinc-200 hover:text-white transition-colors mt-2"
                >
                  Resume
                </Link>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 rounded-full border border-purple-500/50 bg-purple-500/10 px-8 py-3 text-lg font-semibold tracking-widest text-white hover:bg-purple-500/20 transition-all"
                >
                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
