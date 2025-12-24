"use client";

import { motion } from "framer-motion";
import { Cloud, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    role: "Associate Success Guide",
    company: "Salesforce",
    location: "Hyderabad, India",
    period: "Jul 2025 – Present",
    description: [
      "Drove customer adoption and value realization of **Agentforce and Data Cloud**.",
      "Consistently achieved a **CSAT score of 5.0**.",
      "Guided customers on **solution design**, ensuring rapid engagement (avg 1.9 hrs).",
      "Resolved customer queries with an **average resolution time of 11.4 hours**.",
      "Contributed to customer success stories and internal adoption initiatives."
    ]
  },
  {
    role: "Associate Technical Support Engineer",
    company: "Salesforce",
    location: "Hyderabad, India",
    period: "Oct 2023 – Jun 2025",
    description: [
      "Achieved **93%+ CSAT** and reduced case reopens to 5%.",
      "Maintained **115%+ productivity** within the General Usage (Admin) team.",
      "Resolved complex technical issues with a **95%+ case resolution rate**.",
      "Provided Salesforce Sales Cloud technical support to EMEA/IST regions.",
      "Leveraged 5+ Salesforce certifications to deliver high-quality support."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 relative bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Experience</span>
            </h2>
        </motion.div>

        <div className="grid gap-8 mt-8 relative max-w-4xl mx-auto">
             {/* Vertical Line - Hidden on Mobile, Visible on Desktop */}
             <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-zinc-800 to-zinc-800/0 md:-translate-x-1/2 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
              }`}
            >
               {/* Content Card */}
               <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2 md:col-start-2 text-left"}`}>
                  <div className={`p-6 md:p-8 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-3xl hover:border-purple-500/30 hover:bg-zinc-800/50 transition-all duration-300 shadow-lg ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                  }`}>
                    <div className={`flex flex-col gap-1 mb-4 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                        <div className="flex items-center gap-2 text-blue-400 mb-1">
                            <Cloud fill="currentColor" size={24} />
                            <span className="font-bold tracking-wide uppercase text-sm">Salesforce</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                        <div className="md:hidden flex items-center gap-2 text-zinc-400 text-sm mt-1">
                            <Calendar size={14} className="text-purple-500" />
                            {exp.period}
                        </div>
                    </div>
                    
                    <ul className={`space-y-3 text-zinc-400 leading-relaxed text-sm md:text-base ${
                         index % 2 === 0 ? "md:items-end flex flex-col" : "items-start"
                    }`}>
                        {exp.description.map((item, i) => (
                            <li key={i} className={`relative flex gap-3 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : "flex-row"}`}>
                                <CheckCircle2 className="shrink-0 text-purple-500/50 mt-1" size={16} />
                                <span dangerouslySetInnerHTML={{ 
                                    __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') 
                                }} />
                            </li>
                        ))}
                    </ul>
                  </div>
               </div>

               {/* Timeline Dot */}
               <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center -translate-y-2 md:translate-y-0 h-full w-full md:w-auto pointer-events-none hidden md:flex">
                    <div className="w-4 h-4 rounded-full bg-purple-500 ring-4 ring-zinc-950 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10" />
               </div>

               {/* Date Desktop */}
               <div className={`${index % 2 === 0 ? "md:order-2 text-left pl-12" : "md:order-1 text-right pr-12"} hidden md:flex flex-col justify-center`}>
                    <div className="inline-flex items-center gap-2 text-zinc-400 font-medium bg-zinc-900/80 px-4 py-2 rounded-full border border-white/5 w-fit hover:border-purple-500/30 transition-colors">
                        <Calendar size={16} className="text-purple-500" />
                        {exp.period}
                    </div>
               </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
