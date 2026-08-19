"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  GraduationCap, 
  Briefcase, 
  Landmark, 
  Mail, 
  UserCheck, 
  FolderCheck, 
  FileText 
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const overviewServices = [
  {
    icon: ShieldCheck,
    title: "Passport Verification",
    desc: "Checking passport validity, blank page allocation, and previous visa stamps for embassy compliance.",
  },
  {
    icon: GraduationCap,
    title: "Academic Documents",
    desc: "Organizing degrees, transcripts, mark sheets, and credential evaluations (ECA/WES) accurately.",
  },
  {
    icon: Briefcase,
    title: "Employment Documents",
    desc: "Structuring reference letters, payslips, experience certificates, and official NOC releases.",
  },
  {
    icon: Landmark,
    title: "Financial Documents",
    desc: "Verifying bank statements, liquid assets, tax filings (ITR), sponsor affidavits, and fund trails.",
  },
  {
    icon: Mail,
    title: "Invitation Letters",
    desc: "Drafting and auditing business, host, family, and institutional invitation letters.",
  },
  {
    icon: UserCheck,
    title: "Identity Proofs",
    desc: "Standardizing civil identity cards, marriage certificates, birth records, and family registries.",
  },
  {
    icon: FolderCheck,
    title: "Supporting Documents",
    desc: "Compiling travel itineraries, hotel reservations, insurance policies, and cover letters.",
  },
  {
    icon: FileText,
    title: "Application Forms",
    desc: "Precise completion and audit of online consular application forms to eliminate errors.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container matching design system standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: luxuryEase }}
          className="space-y-3 text-left max-w-3xl"
        >
          {/* Subtitle Badge */}
          <div className="flex items-center gap-2">
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              SERVICE OVERVIEW
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0A1329] tracking-tight leading-tight pt-1">
            Meticulous Preparation for{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Flawless Filing
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed pt-1">
            The leading cause of visa rejection is incomplete or misaligned documentation. Our document specialists audit every detail, ensuring your file reflects full credibility and strict compliance with embassy criteria.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {overviewServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: luxuryEase }}
                className="group p-6 bg-slate-50/70 rounded-2xl border border-slate-200/80 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-xl bg-[#070D1F] border border-[#E5A64C]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#E5A64C] transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5 text-[#E5A64C]" />
                  </div>

                  {/* Service Text */}
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-semibold text-[#0A1329] group-hover:text-[#E5A64C] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}