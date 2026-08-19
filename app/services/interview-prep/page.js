"use client";

import Navbar from "../../components/layout/Navbar";
import Header from "../../components/layout/Header";
import CTA from "../../components/layout/CTA";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/services/interview_Prep/Hero";
import ServiceOverview from "../../components/services/interview_Prep/ServiceOverview";
import VisaInterviewDestinations from "../../components/services/interview_Prep/VisaInterviewDestinations";
import WhyChooseUs from "../../components/services/interview_Prep/WhyChooseUs";
import InterviewProcess from "../../components/services/interview_Prep/InterviewProcess";
import FAQ from "../../components/services/interview_Prep/FAQ";

export default function InterviewPrepPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-white">

      <header className="relative z-50 w-full">
        <Navbar />
        <Header />
      </header>

      <main className="w-full">
        <Hero />
        <ServiceOverview />
        <VisaInterviewDestinations />
        <WhyChooseUs />
        <InterviewProcess />
        <FAQ />
      </main>

      <CTA />
      <Footer />

    </div>
  );
}