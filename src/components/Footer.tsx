"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-white text-slate-500 py-12 border-t border-black/[0.03] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] border border-black/10 shrink-0 mr-2">
            <img src="/rohith.png" alt="Rohith" className="w-full h-full object-cover scale-110 object-[50%_20%]" />
          </div>
          <span className="text-slate-900 font-bold tracking-widest text-lg">ROHITH</span>
          <span className="hidden md:block w-px h-4 bg-black/10 mx-2" />
          <span className="text-sm font-medium">Rohith Ganesan.</span>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
          <a href="https://github.com/rohithsakshi" target="_blank" className="hover:text-slate-900 transition-colors">Github</a>
          <a href="https://linkedin.com/in/rohith-ganesan-94a206200/" target="_blank" className="hover:text-slate-900 transition-colors">LinkedIn</a>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Rohith Ganesan. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5 text-slate-400">
          <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-cyan-500" />
          Operating at 99.9% Uptime.
        </p>
      </div>
    </footer>
  );
}
