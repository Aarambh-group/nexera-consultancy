"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const faqs = [
  {
    question: "Why is documentation verification so critical for visa applications?",
    answer:
      "Embassies evaluate your eligibility almost entirely through physical or digital documents. Slight discrepancies in financial statements, employment records, or application forms can lead to immediate refusal or long administrative processing delays.",
  },
  {
    question: "What financial documents do consulates require?",
    answer:
      "Most consulates require 3 to 6 months of original bank statements, Income Tax Returns (ITR) for 2 to 3 years, employment salary slips, property valuations, and sponsor affidavits if travel is funded by a third party.",
  },
  {
    question: "Do you help draft cover letters and Statement of Purpose (SOP)?",
    answer:
      "Yes. We draft customized, persuasive cover letters and SOPs that explain your travel purpose, financial stability, and strong economic/social ties to your home country.",
  },
  {
    question: "What if my original documents are in a local non-English language?",
    answer:
      "We guide you through certified translation, notarization, and legal apostille requirements as needed by your specific target embassy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white font-sans selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Aligned container matching design system standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-10 sm:space-y-12">
        
        {/* Header Block */}
        <div className="space-y-3 text-center max-w-2xl mx-auto">
          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="flex items-center justify-center gap-2"
          >
            <span className="relative inline-block text-[10px] sm:text-xs tracking-[0.15em] uppercase text-[#E5A64C] font-semibold after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#E5A64C]">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-[#0A1329] tracking-tight leading-tight pt-1"
          >
            Documentation Questions{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Answered
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
                transition={{ duration: 0.5, delay: idx * 0.06, ease: luxuryEase }}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[#E5A64C]/50 bg-white shadow-md shadow-slate-200/50"
                    : "border-slate-200/80 bg-slate-50/60 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-xs sm:text-sm lg:text-base font-semibold text-[#0A1329] transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "bg-[#070D1F] text-[#E5A64C] rotate-180" : "bg-slate-200/60 text-slate-600"}`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: luxuryEase }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-500 font-light leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
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