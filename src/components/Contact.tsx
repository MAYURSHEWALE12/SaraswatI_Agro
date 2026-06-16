import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import {
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  CONTACT_EMAIL,
  getWhatsAppInquiryUrl,
} from "@/lib/constants";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-green-50/50 dark:bg-green-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t({ mr: "आमच्याशी ", en: "Contact " })}
            <span className="text-primary">{t({ mr: "संपर्क करा", en: "Us" })}</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            {t({
              mr: "कोणतीही चौकशी असल्यास आम्हाला संपर्क करा — आम्ही मदतीसाठी तयार आहोत",
              en: "Contact us for any inquiries — we are ready to assist you",
            })}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">{t({ mr: "पत्ता", en: "Address" })}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t({
                    mr: "टाकळकरवाडी, राजगुरूनगर, ता. खेड, जि. पुणे – 410505, महाराष्ट्र, भारत",
                    en: "Takalkarwadi, Rajgurunagar, Tal. Khed, Dist. Pune – 410505, Maharashtra, India",
                  })}
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-3">{t({ mr: "मोबाईल", en: "Mobile" })}</h4>
                <div className="flex flex-col gap-2">
                  <a
                    href={`tel:${PHONE_PRIMARY}`}
                    className="text-primary font-semibold text-lg hover:underline"
                    data-testid="link-phone-1"
                  >
                    +91 {PHONE_PRIMARY_DISPLAY}
                  </a>
                  <a
                    href={`tel:${PHONE_SECONDARY}`}
                    className="text-primary font-semibold text-lg hover:underline"
                    data-testid="link-phone-2"
                  >
                    +91 {PHONE_SECONDARY_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">{t({ mr: "ईमेल", en: "Email" })}</h4>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-primary font-medium hover:underline break-all"
                  data-testid="link-email"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white border-0 rounded-full"
                onClick={() => window.open(getWhatsAppInquiryUrl(), "_blank")}
                data-testid="button-whatsapp-contact"
              >
                <FaWhatsapp className="w-5 h-5" />
                {t({ mr: "व्हॉट्सॲप करा", en: "WhatsApp Us" })}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 gap-2 rounded-full border-2"
                asChild
              >
                <a href={`tel:${PHONE_PRIMARY}`} data-testid="button-call-contact">
                  <Phone className="w-4 h-4" />
                  {t({ mr: "आत्ता कॉल करा", en: "Call Now" })}
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-border shadow-xl h-96 lg:h-auto min-h-80"
          >
            <iframe
              title="Saraswati Agro Feeds Location"
              src="https://maps.google.com/maps?q=18.84621810913086,73.90768432617188&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="map-embed"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

