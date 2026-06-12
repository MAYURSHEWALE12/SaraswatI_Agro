import { useState, useEffect } from "react";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t({ mr: "मुख्यपृष्ठ", en: "Home" }), href: "#hero" },
    { name: t({ mr: "उत्पादने", en: "Products" }), href: "#products" },
    { name: t({ mr: "फायदे", en: "Benefits" }), href: "#benefits" },
    { name: t({ mr: "आमच्याबद्दल", en: "About" }), href: "#about" },
    { name: t({ mr: "संपर्क", en: "Contact" }), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={safLogo}
              alt="SAF Logo"
              className="w-10 h-10 rounded-full object-cover shadow-sm"
            />
            <span className="font-bold text-xl md:text-2xl text-foreground tracking-tight">
              {t({ mr: "सरस्वती", en: "Saraswati" })}{" "}
              <span className="text-primary">{t({ mr: "ॲग्रो", en: "Agro" })}</span>
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
                      className="text-foreground/80 hover:text-primary font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-gray-200 rounded-full p-1 bg-gray-50 shrink-0">
              <Globe className="w-3.5 h-3.5 text-gray-400 ml-1.5 hidden sm:inline" />
              <button
                onClick={() => setLanguage("mr")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === "mr"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                मराठी
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === "en"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-emerald-600"
                }`}
              >
                EN
              </button>
            </div>

            {/* Desktop WhatsApp Button */}
            <Button
              className="hidden lg:flex bg-green-600 hover:bg-green-700 text-white gap-2 rounded-full px-6"
              onClick={() => window.open(WA_URL, "_blank")}
              data-testid="button-nav-whatsapp"
            >
              <FaWhatsapp className="w-5 h-5" />
              {t({ mr: "व्हॉट्सॲप करा", en: "WhatsApp Us" })}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-foreground hover:text-primary font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white gap-2 w-full mt-2"
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
      )}
    </header>
  );
}

