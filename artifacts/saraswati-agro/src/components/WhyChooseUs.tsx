import { motion } from "framer-motion";
import { Wheat, ShieldCheck, TrendingUp, Users, Award, TestTube } from "lucide-react";

const features = [
  {
    title: "गुणवत्तापूर्ण कच्चा माल",
    description: "उत्तम प्रतीचा कच्चा माल वापरून तयार केलेले पशुखाद्य",
    icon: Wheat,
  },
  {
    title: "संतुलित पोषण",
    description: "प्रथिने, खनिजे आणि जीवनसत्त्वांनी समृद्ध",
    icon: ShieldCheck,
  },
  {
    title: "अधिक दूध उत्पादन",
    description: "दूधातील फॅट व SNF वाढण्यास मदत",
    icon: TrendingUp,
  },
  {
    title: "तांत्रिक मार्गदर्शन",
    description: "शेतकऱ्यांना योग्य मार्गदर्शन",
    icon: Users,
  },
  {
    title: "विश्वासार्ह ब्रँड",
    description: "महाराष्ट्रातील हजारो शेतकऱ्यांचा विश्वास",
    icon: Award,
  },
  {
    title: "BIS मानकांनुसार उत्पादन",
    description: "आधुनिक प्रयोगशाळेत तपासणी",
    icon: TestTube,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            सरस्वती अॅग्रो फीड्स <span className="text-primary">का निवडावे?</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
