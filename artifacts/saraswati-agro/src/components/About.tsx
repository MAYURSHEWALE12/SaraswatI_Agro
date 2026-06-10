import { motion } from "framer-motion";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";

/* HD Pexels 422218 — Holstein dairy cows grazing in green pasture */
const FARM_IMG = "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop";
/* HD Pexels 735968 — close-up dairy cow portrait */
const COW_PORTRAIT = "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop";

const pillars = [
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
];

const highlights = [
  "📍 २०१६ मध्ये राजगुरूनगर, पुणे येथे स्थापना",
  "🏷️ रत्नाई पशु आहार ब्रँडद्वारे ओळख",
  "✅ BIS मानकांनुसार उत्पादन",
  "🚛 संपूर्ण महाराष्ट्रात ५०+ वितरक",
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🌱 आमची कहाणी
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            आमच्या<span className="text-emerald-600">बद्दल</span>
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={FARM_IMG}
                alt="Dairy farm with cattle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-800/35 to-transparent" />
            </div>

            {/* Inset cow portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-5 right-2 sm:-bottom-6 sm:-right-4 w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
            >
              <img
                src={COW_PORTRAIT}
                alt="Close-up healthy dairy cow"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, type: "spring" }}
              className="absolute top-4 left-4 bg-emerald-600 text-white rounded-2xl px-4 py-3 shadow-lg"
            >
              <div className="text-3xl font-extrabold leading-none">2016</div>
              <div className="text-xs text-emerald-200 mt-0.5">पासून सेवेत</div>
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
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                महाराष्ट्रातील विश्वासार्ह पशुखाद्य उत्पादक
              </h3>
              <div className="flex flex-col gap-3 text-gray-500 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-gray-700">Saraswati Agro Feeds</strong> has been manufacturing quality cattle feed since 2016 under the brand{" "}
                  <strong className="text-emerald-600">Ratnai Pashu Aahar</strong>. Our mission is to improve animal health, milk production and farmer prosperity.
                </p>
                <p>
                  संस्थापक <strong className="text-gray-700">संदीप टाकळकर व संदीप यादव</strong> यांनी शेतकऱ्यांच्या समस्या जवळून समजून घेऊन हा उद्योग सुरू केला आणि आज आमच्या उत्पादनांनी १०,०००+ शेतकऱ्यांचा विश्वास जिंकला आहे.
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
                  className="flex items-center gap-2.5 bg-emerald-50 border border-emerald-100 rounded-xl px-3.5 py-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{h}</span>
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
                    className="flex gap-3.5 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl cursor-default transition-all duration-200"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 text-lg">
                      {pillar.emoji}
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-sm">
                        {pillar.title}
                        <span className="text-gray-400 font-normal ml-1.5 text-xs">/ {pillar.titleEn}</span>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-relaxed">{pillar.desc}</p>
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
