"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants, itemVariants } from "@/lib/animations";
import { Server, Cloud, Cpu, Shield, Wrench, Rocket } from "lucide-react";

const services = [
  { num: "01", icon: Server, title: "Backend Architecture", desc: "Robust APIs and microservices handling large-scale data." },
  { num: "02", icon: Cloud, title: "Cloud Integration", desc: "Deploying resilient infrastructure on modern cloud platforms." },
  { num: "03", icon: Cpu, title: "Full-Stack Web Apps", desc: "End-to-end SaaS development from database to UI." },
  { num: "04", icon: Shield, title: "System Optimization", desc: "Auditing and upgrading legacy systems for peak performance." },
  { num: "05", icon: Wrench, title: "Database Design", desc: "Relational modeling and complex query optimization." },
  { num: "06", icon: Rocket, title: "CI/CD & DevOps", desc: "Automating builds, testing, and production deployments." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex flex-col items-start"
        >
          <motion.p variants={fadeUpVariant} className="text-zinc-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">
            Services
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Engineering <span className="text-[#9B3CFF]">Capabilities.</span>
          </motion.h2>
        </motion.div>

        {/* Technical Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-y-16"
        >
          {/* Vertical Separator Lines (Visible on Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-gradient-to-b from-transparent via-[#9B3CFF]/20 to-transparent z-0">
            {/* Purple nodes */}
            <div className="absolute top-[20%] -left-[2px] w-[5px] h-[5px] rounded-full bg-[#9B3CFF] shadow-[0_0_8px_#9B3CFF]" />
            <div className="absolute top-[70%] -left-[2px] w-[5px] h-[5px] rounded-full bg-[#9B3CFF] shadow-[0_0_8px_#9B3CFF]" />
          </div>
          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-[1px] bg-gradient-to-b from-transparent via-[#9B3CFF]/20 to-transparent z-0">
            {/* Purple nodes */}
            <div className="absolute top-[40%] -left-[2px] w-[5px] h-[5px] rounded-full bg-[#9B3CFF] shadow-[0_0_8px_#9B3CFF]" />
            <div className="absolute top-[85%] -left-[2px] w-[5px] h-[5px] rounded-full bg-[#9B3CFF] shadow-[0_0_8px_#9B3CFF]" />
          </div>

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative flex flex-col items-start z-10 ${
                  index % 3 !== 0 ? "md:pl-10 lg:pl-16" : "md:pr-10 lg:pr-16"
                } ${index % 3 === 1 ? "md:px-10 lg:px-16" : ""}`}
              >
                {/* Icon & Number Row */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Technical Icon Container */}
                  <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-[#050505] transition-all duration-500 group-hover:border-[#9B3CFF]/50 group-hover:shadow-[0_0_20px_rgba(155,60,255,0.2)]">
                    {/* Animated arc SVG on hover */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="49" fill="none" stroke="#9B3CFF" strokeWidth="2" strokeDasharray="307" strokeDashoffset="307" className="group-hover:animate-[drawArc_1s_ease-out_forwards]" />
                    </svg>
                    <Icon strokeWidth={1} size={20} className="text-zinc-500 group-hover:text-white transition-colors duration-300 relative z-10" />
                  </div>
                  
                  {/* Number */}
                  <span className="text-[#9B3CFF]/70 font-mono text-sm tracking-widest group-hover:text-[#9B3CFF] transition-colors duration-300">
                    {service.num} —
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-light max-w-sm">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes drawArc {
          from {
            stroke-dashoffset: 307;
          }
          to {
            stroke-dashoffset: 150;
          }
        }
      `}</style>
    </section>
  );
}
