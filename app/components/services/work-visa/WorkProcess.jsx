"use client";

import { motion } from "framer-motion";
import { UserCheck, Award, Building2, Send, CheckCircle2 } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const steps = [
  {
    icon: UserCheck,
    title: "Profile Assessment",
    desc: "Evaluating qualification equivalency and points score.",
  },
  {
    icon: Award,
    title: "Skill Assessment",
    desc: "Obtaining credential verification from authorized evaluation bodies.",
  },
  {
    icon: Building2,
    title: "Employer Filing",
    desc: "Assisting employer sponsorship approvals or LMIA/CoS petitions.",
  },
  {
    icon: Send,
    title: "Visa Application",
    desc: "Submitting consular work permit application and biometric filings.",
  },
  {
    icon: CheckCircle2,
    title: "Work Permit Stamping",
    desc: "Receiving your work visa approval and relocation guidance.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-50/70 selection:bg-[#E5A64C] selection:text-[#0A1329] overflow-hidden">
      {/* Container aligned with standard responsive site width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-12">
        
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
            A Structured Roadmap to{" "}
            <span className="italic font-normal text-[#E5A64C]">
              International Employment
            </span>
          </motion.h2>
        </div>

        {/* Timeline Process Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 items-start max-w-6xl mx-auto">
          {/* Connecting Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[1px] border-t-2 border-dashed border-slate-300 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 + index * 0.08, ease: luxuryEase }}
                className="relative z-10 flex flex-col items-center text-center space-y-3 group"
              >
                {/* Step Circle with Step Number Badge */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-[#070D1F] border border-[#E5A64C]/40 flex items-center justify-center shadow-md shadow-black/5 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#E5A64C]" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#E5A64C] text-[#0A1329] text-[10px] font-bold flex items-center justify-center border border-white">
                    {index + 1}
                  </span>
                </div>

                <div className="space-y-1">
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