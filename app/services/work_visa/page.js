"use client";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/services/work_Visa/Hero";
import ServiceOverview from "../../components/services/work_Visa/ServiceOverview";
import WorkOfferDestinations from "../../components/services/work_Visa/WorkOfferDestinations";
import WhyChooseUs from "../../components/services/work_Visa/WhyChooseUs";
import WorkProcess from "../../components/services/work_Visa/WorkProcess";
import FAQ from "../../components/services/work_Visa/FAQ";

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