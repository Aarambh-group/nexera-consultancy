"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Edit3, UserCheck, Award } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "We understand your goals and study plans.",
  },
  {
    icon: FileText,
    title: "Document Guidance",
    desc: "We guide you on the right documents and checklist.",
  },
  {
    icon: Edit3,
    title: "Application Support",
    desc: "We assist in accurate and timely application filing.",
  },
  {
    icon: UserCheck,
    title: "Visa Processing",
    desc: "Our experts handle the entire visa process.",
  },
  {
    icon: Award,
    title: "Visa Approval",
    desc: "Receive your visa and get ready to fly.",
  },
];

export default function StudentProcess() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329] overflow-hidden">
      {/* Aligned container width matching Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full text-center space-y-8 sm:space-y-12">
        
        {/* Header Block */}
        <div className="max-w-xl sm:max-w-2xl mx-auto space-y-3">
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
            A Simple Process for Your{" "}
            <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">
              Big Dreams
            </span>
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 items-start pt-2">
          
          {/* Dashed Horizontal Line for Desktop View */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[1px] border-t-2 border-dashed border-slate-200 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.08, ease: luxuryEase }}
                className="relative z-10 flex flex-col items-center text-center space-y-3 group"
              >
                {/* Step Circle Container */}
                <div className="w-14 h-14 rounded-full bg-[#070D1F] border-2 border-[#E5A64C]/40 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:border-[#E5A64C]">
                  <Icon className="w-6 h-6 text-[#E5A64C]" />
                </div>
                
                {/* Step Details */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#0A1329]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed max-w-[170px] mx-auto">
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