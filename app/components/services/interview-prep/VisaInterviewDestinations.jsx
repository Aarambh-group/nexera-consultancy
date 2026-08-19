"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, MessageSquare, Check } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const interviewDestinations = [
  {
    id: "usa",
    name: "USA (F1, B1/B2, H-1B)",
    flag: "/images/destinations/usa.svg",
    subtitle: "DS-160 Consular Window Interview",
    focus: "214(b) Non-immigrant Intent & Funding",
    avgDuration: "2 to 3 Minutes",
    highlights: [
      "Demonstrating genuine non-immigrant intent under section 214(b)",
      "Answering university selection & career goal questions concisely",
      "Financial sponsor defense and property tie alignment",
    ],
  },
  {
    id: "germany",
    name: "Germany (Student/Work)",
    flag: "/images/destinations/germany.svg",
    subtitle: "VFS / Embassy Academic Audit",
    focus: "Academic Motivation & Course Details",
    avgDuration: "10 to 15 Minutes",
    highlights: [
      "Detailed justification for chosen German university & curriculum",
      "Blocked account details and language proficiency (English/German)",
      "Post-study trajectory and career objective articulation",
    ],
  },
  {
    id: "schengen",
    name: "Schengen Area",
    flag: "/images/destinations/germany.svg",
    subtitle: "Short-Stay Consular Verification",
    focus: "Travel Itinerary & Return Guarantee",
    avgDuration: "5 to 10 Minutes",
    highlights: [
      "Clarifying multi-country travel schedules & entry/exit points",
      "Explaining employment leave approvals and local commitments",
      "Sponsorship and hotel booking cross-examination prep",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "/images/destinations/uk.svg",
    subtitle: "Credibility Interview (UKVI)",
    focus: "Genuineness of Student/Work Application",
    avgDuration: "15 to 20 Minutes (Video Call)",
    highlights: [
      "Deep dive into course modules, university location, and tuition costs",
      "Explaining career progression and return on investment",
      "Checking independence and authenticity of academic choices",
    ],
  },
];

export default function VisaInterviewDestinations() {
  const [selectedId, setSelectedId] = useState("usa");
  const activeData = interviewDestinations.find((d) => d.id === selectedId) || interviewDestinations[0];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container matching design system standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12">
        
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center justify-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              DESTINATION INSIGHTS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0A1329] tracking-tight leading-tight pt-1"
          >
            Tailored Preparation for{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Target Consulates
            </span>
          </motion.h2>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {interviewDestinations.map((dest) => {
            const isActive = dest.id === selectedId;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#070D1F] text-[#E5A64C] shadow-md border border-[#070D1F]"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:border-[#E5A64C]/50 hover:bg-slate-50"
                }`}
              >
                <div className="relative w-4 h-3 rounded-sm overflow-hidden shrink-0 shadow-xs">
                  <Image src={dest.flag} alt={dest.name} fill unoptimized className="object-cover" />
                </div>
                <span>{dest.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
          >
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="relative w-5 h-3.5 rounded overflow-hidden shrink-0 shadow-xs">
                    <Image src={activeData.flag} alt={activeData.name} fill unoptimized className="object-cover" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E5A64C]">
                    {activeData.name}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-semibold text-[#0A1329]">
                  {activeData.subtitle}
                </h3>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-2.5 pt-1">
                {activeData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-[#E5A64C]/15 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-[#E5A64C] stroke-[3]" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Meta Info Card */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200/60 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#070D1F] flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#E5A64C]" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Primary Consular Focus</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#0A1329]">{activeData.focus}</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-200/60" />

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#070D1F] flex items-center justify-center shrink-0 shadow-xs">
                  <MessageSquare className="w-5 h-5 text-[#E5A64C]" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Average Interview Window</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#0A1329]">{activeData.avgDuration}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}