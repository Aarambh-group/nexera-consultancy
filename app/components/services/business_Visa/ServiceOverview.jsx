"use client";

import { motion } from "framer-motion";
import { Briefcase, FileCheck, Landmark, Send, Compass } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const overviewServices = [
  {
    icon: Briefcase,
    title: "Business Visa Consultation",
    desc: "Strategic assessment of your corporate travel goals, commercial activities, and consular requirements.",
  },
  {
    icon: FileCheck,
    title: "Invitation Letter Guidance",
    desc: "Drafting and verifying official corporate invitation letters from host organizations and sponsor entities.",
  },
  {
    icon: Landmark,
    title: "Documentation Support",
    desc: "Structuring tax returns, company registration proofs, cover letters, and commercial bank statements.",
  },
  {
    icon: Send,
    title: "Application Submission",
    desc: "Timely scheduling of consular appointments, form processing, and expedited submission auditing.",
  },
  {
    icon: Compass,
    title: "Travel Guidance",
    desc: "Advising on compliance, stay limits, business entry declarations, and multi-destination itineraries.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Container aligned with global design system standards */}
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
              SERVICE OVERVIEW
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
            Streamlined Support for{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Corporate Travel
            </span>
          </motion.h2>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
            className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-xl mx-auto"
          >
            International corporate expansion requires precise documentation and adherence to commercial migration laws. At Nexera, we simplify business visa processing for executives, investors, and corporate delegations.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {overviewServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: luxuryEase }}
                className="group p-5 sm:p-6 bg-slate-50/70 rounded-xl border border-slate-200/80 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#070D1F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#E5A64C]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-[#0A1329] font-sans">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
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