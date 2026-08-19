"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Compass,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const primaryServices = [
  { label: "Student Visa", href: "/services/student-visa", code: "SV-01" },
  { label: "Visitor Visa", href: "/services/visitor-visa", code: "VV-02" },
  { label: "Tourist Visa", href: "/services/tourist-visa", code: "TV-03" },
  { label: "Work Visa", href: "/services/work-visa", code: "WV-04" },
];

const secondaryServices = [
  // { label: "Business Visa", href: "/services/business-visa", code: "BV-05" },
  // { label: "Immigration Services", href: "/services/immigration", code: "IS-06" },
  // { label: "Visa Documentation", href: "/services/visa-documentation", code: "VD-07" },
  // { label: "Interview Preparation", href: "/services/interview-prep", code: "IP-08" },
];

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GmbIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
    </svg>
  );
}

const socialIcons = [
  {
    icon: <FacebookIcon className="w-3.5 h-3.5 sm:w-3 sm:h-3" />,
    label: "Facebook",
    href: "https://www.facebook.com/people/Nexera-Visa-Consultancy/61592196149767/?sk=directory_specialties",
  },
  {
    icon: <InstagramIcon className="w-3.5 h-3.5 sm:w-3 sm:h-3" />,
    label: "Instagram",
    href: "https://www.instagram.com/nexera_consultancy/",
  },
  {
    icon: <LinkedInIcon className="w-3.5 h-3.5 sm:w-3 sm:h-3" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nexera-consultancy-2aba87423/",
  },
  {
    icon: <GmbIcon className="w-3.5 h-3.5 sm:w-3 sm:h-3" />,
    label: "GMB",
    href: "https://www.google.com/search?hl=en&authuser=0&sca_esv=77821bc6db13ead3&biw=1707&bih=811&sxsrf=APpeQnuMq4ZKrVhPLqn3Ddxmcjzj8UC0CA%3A1785301657140&q=Nexera%20Visa%20Consultancy&mat=CXgD9w0mDSH6&zx=1785301667998&ihs=0",
  },
];

export default function Footer() {
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState("services");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay blocked:", error);
      });
    }
  }, []);

  return (
    <footer
      id="contact"
      className="relative pt-8 sm:pt-6 lg:pt-8 pb-0 overflow-hidden text-white font-sans selection:bg-[#C9933B] selection:text-white"
    >
      {/* Background Video Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/footer.png"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/videos/Footer.mp4" type="video/mp4" />
        </video>
        {/* Dark theme overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#070F21]/80 sm:via-[#070F21]/65 to-[#070F21]/85 sm:to-[#070F21]/75 z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* EDITORIAL CANVAS LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 pb-6">

          {/* LEFT CANVAS: Brand Hero & Statement (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-3">
            <div className="space-y-3 sm:space-y-2.5">
              <div className="flex items-center">
                {/* Increased logo height with responsive bounds */}
                <div className="relative w-48 sm:w-56 h-20 sm:h-24 -my-4 sm:-my-8">
                  <Image
                    src="/images/logo-white.png"
                    alt="Nexera Visa Logo"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-left"
                  />
                </div>
              </div>

              <p className="text-slate-300/80 text-xs sm:text-[11px] lg:text-xs leading-relaxed font-light max-w-md">
                Helping students, professionals, and families achieve their global dreams with trusted visa and immigration expertise. Transparent, legal, and dedicated.
              </p>

              {/* Trust Features */}
              <div className="space-y-2 sm:space-y-1.5 pt-1 sm:pt-0.5">
                <div className="flex items-center gap-2.5 sm:gap-2 text-xs sm:text-[11px] text-slate-300/90 font-light">
                  <div className="w-4 h-4 rounded bg-[#C9933B]/10 border border-[#C9933B]/30 flex items-center justify-center text-[#C9933B] shrink-0">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                  </div>
                  <span>Personalized Profile & Risk Assessment</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-2 text-xs sm:text-[11px] text-slate-300/90 font-light">
                  <div className="w-4 h-4 rounded bg-[#C9933B]/10 border border-[#C9933B]/30 flex items-center justify-center text-[#C9933B] shrink-0">
                    <ShieldCheck className="w-2.5 h-2.5" />
                  </div>
                  <span>Transparent & Legal Compliance Guidance</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-2 text-xs sm:text-[11px] text-slate-300/90 font-light">
                  <div className="w-4 h-4 rounded bg-[#C9933B]/10 border border-[#C9933B]/30 flex items-center justify-center text-[#C9933B] shrink-0">
                    <Award className="w-2.5 h-2.5" />
                  </div>
                  <span>End-to-End Documentation Assistance</span>
                </div>
              </div>
            </div>

            {/* Social Pill List */}
            <div className="flex items-center gap-2.5 sm:gap-2 pt-3 sm:pt-2 border-t border-white/10">
              <span className="text-xs sm:text-[11px] text-slate-400 font-light mr-1">Follow Us:</span>
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-6 sm:h-6 rounded-full bg-white/5 hover:bg-[#C9933B] border border-white/10 hover:border-[#C9933B] flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT CANVAS: Interactive Explorer & Details (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-3">

            {/* Interactive Tab Selector */}
            <div className="space-y-3 sm:space-y-2.5">
              <div className="flex items-center gap-1.5 p-1 rounded-sm bg-white/5 border border-white/10 w-full sm:w-fit">
                <button
                  onClick={() => setActiveTab("services")}
                  className={`flex-1 sm:flex-none px-3 py-1.5 sm:py-1 rounded-sm text-xs sm:text-[11px] font-medium transition-all text-center ${activeTab === "services"
                    ? "bg-[#C9933B] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  Our Visa Solutions
                </button>
                <button
                  onClick={() => setActiveTab("nav")}
                  className={`flex-1 sm:flex-none px-3 py-1.5 sm:py-1 rounded-sm text-xs sm:text-[11px] font-medium transition-all text-center ${activeTab === "nav"
                    ? "bg-[#C9933B] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                    }`}
                >
                  Quick Navigation
                </button>
              </div>

              {/* Tab Content Display */}
              <AnimatePresence mode="wait">
                {activeTab === "services" ? (
                  <motion.div
                    key="services"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-1.5"
                  >
                    {primaryServices.concat(secondaryServices).map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="group px-3 py-2 sm:px-2.5 sm:py-1.5 rounded-sm bg-white/[0.03] sm:bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 sm:border-white/5 hover:border-[#C9933B]/40 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5 sm:gap-2">
                          <span className="text-[10px] sm:text-[9px] font-mono text-[#C9933B]/80 px-1.5 py-0.5 rounded bg-[#C9933B]/10">
                            {item.code}
                          </span>
                          <span className="text-xs sm:text-[11px] text-slate-200 group-hover:text-[#E5A64C] font-light transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-3 sm:h-3 text-slate-400 sm:text-slate-500 group-hover:text-[#C9933B] group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="nav"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2"
                  >
                    {quickLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="group p-3 sm:p-2.5 rounded-sm bg-white/[0.03] sm:bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 sm:border-white/5 hover:border-[#C9933B]/40 transition-all flex flex-col justify-between h-16"
                      >
                        <Compass className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#C9933B]" />
                        <span className="text-xs sm:text-[11px] text-slate-200 group-hover:text-[#E5A64C] font-medium transition-colors">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Headquarters Card */}
            <div className="p-3 sm:p-2.5 rounded-sm bg-white/[0.03] sm:bg-white/[0.02] border border-white/10 sm:border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
              <div className="flex items-start gap-2.5 sm:gap-2">
                <div className="w-7 h-7 rounded-sm bg-[#C9933B]/10 border border-[#C9933B]/30 flex items-center justify-center text-[#C9933B] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 sm:w-3 sm:h-3" />
                </div>
                <div>
                  <h5 className="text-xs sm:text-[11px] font-serif text-white font-medium mb-0.5">
                    Corporate Headquarters
                  </h5>
                  <p className="text-slate-300/80 text-xs sm:text-[10px] font-light leading-relaxed sm:leading-normal">
                    Ganesh Glory 1313, 13th Floor, Jagatpur Road, Sarkhej - Gandhinagar Hwy, Gota, Ahmedabad, Gujarat 382470
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center shrink-0 px-3 py-1.5 sm:px-2.5 sm:py-1 rounded-sm bg-white/5 hover:bg-white/10 text-xs sm:text-[10px] text-slate-300 hover:text-white border border-white/10 transition-all"
              >
                View on Map
              </a>
            </div>

          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="border-t border-white/10 py-3 sm:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-2 text-xs sm:text-[10px] font-light text-slate-400 text-center sm:text-left">
          <p>© 2026 Nexera Consultancy. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy-policy" className="hover:text-[#C9933B] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/10">•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#C9933B] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}