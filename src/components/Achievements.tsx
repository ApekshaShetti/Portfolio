"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Target } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Recognitions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ranger Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-colors"
          >
             <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target size={180} />
             </div>
             
             <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 relative z-10 text-center sm:text-left">
                <div className="bg-yellow-500/10 p-4 rounded-2xl text-yellow-400 border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.1)]">
                    <Star size={40} fill="currentColor" />
                </div>
                <div>
                    <h3 className="text-3xl font-bold text-white">Four Star Ranger</h3>
                    <p className="text-zinc-400 mt-1">Salesforce Trailhead</p>
                </div>
             </div>

             <div className="grid grid-cols-3 gap-4 relative z-10">
                <div className="text-center p-4 bg-black/50 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold text-white mb-1">539</p>
                    <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider">Badges</p>
                </div>
                <div className="text-center p-4 bg-black/50 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold text-white mb-1">227k+</p>
                    <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider">Points</p>
                </div>
                <div className="text-center p-4 bg-black/50 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors">
                    <p className="text-2xl md:text-3xl font-bold text-white mb-1">60</p>
                    <p className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider">Trails</p>
                </div>
             </div>
          </motion.div>

          {/* Agentblazer Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
             className="p-8 md:p-10 bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border border-white/10 flex flex-col justify-center hover:border-purple-500/30 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Trophy className="text-purple-400" size={24} />
                </div>
                Agentblazer Titles
            </h3>
            
            <div className="space-y-6">
                {[
                    { title: "Agentblazer Legend", desc: "Designed and managed advanced end-to-end Agentforce solutions" },
                    { title: "Agentblazer Innovator", desc: "Built and led Agentforce solutions to drive business results" },
                    { title: "Agentblazer Champion", desc: "Learned core Agentforce concepts and built a foundational agent" }
                ].map((award, i) => (
                    <div key={i} className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                        <div>
                            <h4 className="font-bold text-lg text-zinc-200 group-hover:text-white transition-colors">{award.title}</h4>
                            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 leading-relaxed max-w-sm">{award.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
