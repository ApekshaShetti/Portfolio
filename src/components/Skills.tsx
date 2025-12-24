"use client";

import { motion } from "framer-motion";
import { Code2, MonitorCheck, Users } from "lucide-react";

const skillsData = [
  {
    category: "Salesforce Expertise",
    icon: <Code2 className="text-purple-400" size={24} />,
    skills: ["Sales Cloud", "Service Cloud", "Data Cloud", "Agentforce"]
  },
  {
    category: "Product & Support",
    icon: <MonitorCheck className="text-blue-400" size={24} />,
    skills: ["CRM Systems", "Customer Service", "Escalations Mgmt", "Troubleshooting", "Solution Design"]
  },
  {
    category: "Professional Skills",
    icon: <Users className="text-green-400" size={24} />,
    skills: ["Communication", "Problem Solving", "Leadership", "Presentations", "Management"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-black relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-900/50 to-transparent" />
        
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 group-hover:border-purple-500/20 transition-colors">
                 <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:bg-purple-500/10 transition-colors">
                    {group.icon}
                 </div>
                 <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    {group.category}
                 </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-800/50 text-zinc-300 text-sm font-medium rounded-md border border-white/5 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
