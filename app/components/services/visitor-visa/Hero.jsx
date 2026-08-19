"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[480px] bg-[#070D1F] bg-no-repeat bg-[length:100%_100%] bg-center flex items-center py-8 lg:py-12 overflow-hidden selection:bg-[#E5A64C] selection:text-[#0A1329]"
      style={{ backgroundImage: "url('/images/visitor-bg1.png')" }}
    >
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#02060F] via-[#040C1F]/85 via-40% to-transparent" />

      {/* Aligned container layout matching the updated sections */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="max-w-xl space-y-4 sm:space-y-5">
          
          {/* Breadcrumb Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center gap-2 text-xs text-slate-300"
          >
            <Link href="/" className="hover:text-[#E5A64C] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[#E5A64C] text-[10px]">•</span>
            <span className="text-[#E5A64C] font-semibold">Visitor Visa</span>
          </motion.div>

          {/* Subtitle Accent Line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
            className="flex items-center gap-2 w-fit"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.1em] uppercase text-white font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              Nexera Visitor Visa Services
            </span>
          </motion.div>

          {/* Main Serif Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-white tracking-tight"
          >
            Stay Connected with <br />
            Family & Friends with{" "}
            <span className="italic font-normal text-[#E5A64C]">Visitor Visa</span>
            <br />
            Assistance
          </motion.h1>

          {/* Body Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: luxuryEase }}
            className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-lg"
          >
            Whether visiting family, attending milestone events, or exploring new destinations, we provide end-to-end guidance to ensure error-free visitor visa approvals.
          </motion.p>

          {/* Call To Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: luxuryEase }}
            className="pt-2"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-[#E5A64C] via-[#E8B66C] to-[#D89233] text-[#0A1329] font-semibold text-xs sm:text-sm tracking-wide shadow-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <span>Apply for Visitor Visa</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A1329]/15 text-[#0A1329] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}