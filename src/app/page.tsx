"use client";

import { useEffect, useState } from "react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Highlights from "@/components/Highlights";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Workflow from "@/components/Workflow";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 🔥 LOADER */}
      {loading && <Loader />}

      {/* 🚀 MAIN CONTENT */}
      {!loading && (
        <main className="bg-black text-white">
          <Hero />
          <Highlights />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Impact />
          <Workflow />
          <Experience />
          <Certifications />
          <FAQ />
          <CTA />
          <Resume />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}