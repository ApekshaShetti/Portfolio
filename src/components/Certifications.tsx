"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Salesforce Certified Platform Administrator",
    url: "https://drive.google.com/file/d/1VyrwAYNCFEquPjJLRpwUK5I9kQ8lRPli/view?usp=drivesdk"
  },
  {
    name: "Salesforce Certified Platform App Builder",
    url: "https://drive.google.com/file/d/1dhyuFRMNgxtGgomMIDWx9oHCHRgK_FgB/view?usp=drivesdk"
  },
  {
    name: "Salesforce Certified Sales Cloud Consultant",
    url: "https://drive.google.com/file/d/1AshsAxg8CkidEQxhCq12U_Zdr5KTlwBE/view?usp=drivesdk"
  },
  {
    name: "Salesforce Certified Agentforce Specialist",
    url: "https://drive.google.com/file/d/1amCrtBYYU7km6q0bWL8axfQ0R3YvKkF6/view?usp=drivesdk"
  },
  {
    name: "Salesforce Certified Platform Developer I",
    url: "https://drive.google.com/file/d/1opWoJ6WuGSC6iim6HeiUUjo0LZhClhlp/view?usp=drivesdk"
  },
  {
    name: "Salesforce Certified Data Cloud Consultant",
    url: "https://drive.google.com/file/d/1hSw7QJtT9sWZUJX6CH-R3MIVdvAZL390/view?usp=drivesdk"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-zinc-950/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Certifications
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-purple-500/40 hover:bg-zinc-800/80 hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="mt-1 p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300 shadow-inner shadow-purple-500/20">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg leading-snug text-zinc-100 group-hover:text-white transition-colors">{cert.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 w-fit px-2 py-1 rounded-full border border-emerald-500/20">
                        <CheckCircle size={12} />
                        <span>Verified</span>
                    </div>
                    <ExternalLink size={14} className="text-zinc-600 group-hover:text-white transition-colors" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
