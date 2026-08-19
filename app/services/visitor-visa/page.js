"use client";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/services/visitor-visa/Hero";
import ServiceOverview from "../../components/services/visitor-visa/ServiceOverview";
import VisitorOfferDestinations from "../../components/services/visitor-visa/VisitorOfferDestinations";
import WhyChooseUs from "../../components/services/visitor-visa/WhyChooseUs";
import VisitorProcess from "../../components/services/visitor-visa/VisitorProcess";
import FAQ from "../../components/services/visitor-visa/FAQ";


export default function VisitorVisaPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      
      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <VisitorOfferDestinations />
        <WhyChooseUs />
        <VisitorProcess />
        <FAQ />
      </main>

      <CTA />
      <Footer />

    </div>
  );
}