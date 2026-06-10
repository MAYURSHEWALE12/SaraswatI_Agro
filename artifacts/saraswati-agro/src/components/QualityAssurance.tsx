import { motion } from "framer-motion";
import { ShieldCheck, Microscope, Award, CheckCircle } from "lucide-react";

/* HD Pexels 735968 — close-up dairy cow portrait */
const COW_FARM = "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop";

const qualityPoints = [
  { icon: Microscope, emoji: "🔬", title: "आधुनिक प्रयोगशाळा",    desc: "आधुनिक प्रयोगशाळेमध्ये प्रत्येक कच्च्या मालाची व तयार उत्पादनाची तपासणी" },
  { icon: ShieldCheck, emoji: "🛡️", title: "BIS मानकांनुसार",       desc: "Bureau of Indian Standards (BIS) ने निर्धारित केलेल्या सर्व मानकांचे काटेकोर पालन" },
  { icon: CheckCircle, emoji: "✅", title: "प्रवेश गुणवत्ता तपासणी", desc: "येणाऱ्या कच्च्या मालाच्या सर्व चाचण्या केल्यानंतरच उत्पादनासाठी वापरला जातो" },
  { icon: Award,       emoji: "🏅", title: "अंतिम गुणवत्ता हमी",    desc: "तयार केलेल्या उत्पादनाच्या सर्व चाचण्या करूनच वितरणासाठी उपलब्ध केला जातो" },
];

export default function QualityAssurance() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            🏅 गुणवत्ता
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            गुणवत्तेची <span className="text-emerald-600">हमी</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 text-sm sm:text-base">
            आमचे प्रत्येक उत्पादन गुणवत्तेच्या कठोर मानकांमधून जाते
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
                  className="flex flex-col gap-3 p-5 bg-white border border-gray-100 shadow-sm hover:shadow-lg rounded-2xl transition-all duration-300 group cursor-default"
                  data-testid={`card-quality-${i}`}
                >
                  <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center text-xl group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                    <span className="group-hover:hidden">{point.emoji}</span>
                    <Icon className="w-5 h-5 text-white hidden group-hover:block" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1.5">{point.title}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{point.desc}</p>
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
                  🏆 आमची गुणवत्ता वचनबद्धता
                </div>
                <div className="flex flex-wrap gap-2">
                  {["✅ BIS Certified", "🔬 Lab Tested", "🌿 Pure Veg", "🏅 Assured"].map((b, i) => (
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
