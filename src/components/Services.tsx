"use client";

import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants, itemVariants } from "@/lib/animations";
import { Server, Cloud, Shield, Cpu, Wrench, Rocket } from "lucide-react";

const services = [
  { icon: Server, title: "Backend Architecture", desc: "Robust APIs and microservices handling large-scale data." },
  { icon: Cloud, title: "Cloud Integration", desc: "Deploying resilient infrastructure on modern cloud platforms." },
  { icon: Cpu, title: "Full-Stack Web Apps", desc: "End-to-end SAAS development from database to UI." },
  { icon: Shield, title: "System Optimization", desc: "Auditing and upgrading legacy systems for peak performance." },
  { icon: Wrench, title: "Database Design", desc: "Relational modeling and complex query optimization." },
  { icon: Rocket, title: "CI/CD & DevOps", desc: "Automating builds, testing, and production deployments." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeUpVariant} className="text-zinc-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">
            Services
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Engineering <span className="text-[#9B3CFF]">Capabilities.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 rounded-[2rem] bg-[#0D0D12] border border-white/10 hover:border-[#9B3CFF]/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Subtle Purple Glow on Hover */}
                <div className="absolute inset-0 bg-[#9B3CFF]/0 group-hover:bg-[#9B3CFF]/5 transition-colors duration-500 rounded-[2rem] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#121218] border border-white/5 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(155,60,255,0.3)] group-hover:border-[#9B3CFF] transition-all duration-300 text-zinc-400 group-hover:text-[#9B3CFF]">
                    <Icon strokeWidth={1.5} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#9B3CFF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
