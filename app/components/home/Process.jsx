"use client";

import { motion } from "framer-motion";
import { 
  Compass, 
  MessageSquare, 
  UserCheck, 
  FileText, 
  Send, 
  Clock, 
  CheckCircle2 
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We understand your needs and goals.",
  },
  {
    icon: UserCheck,
    title: "Assessment",
    description: "We evaluate your profile carefully.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "We assist in preparing accurate documents.",
  },
  {
    icon: Send,
    title: "Application",
    description: "We submit your application.",
  },
  {
    icon: Clock,
    title: "Processing",
    description: "We follow up and track your application.",
  },
  {
    icon: CheckCircle2,
    title: "Approval",
    description: "Get your visa and start your journey.",
  },
];

// Custom luxury cubic-bezier easing
const luxuryEase = [0.16, 1, 0.3, 1];

function ProcessStep({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: luxuryEase,
      }}
      className="flex flex-col items-center text-center group relative z-10 cursor-pointer"
    >
      {/* Icon Badge Container */}
      <motion.div
        whileHover={{ scale: 1.1, y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative mb-3 sm:mb-4 flex items-center justify-center"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm transition-all duration-300">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#070F21] text-white flex items-center justify-center shadow-inner group-hover:bg-[#C9933B] transition-colors duration-300">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75] transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>
      </motion.div>

      {/* Step Title */}
      <h3 className="text-xs sm:text-sm font-semibold text-[#0F172A] mb-1 transition-colors duration-300 group-hover:text-[#C9933B]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[11px] text-slate-500 font-light leading-relaxed max-w-[150px]">
        {description}
      </p>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-[#FDFDFE] pt-8 pb-6 sm:pt-16 sm:pb-8 px-4 sm:px-6 lg:px-12 text-slate-800 font-sans selection:bg-[#C9933B] selection:text-white"
    >
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-10">
        
        {/* HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className="flex flex-col items-center text-center space-y-2 sm:space-y-2.5"
        >
          {/* Tagline Badge */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#C9933B] uppercase">
            <span>OUR PROCESS</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0F172A] font-medium leading-[1.2] sm:leading-[1.15]">
            A Simple Process, A Successful{" "}
            <span className="italic font-normal text-[#C9933B] block sm:inline">
              Journey.
            </span>
          </h2>

          {/* Short Gold Underline Bar */}
          <div className="w-9 h-[2.5px] bg-[#C9933B] rounded-full mt-1.5 sm:mt-2" />
        </motion.div>

        {/* DESKTOP TIMELINE */}
        <div className="hidden md:block relative pt-2">
          
          {/* CLEAN DOTTED LINE */}
          <div className="absolute top-[34px] left-[8%] right-[8%] h-[0px] border-t-2 border-dashed border-slate-300 z-0 pointer-events-none" />

          {/* Grid Layout */}
          <div className="grid grid-cols-6 gap-2 relative z-10">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* MOBILE TIMELINE */}
        <div className="md:hidden relative px-2 sm:px-4 pt-2">
          
          {/* VERTICAL DOTTED LINE */}
          <div className="absolute left-[31px] sm:left-[35px] top-[14px] bottom-[28px] w-[0px] border-l-2 border-dashed border-slate-300 z-0 pointer-events-none" />

          <div className="flex flex-col gap-5 sm:gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: luxuryEase }}
                  className="flex items-start gap-3.5 sm:gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#070F21] text-white flex items-center justify-center group-hover:bg-[#C9933B] transition-colors duration-300">
                      <Icon className="w-4 h-4 stroke-[1.75]" />
                    </div>
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#0F172A] group-hover:text-[#C9933B] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-light mt-0.5 sm:mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}