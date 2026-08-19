"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Student Visa",
        href: "/services/student-visa",
      },
      {
        label: "Visitor Visa",
        href: "/services/visitor-visa",
      },
      {
        label: "Tourist Visa",
        href: "/services/tourist-visa",
      },
      {
        label: "Work Visa",
        href: "/services/work-visa",
      },
      // {
      //   label: "Business Visa",
      //   href: "/services/business-visa",
      // },
      // {
      //   label: "Immigration Services",
      //   href: "/services/immigration",
      // },
      // {
      //   label: "Visa Documentation",
      //   href: "/services/visa-documentation",
      // },
      // {
      //   label: "Interview Preparation",
      //   href: "/services/interview-prep",
      // },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 shrink-0 group">
      <div className="flex items-center transition-transform duration-300 group-hover:scale-[1.01] pl-2 lg:pl-3">
        <Image
          src="/images/Logo-2.png"
          alt="Nexera Consultancy"
          width={150}
          height={40}
          priority
          className="h-9 w-auto object-contain"
        />
      </div>
    </Link>
  );
}

function DesktopLink({ link }) {
  const hasChildren = Boolean(link.children?.length);

  return (
    <div className="group relative h-full flex items-center">
      {hasChildren ? (
        <button
          type="button"
          className="relative z-10 flex items-center gap-1 px-3 py-1.5 text-xs font-medium tracking-wide text-[#0A1329] select-none whitespace-nowrap cursor-pointer"
          aria-haspopup="true"
        >
          <span className="relative z-10 block">{link.label}</span>

          <ChevronDown className="relative z-10 h-3.5 w-3.5 text-slate-400 stroke-[1.5] transition-transform duration-300 ease-out group-hover:rotate-180" />

          <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#E5A64C] opacity-0 scale-x-0 transition-all duration-300 ease-out origin-center group-hover:opacity-100 group-hover:scale-x-100" />
        </button>
      ) : (
        <Link
          href={link.href}
          className="relative z-10 flex items-center gap-1 px-3 py-1.5 text-xs font-medium tracking-wide text-[#0A1329] select-none whitespace-nowrap"
        >
          <span className="relative z-10 block">{link.label}</span>

          <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#E5A64C] opacity-0 scale-x-0 transition-all duration-300 ease-out origin-center group-hover:opacity-100 group-hover:scale-x-100" />
        </Link>
      )}

      {hasChildren && (
        <div className="invisible absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-1 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:visible group-hover:opacity-100">
          <div className="overflow-hidden rounded-xl border border-slate-100 bg-white/95 p-2 shadow-xl backdrop-blur-xl transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
            {link.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="group/item relative flex items-center justify-between rounded-lg px-3.5 py-2 text-xs font-normal tracking-wide text-[#0A1329] hover:bg-slate-50"
              >
                <span className="relative">
                  {child.label}

                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E5A64C] opacity-0 scale-x-0 transition-all duration-200 ease-out origin-left group-hover/item:opacity-100 group-hover/item:scale-x-100" />
                </span>

                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 opacity-0 transition-all duration-200 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0" />
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
    <div className="border-b border-slate-100/60 last:border-none">
      <div className="flex w-full items-center justify-between py-0.5">
        {hasChildren ? (
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex w-full items-center justify-between py-2.5 text-xs font-medium tracking-wide text-[#0A1329] text-left"
            aria-expanded={open}
          >
            <span>{link.label}</span>

            <ChevronDown
              className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        ) : (
          <Link
            href={link.href}
            onClick={onNavigate}
            className="flex-grow py-2.5 text-xs font-medium tracking-wide text-[#0A1329]"
          >
            {link.label}
          </Link>
        )}
      </div>

      {hasChildren && (
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            open
              ? "grid-rows-[1fr] opacity-100 mb-2"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden pl-3 flex flex-col gap-1">
            {link.children.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={onNavigate}
                className="text-xs font-normal text-slate-600 py-1 hover:text-[#E5A64C]"
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 36);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isSticky && <div className="h-16 w-full" />}

      <header
        className={`w-full transition-all duration-300 z-50 ${
          isSticky
            ? "fixed top-0 left-0 right-0 border-b border-slate-200/50 bg-white/95 shadow-md backdrop-blur-md h-16 animate-in slide-in-from-top-2 duration-300 flex items-center"
            : "relative border-b border-slate-100 bg-white h-14 flex items-center"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 w-full">
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-1 lg:flex h-full">
            {NAV_LINKS.map((link) => (
              <DesktopLink key={link.label} link={link} />
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+9199987 15799"
              className="group flex items-center gap-2 text-xs font-medium tracking-wide text-[#0A1329] hover:text-[#E5A64C] transition-colors"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 text-[#0A1329] transition-transform duration-300 group-hover:bg-[#E5A64C] group-hover:text-white group-hover:-translate-y-0.5">
                <Phone className="h-3 w-3" />
              </span>

              +91 99987 15799
            </a>

            <Link
              href="/contact"
              className="group relative flex items-center gap-1 overflow-hidden rounded-full border border-[#E5A64C] bg-[#E5A64C] px-4 py-1.5 text-xs font-medium tracking-wide text-[#0A1329] transition-colors duration-300 ease-out hover:text-[#0A1329]"
            >
              <span className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />

              <span className="relative z-10 flex items-center gap-1">
                Get Free Consultation

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#0A1329] hover:bg-slate-50 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`absolute left-0 top-full w-full border-t border-slate-100 bg-white/95 px-5 pb-4 backdrop-blur-xl lg:hidden transition-all duration-300 ease-in-out ${
            mobileOpen
              ? "opacity-100 visible shadow-md"
              : "opacity-0 invisible pointer-events-none"
          }`}
        >
          <nav className="flex flex-col pt-1">
            {NAV_LINKS.map((link) => (
              <MobileLink
                key={link.label}
                link={link}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </nav>

          <div className="mt-3 flex flex-col gap-2.5">
            <a
              href="tel:+919998715799"
              className="flex items-center gap-2 py-1 text-xs font-medium tracking-wide text-[#0A1329]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E5A64C]/15 text-[#E5A64C]">
                <Phone className="h-3.5 w-3.5" />
              </span>

              +91 99987 15799
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1 rounded-full bg-[#E5A64C] hover:bg-[#D49339] px-4 py-2.5 text-xs font-medium tracking-wide text-[#0A1329] transition-colors"
            >
              Get Free Consultation

              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}