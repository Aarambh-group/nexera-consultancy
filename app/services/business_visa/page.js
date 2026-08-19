"use client";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/services/business_Visa/Hero";
import ServiceOverview from "../../components/services/business_Visa/ServiceOverview";
import BusinessOfferDestinations from "../../components/services/business_Visa/BusinessOfferDestinations";
import WhyChooseUs from "../../components/services/business_Visa/WhyChooseUs";
import BusinessProcess from "../../components/services/business_Visa/BusinessProcess";
import FAQ from "../../components/services/business_Visa/FAQ";


export default function BusinessVisaPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      
      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <BusinessOfferDestinations />
        <WhyChooseUs />
        <BusinessProcess />
        <FAQ />
      </main>

      <CTA />
      <Footer />

    </div>
  );
}