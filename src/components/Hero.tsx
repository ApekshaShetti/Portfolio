"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />
        
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-purple-300 uppercase bg-purple-500/10 rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Salesforce Professional
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Apeksha Shetti
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-zinc-300 mb-8 max-w-lg">
            Associate Success Guide at <span className="text-white font-semibold">Salesforce</span>
          </h2>
          
          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl border-l-2 border-purple-500/30 pl-6">
            Driving customer success through <strong className="text-white">Agentforce</strong> and <strong className="text-white">Data Cloud</strong>. I specialize in Salesforce administration, solution adoption, and delivering high-impact technical support.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:apekshashetti1012@gmail.com"
              className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 hover:scale-105 transition-all shadow-xl shadow-white/5"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/apekshashetti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 border border-white/10 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all backdrop-blur-sm"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[2rem] rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden border-2 border-white/10 shadow-2xl shadow-purple-500/20 bg-zinc-900 group">
            <Image
              src="/profile.jpg"
              alt="Apeksha Sanjay Shetti"
              fill
              className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
              priority
            />
          </div>
          
          {/* Decorative Float Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute top-10 -left-4 md:-left-12 lg:-left-20 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-4 z-20"
          >
             <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/25">
                2+
             </div>
             <div>
                <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Experience</p>
                <p className="font-bold text-white leading-tight">Years at<br/>Salesforce</p>
             </div>
          </motion.div>

           <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 6, delay: 1, ease: "easeInOut" }}
            className="absolute bottom-10 -right-4 md:right-0 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3 z-20"
          >
             <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
             <p className="font-bold text-white text-sm">Open to Work</p>
          </motion.div>
        
        </motion.div>
      </div>
    </section>
  );
}
