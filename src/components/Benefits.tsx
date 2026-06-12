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
      className="py-16 sm:py-20 md:py-28 bg-emerald-50/70 dark:bg-slate-900 overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "🌟 का वापरावे?", en: "🌟 Why Use Our Feed?" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors">
            {t({ mr: "पशुखाद्याचे ", en: "Key Benefits of " })}
            <span className="text-emerald-600 dark:text-emerald-500">{t({ mr: "महत्त्वाचे फायदे", en: "Our Animal Feed" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-4" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-14">
          
          {/* Left Column: Portrait HD Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 max-w-sm mx-auto lg:max-w-none relative"
          >
            {/* Soft decorative background shape */}
            <div className="absolute inset-0 bg-emerald-200 dark:bg-emerald-900/30 rounded-[3rem] transform rotate-3 scale-105 -z-10 transition-transform hover:rotate-6 duration-500" />
            <div className="absolute inset-0 bg-amber-100 dark:bg-amber-900/20 rounded-[3rem] transform -rotate-2 scale-105 -z-20" />
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-900 aspect-[4/5]">
              <img
                src={COW_GRAZE}
                alt="Cow grazing"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <p className="text-white font-semibold leading-snug">
                    {t({
                      mr: "“आमच्या पशुखाद्यामुळे जनावरांचे आरोग्य सुधारते आणि दूध उत्पादन वाढते.”",
                      en: "“Our feed improves cattle health and boosts milk yield.”"
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Nutrient tag strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-4 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-emerald-100 dark:border-slate-800 p-4 transition-colors duration-300"
            >
              <div className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2.5">
                {t({ mr: "मुख्य पोषण घटक", en: "Key Nutritional Elements" })}
              </div>
              <div className="flex flex-wrap gap-2">
                {nutrients.map((n, i) => (
                  <span
                    key={i}
                    className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-xs font-semibold px-3 py-1.5 rounded-full"
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
                className="flex items-start gap-3 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-xl px-4 py-3.5 shadow-sm hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-200 cursor-default group"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed font-medium transition-colors">
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
