"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-[#A1A1AA] py-6 border-t border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* LEFT: Logo & Name */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm border border-white/20 shrink-0 mr-1">
            <img src="/rohith.png" alt="Rohith" className="w-full h-full object-cover scale-110 object-[50%_20%]" />
          </div>
          <span className="text-white font-bold tracking-widest text-base sm:text-lg">ROHITH</span>
          <span className="w-px h-4 bg-white/20 mx-1 sm:mx-2" />
          <span className="text-xs sm:text-sm font-light">Rohith Ganesan.</span>
        </div>

        {/* MIDDLE: Copyright (Same line on desktop, drops to bottom on mobile) */}
        <p className="text-[10px] sm:text-xs font-light text-[#A1A1AA] order-last md:order-none mt-2 md:mt-0">
          © {new Date().getFullYear()} Rohith Ganesan. All rights reserved.
        </p>

        {/* RIGHT: Icons */}
        <div className="flex items-center gap-5 sm:gap-6">
          <a href="tel:+919585900772" className="text-[#A1A1AA] hover:text-[#9B3CFF] hover:scale-110 transition-all" aria-label="Call">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="mailto:rohithganesan2002@gmail.com" className="text-[#A1A1AA] hover:text-[#9B3CFF] hover:scale-110 transition-all" aria-label="Mail">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          <a href="https://github.com/rohithsakshi" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#9B3CFF] hover:scale-110 transition-all" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com/in/rohith-ganesan-94a206200/" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#9B3CFF] hover:scale-110 transition-all" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
