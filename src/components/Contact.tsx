"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpVariant, containerVariants, itemVariants } from "@/lib/animations";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUpVariant} className="text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Contact
          </motion.p>
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Let’s start a <span className="text-gradient">Conversation.</span>
          </motion.h2>
          <motion.p variants={fadeUpVariant} className="text-slate-600 max-w-xl mx-auto leading-relaxed">
            Have a job opportunity, idea, or freelance project? Let’s build something impactful.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-[1fr_1.5fr] gap-8 bg-slate-50 glass rounded-[2rem] border border-black/[0.03] p-6 text-left"
        >
          {/* Quick Info & Socials */}
          <motion.div variants={itemVariants} className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-black/[0.02] flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/10 blur-[60px] pointer-events-none" />
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Connect</h3>
              <div className="space-y-4">
                <a href="mailto:rohithganesan2002@gmail.com" className="block text-slate-600 hover:text-slate-900 transition-colors group">
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 group-hover:text-cyan-400 transition-colors">Email</span>
                  rohithganesan2002@gmail.com
                </a>
                <a href="https://linkedin.com/in/rohith-ganesan-94a206200/" target="_blank" rel="noopener noreferrer" className="block text-slate-600 hover:text-slate-900 transition-colors group">
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 group-hover:text-indigo-400 transition-colors">LinkedIn</span>
                  linkedin.com/in/rohith
                </a>
                <a href="https://github.com/rohithsakshi" target="_blank" rel="noopener noreferrer" className="block text-slate-600 hover:text-slate-900 transition-colors group">
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-1 group-hover:text-zinc-200 transition-colors">GitHub</span>
                  github.com/rohith
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="p-4 md:p-8 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/[0.03] border border-black/[0.05] rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.03] border border-black/[0.05] rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full h-32 md:h-40 bg-white/[0.03] border border-black/[0.05] rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.05] transition-all resize-none"
              required
            />
            {status === "success" && (
              <p className="text-emerald-400 text-sm font-medium">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm font-medium">Something went wrong. Please try emailing directly.</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white font-semibold rounded-xl py-3.5 hover:bg-slate-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
