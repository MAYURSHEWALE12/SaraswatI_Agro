import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";
import safLogo from "@assets/image_1781081387145.webp";
import { getWhatsAppInquiryUrl } from "@/lib/constants";

const WA_URL = getWhatsAppInquiryUrl();

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t({ mr: "मुख्यपृष्ठ", en: "Home" }), href: "#hero" },
    { name: t({ mr: "उत्पादने", en: "Products" }), href: "#products" },
    { name: t({ mr: "फायदे", en: "Benefits" }), href: "#benefits" },
    { name: t({ mr: "आमच्याबद्दल", en: "About" }), href: "#about" },
    { name: t({ mr: "संपर्क", en: "Contact" }), href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100 py-2.5"
            : "bg-black/30 backdrop-blur-md py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo + Brand */}
            <div className="flex items-center gap-2.5">
              <img
                src={safLogo}
                alt="SAF Logo"
                className="w-10 h-10 rounded-full object-cover shadow-md ring-2 ring-white/30"
              />
              <span className={`font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white"}`}>
                {t({ mr: "सरस्वती", en: "Saraswati" })}{" "}
                <span className={isScrolled ? "text-emerald-600" : "text-emerald-400"}>
                  {t({ mr: "ॲग्रो", en: "Agro" })}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                <ul className="flex items-center gap-6">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`relative font-semibold text-sm transition-colors duration-200 group ${
                          isScrolled ? "text-gray-600 hover:text-emerald-600" : "text-white/90 hover:text-white"
                        }`}
                      >
                        {link.name}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-emerald-400 rounded-full transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Language Switcher */}
              <div className={`flex items-center gap-1 rounded-full p-1 shrink-0 transition-all duration-300 ${
                isScrolled ? "border border-gray-200 bg-white/80 backdrop-blur-sm" : "border border-white/30 bg-white/10 backdrop-blur-sm"
              }`}>
                <Globe className={`w-3.5 h-3.5 ml-1.5 hidden sm:inline transition-colors ${isScrolled ? "text-gray-400" : "text-white/70"}`} />
                <button
                  onClick={() => setLanguage("mr")}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === "mr"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : isScrolled ? "text-gray-500 hover:text-emerald-600" : "text-white/80 hover:text-white"
                  }`}
                >
                  मराठी
                </button>
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === "en"
                      ? "bg-emerald-600 text-white shadow-sm"
                      : isScrolled ? "text-gray-500 hover:text-emerald-600" : "text-white/80 hover:text-white"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Desktop WhatsApp Button */}
              <Button
                className="hidden lg:flex bg-green-600 hover:bg-green-500 text-white gap-2 rounded-full px-5 shadow-lg shadow-green-900/20 font-semibold"
                onClick={() => window.open(WA_URL, "_blank")}
                data-testid="button-nav-whatsapp"
              >
                <FaWhatsapp className="w-4 h-4" />
                {t({ mr: "व्हॉट्सॲप करा", en: "WhatsApp Us" })}
              </Button>

              {/* Mobile Menu Button - HIDDEN FOR BOTTOM NAV TEST */}
              <button
                className="hidden p-2 relative z-[60] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile Bottom Navigation Bar (App-like) ─── */}
      <nav 
        className="lg:hidden border-t border-gray-200 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] pb-3 pt-1"
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2147483647, backgroundColor: 'white' }}
      >
        <div className="flex items-center justify-around px-2 py-2">
          {/* Home */}
          <a href="#hero" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-emerald-600 active:scale-95 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span className="text-[10px] font-semibold">{t({ mr: "मुख्यपृष्ठ", en: "Home" })}</span>
          </a>
          
          {/* Products */}
          <a href="#products" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-emerald-600 active:scale-95 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><path d="M15 21V9"/></svg>
            <span className="text-[10px] font-semibold">{t({ mr: "उत्पादने", en: "Products" })}</span>
          </a>

          {/* Custom Feed (Center Prominent) */}
          <a href="#customized-feed" className="relative -top-5 flex flex-col items-center group active:scale-95 transition-transform">
            <div className="w-14 h-14 bg-gradient-to-tr from-amber-500 to-amber-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-500/40 border-4 border-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </div>
            <span className="text-[10px] font-bold text-amber-600 mt-1">{t({ mr: "कस्टम फीड", en: "Custom" })}</span>
          </a>

          {/* About */}
          <a href="#about" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-emerald-600 active:scale-95 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span className="text-[10px] font-semibold">{t({ mr: "आमच्याबद्दल", en: "About" })}</span>
          </a>

          {/* Contact */}
          <a href="#contact" className="flex flex-col items-center gap-1 p-2 text-gray-500 hover:text-emerald-600 active:scale-95 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span className="text-[10px] font-semibold">{t({ mr: "संपर्क", en: "Contact" })}</span>
          </a>
        </div>
      </nav>
    </>
  );
}

