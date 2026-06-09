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

const nutrients = [
  "बायपास प्रोटीन",
  "बायपास फॅट",
  "डायजेस्टेबल फायबर",
  "जीवनसत्व ब",
  "खनिजे",
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            सरस्वती अॅग्रो <span className="text-primary">पशुखाद्याचे फायदे</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            शास्त्रीय पद्धतीने तयार केलेले पशुखाद्य जनावरांचे आरोग्य व उत्पादकता वाढवते
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={benefitsBrochure}
                alt="सरस्वती अॅग्रो फीड्सचे फायदे"
                className="w-full h-auto object-cover"
                data-testid="img-benefits-brochure"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none rounded-3xl" />
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="flex flex-col gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start gap-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-medium leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-2xl p-6"
            >
              <h4 className="font-bold text-primary text-lg mb-4">
                गायी म्हशींच्या उत्तम आरोग्यासाठी
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                शुद्ध, सकस आणि भरपूर दुधासाठी
              </p>
              <div className="flex flex-wrap gap-2">
                {nutrients.map((nutrient, index) => (
                  <span
                    key={index}
                    className="bg-white dark:bg-green-900 border border-primary/30 text-primary font-semibold text-sm px-4 py-1.5 rounded-full"
                  >
                    {nutrient}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
