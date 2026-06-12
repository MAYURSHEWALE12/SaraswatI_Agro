import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";

const Stats = lazy(() => import("@/components/Stats"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const Products = lazy(() => import("@/components/Products"));
const CustomizedFeed = lazy(() => import("@/components/CustomizedFeed"));
const Benefits = lazy(() => import("@/components/Benefits"));
const ProductionProcess = lazy(() => import("@/components/ProductionProcess"));
const QualityAssurance = lazy(() => import("@/components/QualityAssurance"));
const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const DealerForm = lazy(() => import("@/components/DealerForm"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Suspense fallback={<div className="h-32 w-full flex items-center justify-center text-gray-400">...</div>}>
          <Stats />
          <WhyChooseUs />
          <Products />
          <SectionDivider />
          <CustomizedFeed />
          <Benefits />
          <ProductionProcess />
          <QualityAssurance />
          <About />
          <SectionDivider />
          <Testimonials />
          <DealerForm />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}
