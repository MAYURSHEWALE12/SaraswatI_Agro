import { motion } from "framer-motion";
import { Wheat, ShieldCheck, TrendingUp, Users, Award, TestTube } from "lucide-react";
import janayatriKaf from "@assets/WhatsApp_Image_2026-06-09_at_12.48.22_(1)_1780997454734.jpeg";

const features = [
  { title: "गुणवत्तापूर्ण कच्चा माल", description: "उत्तम प्रतीचा कच्चा माल वापरून तयार केलेले पशुखाद्य", icon: Wheat },
  { title: "संतुलित पोषण", description: "प्रथिने, खनिजे आणि जीवनसत्त्वांनी समृद्ध पशुखाद्य", icon: ShieldCheck },
  { title: "अधिक दूध उत्पादन", description: "दूधातील फॅट व SNF वाढण्यास मदत करणारे घटक", icon: TrendingUp },
  { title: "तांत्रिक मार्गदर्शन", description: "शेतकऱ्यांना आहाराबद्दल योग्य मार्गदर्शन", icon: Users },
  { title: "विश्वासार्ह ब्रँड", description: "महाराष्ट्रातील हजारो शेतकऱ्यांचा विश्वास", icon: Award },
  { title: "BIS मानकांनुसार", description: "आधुनिक प्रयोगशाळेत प्रत्येक बॅचची कडक तपासणी", icon: TestTube },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-green-100 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            आमची वैशिष्ट्ये
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            सरस्वती अॅग्रो फीड्स{" "}
            <span className="text-primary">का निवडावे?</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 items-center">
          {/* Brand product image (left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] max-w-xs mx-auto lg:max-w-none">
              <img
                src={janayatriKaf}
                alt="SAF cattle feed products"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-primary font-bold text-base sm:text-lg">निरोगी जनावरे</div>
                  <div className="text-muted-foreground text-xs sm:text-sm mt-0.5">
                    = अधिक दूध उत्पादन = शेतकऱ्यांची समृद्धी
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-green-200/40 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-200/30 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Features grid (right) */}
          <motion.div
            className="lg:col-span-3 grid sm:grid-cols-2 gap-4 sm:gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-card border border-border p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default"
                data-testid={`card-feature-${index}`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
