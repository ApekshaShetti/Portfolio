"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-12 bg-zinc-950/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education
          </h2>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <GraduationCap size={120} />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="p-4 bg-purple-500/10 rounded-2xl text-purple-400">
                    <GraduationCap size={32} />
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Bachelor of Technology (B.Tech)</h3>
                    <p className="text-lg text-zinc-300 mb-1">Computer Science Engineering</p>
                    <p className="text-purple-400 font-medium">Sanjay Ghodawat University</p>
                </div>
                <div className="flex flex-col items-end gap-2 text-right w-full md:w-auto">
                     <div className="inline-flex items-center gap-2 text-zinc-400 text-sm bg-black/40 px-3 py-1.5 rounded-full border border-white/5">
                        <Calendar size={14} />
                        2019 – 2023
                     </div>
                     <div className="font-bold text-white bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                        CGPA: 8.8 / 10
                     </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
