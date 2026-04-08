"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Shield, Cpu, Wrench, Rocket } from "lucide-react";

const services = [
  { icon: Server, title: "IT Support", desc: "Troubleshooting systems and resolving technical issues quickly." },
  { icon: Cloud, title: "Cloud Solutions", desc: "Deploying scalable infrastructure and cloud-based systems." },
  { icon: Cpu, title: "System Design", desc: "Designing efficient and scalable system architectures." },
  { icon: Shield, title: "Security Optimization", desc: "Improving system security and preventing vulnerabilities." },
  { icon: Wrench, title: "Automation", desc: "Automating repetitive tasks using scripts and tools." },
  { icon: Rocket, title: "Deployment", desc: "CI/CD pipelines and production deployment management." },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Services I Offer
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl border border-gray-800 bg-gray-900"
              >
                <Icon className="mb-4 text-blue-400" size={32} />
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}