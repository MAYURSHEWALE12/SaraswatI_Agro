import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";
import productCatalog from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(4)_1780997454734.jpeg";

const pillars = [
  {
    icon: Target,
    title: "आमचे ध्येय",
    titleEn: "Our Mission",
    desc: "उत्तम पशुखाद्याद्वारे शेतकऱ्यांना सक्षम बनवणे. जनावरांचे आरोग्य सुधारणे, दूध उत्पादन वाढवणे आणि शेतकऱ्यांचे उत्पन्न वाढवणे.",
  },
  {
    icon: Eye,
    title: "आमची दृष्टी",
    titleEn: "Our Vision",
    desc: "महाराष्ट्रातील सर्वात विश्वासार्ह पशुखाद्य ब्रँड बनणे आणि संपूर्ण देशातील शेतकऱ्यांपर्यंत पोहोचणे.",
  },
  {
    icon: Heart,
    title: "आमची मूल्ये",
    titleEn: "Our Values",
    desc: "गुणवत्ता, प्रामाणिकता आणि शेतकऱ्यांप्रती वचनबद्धता. प्रत्येक निर्णयात शेतकऱ्यांचे हित सर्वोच्च.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            आमच्या<span className="text-primary">बद्दल</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={productCatalog}
                alt="सरस्वती अॅग्रो फीड्स"
                className="w-full h-auto object-cover"
                data-testid="img-about"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-2xl font-bold">सरस्वती अॅग्रो फीड्स</div>
                <div className="text-green-100 text-sm mt-1">स्थापना: २०१६ | राजगुरूनगर, पुणे</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                महाराष्ट्रातील विश्वासार्ह पशुखाद्य उत्पादक
              </h3>
              <div className="text-muted-foreground leading-relaxed flex flex-col gap-3">
                <p>
                  <strong className="text-foreground">Saraswati Agro Feeds</strong> has been manufacturing quality cattle feed since 2016 under the brand <strong className="text-primary">Ratnai Pashu Aahar</strong>. Our mission is to improve animal health, milk production and farmer prosperity.
                </p>
                <p>
                  सरस्वती अॅग्रो फीड्स २०१६ पासून महाराष्ट्रातील शेतकऱ्यांसाठी संतुलित व पौष्टिक पशुखाद्य तयार करत आहे. संस्थापक <strong className="text-foreground">संदीप टाकळकर व संदीप यादव</strong> यांनी शेतकऱ्यांच्या समस्या जवळून समजून घेऊन हा उद्योग सुरू केला.
                </p>
                <p>
                  आज आमच्या उत्पादनांनी महाराष्ट्रातील १०,०००+ शेतकऱ्यांचा विश्वास जिंकला आहे आणि ५०+ वितरकांद्वारे संपूर्ण राज्यात आमचे उत्पादन पोहोचत आहे.
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex gap-4 p-5 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-2xl"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">
                        {pillar.title}
                        <span className="text-muted-foreground text-sm font-normal ml-2">/ {pillar.titleEn}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{pillar.desc}</p>
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
