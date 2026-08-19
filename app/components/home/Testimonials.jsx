"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Thanks to Nexera Visa, I got my Canada Study Visa without any hassle. Their guidance and support were exceptional throughout the process.",
    name: "Priya Sharma",
    visaType: "Canada Study Visa",
  },
  {
    quote:
      "Got my Australia PR with the expert guidance of Nexera Visa. They're the best consultants!",
    name: "Rahul Verma",
    visaType: "Australia PR",
  },
  {
    quote:
      "Excellent support and transparent process. Nexera Visa is the most trusted name for UK Visa.",
    name: "Ankita Patel",
    visaType: "UK Visitor Visa",
  },
];

// Luxury spring animation curve
const luxuryEase = [0.16, 1, 0.3, 1];

function TestimonialCard({ quote, name, visaType, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: luxuryEase,
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative flex flex-col justify-between bg-white/95 backdrop-blur-md rounded-sm p-4 sm:p-5 border border-slate-100 shadow-[0_6px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_30px_rgba(201,147,59,0.18)] hover:border-[#C9933B]/50 transition-all duration-300 z-10 cursor-pointer"
    >
      <div className="space-y-2.5">
        {/* Quote Icon & Visa Badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#C9933B]/10 flex items-center justify-center text-[#C9933B] group-hover:bg-[#C9933B] group-hover:text-white transition-colors duration-300 shrink-0">
            <Quote className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <span className="text-[9px] font-bold tracking-wider text-[#C9933B] bg-[#C9933B]/10 border border-[#C9933B]/20 px-2 sm:px-2.5 py-0.5 rounded-full uppercase font-mono truncate max-w-[160px] sm:max-w-none text-right">
            {visaType}
          </span>
        </div>

        {/* Rating Stars with Staggered Hover Effect */}
        <div className="flex items-center gap-1 text-[#C9933B] pt-0.5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.25, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Star className="w-3 h-3 fill-[#C9933B]" />
            </motion.div>
          ))}
        </div>

        {/* Testimonial Body */}
        <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-light italic">
          "{quote}"
        </p>
      </div>

      {/* Author Name */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <h4 className="text-xs sm:text-[13px] font-semibold text-[#0F172A] group-hover:text-[#C9933B] transition-colors duration-300 truncate">
          {name}
        </h4>
        <span className="text-[9px] text-slate-400 font-mono font-medium uppercase tracking-widest shrink-0">
          Verified Client
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FDFDFE] pt-6 pb-4 sm:pt-12 sm:pb-6 px-3 sm:px-6 lg:px-12 text-slate-800 font-sans selection:bg-[#C9933B] selection:text-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="relative rounded-sm p-4 sm:p-7 lg:p-8 shadow-2xl overflow-hidden border border-slate-800/80 bg-[#070F21]"
        >
          {/* Background Image */}
          <Image
            src="/images/bg1.jpg"
            alt="Testimonials Background"
            fill
            priority
            unoptimized
            className="object-cover object-center z-0 opacity-40 mix-blend-overlay"
          />

          {/* Luxury Ambient Light Glows */}
          <div className="absolute top-0 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-[#C9933B]/15 rounded-full blur-2xl sm:blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-blue-900/20 rounded-full blur-2xl sm:blur-3xl pointer-events-none z-0" />

          {/* HEADER ROW */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between pb-3 sm:pb-4 mb-4 sm:mb-5 border-b border-white/10 gap-2 sm:gap-3">
            <div className="space-y-1 max-w-xl text-left">
              {/* Tagline Badge */}
              <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#C9933B] uppercase">
                <span>CLIENT SUCCESS STORIES</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white font-medium leading-[1.2] sm:leading-[1.15]">
                Real People.{" "}
                <span className="italic font-normal text-[#C9933B] block sm:inline">
                  Real Success.
                </span>
              </h2>
            </div>
          </div>

          {/* TESTIMONIAL CARDS GRID */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                visaType={testimonial.visaType}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}