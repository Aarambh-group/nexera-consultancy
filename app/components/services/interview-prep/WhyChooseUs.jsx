"use client";

import { motion } from "framer-motion";
import { UserCheck, Shield, Mic, CheckCircle } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const benefitsList = [
  {
    icon: UserCheck,
    title: "Ex-Consular Expertise",
    desc: "Train under senior mentors who understand exact officer decision-making frameworks.",
  },
  {
    icon: Shield,
    title: "Real Environment Simulations",
    desc: "Practice with pressure-testing scenarios to build calm authority under questioning.",
  },
  {
    icon: Mic,
    title: "Personalized Answer Refinement",
    desc: "Transform generic answers into concise, persuasive, and authentic personal narratives.",
  },
  {
    icon: CheckCircle,
    title: "Document Cross-Alignment",
    desc: "Ensure 100% verbal consistency with financial records, university forms, and DS-160 entries.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container matching design system standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12">
        
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center justify-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              WHY CHOOSE US
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0A1329] tracking-tight leading-tight pt-1"
          >
            Why Train with Nexera for Your{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Visa Interview
            </span>
          </motion.h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: luxuryEase }}
                className="group bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 space-y-4 shadow-sm hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#070D1F] border border-[#E5A64C]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#E5A64C] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-[#E5A64C]" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-semibold text-[#0A1329] group-hover:text-[#E5A64C] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}