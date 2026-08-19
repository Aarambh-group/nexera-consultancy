"use client";

import { motion } from "framer-motion";
import { Briefcase, FileCheck, ShieldCheck, Scale } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const benefitsList = [
  {
    icon: Briefcase,
    title: "Skilled Visa Mastery",
    desc: "In-depth expertise across points-based immigration and employer sponsorship rules.",
  },
  {
    icon: FileCheck,
    title: "Document Accuracy",
    desc: "Meticulous verification of skill assessments, job offers, and salary benchmark proof.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    desc: "Seamless synchronization between corporate sponsorship requirements and applicant credentials.",
  },
  {
    icon: ShieldCheck,
    title: "High Approval Track Record",
    desc: "Thorough pre-submission audits minimizing request for evidence (RFE) or refusal risks.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container layout matching the standard design system */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-10">
        
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
            Why Partner With Nexera for{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Work Permits
            </span>
          </motion.h2>
        </div>

        {/* 4-Column Benefits Grid */}
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
                className="group p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-3 shadow-sm hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#070D1F] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-[#E5A64C]" />
                </div>
                <div className="space-y-1.5">
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