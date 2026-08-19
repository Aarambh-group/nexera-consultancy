import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Rocket, ShieldCheck, Compass, Sparkles, ArrowUpRight, Award, Globe } from "lucide-react";

export default function VisionMission() {
    const [activeTab, setActiveTab] = useState("vision");

    const tabData = {
        vision: {
            id: "vision",
            badge: "01. LONG-TERM ASPIRATION",
            title: "Setting the Benchmark for Global Mobility",
            description:
                "To become one of the most trusted and respected visa and immigration consultancies by delivering ethical guidance, professional expertise, and exceptional customer experiences that empower people to achieve their global aspirations with confidence.",
            icon: Eye,
            highlights: [
                { title: "Ethical Leadership", desc: "Strict adherence to international policy and compliance standards." },
                { title: "Global Reach", desc: "Expanding pathways for students, professionals, and businesses." },
            ],
            stat: "100%",
            statLabel: "Ethical & Transparent Standard",
        },
        mission: {
            id: "mission",
            badge: "02. OPERATIONAL PURPOSE",
            title: "Simplifying Complex Immigration Journeys",
            description:
                "Our mission is to simplify global mobility through honest consultation, personalized visa solutions, and end-to-end application support. We are committed to making every immigration journey clear, transparent, and stress-free while maintaining highest standards.",
            icon: Rocket,
            highlights: [
                { title: "Personalized Strategy", desc: "Tailored documentation and strategic application mapping." },
                { title: "End-to-End Support", desc: "Dedicated guidance from initial audit to final visa grant." },
            ],
            stat: "Seamless",
            statLabel: "Client Centric Process",
        },
        pillars: {
            id: "pillars",
            badge: "03. UNCOMPROMISED PROMISE",
            title: "Built on Integrity, Driven by Results",
            description:
                "At Nexera, we operate with a zero-compromise policy on authenticity and clarity. Every client receives accurate legal insights, realistic timeline expectations, and unwavering commitment from our seasoned immigration advisors.",
            icon: ShieldCheck,
            highlights: [
                { title: "Verified Expertise", desc: "Always updated with real-time policy and regulation updates." },
                { title: "Client First Culture", desc: "Building long-term relationships through trust and reliability." },
            ],
            stat: "Zero",
            statLabel: "Hidden Fees or Misguidance",
        },
    };

    const current = tabData[activeTab];

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section
            className="relative py-12 sm:py-16 lg:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/about-bg.png')" }}
        >
            <div className="absolute inset-0 bg-white/60 pointer-events-none" />
            {/* Subtle Background Radial Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="max-w-[1180px] mx-auto relative z-10">

                {/* Section Header */}
                <motion.div
                    className="text-center max-w-md mx-auto mb-8 sm:mb-10"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        variants={itemVariants}
                        className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#C9933B] uppercase block mb-3"
                    >
                        OUR GUIDING COMPASS
                    </motion.span>

                    <motion.h2
                        variants={itemVariants}
                        className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#0F172A] font-medium leading-[1.25] sm:leading-[1.15]"
                    >
                        Architecting Your Pathway <br className="hidden sm:inline" />
                        <span className="italic font-normal text-[#C9933B]">
                            to Global Opportunities
                        </span>
                    </motion.h2>


                </motion.div>

                {/* Interactive Tab Controls (Moving Foil Pill) */}
                <motion.div
                    className="flex items-center justify-center mb-8"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="bg-white border border-[#E2E8F0] p-1 rounded-full shadow-sm flex items-center gap-1">
                        {[
                            { id: "vision", label: "OUR VISION", icon: Eye },
                            { id: "mission", label: "OUR MISSION", icon: Rocket },
                            { id: "pillars", label: "CORE PROMISE", icon: ShieldCheck },
                        ].map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-3.5 sm:px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 ${isActive ? "text-white" : "text-slate-500 hover:text-[#0F172A]"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabBadge"
                                            className="absolute inset-0 bg-[#0F172A] rounded-full shadow-sm"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-1.5">
                                        <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#C9933B]" : "text-slate-400"}`} />
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Integrated Single Showcase Card (Dark Navy + Ambient Light Glow) */}
                <motion.div
                    className="relative bg-[#0F172A] text-white rounded-lg p-6 sm:p-10 border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.15)] overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Ambient Gold Radial Glow Background */}
                    <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C9933B]/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#C9933B]/5 rounded-full blur-3xl pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                        >

                            {/* Left Column: Core Narrative */}
                            <div className="lg:col-span-7 space-y-4">

                                {/* Micro Badge */}
                                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#C9933B]/10 border border-[#C9933B]/30 text-[#C9933B] text-[9px] font-bold tracking-[0.2em] uppercase">
                                    <Sparkles className="w-3 h-3 text-[#C9933B]" />
                                    <span>{current.badge}</span>
                                </div>

                                {/* Heading */}
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white font-medium leading-snug">
                                    {current.title}
                                </h3>

                                {/* Description Text */}
                                <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed font-light pr-0 lg:pr-6">
                                    {current.description}
                                </p>

                                {/* Key Points Horizontal Grid */}
                                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800/80">
                                    {current.highlights.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5">
                                            <div className="w-4 h-4 rounded-lg bg-[#C9933B]/20 border border-[#C9933B]/40 flex items-center justify-center text-[#C9933B] shrink-0 mt-0.5">
                                                <span className="text-[9px] font-bold">✓</span>
                                            </div>
                                            <div>
                                                <h4 className="text-[11px] font-medium text-white">{item.title}</h4>
                                                <p className="text-[10px] text-slate-400 font-light leading-normal">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* Right Column: Key Feature & Metric Emblem */}
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-lg p-5 sm:p-6 text-center relative overflow-hidden group hover:border-[#C9933B]/50 transition-colors">

                                    {/* Icon Accent */}
                                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#C9933B]/10 border border-[#C9933B]/30 flex items-center justify-center text-[#C9933B]">
                                        <current.icon className="w-5 h-5" />
                                    </div>

                                    {/* Stat / Value */}
                                    <span className="text-2xl sm:text-3xl font-serif text-[#C9933B] font-medium block">
                                        {current.stat}
                                    </span>

                                    {/* Stat Label */}
                                    <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase block mb-4">
                                        {current.statLabel}
                                    </span>

                                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Globe className="w-3 h-3 text-[#C9933B]" /> Verified Standard
                                        </span>
                                        <span className="text-[#C9933B] flex items-center gap-0.5 font-medium">
                                            NEXERA CONSULTANCY <ArrowUpRight className="w-3 h-3" />
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}