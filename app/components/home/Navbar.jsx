"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Image from "next/image";

// Updated NAV_LINKS containing all 8 services with exact page routes
const NAV_LINKS = [
  { label: "Home", href: "/", active: true },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Student Visa", href: "/services/student-visa" },
      { label: "Visitor Visa", href: "/services/visitor-visa" },
      { label: "Tourist Visa", href: "/services/tourist-visa" },
      { label: "Work Visa", href: "/services/work-visa" },
      { label: "Business Visa", href: "/services/business-visa" },
      { label: "Immigration Services", href: "/services/immigration" },
      { label: "Visa Documentation", href: "/services/visa-documentation" },
      { label: "Interview Preparation", href: "/services/interview-prep" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0 group">
      <div className="flex items-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/logo.png"
          alt="Nexera Visa"
          width={260}
          height={65}
          priority
          className="h-12 sm:h-14 md:h-15 w-auto object-contain"
        />
      </div>
    </Link>
  );
}

function DesktopLink({ link }) {
  const hasChildren = Boolean(link.children?.length);

  return (
    <div className="group relative py-5 flex items-center">
      {/* Main Interactive Container */}
      <Link
        href={link.href}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 select-none whitespace-nowrap ${
          link.active ? "text-[#001A51]" : "text-[#4B5B7C] hover:text-[#001A51]"
        }`}
      >
        <span>{link.label}</span>

        {hasChildren && (
          <ChevronDown className="h-3 w-3 text-[#4B5B7C] transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#001A51]" />
        )}

        {/* Underline Indicator */}
        {link.active && (
          <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D4A64A] rounded-full" />
        )}
      </Link>

      {/* Submenu Dropdown */}
      {hasChildren && (
        <div className="invisible absolute top-full left-1/2 -translate-x-1/2 z-20 w-56 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
          <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white/95 backdrop-blur-xl p-2 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            {link.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="block rounded-lg px-3 py-2 text-xs font-medium text-[#001A51] transition-colors hover:bg-[#F5F7FB] hover:text-[#D4A64A]"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileLink({ link, onNavigate }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(link.children?.length);

  return (
    <div className="border-b border-slate-100 last:border-none">
      <div className="flex w-full items-center justify-between py-0.5">
        <Link
          href={link.href}
          onClick={onNavigate}
          className="flex-grow py-2.5 text-xs font-semibold tracking-wide text-[#001A51]"
        >
          {link.label}
        </Link>

        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="p-2.5 text-[#4B5B7C]"
            aria-label="Toggle submenu"
          >
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                open ? "rotate-180 text-[#D4A64A]" : ""
              }`}
            />
          </button>
        )}
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          hasChildren && open ? "grid-rows-[1fr] opacity-100 mb-2" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-3 flex flex-col gap-1">
          {link.children?.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onNavigate}
              className="text-xs font-medium text-[#4B5B7C] py-1.5 hover:text-[#001A51] transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/75 backdrop-blur-md shadow-lg shadow-slate-900/5 border-b border-slate-200/60 py-0"
          : "bg-white border-b border-slate-100 py-1"
      }`}
    >
      <div className="relative flex h-20 lg:h-18 w-full items-center justify-between">
        {/* Left & Center Wrapper */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          {/* Left Side Logo */}
          <div className="flex items-center pl-4 sm:pl-6 lg:pl-10">
            <Logo />
          </div>

          {/* Centered Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center justify-center gap-2 h-full absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <DesktopLink key={link.label} link={link} />
            ))}
          </nav>

          {/* Right Side (Slanted Area) */}
          <div className="hidden lg:flex items-center h-full absolute right-0 top-0 bottom-0">
            <div
              className="h-full flex items-center gap-6 pl-12 pr-8 lg:pr-12 bg-transparent transition-colors duration-300"
              style={{
                clipPath: "polygon(35px 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              {/* Phone Number */}
              <a
                href="tel:+919898938186"
                className="flex items-center gap-2 text-xs font-bold text-[#001A51] hover:text-[#D4A64A] transition-colors whitespace-nowrap"
              >
                <Phone className="h-3.5 w-3.5 fill-[#001A51] text-[#001A51]" />
                +91 9898938186
              </a>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="rounded-lg bg-[#001A51] px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#D4A64A] hover:text-[#001A51] shadow-md whitespace-nowrap"
              >
                Free Consultation
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 pr-4 sm:pr-6 lg:hidden ml-auto">
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#001A51] hover:bg-[#F5F7FB]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`absolute left-0 w-full border-t border-slate-200 bg-white/95 backdrop-blur-xl px-6 pb-6 lg:hidden transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "top-full opacity-100 visible shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            : "top-[95%] opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col pt-2">
          {NAV_LINKS.map((link) => (
            <MobileLink
              key={link.label}
              link={link}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
        </nav>

        <div className="mt-4 flex flex-col gap-3 pt-3 border-t border-slate-200">
          <a
            href="tel:+919898938186"
            className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#001A51] bg-[#F5F7FB] rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <Phone className="h-3.5 w-3.5 fill-[#001A51]" />
            +91 9898938186
          </a>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center rounded-lg bg-[#001A51] py-2.5 text-xs font-bold text-white hover:bg-[#D4A64A] hover:text-[#001A51] transition-colors shadow-sm"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}