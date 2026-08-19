import React from "react";
import { motion } from "framer-motion";

export default function OurCommitment() {
  return (
    <section className="bg-[#070D1F] text-white py-10 sm:py-12 px-4 sm:px-6 border-t border-slate-800/60 relative overflow-hidden">
      {/* Background Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#02060F] via-[#040C1F]/70 to-[#02060F] pointer-events-none" />

      {/* Reduced Container Width (max-w-5xl) */}
      <div className="max-w-[1180px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Heading */}
          <motion.div 
            className="lg:col-span-5 space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-[#E5A64C] text-[10px] sm:text-xs font-bold uppercase tracking-[0.1em]">
                OUR COMMITMENT
              </span>
              <div className="w-6 h-[1px] bg-[#E5A64C]" />
            </div>

            {/* Scaled-down Font Sizes */}
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal leading-tight text-white">
              Committed to Your Success <br />
              <span className="font-serif italic text-[#E5A64C] font-normal">
                Beyond Borders
              </span>
            </h2>
          </motion.div>

          {/* Right Content & Graphic */}
          <motion.div 
            className="lg:col-span-7 flex flex-col md:flex-row items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Scaled-down Body Font Sizes */}
            <div className="space-y-2 text-slate-300 font-light text-xs sm:text-sm leading-relaxed flex-1">
              <p>
                At Nexera Consultancy, we are committed to helping people achieve their dreams, explore new opportunities, and build successful futures across the globe.
              </p>
              <p className="text-[#E5A64C] font-serif italic font-normal text-xs sm:text-sm">
                Your success is our motivation, and your journey is our responsibility.
              </p>
            </div>

            {/* Compact Globe Element */}
            <div className="w-28 h-28 flex-shrink-0 relative flex items-center justify-center rounded-xl bg-black/40 border border-slate-800/80 backdrop-blur-sm">
              <div className="w-20 h-20 rounded-full border border-slate-800 bg-[radial-gradient(#E5A64C_1px,transparent_1px)] [background-size:6px_6px] opacity-40 animate-spin-slow" />
              
              {/* Inline SVG Icon */}
              <svg 
                className="absolute w-6 h-6 text-[#E5A64C]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}