"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const destination = [
  {
    name: "Canada",
    code: "CA",
    image: "/images/ca.jpg",
  },
  {
    name: "Australia",
    code: "AU",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "United Kingdom",
    code: "UK",
    image: "/images/uk.png",
  },
  {
    name: "USA",
    code: "US",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Germany",
    code: "DE",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "New Zealand",
    code: "NZ",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000&auto=format&fit=crop",
  },
];

// Luxury smooth ease curve
const luxuryEase = [0.16, 1, 0.3, 1];

export default function Destination() {
  return (
    <section
      id="destination"
      className="w-full bg-[#0B0F17] py-8 sm:py-12 px-3 sm:px-8 overflow-hidden font-sans selection:bg-[#C9933B] selection:text-white relative"
    >
      {/* Subtle Ambient Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[300px] bg-[#C9933B]/5 blur-[80px] sm:blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 relative z-10">

        {/* HEADER ROW */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-slate-800/80">
          
          {/* Header Title & Tagline Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: luxuryEase }}
            className="space-y-1.5 sm:space-y-2 max-w-xl text-left"
          >
            {/* Tagline */}
            <span className="text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#C9933B] uppercase block">
              TOP DESTINATIONS
            </span>

            {/* Main Premium Heading */}
            <h2 className="text-xl sm:text-3xl font-serif text-slate-100 font-medium leading-[1.2] sm:leading-[1.15]">
              Explore Top Global{" "}
              <span className="italic font-normal text-[#C9933B] block sm:inline">
                Destinations.
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-slate-400 text-xs leading-relaxed font-light max-w-lg">
              Discover prime opportunities across the world's most sought-after study, work, and settlement destinations.
            </p>
          </motion.div>
        </div>

        {/* 6-CARD GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {destination.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: index * 0.08,
                ease: luxuryEase,
              }}
              whileHover={{ y: -6 }}
              className="group relative h-[150px] sm:h-[210px] rounded-sm overflow-hidden border border-slate-800 hover:border-[#C9933B]/40 transition-all duration-700 cursor-pointer bg-[#0F172A]"
            >
              {/* Background Image */}
              <Image
                src={country.image}
                alt={country.name}
                fill
                unoptimized
                priority={index < 2}
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />

              {/* Gradient Overlay matching dark theme */}
              <div className="absolute bottom-0 inset-x-0 h-4/5 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-transparent z-10 pointer-events-none" />

              {/* Card Details */}
              <div className="absolute inset-0 p-2.5 sm:p-3 flex flex-col justify-between text-white z-20">
                {/* Top Country Code Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold tracking-wider text-[#C9933B] bg-[#0B0F17]/80 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/10">
                    {country.code}
                  </span>
                </div>

                {/* Bottom Title & Gold Underline */}
                <div className="space-y-1">
                  <h3 className="text-xs sm:text-xs font-semibold text-slate-100 tracking-snug leading-tight group-hover:text-[#C9933B] transition-colors duration-300">
                    {country.name}
                  </h3>

                  {/* Gold Accent Line */}
                  <div className="h-[2px] w-5 group-hover:w-full bg-[#C9933B] transition-all duration-700 ease-out rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}