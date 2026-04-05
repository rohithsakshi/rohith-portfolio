"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // 🧠 Detect scroll for background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🔥 LOGO */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          IZRA
        </Link>

        {/* 🧭 NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          
          <Link href="#about" className="hover:text-white transition">
            About
          </Link>

          <Link href="#skills" className="hover:text-white transition">
            Skills
          </Link>

          <Link href="#projects" className="hover:text-white transition">
            Projects
          </Link>

          <Link href="#experience" className="hover:text-white transition">
            Experience
          </Link>

          <Link href="#certifications" className="hover:text-white transition">
            Certifications
          </Link>

          {/* 💎 RESUME LINK */}
          <Link href="/resume" className="hover:text-white transition">
            Resume
          </Link>
        </div>

        {/* 🚀 CTA BUTTON */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-white text-black text-sm font-medium hover:scale-105 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.nav>
  );
}