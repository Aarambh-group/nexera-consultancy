"use client";

import Link from "next/link";
import { Headphones, User, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const features = [
    {
      icon: Headphones,
      title: "Quick Response",
      description: "We reply within 24 hrs",
    },
    {
      icon: User,
      title: "Expert Guidance",
      description: "From start to success",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Support",
      description: "Every step of the way",
    },
  ];

  // Animation variants for staggered load sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] bg-[#070D1F] bg-no-repeat bg-contain bg-right-bottom flex items-center py-8 lg:py-10 overflow-hidden"
      style={{ backgroundImage: "url('/images/contact-bg.png')" }}
    >
      {/* Gradient overlay to ensure text contrast */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#02060F] via-[#040C1F]/30 via-20% to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Breadcrumb Navigation (Home • Contact Us) */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-2 text-xs text-slate-300">
            <Link 
              href="/" 
              className="hover:text-[#E5A64C] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-[#E5A64C] text-[10px]">•</span>
            <span className="text-[#E5A64C] font-medium">Contact Us</span>
          </motion.div>

          {/* Top Subtitle */}
          <motion.div variants={itemVariants} className="mb-4 flex items-center gap-2 w-fit">
            <span className="relative inline-block text-xs tracking-[0.1em] uppercase text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              Let's Connect
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-white tracking-tight mb-3">
            We're Here to Help You <br />
            Take The{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Next Step
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6 max-w-lg">
            Have questions or ready to start your visa journey? Our team is here to guide you every step of the way.
          </motion.p>

          {/* Features Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-2">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  className="flex items-center gap-3"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full border border-slate-700/80 bg-slate-900/40 flex items-center justify-center shrink-0 text-[#E5A64C]">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-semibold leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}