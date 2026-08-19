"use client";

import { useState, useEffect } from "react";
import {
    Building2,
    Phone,
    Mail,
    Clock,
    ArrowUpRight,
    ShieldCheck,
    Compass,
    Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OfficesSection() {
    const [isMounted, setIsMounted] = useState(false);
    const [activeChannel, setActiveChannel] = useState("headquarters");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const contactChannels = {
        headquarters: {
            id: "headquarters",
            tag: "PHYSICAL PRESENCE",
            title: "Executive Office",
            icon: Building2,
            primaryText: "Nexera Consultancy",
            subLines: [
                "Ganesh Glory, 1313, 13th Floor",
                "Jagatpur Road, Sarkhej - Gandhinagar Hwy",
                "Gota, Ahmedabad, Gujarat - 382470",
                
            ],
            actionText: "Navigate to Suite",
            actionHref: "https://www.google.com/maps/search/?api=1&query=Ganesh+Glory,+Jagatpur+Road,+Sarkhej+-+Gandhinagar+Hwy,+Gota,+Ahmedabad,+Gujarat+382470",
            mapCoords: "23.0883° N, 72.5350° E",
            status: "Verified Headquarters",
            mapEmbedUrl: "https://maps.google.com/maps?q=Ganesh%20Glory%2C%20Jagatpur%20Road%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382470&t=&z=16&ie=UTF8&iwloc=&output=embed"
        },
        voice: {
            id: "voice",
            tag: "DIRECT TELEPHONY",
            title: "Advisory Voice Line",
            icon: Phone,
            primaryText: "+91 99987 15799",
            subLines: [
                "Alt: +91 99987 15799",
                "Priority Client Support",
                "Dedicated Concierge Desk"
            ],
            actionText: "Initiate Phone Call",
            actionHref: "tel:+9199987 15799",
            mapCoords: "Encrypted Voice Line",
            status: "Lines Operational",
            mapEmbedUrl: "https://maps.google.com/maps?q=Ganesh%20Glory%2C%20Jagatpur%20Road%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382470&t=&z=16&ie=UTF8&iwloc=&output=embed"
        },
        digital: {
            id: "digital",
            tag: "ELECTRONIC DISPATCH",
            title: "Digital Client Portal",
            icon: Mail,
            primaryText: "info@nexeraconsultancy.in",
            subLines: [
                "Support: support@nexeraconsultancy.in",
                "End-to-End Encryption",
                "Monitored Dispatch Desk"
            ],
            actionText: "Send Official Mail",
            actionHref: "mailto:info@nexeraconsultancy.in",
            mapCoords: "24/7 Digital Hub",
            status: "Mail Server Online",
            mapEmbedUrl: "https://maps.google.com/maps?q=Ganesh%20Glory%2C%20Jagatpur%20Road%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382470&t=&z=16&ie=UTF8&iwloc=&output=embed"
        },
        schedule: {
            id: "schedule",
            tag: "TIMING WINDOW",
            title: "Operational Hours",
            icon: Clock,
            primaryText: "Mon – Sat (10:00 - 5:00)",
            subLines: [
                "Sunday: Closed",
                "By Prior Appointment Only",
                "Executive Slot Booking"
            ],
            actionText: "Book Appointment",
            actionHref: "mailto:info@nexeraconsultancy.in",
            mapCoords: "Standard Operation Time",
            status: "Desk Available",
            mapEmbedUrl: "https://maps.google.com/maps?q=Ganesh%20Glory%2C%20Jagatpur%20Road%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382470&t=&z=16&ie=UTF8&iwloc=&output=embed"
        }
    };

    const navItems = [
        { id: "headquarters", label: "Executive Suite" },
        { id: "voice", label: "Voice Advisory" },
        { id: "digital", label: "Digital Portal" },
        { id: "schedule", label: "Business Hours" },
    ];

    if (!isMounted) {
        return (
            <section className="w-full bg-[#FAF9F5] py-8 sm:py-12 px-4 min-h-[400px]">
                <div className="max-w-6xl mx-auto" />
            </section>
        );
    }

    const activeData = contactChannels[activeChannel];
    const ActiveIcon = activeData.icon;

    return (
        <section className="w-full bg-[#FAF9F5] text-[#0F172A] py-8 sm:py-12 lg:py-14 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-[320px] h-[320px] bg-[#B8860B]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[320px] h-[320px] bg-stone-300/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1180px] mx-auto relative z-10">

                {/* Compact Luxury Header */}
                <motion.div
                    className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-6 pb-4 border-b border-stone-200/90 gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <span className="h-[2px] w-5 bg-[#C9933B]" />
                            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9933B]">
                                EXECUTIVE CONCIERGE
                            </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#0F172A] font-normal tracking-tight">
                            Corporate <span className="italic font-serif text-[#B8860B]">Touchpoints</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Horizontal Floating Pill Selector */}
                <motion.div
                    className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-5 no-scrollbar"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    {navItems.map((item) => {
                        const isActive = activeChannel === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => setActiveChannel(item.id)}
                                className={`relative px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-wider transition-all duration-300 whitespace-nowrap ${isActive
                                    ? "text-white font-semibold"
                                    : "text-stone-600 hover:text-[#0F172A] bg-white/60 hover:bg-white border border-stone-200/70"
                                    }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabPill"
                                        className="absolute inset-0 bg-[#0F172A] rounded-full shadow-xs -z-0"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 uppercase">{item.label}</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* Compact Split Stage Layout */}
                <motion.div
                    className="bg-white rounded-lg border border-stone-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.02)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[340px] sm:min-h-[380px]"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >

                    {/* Left Panel: Focused Detail View */}
                    <div className="lg:col-span-5 p-4 sm:p-6 lg:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-100 bg-gradient-to-b from-white to-stone-50/40">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeChannel}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className="space-y-4"
                            >
                                {/* Header Info */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-mono font-bold tracking-[0.18em] text-[#B8860B] uppercase">
                                        {activeData.tag}
                                    </span>
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-stone-100 text-[9px] font-mono text-stone-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-pulse" />
                                        {activeData.status}
                                    </span>
                                </div>

                                {/* Main Content */}
                                <div className="space-y-1.5">
                                    <div className="w-9 h-9 rounded-lg bg-[#0F172A] text-[#B8860B] flex items-center justify-center shadow-xs">
                                        <ActiveIcon className="w-4 h-4 stroke-[1.8]" />
                                    </div>

                                    <h3 className="text-lg sm:text-xl font-serif text-[#0F172A] font-semibold pt-1">
                                        {activeData.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm font-mono text-[#B8860B] font-medium truncate">
                                        {activeData.primaryText}
                                    </p>
                                </div>

                                {/* Description Sub-lines */}
                                <div className="space-y-1 pt-1.5 border-t border-stone-200/50">
                                    {activeData.subLines.map((line, idx) => (
                                        <p key={idx} className="text-[11px] sm:text-xs text-stone-600 font-normal leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Action CTA Button */}
                        <div className="pt-4 mt-3">
                            <motion.a
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                href={activeData.actionHref}
                                target={activeData.actionHref.startsWith("http") ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#0F172A] text-white text-[10px] sm:text-xs font-semibold hover:bg-stone-800 transition-colors shadow-xs group"
                            >
                                <span className="tracking-wider uppercase text-[10px]">
                                    {activeData.actionText}
                                </span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#B8860B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </motion.a>
                        </div>

                    </div>

                    {/* Right Panel: Embedded Interactive Map Canvas */}
                    <div className="lg:col-span-7 bg-stone-100 p-2 sm:p-3 flex flex-col justify-between relative min-h-[220px] sm:min-h-[280px]">

                        {/* Top Toolbar */}
                        <div className="flex items-center justify-between px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-lg border border-stone-200/80 shadow-2xs mb-2 z-10">
                            <span className="text-[11px] font-semibold text-[#0F172A]">
                                Interactive Location View
                            </span>
                            <span className="text-[9px] font-mono text-stone-400 uppercase tracking-widest">
                                {activeData.mapCoords}
                            </span>
                        </div>

                        {/* Map Viewport */}
                        <div className="relative flex-1 rounded-lg overflow-hidden border border-stone-200/80 min-h-[180px] sm:min-h-[220px]">
                            <iframe
                                title="Monolithic Corporate Map"
                                src={activeData.mapEmbedUrl}
                                className="w-full h-full border-0 grayscale opacity-90 transition-all hover:grayscale-0 duration-500"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            {/* Pin Overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center">
                                <div className="relative flex items-center justify-center">
                                    <span className="absolute w-9 h-9 rounded-full bg-[#B8860B]/20 animate-ping" />
                                    <div className="w-8 h-8 rounded-lg bg-[#0F172A] text-[#B8860B] border border-[#B8860B] flex items-center justify-center shadow-lg relative z-10">
                                        <Building2 className="w-4 h-4 stroke-[1.8]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}