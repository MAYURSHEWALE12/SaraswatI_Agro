import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-green-50/50 dark:bg-green-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            आमच्याशी <span className="text-primary">संपर्क करा</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            कोणतीही चौकशी असल्यास आम्हाला संपर्क करा — आम्ही मदतीसाठी तयार आहोत
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
                <h4 className="font-bold text-foreground text-lg mb-1">पत्ता</h4>
                <p className="text-muted-foreground leading-relaxed">
                  टाकळकरवाडी, राजगुरूनगर,<br />
                  ता. खेड, जि. पुणे – 410505<br />
                  महाराष्ट्र, भारत
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-3">मोबाईल</h4>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919552398974"
                    className="text-primary font-semibold text-lg hover:underline"
                    data-testid="link-phone-1"
                  >
                    +91 9552398974
                  </a>
                  <a
                    href="tel:+919921937353"
                    className="text-primary font-semibold text-lg hover:underline"
                    data-testid="link-phone-2"
                  >
                    +91 9921937353
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-lg mb-1">ईमेल</h4>
                <a
                  href="mailto:saraswatiagrofeeds2215@gmail.com"
                  className="text-primary font-medium hover:underline break-all"
                  data-testid="link-email"
                >
                  saraswatiagrofeeds2215@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full"
                onClick={() => window.open("https://wa.me/919921937353?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20पशुखाद्य%20उत्पादनांबद्दल%20अधिक%20माहिती%20हवी%20आहे.", "_blank")}
                data-testid="button-whatsapp-contact"
              >
                <FaWhatsapp className="w-5 h-5" />
                व्हॉट्सअॅप करा
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 gap-2 rounded-full border-2"
                asChild
              >
                <a href="tel:+919552398974" data-testid="button-call-contact">
                  <Phone className="w-4 h-4" />
                  आत्ता कॉल करा
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.6!2d73.899!3d18.686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c8c1234567%3A0xabc!2sRajgurunagar%2C%20Khed%2C%20Pune%2C%20Maharashtra%20410505!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
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
