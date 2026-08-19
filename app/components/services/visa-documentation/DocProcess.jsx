"use client";

import { motion } from "framer-motion";
import { FolderPlus, SearchCheck, Edit3, ShieldCheck, CheckCircle2 } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const steps = [
  {
    icon: FolderPlus,
    title: "1. Document Collection",
    desc: "Gathering required personal, professional, and financial papers.",
  },
  {
    icon: SearchCheck,
    title: "2. Verification Audit",
    desc: "Cross-checking every document against consulate guidelines.",
  },
  {
    icon: Edit3,
    title: "3. Drafting & Formatting",
    desc: "Preparing SOPs, cover letters, and application forms.",
  },
  {
    icon: ShieldCheck,
    title: "4. Quality Inspection",
    desc: "Final review by senior visa officers to ensure zero errors.",
  },
  {
    icon: CheckCircle2,
    title: "5. Ready Dossier",
    desc: "Receiving your organized, embassy-ready application folder.",
  },
];

export default function DocProcess() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 font-sans selection:bg-[#E5A64C] selection:text-[#0A1329] overflow-hidden">
      {/* Aligned container matching design system standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12 text-center">
        
        {/* Header Block */}
        <div className="max-w-xl sm:max-w-2xl mx-auto text-center space-y-3">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center justify-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              OUR PROCESS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-[#0A1329] tracking-tight pt-1"
          >
            A Streamlined Approach to{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Flawless Application Files
            </span>
          </motion.h2>
        </div>

        {/* Horizontal Process Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-start pt-2">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-slate-200 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: luxuryEase }}
                className="relative z-10 flex flex-col items-center text-center space-y-3 group"
              >
                {/* Step Circle with Icon */}
                <div className="w-14 h-14 rounded-full bg-[#070D1F] border-2 border-[#E5A64C]/40 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-[#E5A64C]">
                  <Icon className="w-6 h-6 text-[#E5A64C]" />
                </div>

                {/* Step Text Details */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#0A1329]">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-normal max-w-[170px] mx-auto font-light">
                    {step.desc}
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