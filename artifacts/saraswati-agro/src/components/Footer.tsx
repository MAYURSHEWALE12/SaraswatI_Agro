import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "मुख्यपृष्ठ", href: "#hero" },
    { label: "उत्पादने", href: "#products" },
    { label: "फायदे", href: "#benefits" },
    { label: "वितरक बना", href: "#dealer" },
    { label: "संपर्क", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
                SAF
              </div>
              <div>
                <div className="font-bold text-xl text-background">सरस्वती अॅग्रो फीड्स</div>
                <div className="text-background/60 text-sm">उत्तम पशुखाद्य, भरपूर दूध उत्पादन</div>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed max-w-sm">
              २०१६ पासून महाराष्ट्रातील शेतकऱ्यांच्या सेवेत. संतुलित व पौष्टिक पशुखाद्याद्वारे जनावरांचे आरोग्य आणि दूध उत्पादन वाढविण्याचे आमचे ध्येय आहे.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://wa.me/919921937353"
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
            </div>
          </div>

          <div>
            <h4 className="font-bold text-background text-lg mb-5">द्रुत दुवे</h4>
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
            <h4 className="font-bold text-background text-lg mb-5">संपर्क</h4>
            <div className="flex flex-col gap-4 text-background/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <span className="text-sm leading-relaxed">
                  टाकळकरवाडी, राजगुरूनगर,<br />
                  ता. खेड, जि. पुणे – 410505
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
          <p>© 2024 सरस्वती अॅग्रो फीड्स. सर्व हक्क राखीव.</p>
          <p>महाराष्ट्रातील शेतकऱ्यांसाठी, शेतकऱ्यांकडून</p>
        </div>
      </div>
    </footer>
  );
}
