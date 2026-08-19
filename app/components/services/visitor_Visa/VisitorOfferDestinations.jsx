"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Calendar, Check } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const destinationData = [
  {
    id: "canada",
    name: "Canada",
    flag: "https://flagcdn.com/ca.svg",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop",
    subtitle: "Multiple Entry Tourist & Family Visitor Visa",
    duration: "Up to 10 Years (Passport Validity)",
    processing: "3 to 8 Weeks",
    highlights: [
      "Super Visa support for Parents & Grandparents",
      "Official Invitation Letter formatting",
      "Dual intent & ties evaluation",
    ],
  },
  {
    id: "usa",
    name: "USA",
    flag: "https://flagcdn.com/us.svg",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop",
    subtitle: "B1/B2 Visitor & Tourism Visa",
    duration: "Up to 10 Years",
    processing: "Appointment Dependent",
    highlights: [
      "DS-160 application form assistance",
      "Embassy mock interview preparation",
      "Emergency appointment slot guidance",
    ],
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    subtitle: "Standard Visitor Visa",
    duration: "6 Months / 2, 5 & 10 Years",
    processing: "3 to 4 Weeks",
    highlights: [
      "Sponsorship & self-funded options",
      "Family celebration & tourism coverage",
      "Priority processing file optimization",
    ],
  },
  {
    id: "australia",
    name: "Australia",
    flag: "https://flagcdn.com/au.svg",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
    subtitle: "Visitor Visa (Subclass 600)",
    duration: "3, 6, or 12 Months",
    processing: "2 to 4 Weeks",
    highlights: [
      "No physical passport stamping required",
      "Comprehensive medical insurance support",
      "Fast-track processing assistance",
    ],
  },
  {
    id: "schengen",
    name: "Schengen Area",
    flag: "https://flagcdn.com/eu.svg",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800&auto=format&fit=crop",
    subtitle: "Short-stay Uniform Schengen Visa",
    duration: "Up to 90 Days within 180 Days",
    processing: "15 to 20 Business Days",
    highlights: [
      "Multi-country travel itinerary creation",
      "Flight and hotel reservation coverage",
      "Mandatory travel insurance booking",
    ],
  },
];

export default function VisitorOfferDestinations() {
  const [selectedId, setSelectedId] = useState("canada");
  const activeData = destinationData.find((d) => d.id === selectedId) || destinationData[0];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container width matching Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-10">
        
        {/* Header Block */}
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
              GLOBAL DESTINATIONS
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
            Visitor Visas by <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">Popular Country</span>
          </motion.h2>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {destinationData.map((dest) => {
            const isActive = dest.id === selectedId;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                className={`flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-[#070D1F] text-white shadow-md border border-[#070D1F]"
                    : "bg-slate-50 text-slate-600 border border-slate-200/80 hover:border-[#E5A64C]/50 hover:bg-white"
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

        {/* Dynamic Country Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
            className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 sm:p-7 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center max-w-5xl mx-auto"
          >
            {/* Destination Feature Image */}
            <div className="lg:col-span-4 relative h-48 sm:h-56 lg:h-full min-h-[220px] w-full rounded-xl overflow-hidden group">
              <Image
                src={activeData.image}
                alt={activeData.name}
                fill
                unoptimized
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Middle Content Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="relative w-5 h-3.5 rounded overflow-hidden shrink-0">
                    <Image src={activeData.flag} alt={activeData.name} fill unoptimized className="object-cover" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#E5A64C]">
                    {activeData.name}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0A1329]">
                  {activeData.subtitle}
                </h3>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-1">
                {activeData.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-[#E5A64C]/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#E5A64C] stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Meta Specs */}
            <div className="lg:col-span-3 bg-white rounded-xl p-5 border border-slate-200/80 space-y-4 flex flex-col justify-center shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#070D1F] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-[#E5A64C]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Validity / Duration</p>
                  <p className="text-xs font-semibold text-[#0A1329]">{activeData.duration}</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-slate-200/60" />

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#070D1F] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#E5A64C]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Average Processing Time</p>
                  <p className="text-xs font-semibold text-[#0A1329]">{activeData.processing}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}