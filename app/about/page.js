"use client";

import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import CTA from "../components/layout/CTA";
import Footer from "../components/layout/Footer";

import Hero from "../components/about/Hero";
import AboutSection from "../components/about/About"; 
import VisionMission from "../components/about/VisionMission";
import CoreValues from "../components/about/CoreValues";
import OurCommitment from "../components/about/OurCommitment";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* Top Navbar & Header */}
      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      {/* Main Content */}
      <main className="w-full">
        <Hero />
        <AboutSection />
        <VisionMission />
        <CoreValues />
    
        <OurCommitment />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}