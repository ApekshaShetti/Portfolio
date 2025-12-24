"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-black selection:bg-purple-500/30"
    >
      {/* Background Overlay Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] md:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] -z-10 mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <div className="flex flex-wrap items-center gap-4 mb-8">
            {/* Shimmer Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest uppercase bg-zinc-900/50 rounded-full border border-white/10 backdrop-blur-md relative overflow-hidden group">
              <span className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_#a855f7]" />
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                Salesforce Professional
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>

            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold tracking-widest uppercase bg-green-500/10 text-green-400 rounded-full border border-green-500/20 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Work
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
              Apeksha
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Shetti
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-zinc-400 mb-8 max-w-lg">
            Associate Success Guide at{" "}
            <span className="text-white font-semibold">Salesforce</span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
            Customer success champion specializing in{" "}
            <strong className="text-white font-medium">Agentforce</strong> &{" "}
            <strong className="text-white font-medium">Data Cloud</strong>.
            Translating complex technical requirements into scalable business
            solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:apekshashetti1012@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Mail
                size={20}
                className="group-hover:-rotate-12 transition-transform"
              />
              <span>Email Me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/apekshashetti"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 border border-zinc-700 bg-zinc-900/50 text-white font-bold rounded-full hover:bg-zinc-800 hover:border-purple-500/50 hover:scale-105 transition-all backdrop-blur-sm"
            >
              <Linkedin
                size={20}
                className="group-hover:text-purple-400 transition-colors"
              />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end py-10 lg:py-0"
        >
          {/* Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 rounded-full blur-3xl -z-10" />

          <div className="relative w-64 h-80 md:w-96 md:h-[30rem] rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl shadow-purple-500/10 bg-zinc-900 group transition-all duration-500 lg:mr-48">
            <img
              src="/profile.jpg"
              alt="Apeksha Sanjay Shetti"
              className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
              loading="eager"
            />
            {/* Glass Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Border Highlight */}
            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none" />
          </div>
          
           {/* Decorative frame elements */}
           <div className="absolute -z-10 w-64 h-80 md:w-80 md:h-[28rem] rounded-3xl border-2 border-purple-500/20 -rotate-3 group-hover:-rotate-6 transition-transform duration-500 lg:mr-48" />
        </motion.div>
      </div>
    </section>
  );
}
