"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const servicesList = [
  {
    title: "University & Course Selection",
    desc: "Shortlisting optimal institutions tailored to your academic profile.",
  },
  {
    title: "SOP & LOR Assistance",
    desc: "Drafting guidance for compelling Statements of Purpose & recommendation letters.",
  },
  {
    title: "Financial & Visa Documentation",
    desc: "Proof-of-funds validation, file assembly, and error-free submission.",
  },
  {
    title: "Visa Interview Preparation",
    desc: "Tailored mock interview sessions to build embassy confidence.",
  },
  {
    title: "Pre-Departure Support",
    desc: "Orientation on housing, travel arrangements, and cultural adjustment.",
  },
];

const destinations = [
  { name: "Canada", img: "https://flagcdn.com/ca.svg" },
  { name: "Australia", img: "https://flagcdn.com/au.svg" },
  { name: "UK", img: "https://flagcdn.com/gb.svg" },
  { name: "USA", img: "https://flagcdn.com/us.svg" },
  { name: "Germany", img: "https://flagcdn.com/de.svg" },
  { name: "New Zealand", img: "https://flagcdn.com/nz.svg" },
];

export default function StudentOfferDestinations() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-slate-50/70 selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container width matching Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Card: Student Visa Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="lg:col-span-5 bg-[#070D1F] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            <div className="space-y-5 sm:space-y-6 relative z-10">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.1em] uppercase text-[#E5A64C]">
                  Core Offerings
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium leading-tight text-white tracking-tight">
                  Our Student Visa{" "}
                  <span className="italic font-normal text-[#E5A64C]">Services</span>{" "}
                  Include
                </h2>
              </div>

              <div className="space-y-4 pt-1">
                {servicesList.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08, ease: luxuryEase }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E5A64C] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E5A64C]/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* Right Card: Popular Study Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.1em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
                  Global Reach
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-[#0A1329] tracking-tight">
                  Popular Study{" "}
                  <span className="italic font-normal text-[#E5A64C]">
                    Destinations
                  </span>
                </h2>
              </div>

              {/* Destination Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 lg:gap-4 pt-2">
                {destinations.map((dest, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.06, ease: luxuryEase }}
                    className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-4 flex flex-col items-center justify-center space-y-2.5 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative w-12 h-8 transition-transform duration-300 group-hover:scale-105 shadow-sm overflow-hidden rounded-[3px]">
                      <Image
                        src={dest.img}
                        alt={`${dest.name} Flag`}
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold text-[#0A1329]">
                      {dest.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}