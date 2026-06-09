import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Award, CheckCircle } from "lucide-react";
import ratnaiAmrutdhara from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(5)_1780997454734.jpeg";

const qualityPoints = [
  { icon: Microscope, title: "आधुनिक प्रयोगशाळा", desc: "आधुनिक प्रयोगशाळेमध्ये प्रत्येक कच्च्या मालाची व तयार उत्पादनाची तपासणी" },
  { icon: ShieldCheck, title: "BIS मानकांनुसार", desc: "Bureau of Indian Standards (BIS) ने निर्धारित केलेल्या सर्व मानकांचे काटेकोर पालन" },
  { icon: CheckCircle, title: "प्रवेश गुणवत्ता तपासणी", desc: "येणाऱ्या कच्च्या मालाच्या सर्व चाचण्या केल्यानंतरच उत्पादनासाठी वापरला जातो" },
  { icon: Award, title: "अंतिम गुणवत्ता हमी", desc: "तयार केलेल्या उत्पादनाच्या सर्व चाचण्या करूनच वितरणासाठी उपलब्ध केला जातो" },
];

export default function QualityAssurance() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-green-100 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            गुणवत्ता
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            गुणवत्तेची <span className="text-primary">हमी</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base">
            आमचे प्रत्येक उत्पादन गुणवत्तेच्या कठोर मानकांमधून जाते
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Quality cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {qualityPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.45 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex flex-col gap-3.5 p-5 sm:p-6 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-default"
                  data-testid={`card-quality-${index}`}
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5">{point.title}</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Brand brochure image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={ratnaiAmrutdhara}
                alt="Quality product brochure"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-white font-bold text-lg sm:text-xl mb-2.5">
                  आमची गुणवत्ता वचनबद्धता
                </div>
                <div className="flex flex-wrap gap-2">
                  {["BIS Certified", "Lab Tested", "100% Pure Veg", "Quality Assured"].map((b, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/20 border border-white/25 text-white px-3 py-1 rounded-full"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-green-200/25 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-yellow-200/15 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
