import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import safLogo from "@assets/image_1781081387145.webp";
import { getWhatsAppInquiryUrl } from "@/lib/constants";

const WA_URL = getWhatsAppInquiryUrl();

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme, isDark } = useTheme();

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
    { name: t({ mr: "होम", en: "Home" }), href: "#hero" },
    { name: t({ mr: "आमची वैशिष्ट्ये", en: "Features" }), href: "#why-choose-us" },
    { name: t({ mr: "उत्पादने", en: "Products" }), href: "#products" },
    { name: t({ mr: "फायदे", en: "Benefits" }), href: "#benefits" },
    { name: t({ mr: "आमच्याबद्दल", en: "About Us" }), href: "#about" },
    { name: t({ mr: "संपर्क", en: "Contact" }), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] overflow-hidden border-2 border-white/90 group-hover:scale-105 transition-transform duration-300">
              <img src={safLogo} alt="Saraswati Agro Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
            </div>
            <span className={`text-xl sm:text-2xl font-black tracking-tight ${isScrolled ? "text-gray-800" : "text-white"}`}>
              {t({ mr: "सरस्वती", en: "Saraswati" })}{" "}
              <span className={isScrolled ? "text-emerald-600" : "text-emerald-400"}>
                {t({ mr: "ॲग्रो", en: "Agro" })}
              </span>
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 mr-2">
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

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? "bg-gray-100 text-gray-600 hover:bg-gray-200" 
                  : "bg-white/10 text-white/90 hover:bg-white/20 backdrop-blur-sm"
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>

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

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 relative z-[60] transition-colors ${isScrolled ? "text-gray-700" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ─── Mobile Slide-in Drawer ─── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white shadow-2xl z-[55] lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <img src={safLogo} alt="SAF" className="w-8 h-8 rounded-full object-cover" />
                  <span className="font-bold text-sm text-foreground">
                    {t({ mr: "सरस्वती", en: "Saraswati" })}{" "}
                    <span className="text-primary">{t({ mr: "ॲग्रो", en: "Agro" })}</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-5 py-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-emerald-50 font-medium rounded-xl transition-all duration-200 text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom CTA */}
              <div className="px-5 pb-6 pt-3 border-t border-gray-100">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white gap-2 rounded-full py-5"
                  onClick={() => {
                    window.open(WA_URL, "_blank");
                    setMobileMenuOpen(false);
                  }}
                  data-testid="button-mobile-whatsapp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  {t({ mr: "व्हॉट्सॲप करा", en: "WhatsApp Us" })}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

