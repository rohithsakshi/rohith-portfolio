import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Workflow from "@/components/Workflow";
import Projects from "@/components/Projects";
import Impact from "@/components/Impact";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Loader />
      <Background />
      <Navbar />
      
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Workflow />
        <Projects />
        <Impact />
        <Experience />
        <Certifications />
        <Resume />
        <Services />
        <CTA />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}