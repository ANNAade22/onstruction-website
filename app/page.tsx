import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

import TrustStrip from "@/components/TrustStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <TrustStrip />

      <Services />
      <Process />
      <Projects />
      <About />
      <Testimonials />

      <Footer />
    </main>
  );
}
