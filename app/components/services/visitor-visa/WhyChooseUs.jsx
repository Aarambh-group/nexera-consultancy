"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Award, Clock } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const benefitsList = [
  {
    icon: ShieldCheck,
    title: "High Approval Rate",
    desc: "Rigorous verification of ties and financial documents to minimize refusals.",
  },
  {
    icon: Target,
    title: "Customized Travel Purpose",
    desc: "Tailored documentation specific to family visits, tourism, or personal events.",
  },
  {
    icon: Award,
    title: "Expert Review",
    desc: "In-depth case evaluations by experienced travel and immigration specialists.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround Time",
    desc: "Rapid file creation and submission assistance to meet your travel dates.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container width matching Hero section */}
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
              Visitor Visa Service
            </span>
          </motion.h2>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 + idx * 0.08, ease: luxuryEase }}
                className="group p-5 sm:p-6 bg-slate-50/80 border border-slate-200/80 rounded-2xl space-y-3.5 shadow-sm hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#070D1F] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#E5A64C]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#0A1329]">
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