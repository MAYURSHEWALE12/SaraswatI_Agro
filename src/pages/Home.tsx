import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Products from "@/components/Products";
import CustomizedFeed from "@/components/CustomizedFeed";
import Benefits from "@/components/Benefits";
import ProductionProcess from "@/components/ProductionProcess";
import QualityAssurance from "@/components/QualityAssurance";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import DealerForm from "@/components/DealerForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SectionDivider />
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
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
