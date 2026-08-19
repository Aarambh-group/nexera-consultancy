"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] bg-[#070D1F] bg-no-repeat bg-cover sm:bg-[length:100%_100%] bg-center flex items-center py-8 sm:py-12 lg:py-16 overflow-hidden font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]"
      style={{ backgroundImage: "url('/images/work-bg.png')" }}
    >
      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#02060F] via-[#040C1F]/80 via-35% to-transparent" />

      {/* Main Container - Aligned with system standard max-w-7xl */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="max-w-xl sm:max-w-2xl space-y-4 sm:space-y-5">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-[#E5A64C] transition-colors duration-200">
              Home
            </Link>
            <span className="text-[#E5A64C] text-[10px]">•</span>
            <span className="text-[#E5A64C] font-medium">Work Visa</span>
          </div>

          {/* Subtitle Badge */}
          <div className="flex items-center gap-2 w-fit">
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.1em] uppercase text-white font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              Nexera Work Visa Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-white tracking-tight">
            Build a Successful Career <br className="hidden sm:inline" />
            Abroad with Expert <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">Work Visa</span> Guidance
          </h1>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-lg">
            Working in another country opens the door to new professional opportunities and global career growth. We guide skilled professionals through eligibility assessment, employment documentation, and complete application support.
          </p>

          {/* Primary Call to Action */}
          <div className="pt-2">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#E5A64C] via-[#E8B66C] to-[#D89233] text-[#0A1329] font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:shadow-[#E5A64C]/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <span>Apply for Work Visa</span>
              <span className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#0A1329]/15 text-[#0A1329] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}