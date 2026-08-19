import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    // Staggered container for elements inside the right column
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    // Upward slide animation for individual text items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section className="relative bg-white text-gray-800 py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">

            {/* Main Container */}
            <div className="max-w-[1180px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

                    {/* Left Column: Image with Smooth Fade & Scale Animation */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col h-full justify-center"
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="relative rounded-sm overflow-hidden shadow-md border border-slate-100 w-full h-[260px] sm:h-[320px] lg:h-full min-h-[240px] sm:min-h-[280px]">
                            <Image
                                src="/images/about3.png"
                                alt="About"
                                width={700}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Staggered Content Animation */}
                    <motion.div
                        className="lg:col-span-7 relative z-10 space-y-3 flex flex-col justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Tagline */}
                        <motion.span
                            variants={itemVariants}
                            className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#C9933B] uppercase block"
                        >
                            ABOUT US
                        </motion.span>

                        {/* Headline */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#0F172A] font-medium leading-[1.25] sm:leading-[1.15]"
                        >
                            Building Pathways to <br className="hidden sm:inline" />
                            <span className="italic font-normal text-[#C9933B]">
                                Global Opportunities
                            </span>
                        </motion.h2>

                        {/* Content Paragraphs with staggered entry */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-3 max-w-xl text-slate-500 text-xs sm:text-xs leading-relaxed font-light pr-0 lg:pr-10"
                        >
                            <p>
                                Nexera Consultancy is a trusted visa and immigration consultancy dedicated to helping individuals, students, professionals, families, and businesses achieve their international aspirations.
                            </p>
                            <p>
                                Our experienced consultants stay updated with the latest immigration policies and visa regulations to provide accurate guidance and personalized solutions for every client.
                            </p>
                            <p>
                                At Nexera Consultancy, we don't just process visa applications — we build long-term relationships based on trust, integrity, and reliable support.
                            </p>
                        </motion.div>

                        {/* Background Graphic (about2.png) - Animated Background Fade */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 0.25, scale: 1.1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="block absolute top-1/2 -right-10 sm:-right-15 -translate-y-1/2 w-[280px] sm:w-[450px] lg:w-[580px] h-[100%] sm:h-[130%] pointer-events-none -z-10"
                        >
                            <img
                                src="/images/about2.png"
                                alt="World Map Path Graphic"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}