"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  HelpCircle, 
  MessageSquare, 
  Sparkles, 
  FileCheck 
} from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const overviewServices = [
  {
    icon: Users,
    title: "Mock Interview Sessions",
    desc: "Simulated 1-on-1 consular interviews designed to replicate exact embassy pressure, environment, and question formats.",
  },
  {
    icon: HelpCircle,
    title: "Common Question Practice",
    desc: "Rigorous drills on high-frequency questions covering intent, finances, ties to home country, and study/travel plans.",
  },
  {
    icon: MessageSquare,
    title: "Communication Tips",
    desc: "Refining concise phrasing, tone control, and active listening skills to articulate facts clearly within 2-3 minutes.",
  },
  {
    icon: Sparkles,
    title: "Confidence Building",
    desc: "Body language training, eye-contact coaching, and stress management techniques to overcome interview anxiety.",
  },
  {
    icon: FileCheck,
    title: "Final Document Review",
    desc: "Cross-auditing your physical interview binder to match verbal statements perfectly with supporting documentation.",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Standardized design system container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12">
        
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: luxuryEase }}
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
            Expert Coaching for{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Consular Success
            </span>
          </h2>

          {/* Subheading Description */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-light leading-relaxed pt-1">
            Consular officers make rapid decisions based on brief interactions. Our specialized interview training equips you with clear communication strategies, eliminating hesitation and ensuring your verbal answers align seamlessly with your file.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {overviewServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: luxuryEase }}
                className="group p-6 sm:p-7 bg-slate-50/70 rounded-2xl border border-slate-200/80 hover:border-[#E5A64C]/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-xl bg-[#070D1F] border border-[#E5A64C]/30 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-[#E5A64C] transition-all duration-300 shadow-md">
                    <Icon className="w-6 h-6 text-[#E5A64C]" />
                  </div>

                  {/* Text Details */}
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