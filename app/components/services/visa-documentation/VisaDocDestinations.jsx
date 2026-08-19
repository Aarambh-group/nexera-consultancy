"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileCheck, Check } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const docDestinations = [
  {
    id: "schengen",
    name: "Schengen Visa",
    flag: "/images/destinations/germany.svg",
    subtitle: "Standardized European Union Dossier",
    focus: "Financial Sufficiency & Travel Intent",
    standards: "VFS / TLSContact Guidelines",
    highlights: [
      "3-year tax filings (ITR) & 6-month bank statement verification",
      "Confirmed flight itineraries, hotel vouchers, & travel insurance",
      "Tailored cover letter highlighting ties to home country",
    ],
  },
  {
    id: "usa",
    name: "USA Visas",
    flag: "/images/destinations/usa.svg",
    subtitle: "DS-160 & Consular Packet Review",
    focus: "Non-immigrant Intent & Financial Proofs",
    standards: "US Department of State Standards",
    highlights: [
      "Rigorous audit of DS-160 details against supporting evidence",
      "Structuring financial assets & property tie documents",
      "Detailed interview Q&A folder preparation",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "/images/destinations/uk.svg",
    subtitle: "UKVI Digital Upload File Structuring",
    focus: "Genuineness & Origin of Funds",
    standards: "UKVI Points-Based Guidance",
    highlights: [
      "Document scanning and upload formatting under strict size limits",
      "Source of funds verification for bank deposits",
      "Sponsorship document alignment and employment letters",
    ],
  },
  {
    id: "canada",
    name: "Canada Visas",
    flag: "/images/destinations/canada.svg",
    subtitle: "IRCC Portal Submission File",
    focus: "Purpose of Travel & Economic Ties",
    standards: "IRCC Application Checklists",
    highlights: [
      "Custom Statement of Purpose (SOP) auditing",
      "Proof of funds consolidation with CA reports",
      "Family tie verification & property valuation documents",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "/images/destinations/australia.svg",
    subtitle: "ImmiAccount Digital Documentation",
    focus: "Genuine Temporary Entrant (GTE/GST)",
    standards: "Home Affairs Requirements",
    highlights: [
      "Color scan verification of identity & civil documents",
      "Financial capacity statement and income proof structuring",
      "Certified translation alignment for non-English documents",
    ],
  },
];

export default function VisaDocDestinations() {
  const [selectedId, setSelectedId] = useState("schengen");
  const activeData = docDestinations.find((d) => d.id === selectedId) || docDestinations[0];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50/70 font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Container aligned with standard 7xl layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12">
        
        {/* Header Section */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center justify-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              DESTINATION STANDARDS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0A1329] tracking-tight leading-tight pt-1"
          >
            Tailored Documentation for{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Global Consulates
            </span>
          </motion.h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {docDestinations.map((dest) => {
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

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
          >
            {/* Left Content Column */}
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

              {/* Checklist Highlights */}
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

            {/* Right Meta Column */}
            <div className="lg:col-span-5 bg-slate-50/80 rounded-xl p-5 sm:p-6 border border-slate-200/60 space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#070D1F] flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#E5A64C]" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Primary Focus Area</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#0A1329]">{activeData.focus}</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-200/60" />

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#070D1F] flex items-center justify-center shrink-0 shadow-xs">
                  <FileCheck className="w-5 h-5 text-[#E5A64C]" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Consular Compliance Standard</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#0A1329]">{activeData.standards}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}