"use client";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/services/tourist_Visa/Hero";
import ServiceOverview from "../../components/services/tourist_Visa/ServiceOverview";
import TouristOfferDestinations from "../../components/services/tourist_Visa/TouristOfferDestinations";
import WhyChooseUs from "../../components/services/tourist_Visa/WhyChooseUs";
import TouristProcess from "../../components/services/tourist_Visa/TouristProcess";
import FAQ from "../../components/services/tourist_Visa/FAQ";

export default function TouristVisaPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      
      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <TouristOfferDestinations />
        <WhyChooseUs />
        <TouristProcess />
        <FAQ />
      </main>

      <CTA />
      <Footer />

    </div>
  );
}