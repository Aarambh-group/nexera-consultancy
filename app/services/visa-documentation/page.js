"use client";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/services/visa-documentation/Hero";
import ServiceOverview from "../../components/services/visa-documentation/ServiceOverview";
import VisaDocDestinations from "../../components/services/visa-documentation/VisaDocDestinations";
import WhyChooseUs from "../../components/services/visa-documentation/WhyChooseUs";
import DocProcess from "../../components/services/visa-documentation/DocProcess";
import FAQ from "../../components/services/visa-documentation/FAQ";

export default function VisaDocumentationPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      
      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <VisaDocDestinations />
        <WhyChooseUs />
        <DocProcess />
        <FAQ />
      </main>

      <CTA />
      <Footer />

    </div>
  );
}