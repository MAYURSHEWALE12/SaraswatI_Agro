import { motion } from "framer-motion";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import ratnaiAmrutdhara from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(5)_1780997454734.jpeg";
import janayatriKaf from "@assets/WhatsApp_Image_2026-06-09_at_12.48.22_(1)_1780997454734.jpeg";

const pillars = [
  {
    icon: Target,
    title: "आमचे ध्येय",
    titleEn: "Mission",
    desc: "उत्तम पशुखाद्याद्वारे शेतकऱ्यांना सक्षम बनवणे. जनावरांचे आरोग्य सुधारणे, दूध उत्पादन वाढवणे.",
  },
  {
    icon: Eye,
    title: "आमची दृष्टी",
    titleEn: "Vision",
    desc: "महाराष्ट्रातील सर्वात विश्वासार्ह पशुखाद्य ब्रँड बनणे आणि संपूर्ण देशातील शेतकऱ्यांपर्यंत पोहोचणे.",
  },
  {
    icon: Heart,
    title: "आमची मूल्ये",
    titleEn: "Values",
    desc: "गुणवत्ता, प्रामाणिकता आणि शेतकऱ्यांप्रती वचनबद्धता. प्रत्येक निर्णयात शेतकऱ्यांचे हित सर्वोच्च.",
  },
];

const highlights = [
  "२०१६ मध्ये राजगुरूनगर, पुणे येथे स्थापना",
  "रत्नाई पशु आहार ब्रँडद्वारे ओळख",
  "BIS मानकांनुसार उत्पादन",
  "संपूर्ण महाराष्ट्रात ५०+ वितरक",
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-green-100 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            आमची कहाणी
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            आमच्या<span className="text-primary">बद्दल</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Image collage using brand assets */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={ratnaiAmrutdhara}
                alt="Ratnai & Amrutdhara product brochure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 to-transparent" />
            </div>

            {/* Inset second image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-3 sm:-right-6 w-36 h-36 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
            >
              <img src={janayatriKaf} alt="Janayatri & Kaf products" className="w-full h-full object-cover" />
            </motion.div>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute top-4 left-4 bg-primary text-white rounded-2xl px-4 py-2.5 shadow-lg"
            >
              <div className="text-3xl font-extrabold leading-none">2016</div>
              <div className="text-xs text-green-200 mt-0.5">पासून सेवेत</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 mt-8 lg:mt-0"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
                महाराष्ट्रातील विश्वासार्ह पशुखाद्य उत्पादक
              </h3>
              <div className="flex flex-col gap-3 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-foreground">Saraswati Agro Feeds</strong> has been manufacturing quality cattle feed since 2016 under the brand{" "}
                  <strong className="text-primary">Ratnai Pashu Aahar</strong>. Our mission is to improve animal health, milk production and farmer prosperity.
                </p>
                <p>
                  संस्थापक <strong className="text-foreground">संदीप टाकळकर व संदीप यादव</strong> यांनी शेतकऱ्यांच्या समस्या जवळून समजून घेऊन हा उद्योग सुरू केला आणि आज आमच्या उत्पादनांनी १०,०००+ शेतकऱ्यांचा विश्वास जिंकला आहे.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="flex items-center gap-2.5 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl px-3.5 py-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{h}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-3.5">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.3 }}
                    whileHover={{ x: 4 }}
                    className="flex gap-3.5 p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-2xl cursor-default transition-all duration-200"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">
                        {pillar.title}
                        <span className="text-muted-foreground font-normal ml-1.5 text-xs">/ {pillar.titleEn}</span>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 leading-relaxed">{pillar.desc}</p>
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
