import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Handshake,
  Award,
  UserCheck,
  FileSearch,
  CheckCircle2,
  ArrowRight,
  BadgeCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function VisaCoreValues() {
  const [activeStep, setActiveStep] = useState(0);

  const visaValues = [
    {
      id: "01",
      code: "PROTOCOL-VETTING",
      title: "Strict Legal Vetting & Embassy Compliance",
      subtitle: "PRE-ASSESSMENT & REGULATORY SCRUTINY",
      desc: "Every applicant dossier undergoes a multi-point legal audit against current international immigration laws before submission. We enforce 100% regulatory compliance to protect your record from embassy bans.",
      icon: ShieldCheck,
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTpbwyOQ3FSMcjliehLRAF0V8jsjpI3K09xExvTm4r0w2uARwEMbEvRi9Xinfu6JF_5nmECBcW-PFK0q6k",
      imageCaption: "Official Visa Application Vetting & Passport Audit",
      metric: "100%",
      metricLabel: "Legal Compliance",
      badges: ["Bar-Certified Review", "Zero Misguidance", "Embassy Sync"],
      status: "APPROVED PROTOCOL",
    },
    {
      id: "02",
      code: "PROTOCOL-COUNSEL",
      title: "1-on-1 Licensed Legal Representation",
      subtitle: "DEDICATED CASE MANAGERS & SETTLEMENT",
      desc: "Your case is assigned directly to an accredited immigration counsel. From points calculation to post-arrival orientation, we provide end-to-end guidance across your migration lifecycle.",
      icon: Handshake,
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRJMaox97xYSLbhDbGxt_xXrigg_JUNkzf0ere-ZU8FHMzL-nvcMsYgp0jBDjz-WSqHSC71cQf_mOiOvT4",
      imageCaption: "1-on-1 Legal Consultation & Case Filing Session",
      metric: "Direct",
      metricLabel: "Officer Access",
      badges: ["Dedicated Counsel", "Live Portal Updates", "Settlement Aid"],
      status: "FULL REPRESENTATION",
    },
    {
      id: "03",
      code: "PROTOCOL-AUDIT",
      title: "Precision Filing & Document Scrutiny",
      subtitle: "3-TIER APPLICATION QUALITY CONTROL",
      desc: "A single document discrepancy can cause visa delays or rejections. Our quality assurance team cross-checks your financial statements, SOPs, and civil documents to ensure top-tier precision.",
      icon: Award,
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQL76rIPIuL2mjv8bCsj8qabjndJFcR62nQFppc2XeTrxWbdxdSvg1Uui7JCTNIZ7HBUssHmc1OxXCU1aE",
      imageCaption: "Embassy Quality Audit & Multi-Tier Review Process",
      metric: "Top 1%",
      metricLabel: "Application Accuracy",
      badges: ["3-Tier Verification", "SOP Optimization", "Risk Mitigation"],
      status: "AUDITED ACCURACY",
    },
    {
      id: "04",
      code: "PROTOCOL-STRATEGY",
      title: "Tailored Global Migration Strategies",
      subtitle: "POINTS OPTIMIZATION & ROADMAPPING",
      desc: "No two profiles are identical. We analyze your education, work experience, and financial background to craft a customized immigration pathway for Express Entry, PR, or Business Visas.",
      icon: UserCheck,
      image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRSp_PZImfshX9kPQO_7MUCONVgHFrDyPTKXH5VhsRRdswi5ooHMfhwC5jSUMA42yGJPLMyQ99UuQG9DpI",
      imageCaption: "Global Migration Flight Routes & Destination Mapping",
      metric: "Custom",
      metricLabel: "Points Optimization",
      badges: ["CRS Boost Strategy", "Custom Roadmaps", "Tax Guidance"],
      status: "STRATEGIC MATCH",
    },
    {
      id: "05",
      code: "PROTOCOL-TRANSPARENCY",
      title: "Fixed Retainers & Honest Eligibility",
      subtitle: "ZERO HIDDEN SURCHARGES GUARANTEE",
      desc: "Complete financial transparency from day one. We provide clear upfront itemization covering government fees, legal retainers, and translation costs with no unexpected surcharges.",
      icon: FileSearch,
      image: "https://www.thepinnaclelist.com/wp-content/uploads/2026/01/Five-Global-Cities-Leading-Luxury-Real-Estate-in-2026-A-Visual-Panorama.jpg",
      imageCaption: "Global Permanent Residency & High-Value Destinations",
      metric: "Upfront",
      metricLabel: "Fixed Fee Ledger",
      badges: ["Itemized Breakdown", "Clear Retainer", "Honest Odds"],
      status: "GUARANTEED RETAINER",
    },
  ];

  const current = visaValues[activeStep];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % visaValues.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + visaValues.length) % visaValues.length);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat select-none"
      style={{ backgroundImage: "url('/about-bg.png')" }}
    >
      {/* Background Dim & Grid */}
      <div className="absolute inset-0 bg-white/85 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C9933B]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#C9933B] uppercase">
              LICENSED IMMIGRATION DIRECTIVES
            </span>
            <span className="w-6 h-[1px] bg-[#C9933B]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0F172A] font-medium leading-tight px-2">
            How We Structure Your <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#C9933B]">
              Visa Success & Compliance
            </span>
          </h2>
        </motion.div>

        {/* Navigation Controls & Tabs Container */}
        <div className="relative mb-8 sm:mb-10">
          {/* Mobile Navigation Arrows */}
          <div className="flex items-center justify-between sm:hidden mb-3 px-1">
            <span className="text-xs font-mono font-bold text-[#C9933B]">
              STEP {current.id} OF 05
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 active:bg-slate-100 shadow-sm"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 active:bg-slate-100 shadow-sm"
                aria-label="Next step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Navigation Selector */}
          <div className="overflow-x-auto scrollbar-none pb-3 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex items-center justify-between min-w-[680px] sm:min-w-[760px] border-b border-slate-200 pb-4">
              {visaValues.map((item, idx) => {
                const isActive = activeStep === idx;
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveStep(idx)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`flex items-center gap-2.5 sm:gap-3 transition-colors relative pb-2 px-1 focus:outline-none ${
                      isActive
                        ? "text-[#0F172A] font-bold"
                        : "text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-[#C9933B] text-white shadow-lg shadow-[#C9933B]/30 scale-105"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="text-left">
                      <span className="text-[9px] font-mono tracking-widest text-[#C9933B] uppercase block">
                        {item.id}
                      </span>
                      <span className="text-xs font-serif font-medium whitespace-nowrap">
                        {item.title.split(" ")[0]} {item.title.split(" ")[1]}
                      </span>
                    </div>

                    {/* Active Underline Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute bottom-[-17px] left-0 right-0 h-[2.5px] bg-[#C9933B] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content Showcase (Dual-Column Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Real Case Evidence Image Frame (5 Cols) */}
          <motion.div
            className="lg:col-span-5 bg-white rounded-lg p-3 sm:p-4 border border-slate-200/80 shadow-xl flex flex-col justify-between relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[240px] sm:h-[320px] lg:h-full rounded-lg overflow-hidden bg-slate-900 min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.imageCaption}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />

              {/* Top Floating Badge */}
              <motion.div
                key={`badge-${current.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F172A]/85 backdrop-blur-md border border-[#C9933B]/40 text-[#C9933B] text-[9px] sm:text-[10px] font-mono tracking-widest uppercase font-bold shadow-md"
              >
                <BadgeCheck className="w-3.5 h-3.5" />
                <span>{current.status}</span>
              </motion.div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white space-y-1">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-slate-300 block">
                  {current.code}
                </span>
                <p className="text-xs font-serif italic text-slate-200 line-clamp-2">
                  {current.imageCaption}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Embassy Dossier (7 Cols) */}
          <motion.div
            className="lg:col-span-7 bg-[#0F172A] text-white rounded-lg p-6 sm:p-8 lg:p-10 border border-[#C9933B]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden min-h-[420px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Watermark Number */}
            <span className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:-right-4 text-[120px] sm:text-[180px] font-serif font-bold text-white/[0.04] pointer-events-none leading-none select-none">
              {current.id}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: 15, transition: { duration: 0.2 } }}
                className="space-y-5 sm:space-y-6 relative z-10 my-auto"
              >
                {/* Dossier Header */}
                <motion.div
                  variants={childVariants}
                  className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4"
                >
                  <div className="inline-flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C9933B] shrink-0" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#C9933B] uppercase">
                      {current.subtitle}
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-400">
                    {current.id} / 05
                  </span>
                </motion.div>

                {/* Main Title & Description */}
                <div className="space-y-2 sm:space-y-3">
                  <motion.h3
                    variants={childVariants}
                    className="text-xl sm:text-2xl lg:text-3xl font-serif text-white font-medium leading-snug"
                  >
                    {current.title}
                  </motion.h3>
                  <motion.p
                    variants={childVariants}
                    className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed"
                  >
                    {current.desc}
                  </motion.p>
                </div>

                {/* Compliance Checklist Cards */}
                <motion.div variants={childVariants} className="pt-2 space-y-2">
                  <span className="text-[10px] font-mono text-[#C9933B] uppercase tracking-widest block font-bold">
                    CONSULTANCY GUARANTEES & PROFILES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {current.badges.map((tag, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                        className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2.5 rounded-lg text-xs text-slate-200 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C9933B] shrink-0" />
                        <span className="truncate">{tag}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Footer Metric Line & Assessment Action */}
                <motion.div
                  variants={childVariants}
                  className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex sm:block items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-[#C9933B] leading-none">
                      {current.metric}
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block sm:mt-1">
                      {current.metricLabel}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto bg-[#C9933B] hover:bg-[#b07e2a] text-white py-3.5 px-6 rounded-lg font-medium text-xs tracking-wider uppercase transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#C9933B]/20"
                  >
                    <span>Evaluate Your Eligibility</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}