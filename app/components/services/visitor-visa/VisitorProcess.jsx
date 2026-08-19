"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Edit3, UserCheck, Award } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const steps = [
  {
    icon: MessageSquare,
    title: "Initial Assessment",
    desc: "Evaluating your purpose of travel, itinerary, and eligibility.",
  },
  {
    icon: FileText,
    title: "Document Assembly",
    desc: "Gathering invitations, proof of funds, and employment ties.",
  },
  {
    icon: Edit3,
    title: "File Verification",
    desc: "Thorough audit of forms and cover letters for complete accuracy.",
  },
  {
    icon: UserCheck,
    title: "Application Submission",
    desc: "Filing online or scheduling biometric/embassy appointments.",
  },
  {
    icon: Award,
    title: "Visa Stamping",
    desc: "Receive your approved visitor visa and travel hassle-free.",
  },
];

export default function VisitorProcess() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-50/80 selection:bg-[#E5A64C] selection:text-[#0A1329] overflow-hidden">
      {/* Aligned container width matching Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-12">
        
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
              OUR PROCESS
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
            A Hassle-Free Pathway to Your <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">
              Next Destination
            </span>
          </motion.h2>
        </div>

        {/* 5-Step Horizontal Process Layout */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-start max-w-6xl mx-auto">
          {/* Connecting Dashed Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[1px] border-t-2 border-dashed border-slate-300/80 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08, ease: luxuryEase }}
                className="relative z-10 flex flex-col items-center text-center space-y-3.5 group"
              >
                {/* Step Circle with Accent Ring */}
                <div className="w-14 h-14 rounded-full bg-[#070D1F] border-2 border-[#E5A64C]/50 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-[#E5A64C]">
                  <Icon className="w-6 h-6 text-[#E5A64C]" />
                </div>

                {/* Step Details */}
                <div className="space-y-1.5">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#0A1329]">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed max-w-[170px] mx-auto font-light">
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