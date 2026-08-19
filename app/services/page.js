"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Student Visa",
    subtitle: "Shape Your Future",
    description:
      "Get expert guidance for studying at universities and institutions abroad.",
    href: "/services/student-visa",
  },
  {
    id: "02",
    title: "Study Visa",
    subtitle: "Learn Without Limits",
    description:
      "Complete assistance with study visa applications and documentation.",
    href: "/services/study-visa",
  },
  {
    id: "03",
    title: "Work Visa",
    subtitle: "Grow Your Career",
    description:
      "Professional support for building your career and working overseas.",
    href: "/services/work-visa",
  },
  {
    id: "04",
    title: "Tourist Visa",
    subtitle: "Explore The World",
    description:
      "Simplified visa assistance for holidays, travel, and international visits.",
    href: "/services/tourist-visa",
  },
  {
    id: "05",
    title: "PR & Immigration",
    subtitle: "Build Your Future",
    description:
      "Personalized guidance for permanent residency and long-term settlement.",
    href: "/services/immigration",
  },
  {
    id: "06",
    title: "Business Visa",
    subtitle: "Expand Globally",
    description:
      "Visa solutions for entrepreneurs, investors, and international business.",
    href: "/services/business-visa",
  },
  {
    id: "07",
    title: "Dependent Visa",
    subtitle: "Stay Together",
    description:
      "Support for families and dependents joining their loved ones abroad.",
    href: "/services/dependent-visa",
  },
  {
    id: "08",
    title: "Visitor Visa",
    subtitle: "Connect & Travel",
    description:
      "Professional assistance for visiting family, friends, and destinations abroad.",
    href: "/services/visitor-visa",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FBFBFE]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 sm:py-24 px-6">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#C9933B_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#C9933B]">
            NEXERA EXPERTISE
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight">
            Visa & Immigration
            <span className="block italic text-[#C9933B]">
              Services
            </span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-7">
            Comprehensive visa and immigration solutions designed to help
            students, professionals, families, and businesses achieve their
            international goals.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative bg-white border border-slate-200 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-[#C9933B]/40"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-widest text-[#C9933B]">
                    {service.id}
                  </span>

                  <div className="w-8 h-8 rounded-full border border-[#C9933B]/40 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C9933B] group-hover:border-[#C9933B]">
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9933B] group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h2 className="mt-7 text-xl font-serif font-semibold text-[#0F172A] group-hover:text-[#C9933B] transition-colors">
                  {service.title}
                </h2>

                <p className="mt-1 text-xs font-medium text-[#C9933B]">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-sm text-slate-500 leading-6">
                  {service.description}
                </p>

                {/* Bottom Link */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                  Explore Service
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9933B] transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}