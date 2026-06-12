import { motion } from "framer-motion";
import { Sprout, FlaskConical, Beaker, Factory, ClipboardCheck, Package, Truck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const stepsDict = {
  mr: [
    { icon: Sprout,         emoji: "🌾", label: "कच्चा माल निवड",   desc: "उत्तम दर्जाच्या कच्च्या मालाची काळजीपूर्वक निवड" },
    { icon: FlaskConical,   emoji: "🔬", label: "लॅब टेस्टिंग",    desc: "आधुनिक प्रयोगशाळेत प्रत्येक घटकाची कसोटी" },
    { icon: Beaker,         emoji: "⚗️", label: "फॉर्म्युलेशन",    desc: "तज्ञांकडून पोषणमूल्य संतुलन" },
    { icon: Factory,        emoji: "🏭", label: "उत्पादन",          desc: "अत्याधुनिक यंत्रांद्वारे दर्जेदार निर्मिती" },
    { icon: ClipboardCheck, emoji: "✅", label: "गुणवत्ता तपासणी", desc: "प्रत्येक बॅचची BIS मानकांनुसार तपासणी" },
    { icon: Package,        emoji: "📦", label: "पॅकेजिंग",        desc: "सुरक्षित व आकर्षक पॅकेजिंग" },
    { icon: Truck,          emoji: "🚛", label: "वितरण",            desc: "वेळेवर व सुरक्षित वितरण" },
  ],
  en: [
    { icon: Sprout,         emoji: "🌾", label: "Raw Material Selection",   desc: "Careful selection of high quality raw materials" },
    { icon: FlaskConical,   emoji: "🔬", label: "Lab Testing",    desc: "Testing of each component in modern laboratory" },
    { icon: Beaker,         emoji: "⚗️", label: "Formulation",    desc: "Nutritional value balancing by experts" },
    { icon: Factory,        emoji: "🏭", label: "Production",          desc: "Quality creation using state-of-the-art machinery" },
    { icon: ClipboardCheck, emoji: "✅", label: "Quality Check", desc: "Inspection of every batch as per BIS standards" },
    { icon: Package,        emoji: "📦", label: "Packaging",        desc: "Safe and attractive packaging" },
    { icon: Truck,          emoji: "🚛", label: "Distribution",            desc: "Timely and safe delivery" },
  ]
};

export default function ProductionProcess() {
  const { t } = useLanguage();
  const steps = t(stepsDict);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-emerald-50/60 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "🏭 प्रक्रिया", en: "🏭 Process" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors">
            {t({ mr: "आमची ", en: "Our " })}
            <span className="text-emerald-600 dark:text-emerald-500">{t({ mr: "उत्पादन प्रक्रिया", en: "Production Process" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 transition-colors">{t({ mr: "प्रत्येक टप्प्यावर गुणवत्तेची हमी", en: "Quality assurance at every stage" })}</p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:flex items-start gap-0 mb-16">
          {steps.map((step, i) => {
            return (
              <div key={i} className="flex-1 flex flex-col items-center relative">
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.14, duration: 0.4 }}
                    className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-emerald-400/70 dark:from-emerald-600/50 to-emerald-200/40 dark:to-emerald-900/40 origin-left"
                  />
                )}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-emerald-100 dark:border-slate-800 shadow-lg flex items-center justify-center hover:border-emerald-500 dark:hover:border-emerald-500 hover:scale-110 transition-all duration-300 cursor-default text-2xl"
                >
                  {step.emoji}
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shadow">
                    {i + 1}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="mt-4 text-center px-1"
                >
                  <div className="font-bold text-gray-700 dark:text-gray-300 text-sm transition-colors">{step.label}</div>
                  <div className="text-gray-400 dark:text-gray-500 text-xs mt-1 leading-tight transition-colors">{step.desc}</div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical list */}
        <div className="md:hidden flex flex-col gap-0 mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex gap-4 relative pl-2"
            >
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[1.375rem] bottom-[-1.5rem] w-0.5 bg-emerald-200 dark:bg-emerald-900/50" />
              )}
              <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-white dark:bg-slate-900 border-[3px] border-emerald-100 dark:border-slate-800 flex items-center justify-center text-lg shadow-sm">
                {step.emoji}
              </div>
              <div className="pb-8 pt-1">
                <div className="font-bold text-gray-800 dark:text-gray-200 text-sm transition-colors">{step.label}</div>
                <div className="text-gray-500 dark:text-gray-400 text-xs mt-1 leading-snug pr-4 transition-colors">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-emerald-600 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl"
        >
          <h3 className="text-xl md:text-3xl font-bold mb-3">
            {t({ mr: "🌿 प्रत्येक पिशवीमागे विज्ञान आणि काळजी", en: "🌿 Science & Care Behind Every Bag" })}
          </h3>
          <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t({
              mr: "सरस्वती ॲग्रो फीड्समध्ये उत्पादन प्रक्रियेच्या प्रत्येक टप्प्यावर तज्ञांचे कडक निरीक्षण असते. आमचे पशुखाद्य BIS मानकांनुसार तयार होते आणि वितरणापूर्वी पूर्ण तपासणी केली जाते.",
              en: "At Saraswati Agro Feeds, every stage of the production process is strictly monitored by experts. Our animal feed is formulated according to BIS standards and fully inspected before distribution.",
            })}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

