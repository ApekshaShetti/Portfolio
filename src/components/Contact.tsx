"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-zinc-950">
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
       
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6"
            >
                Ready to make an <span className="text-purple-500">impact?</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-zinc-400 mb-10"
            >
                I'm currently available for new opportunities and collaborations. Let's discuss how I can contribute to your team's success with Salesforce.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                 <a
                  href="mailto:apekshashetti1012@gmail.com"
                  className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 group"
                >
                  <Mail size={20} />
                  <span>Send an Email</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/apekshashetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 border border-zinc-800 bg-zinc-900 text-white font-bold rounded-full hover:bg-zinc-800 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn Profile</span>
                </a>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
