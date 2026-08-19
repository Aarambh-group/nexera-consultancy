"use client";

import { motion } from "framer-motion";
import { Compass, FileText, ShieldCheck, Ticket } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const overviewServices = [
  {
    icon: Compass,
    title: "Tourist Visa Consultation",
    desc: "Personalized advice on embassy requirements, optimal application timing, and destination-specific entry rules.",
  },
  {
    icon: FileText,
    title: "Application & Cover Letter Preparation",
    desc: "Comprehensive form filing paired with custom travel cover letters stating your precise intent and schedule.",
  },
  {
    icon: Ticket,
    title: "Itinerary & Document Assistance",
    desc: "Guidance on hotel reservations, return flight bookings, and financial proofs required by border authorities.",
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Submission Support",
    desc: "Assistance with compliant international travel medical insurance coverage and embassy appointment scheduling.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container layout matching the standard design system */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-10">
        
        {/* Header Block */}
        <div className="max-w-xl sm:max-w-2xl mx-auto text-center space-y-3">
          {/* Top Subtitle Badge */}
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
            Seamless Visa Solutions for <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">
              Unforgettable Vacations
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
            className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed max-w-2xl mx-auto pt-1"
          >
            International travel should be exciting, not stressful. At Nexera, we streamline the tourist visa process by structuring your travel plans, verifying complete financial proofs, and auditing application files to maximize approval rates.
          </motion.p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {overviewServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 + idx * 0.08, ease: luxuryEase }}
                className="group p-5 sm:p-6 bg-slate-50/80 rounded-2xl border border-slate-200/80 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#070D1F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-[#E5A64C]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-semibold text-[#0A1329]">
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