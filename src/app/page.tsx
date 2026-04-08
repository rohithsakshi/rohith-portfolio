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


export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
<Projects />
<Impact />
<Workflow />
<FAQ />
<CTA />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}