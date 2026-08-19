"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] bg-[#070D1F] flex items-center py-8 lg:py-10 overflow-hidden">
      {/* Full Background Image Container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/student-bg.png"
          alt="Student Visa Background Graphic"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Gradient overlay for text readability across the image */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#02060F] via-[#040C1F]/80 via-35% to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-slate-300">
            <Link 
              href="/" 
              className="hover:text-[#E5A64C] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-[#E5A64C] text-[10px]">•</span>
            <span className="text-[#E5A64C] font-medium">Student Visa</span>
          </div>

          {/* Top Subtitle */}
          <div className="mb-4 flex items-center gap-2 w-fit">
            <span className="relative inline-block text-xs tracking-[0.1em] uppercase text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              Nexera Student Visa Services
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-white tracking-tight mb-3">
            Shape Your Global <br />
            Education with{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Student Visa
            </span><br />
            Expertise
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-lg">
            Empowering students to pursue higher education abroad with university selection, documentation support, and end-to-end student visa guidance.
          </p>

          {/* Action Button */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E5A64C] via-[#E8B66C] to-[#D89233] text-[#0A1329] font-medium text-xs sm:text-sm tracking-wide shadow-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <span>Apply for Student Visa</span>
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0A1329]/15 text-[#0A1329] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3 stroke-[2.5]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}