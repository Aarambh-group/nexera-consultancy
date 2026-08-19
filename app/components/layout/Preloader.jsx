"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader({ onComplete }) {
  // Animation Stages: "navy" -> "white" -> "expand" -> "zoomInExit" -> hidden
  const [animStage, setAnimStage] = useState("navy");
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Lock page scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // 1. Navy circle stays briefly, then transitions to White circle
    const t1 = setTimeout(() => setAnimStage("white"), 800);

    // 2. White circle expands to reveal full preloader content
    const t2 = setTimeout(() => setAnimStage("expand"), 1600);

    // 3. Zoom-in effect right before exiting to home page
    const t3 = setTimeout(() => setAnimStage("zoomInExit"), 3800);

    // 4. Safely remove from DOM & enable scrolling
    const t4 = setTimeout(() => {
      setShouldRender(false);
      document.body.style.overflow = "unset";
      if (typeof onComplete === "function") {
        onComplete();
      }
    }, 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] overflow-hidden transition-all duration-700 ease-in-out ${animStage === "zoomInExit"
          ? "scale-[2.5] opacity-0 pointer-events-none"
          : "scale-100 opacity-100"
        }`}
    >
      {/* Dynamic Circular Clip-Path Container */}
      <div
        className="relative w-full h-full bg-[#001035] transition-all duration-1000 ease-in-out"
        style={{
          clipPath:
            animStage === "navy"
              ? "circle(8% at 50% 50%)"
              : animStage === "white"
                ? "circle(15% at 50% 50%)"
                : "circle(150% at 50% 50%)", // Fully expanded to reveal screen
        }}
      >
        {/* White BG Layer active during "white" stage */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-700 ${animStage === "white" ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* --- Background Image --- */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-xs opacity-80 scale-110 pointer-events-none"
          style={{
            backgroundImage: `url('/images/p1.png')`,
          }}
        />

        {/* White Light Tint Layer */}
        <div className="absolute inset-0 bg-white/30 pointer-events-none" />

        {/* --- Main Content (Logo + Text + Plane Trail) --- */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center">
          {/* Main Logo Graphic */}
          <div className="relative w-[250px] sm:w-[350px] aspect-[4/3] -mb-13">
            <Image
              src="/images/favicon.png"
              alt="Nexera Consultancy Logo"
              fill
              className="object-contain drop-shadow-md"
              priority
            />
          </div>

          {/* Brand Name - Navy Blue */}
          <h1 className="font-serif text-3xl sm:text-5xl tracking-wide font-medium text-[#001035] drop-shadow-sm">
            Nexera consultancy
          </h1>

          {/* Subline Tagline - Navy Blue */}
          <p className="mt-2 font-serif text-[#001035] text-sm sm:text-lg tracking-wider font-normal italic drop-shadow-sm">
            Turning Your Global Dreams Into Reality.
          </p>
        </div>
      </div>
    </div>
  );
}