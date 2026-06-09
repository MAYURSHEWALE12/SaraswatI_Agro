import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Award, CheckCircle } from "lucide-react";

const qualityPoints = [
  {
    icon: Microscope,
    title: "आधुनिक प्रयोगशाळा",
    desc: "आधुनिक प्रयोगशाळेमध्ये प्रत्येक कच्च्या मालाची व तयार उत्पादनाची तपासणी",
  },
  {
    icon: ShieldCheck,
    title: "BIS मानकांनुसार उत्पादन",
    desc: "Bureau of Indian Standards (BIS) ने निर्धारित केलेल्या सर्व मानकांचे काटेकोर पालन",
  },
  {
    icon: CheckCircle,
    title: "प्रवेश गुणवत्ता तपासणी",
    desc: "येणाऱ्या कच्च्या मालाच्या योग्य त्या सर्व चाचण्या केल्यानंतरच उत्पादनासाठी वापरला जातो",
  },
  {
    icon: Award,
    title: "अंतिम गुणवत्ता हमी",
    desc: "तयार केलेल्या उत्पादनाच्या सर्व चाचण्या करूनच वितरणासाठी उपलब्ध केला जातो",
  },
];

export default function QualityAssurance() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            गुणवत्तेची <span className="text-primary">हमी</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            आमचे प्रत्येक उत्पादन गुणवत्तेच्या कठोर मानकांमधून जाते
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {qualityPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex gap-5 p-6 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                data-testid={`card-quality-${index}`}
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary to-green-600 rounded-3xl p-10 text-center text-white max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Award className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">आमची गुणवत्ता वचनबद्धता</h3>
          <p className="text-green-100 text-lg max-w-2xl mx-auto leading-relaxed">
            सरस्वती अॅग्रो फीड्स शेतकऱ्यांप्रती वचनबद्ध आहे — प्रत्येक पिशवीत उत्कृष्ट दर्जाचे, संतुलित आणि पौष्टिक पशुखाद्य असेल याची हमी आम्ही देतो.
          </p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {["BIS Certified", "Lab Tested", "100% Pure Veg", "Quality Assured"].map((badge, i) => (
              <div key={i} className="bg-white/15 border border-white/30 rounded-xl py-2 px-3 text-sm font-semibold">
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
