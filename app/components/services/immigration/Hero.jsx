"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] bg-[#070D1F] bg-no-repeat bg-cover bg-center flex items-center py-10 lg:py-14 overflow-hidden font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]"
      style={{ backgroundImage: "url('/images/immigration-bg.png')" }}
    >
      {/* Refined gradient overlay matching design system depth */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#02060F] via-[#040C1F]/85 via-40% to-transparent" />

      {/* Standardized full-width aligned container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="max-w-xl sm:max-w-2xl space-y-4 sm:space-y-5">
          
          {/* Breadcrumbs with polished icon separators */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-300/90 font-medium"
          >
            <Link
              href="/"
              className="hover:text-[#E5A64C] transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#E5A64C]/70" />
            <Link
              href="/services"
              className="hover:text-[#E5A64C] transition-colors duration-200"
            >
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-[#E5A64C]/70" />
            <span className="text-[#E5A64C]">PR & Immigration</span>
          </motion.nav>

          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center gap-2 w-fit"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.1em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              Nexera Immigration Services
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif leading-tight text-white tracking-tight"
          >
            Take the Next Step <br />
            Towards a New Future <br />
            with <span className="italic font-normal text-[#E5A64C]">Permanent Residency</span>
          </motion.h1>

          {/* Descriptive Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
            className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-lg"
          >
            If your long-term goal is to settle abroad, our immigration consultants provide reliable guidance based on your profile, eligibility, and future objectives. We navigate complex pathways to secure your permanent stay.
          </motion.p>

          {/* Call To Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: luxuryEase }}
            className="pt-2"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#E5A64C] via-[#E8B66C] to-[#D89233] text-[#0A1329] font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#E5A64C]/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#E5A64C]/20"
            >
              <span>Check Eligibility Today</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A1329]/15 text-[#0A1329] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}