"use client";

import { useState, useEffect } from "react";
import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import CTA from "./components/layout/CTA";
import Foooter from "./components/layout/Footer";
import Hero from "./components/home/Hero";
// import About from "./components/home/About";
import Services from "./components/home/Services";
import Statecard from "./components/home/Statecard";
import WhyChoose from "./components/home/Whychooseus";
import Destination from "./components/home/Destination";
import Process from "./components/home/Process";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if preloader has already been shown in this tab session
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedPreloader");

    if (hasLoadedBefore) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoadedPreloader", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* Top Navbar & Header Wrapper */}
      <Navbar />
      <Header />

      {/* Main Content */}
      <main className="w-full">
        <Hero />
        {/* <About /> */}
        <Services />
        <Statecard />
        <WhyChoose />
        <Destination />
        <Process />
        <Testimonials />
      </main>
      <CTA />
      <Foooter />
    </div>
  );
}