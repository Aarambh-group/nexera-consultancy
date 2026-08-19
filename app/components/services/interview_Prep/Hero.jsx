"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] bg-[#070D1F] bg-cover bg-center flex items-center py-12 lg:py-16 overflow-hidden font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]"
      style={{ backgroundImage: "url('/images/visa_interview.png')" }}
    >
      {/* Premium dark gradient overlay for optimal readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#02060F] via-[#040C1F]/90 via-50% to-transparent" />

      {/* Aligned container matching design system standards */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl space-y-5">
          
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: luxuryEase }}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-slate-300/80"
          >
            <Link
              href="/"
              className="hover:text-[#E5A64C] transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#E5A64C]/70 shrink-0" />
            <Link
              href="/services"
              className="hover:text-[#E5A64C] transition-colors duration-200"
            >
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-[#E5A64C]/70 shrink-0" />
            <span className="text-[#E5A64C] font-medium">
              Interview Preparation
            </span>
          </motion.nav>

          {/* Subtitle Tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              NEXERA CONSULAR SERVICES
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-4xl lg:text-5xl font-serif leading-tight text-white tracking-tight"
          >
            Face Your Visa Interview <br className="hidden sm:inline" />
            with Complete{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Confidence & Clarity
            </span>
          </motion.h1>

          {/* Subheading Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: luxuryEase }}
            className="text-slate-300 text-xs sm:text-sm lg:text-base font-light leading-relaxed max-w-xl"
          >
            For destinations requiring visa interviews, our experienced consultants provide 1-on-1 preparation sessions to refine your answers, boost communication skills, and ensure absolute consular compliance.
          </motion.p>

          {/* CTA Action */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: luxuryEase }}
            className="pt-2"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#E5A64C] via-[#E8B66C] to-[#D89233] text-[#0A1329] font-medium text-xs sm:text-sm tracking-wide shadow-lg shadow-[#E5A64C]/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#E5A64C]/20"
            >
              <span>Book Mock Interview</span>
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