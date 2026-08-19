"use client";

import { motion } from "framer-motion";
import { FileText, Landmark, MapPin, ShieldCheck } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const pillars = [
  {
    icon: FileText,
    title: "Invitation & Sponsorship",
    desc: "Drafting precise invitation letters from family, relatives, or friends abroad to validate the legitimate purpose of your visit.",
  },
  {
    icon: Landmark,
    title: "Financial Evaluation",
    desc: "Structuring tax returns, liquid asset proofs, and sponsorship affidavits to demonstrate adequate coverage for travel expenses.",
  },
  {
    icon: MapPin,
    title: "Home Country Ties",
    desc: "Building a rock-solid case proving non-immigrant intent through property deeds, family responsibilities, or employment proof.",
  },
  {
    icon: ShieldCheck,
    title: "Consulate Audit",
    desc: "Conducting meticulous pre-submission audits on application forms to prevent refusal risks due to minor documentation flaws.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container width matching Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-10">
        
        {/* Section Header */}
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
            Precision Guidance for <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">
              Stress-Free Approvals
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
            A successful visitor visa application hinges on proving genuine intent and strong financial support. At Nexera, we streamline complex immigration requirements into a clear, stress-free strategy tailored specifically to your visit's purpose.
          </motion.p>
        </div>

        {/* 4-Card Strategic Pillars Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + idx * 0.08, ease: luxuryEase }}
                className="group p-5 sm:p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#070D1F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#E5A64C]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-semibold text-[#0A1329]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">
                      {pillar.desc}
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