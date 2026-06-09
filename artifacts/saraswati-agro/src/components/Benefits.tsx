import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import benefitsBrochure from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(3)_1780997454734.jpeg";

const benefits = [
  "जनावरांच्या दुधात व दुधातील फॅट आणि एस.एन.एफ. मध्ये वाढ होते",
  "जनावरांची रोगप्रतिकारक क्षमता टिकून ठेवते",
  "पचनसंस्थेची कार्यक्षमता वाढवते व निगडीत आजारांचे प्रमाण कमी होते",
  "खनिजांची कमतरता व त्यापासून होणाऱ्या आजारांना आळा घालण्यास मदत होते",
  "जनावरांचे आरोग्य चांगले राहते व दूध देण्याच्या कालावधीत वाढ होते",
  "प्रजनन क्षमता सुधारते",
  "दुधातील विषारी घटक कमी होण्यास मदत होते",
  "आधुनिक पद्धतीने बनविलेले अत्यंत पचनीय व पौष्टिक खाद्य",
];

const nutrients = ["बायपास प्रोटीन", "बायपास फॅट", "डायजेस्टेबल फायबर", "जीवनसत्व ब", "खनिजे"];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-20 md:py-28 bg-green-50/60 dark:bg-green-950/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-green-100 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            का वापरावे?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            सरस्वती अॅग्रो{" "}
            <span className="text-primary">पशुखाद्याचे फायदे</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-sm sm:text-base">
            शास्त्रीय पद्धतीने तयार केलेले पशुखाद्य जनावरांचे आरोग्य व उत्पादकता वाढवते
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Brochure image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={benefitsBrochure}
                alt="सरस्वती अॅग्रो फीड्सचे फायदे"
                className="w-full h-auto object-cover"
                data-testid="img-benefits-brochure"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Nutrient pill strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 bg-white dark:bg-card rounded-2xl shadow-xl p-4 border border-border"
            >
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2.5">
                मुख्य पोषण घटक
              </div>
              <div className="flex flex-wrap gap-2">
                {nutrients.map((n, i) => (
                  <span
                    key={i}
                    className="bg-green-100 dark:bg-green-900/40 text-primary border border-green-200 dark:border-green-700 text-xs font-semibold px-3 py-1.5 rounded-full"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Benefits checklist */}
          <motion.div
            className="flex flex-col gap-2.5 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.38 } },
                }}
                whileHover={{ x: 6 }}
                className="flex items-start gap-3 bg-white dark:bg-card border border-green-100 dark:border-green-800 rounded-xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-default"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground text-sm sm:text-base leading-relaxed font-medium">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
