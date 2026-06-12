import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Award, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { PEXELS_COW_PORTRAIT } from "@/lib/constants";

/* HD Pexels 735968 — close-up dairy cow portrait */
const COW_FARM = PEXELS_COW_PORTRAIT;

const qualityPointsDict = {
  mr: [
    { icon: Microscope, emoji: "🔬", title: "आधुनिक प्रयोगशाळा",    desc: "आधुनिक प्रयोगशाळेमध्ये प्रत्येक कच्च्या मालाची व तयार उत्पादनाची तपासणी" },
    { icon: ShieldCheck, emoji: "🛡️", title: "BIS मानकांनुसार",       desc: "Bureau of Indian Standards (BIS) ने निर्धारित केलेल्या सर्व मानकांचे काटेकोर पालन" },
    { icon: CheckCircle, emoji: "✅", title: "प्रवेश गुणवत्ता तपासणी", desc: "येणाऱ्या कच्च्या मालाच्या सर्व चाचण्या केल्यानंतरच उत्पादनासाठी वापरला जातो" },
    { icon: Award,       emoji: "🏅", title: "अंतिम गुणवत्ता हमी",    desc: "तयार केलेल्या उत्पादनाच्या सर्व चाचण्या करूनच वितरणासाठी उपलब्ध केला जातो" },
  ],
  en: [
    { icon: Microscope, emoji: "🔬", title: "Modern Laboratory",    desc: "Testing of raw materials and finished products in our state-of-the-art laboratory" },
    { icon: ShieldCheck, emoji: "🛡️", title: "As per BIS Standards",  desc: "Strict adherence to all quality standards defined by the Bureau of Indian Standards (BIS)" },
    { icon: CheckCircle, emoji: "✅", title: "Incoming Quality Check", desc: "Raw materials are used for production only after passing comprehensive tests" },
    { icon: Award,       emoji: "🏅", title: "Final Quality Assurance", desc: "Finished products are made available for distribution only after final testing" },
  ]
};

export default function QualityAssurance() {
  const { t } = useLanguage();
  const qualityPoints = t(qualityPointsDict);

  const farmBadges = t({
    mr: ["✅ BIS प्रमाणित", "🔬 लॅब टेस्टेड", "🌿 शाकाहारी", "🏅 खात्रीशीर"],
    en: ["✅ BIS Certified", "🔬 Lab Tested", "🌿 Pure Veg", "🏅 Assured"]
  });

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "🏅 गुणवत्ता", en: "🏅 Quality" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors">
            {t({ mr: "गुणवत्तेची ", en: "Quality " })}<span className="text-emerald-600 dark:text-emerald-500">{t({ mr: "हमी", en: "Assurance" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base transition-colors">
            {t({ mr: "आमचे प्रत्येक उत्पादन गुणवत्तेच्या कठोर मानकांमधून जाते", en: "Every product of ours passes through stringent quality standards" })}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Quality cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {qualityPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex flex-col gap-3 p-5 bg-white dark:bg-slate-950 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:shadow-emerald-900/20 rounded-2xl transition-all duration-300 group cursor-default"
                  data-testid={`card-quality-${i}`}
                >
                  <div className="w-11 h-11 bg-emerald-50 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                    <span className="group-hover:hidden">{point.emoji}</span>
                    <Icon className="w-5 h-5 text-white hidden group-hover:block" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-100 mb-1.5 transition-colors">{point.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm leading-relaxed transition-colors">{point.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Real HD cow/farm image — centered, aligned */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78 }}
            className="relative max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
              <img
                src={COW_FARM}
                alt="Dairy cattle at farm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-white font-bold text-lg mb-2.5 drop-shadow">
                  {t({ mr: "🏆 आमची गुणवत्ता वचनबद्धता", en: "🏆 Our Quality Commitment" })}
                </div>
                <div className="flex flex-wrap gap-2">
                  {farmBadges.map((b, i) => (
                    <span key={i} className="text-xs bg-white/20 border border-white/25 text-white px-3 py-1 rounded-full">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-100 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-amber-100 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
