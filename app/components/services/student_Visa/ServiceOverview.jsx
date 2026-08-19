"use client";

import { motion } from "framer-motion";
import { FileCheck2, GraduationCap, Wallet, ShieldCheck } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const eligibilityCards = [
  {
    icon: GraduationCap,
    title: "Academic Prerequisites",
    desc: "Proof of completed education, transcripts, and official university acceptance/CAS letter.",
  },
  {
    icon: Wallet,
    title: "Financial Proofs",
    desc: "Bank statements, loan approvals, or sponsorship certificates meeting embassy criteria.",
  },
  {
    icon: FileCheck2,
    title: "Language Proficiency",
    desc: "Valid test scores for IELTS, TOEFL, PTE, or Duolingo as required by your institution.",
  },
  {
    icon: ShieldCheck,
    title: "Health & Character Clearances",
    desc: "Up-to-date medical examination reports, TB tests (if required), and police clearance certificates.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Container aligned with Hero section container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-10">
        
        {/* Header Block */}
        <div className="max-w-xl sm:max-w-2xl">
          {/* Top Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="mb-3 sm:mb-4 flex items-center gap-2 w-fit"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.1em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              ELIGIBILITY & REQUIREMENTS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight sm:leading-tight text-[#0A1329] tracking-tight mb-3"
          >
            What You Need for a <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">
              Successful Application
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
            className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed max-w-lg"
          >
            Every country has distinct regulatory standards for foreign students. We ensure your application meets all essential legal, financial, and academic benchmarks prior to submission.
          </motion.p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {eligibilityCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: luxuryEase }}
                className="group bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-3 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#070D1F] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-5 h-5 text-[#E5A64C]" />
                </div>
                <h3 className="text-sm font-semibold text-[#0A1329]">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}