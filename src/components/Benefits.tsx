import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

/* HD Pexels 735968 — dairy cow portrait, tall crop for portrait column */
const COW_GRAZE = "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop";

const benefitsDict = {
  mr: [
    "दुधात व दुधातील फॅट आणि एस.एन.एफ. मध्ये वाढ होते",
    "जनावरांची रोगप्रतिकारक क्षमता टिकून ठेवते",
    "पचनसंस्थेची कार्यक्षमता वाढवते व आजारांचे प्रमाण कमी होते",
    "खनिजांची कमतरता व त्यापासून होणाऱ्या आजारांना आळा घालण्यास मदत होते",
    "जनावरांचे आरोग्य चांगले राहते व दूध देण्याच्या कालावधीत वाढ होते",
    "प्रजनन क्षमता सुधारते",
    "दुधातील विषारी घटक कमी होण्यास मदत होते",
    "आधुनिक पद्धतीने बनविलेले अत्यंत पचनीय व पौष्टिक खाद्य",
  ],
  en: [
    "Increase in milk production, fat, and SNF percentage",
    "Maintains and boosts the animal's immune system",
    "Improves digestive efficiency and reduces diseases",
    "Helps prevent mineral deficiencies and related illnesses",
    "Improves cattle health and extends lactation period",
    "Enhances reproductive capacity/fertility",
    "Helps reduce toxic elements in milk",
    "Highly digestible and nutritious feed made using modern methods",
  ]
};

const nutrientsDict = {
  mr: ["🧪 बायपास प्रोटीन", "💧 बायपास फॅट", "🌿 डायजेस्टेबल फायबर", "💊 जीवनसत्व ब", "⚗️ खनिजे"],
  en: ["🧪 Bypass Protein", "💧 Bypass Fat", "🌿 Digestible Fiber", "💊 Vitamin B", "⚗️ Minerals"]
};

export default function Benefits() {
  const { t } = useLanguage();
  const benefits = t(benefitsDict);
  const nutrients = t(nutrientsDict);

  return (
    <section
      id="benefits"
      className="py-16 sm:py-20 md:py-28 bg-emerald-50/70 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 border border-emerald-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "🌟 का वापरावे?", en: "🌟 Why Use Our Feed?" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {t({ mr: "पशुखाद्याचे ", en: "Key Benefits of " })}
            <span className="text-emerald-600">{t({ mr: "महत्त्वाचे फायदे", en: "Our Animal Feed" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-sm sm:text-base">
            {t({
              mr: "शास्त्रीय पद्धतीने तयार केलेले पशुखाद्य जनावरांचे आरोग्य व उत्पादकता वाढवते",
              en: "Scientifically prepared animal feed enhances livestock health and productivity",
            })}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Image column — real HD cow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, x: -28 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src={COW_GRAZE}
                alt="Cows grazing in green pasture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-lg font-bold drop-shadow">
                  {t({ mr: "🐄 गायी म्हशींच्या उत्तम आरोग्यासाठी", en: "🐄 For the Best Health of Your Cows & Buffaloes" })}
                </div>
                <div className="text-emerald-200 text-sm">
                  {t({ mr: "शुद्ध, सकस आणि भरपूर दुधासाठी", en: "For pure, nutrient-rich, and high milk yield" })}
                </div>
              </div>
            </div>

            {/* Nutrient tag strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-4 bg-white rounded-2xl shadow-lg border border-emerald-100 p-4"
            >
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                {t({ mr: "मुख्य पोषण घटक", en: "Key Nutritional Elements" })}
              </div>
              <div className="flex flex-wrap gap-2">
                {nutrients.map((n, i) => (
                  <span
                    key={i}
                    className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-full"
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
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 22 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.36 } },
                }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3.5 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-200 cursor-default"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
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
