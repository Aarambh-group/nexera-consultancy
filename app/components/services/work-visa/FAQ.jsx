"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const luxuryEase = [0.16, 1, 0.3, 1];

const faqs = [
  {
    question: "Do I need a formal job offer before applying for a work visa?",
    answer:
      "Most employer-sponsored work visas (e.g., UK Skilled Worker, Canada LMIA, US H-1B) require a valid job offer from a licensed employer. However, certain countries offer job seeker or opportunity visas (like Germany's Chancenkarte) based on points.",
  },
  {
    question: "What is a Skill Assessment and when is it required?",
    answer:
      "A skill assessment evaluates your educational degrees and work history against destination country standards. Countries like Australia and Canada require this before submitting skilled worker petitions.",
  },
  {
    question: "Can my family accompany me on a work visa?",
    answer:
      "Yes. Most full-time work visas allow primary holders to bring immediate dependents (spouse and children). Spouses may also be eligible to apply for open work permits.",
  },
  {
    question: "How long does work visa processing usually take?",
    answer:
      "Processing ranges from 4 weeks to 6 months depending on employer authorization speed, skill assessment approvals, and specific embassy processing times.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white selection:bg-[#E5A64C] selection:text-[#0A1329]">
      {/* Container aligned with standard responsive site width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full space-y-8 sm:space-y-10">
        
        {/* Header Block */}
        <div className="max-w-xl sm:max-w-2xl mx-auto text-center space-y-3">
          {/* Subtitle Badge */}
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

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: luxuryEase }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight text-[#0A1329] tracking-tight"
          >
            Work Visa Queries{" "}
            <span className="italic font-normal text-[#E5A64C]">
              Answered
            </span>
          </motion.h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: luxuryEase }}
                className="border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50 hover:border-[#E5A64C]/50 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-[#0A1329] hover:bg-slate-100/50 transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#E5A64C] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
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
                      <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-500 font-light leading-relaxed border-t border-slate-200/40 pt-3">
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