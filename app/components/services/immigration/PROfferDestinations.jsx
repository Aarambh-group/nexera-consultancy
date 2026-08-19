"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, CheckCircle2 } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const prDestinations = [
  {
    id: "canada",
    name: "Canada",
    flag: "/images/destinations/canada.svg",
    subtitle: "Express Entry & Provincial Nominee Programs (PNP)",
    duration: "Permanent Resident Status (5 Years)",
    processing: "6 to 12 Months",
    highlights: [
      "Federal Skilled Worker (FSW) & Canadian Experience Class (CEC)",
      "Provincial nomination strategy for additional CRS points",
      "Spouse and dependent inclusion under single application",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "/images/destinations/australia.svg",
    subtitle: "General Skilled Migration (Subclass 189 / 190 / 491)",
    duration: "Permanent Resident Status (5 Years)",
    processing: "8 to 14 Months",
    highlights: [
      "Skill assessment with relevant assessing bodies (ACS, VETASSESS)",
      "Expression of Interest (EOI) submission in SkillSelect",
      "State nomination pathways for added point advantages",
    ],
  },
  {
    id: "germany",
    name: "Germany",
    flag: "/images/destinations/germany.svg",
    subtitle: "EU Blue Card & Opportunity Card (Chancenkarte)",
    duration: "Fast-Track Settlement Permit (21-27 Months)",
    processing: "4 to 8 Months",
    highlights: [
      "Accelerated PR pathway for skilled degree holders & IT professionals",
      "Chancenkarte points evaluation for job-seeking residency",
      "Family reunification assistance upon initial permit approval",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "/images/destinations/uk.svg",
    subtitle: "Indefinite Leave to Remain (ILR) Pathways",
    duration: "Permanent Settlement",
    processing: "5 Years Residence Path",
    highlights: [
      "Skilled Worker & Global Talent route transition to ILR",
      "Continuous residency & Life in the UK test strategy",
      "Dependents settlement alignment and passport eligibility",
    ],
  },
  {
    id: "nz",
    name: "New Zealand",
    flag: "/images/destinations/nz.svg",
    subtitle: "Skilled Migrant Category (SMC) Resident Visa",
    duration: "Indefinite Residence Status",
    processing: "6 to 10 Months",
    highlights: [
      "6-point system assessment for qualified professionals",
      "Accredited Employer work-to-residence stream guidance",
      "Straight to Residence (Green List) priority processing",
    ],
  },
];

export default function PROfferDestinations() {
  const [selectedId, setSelectedId] = useState("canada");
  const activeData = prDestinations.find((d) => d.id === selectedId);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container matching design system standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12">
        
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center justify-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              TOP SETTLEMENT DESTINATIONS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0A1329] tracking-tight"
          >
            PR Pathways by <span className="italic font-normal text-[#E5A64C]">Target Country</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Destination Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: luxuryEase }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {prDestinations.map((dest) => {
              const isActive = dest.id === selectedId;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedId(dest.id)}
                  className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#0A1329] text-[#E5A64C] shadow-lg shadow-[#0A1329]/10 border border-[#0A1329] scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-[#E5A64C]/50 hover:bg-slate-50 hover:text-[#0A1329]"
                  }`}
                >
                  <div className="relative w-4 h-3 sm:w-5 sm:h-3.5 rounded-[2px] overflow-hidden shrink-0 shadow-sm border border-black/5">
                    <Image src={dest.flag} alt={dest.name} fill unoptimized className="object-cover" />
                  </div>
                  <span>{dest.name}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Active Destination Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: luxuryEase }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Details & Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-5 rounded shadow-sm overflow-hidden border border-black/5">
                      <Image src={activeData.flag} alt={activeData.name} fill unoptimized className="object-cover" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E5A64C]">
                      {activeData.name}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-[#0A1329] leading-tight">
                    {activeData.subtitle}
                  </h3>
                </div>

                <div className="space-y-3 pt-2">
                  {activeData.highlights.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + (idx * 0.1), ease: luxuryEase }}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E5A64C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Processing Stats */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-slate-100/50 rounded-xl p-6 sm:p-7 border border-slate-200/60 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-[#E5A64C]" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">Residency Validity</p>
                    <p className="text-sm sm:text-base font-semibold text-[#0A1329]">{activeData.duration}</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#E5A64C]" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-400">Estimated Decision Time</p>
                    <p className="text-sm sm:text-base font-semibold text-[#0A1329]">{activeData.processing}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}