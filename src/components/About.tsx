import { motion } from "framer-motion";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { PEXELS_COW_GRAZING, PEXELS_COW_PORTRAIT } from "@/lib/constants";

/* HD Pexels 422218 — Holstein dairy cows grazing in green pasture */
const FARM_IMG = PEXELS_COW_GRAZING;
/* HD Pexels 735968 — close-up dairy cow portrait */
const COW_PORTRAIT = PEXELS_COW_PORTRAIT;

const pillarsDict = {
  mr: [
    {
      icon: Target,
      emoji: "🎯",
      title: "आमचे ध्येय",
      titleEn: "Mission",
      desc: "उत्तम पशुखाद्याद्वारे शेतकऱ्यांना सक्षम बनवणे. जनावरांचे आरोग्य सुधारणे, दूध उत्पादन वाढवणे.",
    },
    {
      icon: Eye,
      emoji: "👁️",
      title: "आमची दृष्टी",
      titleEn: "Vision",
      desc: "महाराष्ट्रातील सर्वात विश्वासार्ह पशुखाद्य ब्रँड बनणे आणि संपूर्ण देशातील शेतकऱ्यांपर्यंत पोहोचणे.",
    },
    {
      icon: Heart,
      emoji: "💚",
      title: "आमची मूल्ये",
      titleEn: "Values",
      desc: "गुणवत्ता, प्रामाणिकता आणि शेतकऱ्यांप्रती वचनबद्धता. प्रत्येक निर्णयात शेतकऱ्यांचे हित सर्वोच्च.",
    },
  ],
  en: [
    {
      icon: Target,
      emoji: "🎯",
      title: "Our Mission",
      titleEn: "Mission",
      desc: "To empower farmers through premium quality animal feed, enhancing livestock health and milk yields.",
    },
    {
      icon: Eye,
      emoji: "👁️",
      title: "Our Vision",
      titleEn: "Vision",
      desc: "To become Maharashtra's most trusted animal feed brand and reach out to farmers nationwide.",
    },
    {
      icon: Heart,
      emoji: "💚",
      title: "Our Values",
      titleEn: "Values",
      desc: "Quality, integrity, and commitment to farmers. Keeping farmers' interest at the core of every decision.",
    },
  ]
};

const highlightsDict = {
  mr: [
    "📍 २०१६ मध्ये राजगुरूनगर, पुणे येथे स्थापना",
    "🏷️ रत्नाई पशु आहार ब्रँडद्वारे ओळख",
    "✅ BIS मानकांनुसार उत्पादन",
    "🚛 संपूर्ण महाराष्ट्रात ५०+ वितरक",
  ],
  en: [
    "📍 Established in 2016 in Rajgurunagar, Pune",
    "🏷️ Recognized by Ratnai Pashu Aahar brand",
    "✅ Production as per BIS standards",
    "🚛 50+ Dealers across Maharashtra",
  ]
};

export default function About() {
  const { t } = useLanguage();
  const pillars = t(pillarsDict);
  const highlights = t(highlightsDict);

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "🌱 आमची कहाणी", en: "🌱 Our Story" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors">
            {t({ mr: "आमच्या", en: "About " })}<span className="text-emerald-600 dark:text-emerald-500">{t({ mr: "बद्दल", en: "Us" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Image collage — real HD dairy farm */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-none dark:border-4 dark:border-slate-800 aspect-[4/3]">
              <img
                src={FARM_IMG}
                alt="Dairy farm with cattle"
                className="w-full h-full object-cover"
                width="800"
                height="600"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-800/35 dark:from-emerald-950/70 to-transparent" />
            </div>

            {/* Inset cow portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-5 right-2 sm:-bottom-6 sm:-right-4 w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl dark:shadow-none"
            >
              <img
                src={COW_PORTRAIT}
                alt="Close-up healthy dairy cow"
                className="w-full h-full object-cover"
                width="300"
                height="300"
                loading="lazy"
              />
            </motion.div>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, type: "spring" }}
              className="absolute top-4 left-4 bg-emerald-600 dark:bg-emerald-700 text-white rounded-2xl px-4 py-3 shadow-lg dark:shadow-none border border-emerald-500 dark:border-emerald-600"
            >
              <div className="text-3xl font-extrabold leading-none">2016</div>
              <div className="text-xs text-emerald-200 mt-0.5">{t({ mr: "पासून सेवेत", en: "Serving Since" })}</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.78 }}
            className="flex flex-col gap-6 mt-10 lg:mt-0"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors">
                {t({ mr: "महाराष्ट्रातील विश्वासार्ह पशुखाद्य उत्पादक", en: "Trusted Cattle Feed Manufacturer in Maharashtra" })}
              </h3>
              <div className="flex flex-col gap-3 text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed transition-colors">
                <p>
                  {t({
                    mr: (
                      <>
                        <strong className="text-gray-700 dark:text-gray-200 transition-colors">सरस्वती ॲग्रो फीड्स</strong> २०१६ पासून <strong className="text-emerald-600 dark:text-emerald-400">रत्नाई पशु आहार</strong> या ब्रँड अंतर्गत उत्कृष्ट गुणवत्तेचे पशुखाद्य तयार करत आहे. जनावरांचे आरोग्य सुधारणे, दूध उत्पादनात वाढ करणे आणि शेतकऱ्यांची समृद्धी हे आमचे ध्येय आहे.
                      </>
                    ),
                    en: (
                      <>
                        <strong className="text-gray-700 dark:text-gray-200 transition-colors">Saraswati Agro Feeds</strong> has been manufacturing quality cattle feed since 2016 under the brand{" "}
                        <strong className="text-emerald-600 dark:text-emerald-400">Ratnai Pashu Aahar</strong>. Our mission is to improve animal health, milk production and farmer prosperity.
                      </>
                    )
                  })}
                </p>
                <p>
                  {t({
                    mr: "संस्थापक संदीप टाकळकर व संदीप यादव यांनी शेतकऱ्यांच्या समस्या जवळून समजून घेऊन हा उद्योग सुरू केला आणि आज आमच्या उत्पादनांनी १०,०००+ शेतकऱ्यांचा विश्वास जिंकला आहे.",
                    en: "Founders Sandeep Takalkar and Sandeep Yadav established this industry with a deep understanding of dairy farmers' struggles. Today, our products have won the trust of over 10,000+ farmers.",
                  })}
                </p>
              </div>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09 + 0.2 }}
                  className="flex items-center gap-2.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/40 rounded-xl px-3.5 py-2.5 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">{h}</span>
                </motion.div>
              ))}
            </div>

            {/* Mission/Vision/Values */}
            <div className="flex flex-col gap-3.5">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    whileHover={{ x: 4 }}
                    className="flex gap-3.5 p-4 bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-slate-800 rounded-2xl cursor-default transition-all duration-200 group hover:border-emerald-200 dark:hover:border-emerald-800/50 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/20"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl flex items-center justify-center shrink-0 text-lg group-hover:scale-110 transition-transform">
                      {pillar.emoji}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 dark:text-gray-200 text-sm transition-colors">
                        {pillar.title}
                        <span className="text-gray-400 dark:text-gray-500 font-normal ml-1.5 text-xs transition-colors">/ {pillar.titleEn}</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mt-0.5 leading-relaxed transition-colors">{pillar.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

