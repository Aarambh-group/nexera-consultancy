"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Compass,
  FileCheck2,
  Eye,
  ShieldCheck,
  Headphones,
  Plane,
} from "lucide-react";

const features = [
  {
    id: "01",
    title: "Experienced Visa Consultants",
    tag: "Expertise",
    icon: Users,
    description:
      "Our knowledgeable team stays up to date with the latest immigration regulations and international visa procedures.",
  },
  {
    id: "02",
    title: "Personalized Strategy",
    tag: "Customized",
    icon: Compass,
    description:
      "We provide tailored guidance based on your unique profile and goals, ensuring the most suitable visa pathway.",
  },
  {
    id: "03",
    title: "Complete Documentation",
    tag: "Accuracy",
    icon: FileCheck2,
    description:
      "Rigorous document verification and application preparation to eliminate errors and boost approval rates.",
  },
  {
    id: "04",
    title: "Transparent Process",
    tag: "Integrity",
    icon: Eye,
    description:
      "We believe in honest communication, ethical practices, and keeping you informed at every step.",
  },
  {
    id: "05",
    title: "End-to-End Assistance",
    tag: "Full Support",
    icon: ShieldCheck,
    description:
      "From initial consultation to final visa issuance, our dedicated team remains right by your side.",
  },
  {
    id: "06",
    title: "Reliable Support",
    tag: "Dedicated",
    icon: Headphones,
    description:
      "Always available to answer questions, resolve concerns, and provide professional guidance whenever you need it.",
  },
];

// Custom luxury cubic-bezier easing
const luxuryEase = [0.16, 1, 0.3, 1];

// Parent container variant for orchestrating right-side children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Child item variants
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

export default function WhyChoose() {
  return (
    <section
      id="about"
      className="w-full bg-[#FBFBFE] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-12 overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE: Visual Media Frame */}
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(5% 0% 5% 0% round 8px)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 8px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.1, ease: luxuryEase }}
            className="lg:col-span-5 relative w-full h-[260px] sm:h-[380px] lg:h-[460px] rounded-xs overflow-hidden shadow-sm group"
          >
            {/* Background Image */}
            <Image
              src="/images/office.png"
              alt="Nexera Consultancy Office"
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: luxuryEase }}
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 max-w-[210px] sm:max-w-[250px] bg-[#091328]/95 backdrop-blur-md rounded-xs p-3 sm:p-3.5 text-white shadow-2xl flex items-center justify-between gap-2.5 sm:gap-3 border border-white/10"
            >
              <p className="text-[11px] sm:text-xs font-light leading-relaxed text-slate-200">
                We turn your global dreams into reality.
              </p>
              <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9933B] shrink-0 rotate-45 transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Orchestrated Content Flow */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6"
          >
            {/* Tagline & Main Header Area */}
            <div className="space-y-1.5 sm:space-y-2">
              <motion.span
                variants={itemVariants}
                className="text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#C9933B] uppercase block"
              >
                WHY CHOOSE NEXERA
              </motion.span>

              <motion.h2
                variants={itemVariants}
                className="text-xl sm:text-3xl font-serif text-[#0F172A] font-medium leading-[1.2] sm:leading-[1.15]"
              >
                Why Thousands Trust Our <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#C9933B]">
                  Expertise.
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-slate-500 text-xs leading-relaxed font-light max-w-xl"
              >
                Choosing the right visa consultant makes all the difference. We combine professional accuracy with personal care to ensure your application is built for success.
              </motion.p>
            </div>

            {/* Feature Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-5 pt-1"
            >
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.id}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-start gap-3 sm:gap-3.5 group cursor-pointer"
                  >
                    {/* Icon Badge */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#F5EFE6] text-[#0F172A] flex items-center justify-center shrink-0 transition-all duration-500 ease-out group-hover:bg-[#C9933B] group-hover:text-white group-hover:shadow-md mt-0.5">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.75] transition-transform duration-500 group-hover:scale-110" />
                    </div>

                    {/* Feature Details */}
                    <div className="space-y-0.5">
                      <h3 className="text-xs sm:text-sm font-semibold text-[#0F172A] leading-snug transition-colors duration-300 group-hover:text-[#C9933B]">
                        {feature.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}