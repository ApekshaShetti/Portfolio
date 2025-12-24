"use client"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import "./globals.css";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Apeksha Sanjay Shetti. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
