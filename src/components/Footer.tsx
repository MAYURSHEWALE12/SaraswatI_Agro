import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import safLogo from "@assets/image_1781081387145.png";
import { useLanguage } from "@/hooks/useLanguage";

const WA_NUMBER = "919552398974";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=नमस्कार%2C%0Aमला%20सरस्वती%20ॲग्रो%20फीड्सच्या%20पशुखाद्य%20उत्पादनांबद्दल%20अधिक%20माहिती%20हवी%20आहे.`;

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t({ mr: "मुख्यपृष्ठ", en: "Home" }), href: "#hero" },
    { label: t({ mr: "उत्पादने", en: "Products" }), href: "#products" },
    { label: t({ mr: "फायदे", en: "Benefits" }), href: "#benefits" },
    { label: t({ mr: "आमच्याबद्दल", en: "About Us" }), href: "#about" },
    { label: t({ mr: "वितरक बना", en: "Become a Dealer" }), href: "#dealer" },
    { label: t({ mr: "संपर्क", en: "Contact" }), href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={safLogo}
                alt="SAF Logo"
                className="w-12 h-12 rounded-full object-cover shadow-md shrink-0"
              />
              <div>
                <div className="font-bold text-xl text-background">{t({ mr: "सरस्वती ॲग्रो फीड्स", en: "Saraswati Agro Feeds" })}</div>
                <div className="text-background/60 text-sm">{t({ mr: "उत्तम पशुखाद्य, भरपूर दूध उत्पादन", en: "Quality Cattle Feed, Higher Milk Yield" })}</div>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-sm">
              {t({
                mr: "२०१६ पासून महाराष्ट्रातील शेतकऱ्यांच्या सेवेत. रत्नाई पशु आहार ब्रँडद्वारे जनावरांचे आरोग्य सुधारणे, दूध उत्पादन वाढवणे आणि शेतकऱ्यांची समृद्धी हे आमचे ध्येय आहे.",
                en: "Serving the farmers of Maharashtra since 2016. Under the Ratnai Pashu Aahar brand, our goal is to improve cattle health, boost milk yields, and foster farmers' prosperity.",
              })}
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center text-white transition-colors"
                data-testid="link-footer-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/SaraswatiAgroFeeds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                data-testid="link-footer-facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/SaraswatiAgroFeeds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-500 flex items-center justify-center text-white transition-colors"
                data-testid="link-footer-instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@SaraswatiAgroFeeds"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center text-white transition-colors"
                data-testid="link-footer-youtube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-background text-lg mb-5">{t({ mr: "द्रुत दुवे", en: "Quick Links" })}</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background text-lg mb-5">{t({ mr: "संपर्क", en: "Contact" })}</h4>
            <div className="flex flex-col gap-4 text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">
                  {t({
                    mr: "टाकळकरवाडी, राजगुरूनगर, ता. खेड, जि. पुणे – 410505",
                    en: "Takalkarwadi, Rajgurunagar, Tal. Khed, Dist. Pune – 410505",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="text-sm">
                  <a href="tel:+919552398974" className="hover:text-primary transition-colors">9552398974</a>
                  <span className="mx-1">/</span>
                  <a href="tel:+919921937353" className="hover:text-primary transition-colors">9921937353</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:saraswatiagrofeeds2215@gmail.com"
                  className="text-sm hover:text-primary transition-colors break-all"
                >
                  saraswatiagrofeeds2215@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-background/50 text-sm">
          <p>© {new Date().getFullYear()} {t({ mr: "सरस्वती ॲग्रो फीड्स. सर्व हक्क राखीव.", en: "Saraswati Agro Feeds. All rights reserved." })}</p>
          <p>{t({ mr: "महाराष्ट्रातील शेतकऱ्यांसाठी, शेतकऱ्यांकडून", en: "For the Farmers, By the Farmers of Maharashtra" })}</p>
        </div>
      </div>
    </footer>
  );
}

