"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DESTINATIONS = [
  {
    name: "Canada",
    status: "Popular",
    flag: "https://flagcdn.com/w40/ca.png",
  },
  {
    name: "Australia",
    status: "Popular",
    flag: "https://flagcdn.com/w40/au.png",
  },
  {
    name: "UK",
    status: "Popular",
    flag: "https://flagcdn.com/w40/gb.png",
  },
  {
    name: "USA",
    status: "Popular",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    name: "Germany",
    status: "Popular",
    flag: "https://flagcdn.com/w40/de.png",
  },
];

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[650px] lg:min-h-[750px] xl:min-h-[515px] bg-[#070D1F] bg-no-repeat bg-cover bg-right sm:bg-right-top flex items-center py-12 lg:py-16"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Gradient overlay to ensure text contrast */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#02060F] via-[#040C1F]/70 via-20% to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Top Subtitle */}
          <div className="mb-4 flex items-center gap-2 w-fit">
            <span className="relative inline-block text-xs sm:text-sm tracking-[0.1em] uppercase text-white after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              TRUSTED VISA & IMMIGRATION PARTNER
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-white tracking-tight mb-4">
            Your Global Journey <br />
            Starts With{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Confidence.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6 max-w-lg">
            Professional guidance for visas, study, work, PR and travel — tailored to your dreams.
          </p>

          {/* Action Button */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/contact"
              className="group relative flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#E5A64C] via-[#E8B66C] to-[#D89233] text-[#0A1329] font-medium text-sm sm:text-base tracking-wide shadow-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <span>Book Free Consultation</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0A1329]/15 text-[#0A1329] transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3 stroke-[2.5]" />
              </span>
            </Link>
          </div>

          {/* Popular Destinations Glass Bar */}
          <div className="inline-flex flex-wrap items-center gap-3 sm:gap-5 rounded-sm border border-white/10 bg-black/40 p-3.5 backdrop-blur-md">
            {DESTINATIONS.map((dest, idx) => (
              <div
                key={dest.name}
                className={`flex items-center gap-3 ${
                  idx !== DESTINATIONS.length - 1
                    ? "sm:border-r sm:border-white/10 sm:pr-5"
                    : ""
                }`}
              >
                <img
                  src={dest.flag}
                  alt={dest.name}
                  className="h-3.5 w-5 rounded-[1px] object-cover shadow-sm"
                />
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    {dest.name}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-300 font-light mt-0.5 leading-tight">
                    {dest.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}