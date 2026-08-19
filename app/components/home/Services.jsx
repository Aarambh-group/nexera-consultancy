"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Users, 
  Building2, 
  Compass, 
  Sparkles 
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Student Visa",
    subtitle: "Shape Your Future",
    href: "/services/student-visa",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?fm=png&q=90&w=1920&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Work Visa",
    subtitle: "Grow Your Career",
    href: "/services/work-visa",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Tourist Visa",
    subtitle: "Explore The World",
    href: "/services/tourist-visa",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "PR & Immigration",
    subtitle: "Settle Your Future",
    href: "/services/immigration",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
  },
];

const PATHWAYS = [
  { title: "Student Visa", href: "/services/student-visa", icon: GraduationCap },
  { title: "Visitor Visa", href: "/services/visitor-visa", icon: GraduationCap },
  { title: "Tourist Visa", href: "/services/tourist-visa", icon: Briefcase },
  { title: "Work Visa", href: "/services/work-visa", icon: Plane },
  // { title: "Business Visa", href: "/services/business-visa", icon: Compass },
  // { title: "Immigration Services", href: "/services/immigration", icon: Building2 },
  // { title: "Visa Documentation", href: "/services/visa-documentation", icon: Users },
  // { title: "Interview Preparation", href: "/services/interview-prep", icon: Plane },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#FBFBFE] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-visible font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-4 items-center">

          {/* Left Side Header Area */}
          <div className="lg:col-span-1 flex flex-col justify-between py-1 lg:pr-2 text-left">
            <div>
              {/* Tagline */}
              <span className="text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#C9933B] uppercase mb-1.5 sm:mb-2 block">
                Nexera expertise
              </span>

              {/* Main Premium Heading */}
              <h2 className="text-xl sm:text-3xl font-serif text-[#0F172A] font-medium leading-[1.2] sm:leading-[1.15] mb-2 sm:mb-3">
                Global <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#C9933B]">
                  Mobility,{" "}
                </span>
                Simplified.
              </h2>

              {/* Premium Subheading */}
              <p className="text-slate-500 text-xs leading-relaxed font-light mb-4 sm:mb-6 max-w-sm lg:max-w-[210px]">
                Helping students, professionals, and families achieve their global dreams with trusted visa and immigration expertise.
              </p>
            </div>

            {/* View All Services Link with Flyout Panel */}
            <div className="relative group inline-block">
              <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#0F172A] hover:text-white text-xs font-semibold text-[#0F172A] transition-all duration-300">
                <span>Explore All Pathways</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9933B] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* 2-Column Flyout Card */}
              <div className="absolute left-0 lg:left-0 top-full mt-2 w-[320px] sm:w-[360px] bg-white border border-slate-100 shadow-2xl rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                
                {/* Micro Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <span className="text-[10px] font-bold tracking-widest text-[#C9933B] uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" /> OUR VISA SERVICES
                  </span>
                  <span className="text-[10px] text-slate-400 font-light">8 Pathways</span>
                </div>

                {/* Grid Options */}
                <div className="grid grid-cols-2 gap-1.5">
                  {PATHWAYS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group/item flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#0F172A] transition-all duration-200"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#FAF8F5] group-hover/item:bg-[#C9933B]/20 flex items-center justify-center text-[#C9933B] shrink-0 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-medium text-slate-700 group-hover/item:text-white transition-colors truncate">
                          {item.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>

                {/* Footer Banner */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-1">
                  <span className="text-[11px] text-slate-500 font-light">Not sure which path to choose?</span>
                  <Link 
                    href="/contact" 
                    className="text-[11px] font-semibold text-[#C9933B] hover:underline flex items-center gap-1"
                  >
                    Ask Consultant <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* Right Side Cards Grid */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group relative h-[200px] sm:h-[230px] lg:h-[250px] rounded-sm overflow-hidden shadow-xs transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Optimized Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />

                {/* Smooth Gradient Overlay Transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091328]/95 via-[#091328]/40 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-100" />

                {/* Bottom Content Area */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 z-10 flex items-end justify-between gap-2 transition-transform duration-500 ease-out group-hover:translate-y-[-2px]">
                  <div className="text-white max-w-[75%]">
                    <h3 className="text-sm sm:text-base font-semibold leading-tight mb-0.5 transition-colors duration-300 group-hover:text-[#E5A64C]">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-[11px] font-light truncate transition-colors duration-300 group-hover:text-white/90">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Gold Circle Arrow Button */}
                  <div className="w-7 h-7 rounded-full border border-[#C9933B]/70 flex-shrink-0 flex items-center justify-center text-white bg-black/20 backdrop-blur-xs transition-all duration-500 ease-out group-hover:bg-[#C9933B] group-hover:text-[#091328] group-hover:border-[#C9933B] group-hover:scale-110">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2] transition-transform duration-500 ease-out group-hover:rotate-[-45deg]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}