"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const faqs = [
  {
    question: "How far in advance should I apply for a tourist visa?",
    answer:
      "We advise starting your application process at least 4 to 8 weeks before your intended travel date to accommodate document checks, appointment availability, and consulate processing times.",
  },
  {
    question: "Do I need fully paid flight tickets before applying?",
    answer:
      "No. Most consulates require only reserved flight itineraries rather than fully paid tickets. We assist in generating compliant flight reservations suitable for visa processing.",
  },
  {
    question: "Is international travel insurance mandatory for a tourist visa?",
    answer:
      "Travel insurance is mandatory for destinations like the Schengen Area and strongly recommended worldwide. It covers unexpected medical emergencies, trip cancellations, and lost baggage.",
  },
  {
    question: "What financial documents do I need to present?",
    answer:
      "Common requirements include bank statements from the last 3–6 months, pay slips, income tax returns, and asset documents demonstrating adequate funds for your vacation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Container aligned to system standard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-10">
        
        {/* Header Block */}
        <div className="max-w-xl sm:max-w-2xl mx-auto text-center space-y-3">
          {/* Top Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center justify-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.1em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-[#0A1329] tracking-tight"
          >
            Got Questions? <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#E5A64C]">
              We Have Answers
            </span>
          </motion.h2>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: luxuryEase }}
                className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50 hover:border-[#E5A64C]/40 transition-colors duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-[#0A1329] hover:bg-slate-100/50 transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-[#070D1F]" : "bg-slate-200/60"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#E5A64C]" : "text-[#0A1329]"
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: luxuryEase }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-500 font-light leading-relaxed border-t border-slate-200/50">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}