"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, Check } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const businessDestinations = [
  {
    id: "usa",
    name: "USA",
    flag: "/images/destinations/usa.svg",
    subtitle: "B1 Business Visitor Visa",
    duration: "Up to 10 Years Multiple Entry",
    processing: "Appointment Dependent",
    highlights: [
      "Assistance for conferences, trade shows, & client meetings",
      "DS-160 processing with corporate profile verification",
      "Embassy interview preparation & invitation audits",
    ],
  },
  {
    id: "schengen",
    name: "Schengen Area",
    flag: "/images/destinations/germany.svg",
    subtitle: "Business Short-Stay Schengen Visa",
    duration: "Up to 90 Days within 180 Days",
    processing: "10 to 15 Business Days",
    highlights: [
      "Multi-country commercial itinerary alignment",
      "Official host company invitation letter review",
      "Corporate dispatch letter & financial proof structuring",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "/images/destinations/uk.svg",
    subtitle: "Standard Visitor Visa - Business Activities",
    duration: "6 Months / 2, 5 & 10 Years",
    processing: "2 to 3 Weeks",
    highlights: [
      "Support for corporate training, board meetings, & negotiations",
      "Expedited priority & super-priority submission guidance",
      "Company financial credentials & sponsorship audit",
    ],
  },
  {
    id: "canada",
    name: "Canada",
    flag: "/images/destinations/canada.svg",
    subtitle: "Business Visitor Visa",
    duration: "Up to 10 Years (Passport Validity)",
    processing: "3 to 6 Weeks",
    highlights: [
      "Clear differentiation between business visitor and work permit",
      "Cross-border trade meeting & site visit documentation",
      "Corporate tax & registration proof alignment",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "/images/destinations/australia.svg",
    subtitle: "Business Visitor Stream (Subclass 600)",
    duration: "3, 6, or 12 Months",
    processing: "1 to 3 Weeks",
    highlights: [
      "Paperless online submittal with fast processing",
      "Trade exhibition & exploratory investment coverage",
      "Corporate guarantee letter verification",
    ],
  },
];

export default function BusinessOfferDestinations() {
  const [selectedId, setSelectedId] = useState("usa");
  const activeData = businessDestinations.find((d) => d.id === selectedId) || businessDestinations[0];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-50/70 font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container matching design system standards */}
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
              GLOBAL COMMERCIAL DESTINATIONS
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
            Business Visas by{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Key Destination
            </span>
          </motion.h2>
        </div>

        {/* Destination Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {businessDestinations.map((dest) => {
            const isActive = dest.id === selectedId;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#070D1F] text-[#E5A64C] shadow-md border border-[#070D1F]"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-[#E5A64C]/50 hover:bg-slate-50"
                }`}
              >
                <div className="relative w-4 h-3 rounded-sm overflow-hidden shrink-0">
                  <Image src={dest.flag} alt={dest.name} fill unoptimized className="object-cover" />
                </div>
                <span>{dest.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: luxuryEase }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-4 rounded overflow-hidden shrink-0">
                      <Image src={activeData.flag} alt={activeData.name} fill unoptimized className="object-cover" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E5A64C]">
                      {activeData.name}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0A1329]">
                    {activeData.subtitle}
                  </h3>
                </div>

                <div className="space-y-2.5 pt-1">
                  {activeData.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <div className="w-4 h-4 rounded-full bg-[#E5A64C]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#E5A64C] stroke-[3]" />
                      </div>
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Processing Stats */}
              <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200/60 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center shrink-0">
                    <Calendar className="w-4 h-4 text-[#E5A64C]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      Validity / Entry
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0A1329]">
                      {activeData.duration}
                    </p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-200/60" />

                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/60 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#E5A64C]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                      Average Processing Time
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0A1329]">
                      {activeData.processing}
                    </p>
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