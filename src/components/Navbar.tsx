"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <button onClick={() => scrollToSection('#about')} className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-black/20 overflow-hidden">
            <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
            <span className="relative font-black text-lg tracking-tighter text-white z-10">
              A<span className="text-purple-500">S</span>
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-sm font-medium transition-all duration-300 relative px-1 ${
                      activeSection === link.href.substring(1)
                        ? "text-purple-400"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            
            <a
              href="/resume.pdf"
              download="Apeksha_Shetti_Resume.pdf"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-full transition-all border border-white/10 hover:border-purple-500/50"
            >
              <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                  {mobileMenuOpen ? <X /> : <Menu />}
              </button>
          </div>
        </div>
      </motion.nav>

       {/* Mobile Menu */}
       <AnimatePresence>
         {mobileMenuOpen && (
          <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed top-[70px] left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 z-40 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left text-lg font-medium py-3 border-b border-white/5 ${
                    activeSection === link.href.substring(1)
                      ? "text-purple-400"
                      : "text-zinc-400"
                  }`}
                >
                  {link.name}
                </button>
              ))}
               <a
                  href="/resume.pdf"
                  download="Apeksha_Shetti_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-4 mt-2 text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg shadow-purple-900/20"
              >
                  <Download size={18} />
                  Download Resume
              </a>
            </div>
          </motion.div>
         )}
       </AnimatePresence>
    </>
  );
}
