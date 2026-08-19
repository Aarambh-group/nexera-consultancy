"use client";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/services/work-visa/Hero";
import ServiceOverview from "../../components/services/work-visa/ServiceOverview";
import WorkOfferDestinations from "../../components/services/work-visa/WorkOfferDestinations";
import WhyChooseUs from "../../components/services/work-visa/WhyChooseUs";
import WorkProcess from "../../components/services/work-visa/WorkProcess";
import FAQ from "../../components/services/work-visa/FAQ";

export default function WorkVisaPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">

      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <WorkOfferDestinations />
        <WhyChooseUs />
        <WorkProcess />
        <FAQ />
      </main>

      <CTA />
      <Footer />

    </div>
  );
}