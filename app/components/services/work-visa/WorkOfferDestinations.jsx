"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, Check } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const workDestinations = [
  {
    id: "canada",
    name: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop",
    subtitle: "Employer-Sponsored & LMIA Work Permit",
    duration: "1 to 3 Years (Renewable)",
    processing: "8 to 16 Weeks",
    highlights: [
      "LMIA compliance & exemption pathway filing",
      "Global Skills Strategy fast-track processing support",
      "Spousal open work permit application alignment",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    subtitle: "Skilled Worker Visa (Points-Based System)",
    duration: "Up to 5 Years (Path to ILR)",
    processing: "3 to 8 Weeks",
    highlights: [
      "Certificate of Sponsorship (CoS) validation",
      "Minimum salary threshold & SOC code mapping",
      "English proficiency & TB test documentation",
    ],
  },
  {
    id: "usa",
    name: "USA",
    flag: "https://flagcdn.com/us.svg",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop",
    subtitle: "H-1B, L-1 & O-1 Specialty Work Visas",
    duration: "3 Years (Extendable to 6 Years)",
    processing: "2 to 6 Months (Premium Available)",
    highlights: [
      "USCIS I-129 petition preparation & filing",
      "L-1 intra-company transferee documentation",
      "Consular interview preparation & DS-160 audit",
    ],
  },
  {
    id: "germany",
    name: "Germany",
    flag: "https://flagcdn.com/de.svg",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
    subtitle: "EU Blue Card & Skilled Worker Visa",
    duration: "Up to 4 Years (Fast-Track PR)",
    processing: "4 to 12 Weeks",
    highlights: [
      "Anabin qualification recognition & comparability",
      "Fast-track procedure for skilled professionals",
      "Opportunity Card (Chancenkarte) point evaluation",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "https://flagcdn.com/au.svg",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
    subtitle: "Employer Skills Shortage Visa (Subclass 482)",
    duration: "Up to 4 Years (PR Pathways)",
    processing: "1 to 3 Months",
    highlights: [
      "VETASSESS / ACS skill assessment coordination",
      "Employer nomination petition auditing",
      "Subclass 186 permanent employer pathway guidance",
    ],
  },
];

export default function WorkOfferDestinations() {
  const [selectedId, setSelectedId] = useState("canada");
  const activeData = workDestinations.find((d) => d.id === selectedId) || workDestinations[0];

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
              GLOBAL CAREER DESTINATIONS
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
            Work Permits by{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Target Country
            </span>
          </motion.h2>
        </div>

        {/* Destination Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {workDestinations.map((dest) => {
            const isActive = dest.id === selectedId;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#070D1F] text-white shadow-md border border-[#070D1F]"
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
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: luxuryEase }}
              className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-7 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Featured Image Column */}
              <div className="lg:col-span-4 relative h-48 sm:h-56 lg:h-64 w-full rounded-xl overflow-hidden group">
                <Image
                  src={activeData.image}
                  alt={activeData.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Left Column: Details */}
              <div className="lg:col-span-5 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="relative w-6 h-4 rounded overflow-hidden shrink-0">
                      <Image src={activeData.flag} alt={activeData.name} fill unoptimized className="object-cover" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5A64C]">
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
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta Info Column */}
              <div className="lg:col-span-3 bg-slate-50 rounded-xl p-5 border border-slate-200/60 space-y-4 flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#E5A64C] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Permit Validity</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0A1329] mt-0.5">{activeData.duration}</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-slate-200/60" />

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#E5A64C] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Average Processing Time</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#0A1329] mt-0.5">{activeData.processing}</p>
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