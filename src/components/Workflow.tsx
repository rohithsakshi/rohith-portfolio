"use client";

import { motion } from "framer-motion";

const steps = [
  "Understand Requirements",
  "Plan & Architect",
  "Develop & Implement",
  "Test & Optimize",
  "Deliver & Support",
];

export default function Workflow() {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          How I Work
        </h2>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-5 border border-gray-800 rounded-xl bg-gray-900"
            >
              <span className="text-blue-400 font-bold mr-2">
                {i + 1}.
              </span>
              {step}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}