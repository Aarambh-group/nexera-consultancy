"use client";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/services/immigration/Hero";
import ServiceOverview from "../../components/services/immigration/ServiceOverview";
import PROfferDestinations from "../../components/services/immigration/PROfferDestinations";
import WhyChooseUs from "../../components/services/immigration/WhyChooseUs";
import PRProcess from "../../components/services/immigration/PRProcess";
import FAQ from "../../components/services/immigration/FAQ";

export default function ImmigrationVisaPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      
      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <PROfferDestinations />
        <WhyChooseUs />
        <PRProcess />
        <FAQ />
      </main>

      <CTA />
      <Footer />

    </div>
  );
}