import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import safLogo from "@assets/image_1781081387145.png";

const WA_URL =
  "https://wa.me/919552398974?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20पशुखाद्य%20उत्पादनांबद्दल%20अधिक%20माहिती%20हवी%20आहे.";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "मुख्यपृष्ठ", href: "#hero" },
    { name: "उत्पादने", href: "#products" },
    { name: "फायदे", href: "#benefits" },
    { name: "आमच्याबद्दल", href: "#about" },
    { name: "संपर्क", href: "#contact" },
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
            <span className="font-bold text-xl md:text-2xl text-foreground hidden sm:block tracking-tight">
              सरस्वती <span className="text-primary">अॅग्रो</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-primary font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white gap-2 rounded-full px-6"
              onClick={() => window.open(WA_URL, "_blank")}
              data-testid="button-nav-whatsapp"
            >
              <FaWhatsapp className="w-5 h-5" />
              व्हॉट्सअॅप करा
            </Button>
          </nav>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
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
            व्हॉट्सअॅप करा
          </Button>
        </div>
      )}
    </header>
  );
}
