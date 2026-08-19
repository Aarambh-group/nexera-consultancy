import { Geist, Geist_Mono } from "next/font/google";
import AppClientWrapper from "@/app/components/AppClientWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Visa & Immigration Services | Start Your Journey Today",
  description:
    "Book a free consultation with our expert immigration advisors. Fast-track visa processing, study permits, and travel guidance tailored to your dream destination.",
  keywords: [
    "visa consultation",
    "immigration services",
    "study visa",
    "work permit",
    "travel consultation",
  ],
};

// Hidden component to force Tailwind to generate grid & column styles on Vercel
function TailwindSafelist() {
  return (
    <div className="hidden pointer-events-none" aria-hidden="true">
      {/* Grid columns */}
      <div className="grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 grid-cols-6 grid-cols-12" />
      <div className="md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 md:grid-cols-6" />
      <div className="lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 lg:grid-cols-6" />
      
      {/* Column spans */}
      <div className="col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-12" />
      <div className="md:col-span-1 md:col-span-2 md:col-span-3 md:col-span-4 md:col-span-6" />
      
      {/* Layout helpers */}
      <div className="flex flex-col flex-row items-center justify-between justify-center gap-2 gap-4 gap-6 gap-8" />
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-800">
        <TailwindSafelist />
        <AppClientWrapper>{children}</AppClientWrapper>
      </body>
    </html>
  );
}