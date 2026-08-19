"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const faqs = [
  {
    question: "Why are visa mock interviews so beneficial?",
    answer:
      "Mock interviews eliminate unexpected surprises and reduce anxiety. By simulating real officer behavior and timing, you practice articulating your thoughts clearly under pressure, preventing nervous slips or contradictory answers.",
  },
  {
    question: "How long are the mock interview coaching sessions?",
    answer:
      "A typical session lasts 45 to 60 minutes. It includes a simulated interview (10-15 mins) followed by a comprehensive video breakdown, answer refinement, and document arrangement guidance.",
  },
  {
    question: "What if I have previous visa refusals?",
    answer:
      "We specialize in refusal recovery. We analyze your prior refusal notes (such as US Section 214(b) or UK Credibility issues) and construct a clear strategy to address past concerns directly during your next interview.",
  },
  {
    question: "How close to my interview date should I book a preparation session?",
    answer:
      "We recommend scheduling your first mock interview at least 1 to 2 weeks before your actual consular appointment to allow enough time to refine answers and practice body language naturally.",
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
            Interview Preparation{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Queries
            </span>
          </motion.h2>
        </div>

        {/* FAQ Items Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.05, ease: luxuryEase }}
                className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? "border-[#E5A64C]/40 bg-white shadow-sm"
                    : "border-slate-200/80 bg-slate-50/60 hover:bg-slate-50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-[#0A1329] transition-colors duration-200"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? "bg-[#E5A64C]/15" : "bg-slate-200/50"
                  }`}>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#E5A64C] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: luxuryEase }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-100">
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