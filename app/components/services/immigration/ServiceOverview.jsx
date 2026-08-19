"use client";

import { motion } from "framer-motion";
import { UserCheck, Award, FileText, Send, Activity } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const overviewServices = [
  {
    icon: UserCheck,
    title: "Profile Evaluation",
    desc: "In-depth analysis of your work history, language scores, education, and age to map optimal immigration pathways.",
  },
  {
    icon: Award,
    title: "Eligibility Assessment",
    desc: "Rigorous points calculation for programs like Canada Express Entry, Australia GSM, and European Blue Card PR tracks.",
  },
  {
    icon: FileText,
    title: "Documentation Assistance",
    desc: "Guiding ECA skill credentials, official reference formats, police clearances, and civil documentation compilation.",
  },
  {
    icon: Send,
    title: "Immigration Application Guidance",
    desc: "Precision filing of Expression of Interest (EOI), Provincial Nominations (PNP), and formal PR e-APR applications.",
  },
  {
    icon: Activity,
    title: "Process Monitoring",
    desc: "Continuous tracking of your file with immigration authorities, handling ADRs, medical requests, and landing prep.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Standardized design system container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="space-y-3 text-left max-w-3xl"
        >
          {/* Subtitle Badge */}
          <div className="flex items-center gap-2">
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              SERVICE OVERVIEW
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0A1329] tracking-tight leading-tight pt-1">
            Strategic Guidance for{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Global Settlement
            </span>
          </h2>

          {/* Subheading Description */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed pt-1">
            Transitioning to permanent residency is a life-changing milestone that requires careful strategic planning. Nexera delivers comprehensive PR solutions designed to maximize points, simplify legal steps, and secure your overseas settlement.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {overviewServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: luxuryEase }}
                className="group p-6 sm:p-7 bg-slate-50/70 rounded-2xl border border-slate-200/80 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-xl bg-[#070D1F] border border-[#E5A64C]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#E5A64C] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-[#E5A64C]" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-semibold text-[#0A1329] group-hover:text-[#E5A64C] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {service.desc}
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