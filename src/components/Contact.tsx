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
    <section id="contact" className="relative pt-12 pb-8 px-6 bg-[#050505] overflow-hidden selection:bg-[#9B3CFF]/30 selection:text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#9B3CFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-center"
        >
          <div className="flex flex-col">
            <div>
              <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-purple-500" />
                <p className="text-zinc-400 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
                  Contact
                </p>
              </motion.div>

              <motion.h2 
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6"
              >
                Let’s build something <br className="hidden lg:block" />
                <span className="text-[#9B3CFF]">impactful together.</span>
              </motion.h2>

              <motion.p 
                variants={fadeUpVariant}
                className="text-[#A1A1AA] text-base sm:text-lg max-w-md leading-relaxed font-light mb-8"
              >
                Ready to scale your product or need help architecting your next big system? Let's turn complex problems into elegant solutions.
              </motion.p>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <motion.div variants={itemVariants} className="relative w-full lg:max-w-xl ml-auto">
            <div className="relative p-6 sm:p-8 bg-[#0A0A0D]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Subtle top glare */}
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase ml-1">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#101014] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9B3CFF]/50 focus:bg-[#15151A] transition-all font-light"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase ml-1">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#101014] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9B3CFF]/50 focus:bg-[#15151A] transition-all font-light"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5 mt-1">
                  <label className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase ml-1">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full h-28 bg-[#101014] border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9B3CFF]/50 focus:bg-[#15151A] transition-all resize-none font-light"
                    required
                  />
                </div>

                {status === "success" && (
                  <p className="text-emerald-400 text-sm font-medium mt-1">Message sent successfully!</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm font-medium mt-1">Something went wrong. Please email directly.</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full bg-[#9B3CFF] text-white font-bold tracking-[0.2em] uppercase text-[10px] sm:text-xs rounded-xl py-4 hover:bg-[#B45CFF] hover:shadow-[0_0_20px_rgba(155,60,255,0.4)] transition-all duration-300 disabled:opacity-50 mt-2 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {loading ? "Sending..." : "Submit Inquiry"}
                    {!loading && <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
