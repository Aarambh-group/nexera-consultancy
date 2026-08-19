"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

export default function CTA() {
  return (
    <section
      id="consultation"
      className="relative w-full py-6 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-14 text-slate-800 overflow-hidden font-sans selection:bg-[#C9933B] selection:text-white"
    >
      {/* Background Image Container */}
      <div className="absolute inset-x-3 sm:inset-x-6 lg:inset-x-12 inset-y-0 sm:h-[85%] sm:top-1/2 sm:-translate-y-1/2 rounded-sm overflow-hidden z-0 border border-slate-200/60 shadow-lg">
        <Image
          src="/images/cta-bg.jpg"
          alt="CTA Background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Soft overlay matching theme contrast */}
        <div className="absolute inset-0 bg-white/70 sm:bg-white/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="relative rounded-xl p-5 sm:p-6 lg:p-8"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

            {/* Left — Text content with Theme Colors & Serif Title */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: luxuryEase }}
              className="lg:col-span-7 space-y-3 sm:space-y-4 text-left"
            >
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-[#C9933B] bg-[#C9933B]/10 sm:bg-transparent">
                <span className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.2em] uppercase font-mono">
                  START YOUR VISA APPLICATION
                </span>
              </div>

              {/* Title with Serif Font Styling */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium tracking-tight text-[#0F172A] leading-[1.2] sm:leading-[1.15]">
                Ready To Start{" "}
                <span className="italic font-normal text-[#C9933B] block sm:inline">
                  Your Journey?
                </span>
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg font-light">
                Book your free consultation today and let our experts guide you
                towards your dream destination with zero stress.
              </p>

              {/* Call to Action Buttons */}
              <div className="pt-2 sm:pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center justify-center gap-2 bg-[#070F21] hover:bg-[#0c1836] text-white font-semibold text-xs sm:text-sm tracking-wide px-6 py-3 sm:py-2.5 rounded-sm shadow-md shadow-[#070F21]/20 transition-all duration-300 w-full sm:w-auto"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9933B]" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right — Passport image container */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease: luxuryEase }}
              className="lg:col-span-5 flex justify-center lg:justify-end mt-2 lg:mt-0"
            >
              <div className="relative w-full max-w-[280px] sm:max-w-none h-[160px] sm:h-[220px] lg:h-[240px]">
                <Image
                  src="/images/cta.png"
                  alt="Passport and boarding pass for travel"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 360px"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}