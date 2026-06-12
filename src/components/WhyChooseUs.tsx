import { motion } from "framer-motion";
import { Wheat, ShieldCheck, TrendingUp, Users, Award, TestTube } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

/* Confirmed Pexels — close portrait of a dairy cow */
const COW_IMG = "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop";

const featuresDict = {
  mr: [
    { title: "🌾 गुणवत्तापूर्ण कच्चा माल", description: "उत्तम प्रतीचा कच्चा माल वापरून तयार केलेले पशुखाद्य", icon: Wheat },
    { title: "⚖️ संतुलित पोषण",           description: "प्रथिने, खनिजे आणि जीवनसत्त्वांनी समृद्ध पशुखाद्य", icon: ShieldCheck },
    { title: "📈 अधिक दूध उत्पादन",        description: "दूधातील फॅट व SNF वाढण्यास मदत करणारे घटक",       icon: TrendingUp },
    { title: "👨‍🌾 तांत्रिक मार्गदर्शन",     description: "शेतकऱ्यांना आहाराबद्दल योग्य मार्गदर्शन",         icon: Users },
    { title: "🏆 विश्वासार्ह ब्रँड",         description: "महाराष्ट्रातील हजारो शेतकऱ्यांचा विश्वास",        icon: Award },
    { title: "🔬 BIS मानकांनुसार",          description: "आधुनिक प्रयोगशाळेत प्रत्येक बॅचची कडक तपासणी", icon: TestTube },
  ],
  en: [
    { title: "🌾 Quality Raw Materials", description: "Feed prepared using high-grade ingredients", icon: Wheat },
    { title: "⚖️ Balanced Nutrition",           description: "Rich in protein, minerals, and vitamins", icon: ShieldCheck },
    { title: "📈 Higher Milk Production",        description: "Helps increase milk fat and SNF levels",       icon: TrendingUp },
    { title: "👨‍🌾 Technical Guidance",     description: "Professional feeding advice for farmers",         icon: Users },
    { title: "🏆 Trusted Brand",         description: "Trusted by thousands of farmers in Maharashtra",        icon: Award },
    { title: "🔬 BIS Standardized",          description: "Strict quality checks in modern laboratories", icon: TestTube },
  ]
};

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const card: any = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const features = t(featuresDict);

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "आमची वैशिष्ट्ये", en: "Our Features" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {t({ mr: "सरस्वती ॲग्रो ", en: "Why Choose " })}
            <span className="text-emerald-600">{t({ mr: "का निवडावे?", en: "Saraswati Agro?" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 items-start">
          {/* Left — real HD cow portrait */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-xs mx-auto lg:max-w-none">
              <img
                src={COW_IMG}
                alt="Healthy dairy cow"
                className="w-full h-full object-cover"
              />
              {/* Light green tint at bottom, not black */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-800/55 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-emerald-100">
                  <div className="text-emerald-700 font-bold text-base">{t({ mr: "🐄 निरोगी जनावरे", en: "🐄 Healthy Cattle" })}</div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {t({ mr: "= अधिक दूध = शेतकऱ्यांची समृद्धी", en: "= More Milk = Farmers' Prosperity" })}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blobs — soft green */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-emerald-100 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-100 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Right — feature cards */}
          <motion.div
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white border border-gray-100 shadow-sm hover:shadow-lg p-5 rounded-2xl transition-all duration-300 group cursor-default"
                data-testid={`card-feature-${i}`}
              >
                <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1.5">{feature.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

