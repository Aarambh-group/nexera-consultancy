"use client";

import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import CTA from "../components/layout/CTA";
import Footer from "../components/layout/Footer";

import Hero from "../components/contact/Hero";
import ContactForm from "../components/contact/ContactForm";
import OfficesSection from "../components/contact/OfficesSection";

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
        <ContactForm />
        <OfficesSection />
      </main>
      <CTA />
      <Footer />
    </div>
  );
}