"use client";

import { useEffect, useRef } from "react";
import { Award, FileCheck, Globe, TrendingUp } from "lucide-react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  {
    icon: Award,
    value: "15+",
    numericValue: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: FileCheck,
    value: "20K+",
    numericValue: 20,
    suffix: "K+",
    label: "Visas Approved",
  },
  {
    icon: Globe,
    value: "50+",
    numericValue: 50,
    suffix: "+",
    label: "Countries Served",
  },
  {
    icon: TrendingUp,
    value: "98%",
    numericValue: 98,
    suffix: "%",
    label: "Success Rate",
  },
];

// Smooth Counting Number Component with Slow-Motion Ease
function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  
  // Slow-motion physics tuning (lower stiffness, calibrated damping for graceful deceleration)
  const springValue = useSpring(motionValue, {
    stiffness: 15,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Statistics() {
  return (
    <section className="w-full py-6  overflow-hidden">
      {/* Container matching Services Section */}
      <div className="w-full px-3 sm:px-8 lg:px-16 xl:px-24">
        {/* Animated Banner Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-[#070d1e] rounded-b-sm border border-slate-800 py-2 px-3 sm:px-8 group"
        >
          {/* Slow Motion Background Ambient Glow */}
          <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl animate-pulse" />

          {/* Grid Layout with Vertical/Horizontal Dividers */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 divide-y divide-x sm:divide-y-0 sm:divide-x-0 lg:divide-x divide-white/10 sm:[&>*:nth-child(2)]:border-t-0 sm:[&>*:nth-child(even)]:border-l lg:[&>*:nth-child(even)]:border-l-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.0,
                    delay: index * 0.15,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start lg:justify-center gap-2.5 sm:gap-4 py-4 sm:py-6 px-2 sm:px-4 lg:px-6 cursor-default transition-all duration-500 text-center sm:text-left"
                >
                  {/* Gold Outlined Circle Icon with Slow-Motion Hover Scale & Glow */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-amber-400/40 flex items-center justify-center shrink-0 bg-amber-400/5 shadow-inner group-hover:border-amber-400/80 group-hover:bg-amber-400/10 transition-all duration-700 ease-out"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 stroke-[1.5] transition-transform duration-700 ease-out" />
                  </motion.div>

                  {/* Animated Value and Label */}
                  <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                    <span className="text-xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight leading-tight">
                      <AnimatedCounter
                        value={stat.numericValue}
                        suffix={stat.suffix}
                      />
                    </span>
                    <span className="text-[11px] sm:text-sm text-slate-300 font-sans font-light mt-0.5 whitespace-nowrap">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}