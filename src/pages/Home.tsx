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

function SectionFallback() {
  return (
    <div className="w-full min-h-[300px] flex items-center justify-center">
      <div className="w-10 h-10 rounded-full border-4 border-emerald-200 border-t-emerald-500 animate-spin" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden w-full">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}><Stats /></Suspense>
        <Suspense fallback={<SectionFallback />}><WhyChooseUs /></Suspense>
        <Suspense fallback={<SectionFallback />}><Products /></Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}><CustomizedFeed /></Suspense>
        <Suspense fallback={<SectionFallback />}><Benefits /></Suspense>
        <Suspense fallback={<SectionFallback />}><ProductionProcess /></Suspense>
        <Suspense fallback={<SectionFallback />}><QualityAssurance /></Suspense>
        <Suspense fallback={<SectionFallback />}><About /></Suspense>
        <SectionDivider />
        <Suspense fallback={<SectionFallback />}><Testimonials /></Suspense>
        <Suspense fallback={<SectionFallback />}><DealerForm /></Suspense>
        <Suspense fallback={<SectionFallback />}><Contact /></Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
}
