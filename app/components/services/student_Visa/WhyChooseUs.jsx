"use client";

import { motion } from "framer-motion";
import { UserCheck, FileText, Eye, Compass, Headphones } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const benefitsList = [
  {
    icon: UserCheck,
    title: "Personalized Counselling",
    desc: "Tailored guidance designed around your unique academic background and career goals.",
  },
  {
    icon: FileText,
    title: "Expert Documentation Support",
    desc: "Meticulous review and assistance with SOPs, financial proofs, and embassy paperwork.",
  },
  {
    icon: Eye,
    title: "Transparent Process",
    desc: "Complete visibility into your application status with clear timelines and zero hidden fees.",
  },
  {
    icon: Compass,
    title: "End-to-End Assistance",
    desc: "Continuous support from initial university shortlisting to final visa approval and departure.",
  },
  {
    icon: Headphones,
    title: "Dedicated Student Support",
    desc: "Direct 1-on-1 advisor backing to address your queries and guide you at every step.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Container aligned with Hero section container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-10">
        
        {/* Header Block */}
        <div className="max-w-xl sm:max-w-2xl mx-auto text-center space-y-3">
          {/* Top Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center justify-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.1em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              WHY CHOOSE US
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-[#0A1329] tracking-tight"
          >
            Why Choose Our <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">
              Student Visa Service
            </span>
          </motion.h2>
        </div>

        {/* 5-Column Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.08, ease: luxuryEase }}
                className="group bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 space-y-3 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#070D1F] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5 text-[#E5A64C]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#0A1329]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}