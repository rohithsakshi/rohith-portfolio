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
    <section id="services" className="relative py-24 md:py-32 bg-white border-t border-black/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <motion.p variants={fadeUpVariant} className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Services
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Engineering <span className="text-gradient">Capabilities.</span>
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
                className="group relative glass p-8 rounded-[2rem] border border-black/[0.03] hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:to-indigo-500/5 transition-colors duration-500 rounded-[2rem]" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-slate-900">
                    <Icon strokeWidth={1.5} size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
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
