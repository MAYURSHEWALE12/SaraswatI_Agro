import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import safLogo from "@assets/image_1781081387145.webp";
import { useLanguage } from "@/hooks/useLanguage";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  CONTACT_EMAIL,
  ADDRESS_TAKALKARWADI_MR,
  ADDRESS_TAKALKARWADI_EN,
  getWhatsAppInquiryUrl,
} from "@/lib/constants";

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
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-100 transition-colors duration-300">
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
                <div className="font-bold text-xl text-slate-100">{t({ mr: "सरस्वती ॲग्रो फीड्स", en: "Saraswati Agro Feeds" })}</div>
                <div className="text-slate-400 text-sm">{t({ mr: "उत्तम पशुखाद्य, भरपूर दूध उत्पादन", en: "Quality Cattle Feed, Higher Milk Yield" })}</div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              {t({
                mr: "२०१६ पासून महाराष्ट्रातील शेतकऱ्यांच्या सेवेत. रत्नाई पशु आहार ब्रँडद्वारे जनावरांचे आरोग्य सुधारणे, दूध उत्पादन वाढवणे आणि शेतकऱ्यांची समृद्धी हे आमचे ध्येय आहे.",
                en: "Serving the farmers of Maharashtra since 2016. Under the Ratnai Pashu Aahar brand, our goal is to improve cattle health, boost milk yields, and foster farmers' prosperity.",
              })}
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href={getWhatsAppInquiryUrl()}
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
                href="https://www.instagram.com/saraswati_agro_feeds_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-500 flex items-center justify-center text-white transition-colors"
                data-testid="link-footer-instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Saraswti_agro_feeds"
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
            <h4 className="font-bold text-slate-100 text-lg mb-5">{t({ mr: "द्रुत दुवे", en: "Quick Links" })}</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-100 text-lg mb-5">{t({ mr: "संपर्क", en: "Contact" })}</h4>
            <div className="flex flex-col gap-4 text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">
                  {t({
                    mr: ADDRESS_TAKALKARWADI_MR,
                    en: ADDRESS_TAKALKARWADI_EN,
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div className="text-sm">
                  <a href={`tel:${PHONE_PRIMARY}`} className="hover:text-primary transition-colors">{PHONE_PRIMARY_DISPLAY}</a>
                  <span className="mx-1">/</span>
                  <a href={`tel:${PHONE_SECONDARY}`} className="hover:text-primary transition-colors">{PHONE_SECONDARY_DISPLAY}</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm hover:text-primary transition-colors break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {t({ mr: "सरस्वती ॲग्रो फीड्स. सर्व हक्क राखीव.", en: "Saraswati Agro Feeds. All rights reserved." })}</p>
          <p>{t({ mr: "महाराष्ट्रातील शेतकऱ्यांसाठी, शेतकऱ्यांकडून", en: "For the Farmers, By the Farmers of Maharashtra" })}</p>
        </div>
        <div className="mt-4 pb-2 text-center text-slate-600 text-xs">
          Designed &amp; Developed by{" "}
          <span className="text-emerald-400 font-semibold tracking-wide">
            Devotra Infotech LLP
          </span>{" "}
          © 2026
        </div>
      </div>
    </footer>
  );
}

