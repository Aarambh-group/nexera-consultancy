"use client";

import { Send, User, ShieldCheck, HeartHandshake, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const whyPoints = [
    {
      icon: User,
      title: "Personalized Consultation",
      description: "Get advice tailored to your profile and goals.",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Process",
      description: "Clear information and honest guidance.",
    },
    {
      icon: HeartHandshake,
      title: "End-to-End Support",
      description: "We are with you at every step.",
    },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
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
    <section className="w-full bg-[#F8FAFC] py-10 sm:py-16 lg:py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Lighting Glows */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#C9933B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#0F172A]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        className="max-w-[1180px] mx-auto bg-white rounded-lg sm:rounded-lg p-5 sm:p-8 lg:p-12 border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.06)] relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Form */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Eyebrow Tagline */}
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="h-[2px] w-5 bg-[#C9933B]" />
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9933B]">
                  SEND US A MESSAGE
                </span>
              </div>

              {/* Title & Description */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#0F172A] font-medium tracking-tight leading-[1.25] mb-2">
                Get in Touch
              </h2>
              <p className="text-slate-500 text-[11px] sm:text-xs mb-6 sm:mb-8 leading-relaxed max-w-lg font-normal">
                Fill out the form and our team will get back to you as soon as possible.
              </p>

              {/* Contact Form */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg border border-slate-200 text-slate-800 text-[11px] sm:text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C9933B] focus:ring-1 focus:ring-[#C9933B] transition-all bg-white"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg border border-slate-200 text-slate-800 text-[11px] sm:text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C9933B] focus:ring-1 focus:ring-[#C9933B] transition-all bg-white"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <motion.div variants={itemVariants}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg border border-slate-200 text-slate-800 text-[11px] sm:text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C9933B] focus:ring-1 focus:ring-[#C9933B] transition-all bg-white"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg border border-slate-200 text-slate-800 text-[11px] sm:text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C9933B] focus:ring-1 focus:ring-[#C9933B] transition-all bg-white"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg border border-slate-200 text-slate-800 text-[11px] sm:text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#C9933B] focus:ring-1 focus:ring-[#C9933B] transition-all bg-white resize-none"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0F172A] text-white text-[11px] sm:text-xs font-medium hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 text-[#C9933B]" />
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Why Nexera Side Box */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white rounded-lg sm:rounded-lg p-5 sm:p-8 border border-slate-200/80 flex flex-col justify-between gap-6 sm:gap-8 shadow-sm"
          >
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-[#0F172A] font-semibold mb-1">
                Why Contact Nexera?
              </h3>
              <div className="h-[3px] w-10 bg-[#C9933B] mb-5 sm:mb-6 rounded-full" />

              <div className="space-y-4 sm:space-y-6">
                {whyPoints.map((point, idx) => {
                  const Icon = point.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      className="flex items-start gap-3.5 sm:gap-4"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center shrink-0 text-[#0F172A]">
                        <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C9933B]" />
                      </div>
                      <div>
                        <h4 className="text-[#0F172A] text-[11px] sm:text-xs font-bold">
                          {point.title}
                        </h4>
                        <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 leading-relaxed font-normal">
                          {point.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Book Free Consultation Dark Card Banner */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-[#0F172A] rounded-lg p-4 sm:p-5 text-white flex items-center justify-between gap-3 sm:gap-4 overflow-hidden relative border border-slate-800 shadow-md"
            >
              {/* Subtle gold accent glow inside banner */}
              <div className="absolute -top-10 -right-10 w-24 sm:w-28 h-24 sm:h-28 bg-[#C9933B]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="z-10 max-w-[200px] sm:max-w-[220px]">
                <h4 className="font-serif text-base sm:text-lg font-medium leading-tight mb-1.5 sm:mb-2 text-white">
                  Book Free Consultation
                </h4>
                <p className="text-slate-300 text-[10px] sm:text-[11px] mb-3 sm:mb-4 leading-relaxed font-light">
                  Schedule a one-on-one consultation with our visa experts.
                </p>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-lg bg-[#C9933B] text-[#0F172A] text-[10px] sm:text-[11px] font-semibold hover:bg-[#b8822d] transition-colors"
                >
                  <span>Book Now</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[3]" />
                </motion.button>
              </div>

              {/* Line Art Calendar Icon in Gold */}
              <div className="shrink-0 text-[#C9933B] opacity-90 pr-1 sm:pr-2 z-10">
                <Calendar className="w-12 h-12 sm:w-14 sm:h-14 stroke-[1.2]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}