"use client";

// Changed from ../../../ to ../..
import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

// Relative path to Hero component
import Hero from "../../components/services/student_Visa/Hero";
import ServiceOverview from "../../components/services/student_Visa/ServiceOverview";
import StudentOfferDestinations from "../../components/services/student_Visa/StudentOfferDestinations";
import WhyChooseUs from "../../components/services/student_Visa/WhyChooseUs";
import StudentProcess from "../../components/services/student_Visa/StudentProcess";
import FAQ from "../../components/services/student_Visa/FAQ";

export default function StudentVisaPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <StudentOfferDestinations />
        <WhyChooseUs />
        <StudentProcess />
        <FAQ />

      </main>

      <CTA />
      <Footer />
    </div>
  );
}