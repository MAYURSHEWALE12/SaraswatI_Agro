import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Network, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

/* HD Pexels 422218 — Holstein dairy cows on green pasture, wide crop */
const COW_BG = "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop";

interface StatProps {
  end: number;
  suffix: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  delay: number;
}

function AnimatedStat({ end, suffix, label, sublabel, icon: Icon, delay }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / 2200, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      whileHover={{ scale: 1.04 }}
      className="flex flex-col items-center text-center gap-3 p-5 sm:p-7 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 hover:bg-white/22 transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
        <Icon className="w-6 h-6 text-green-100" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none flex items-end gap-0.5">
        <span>{end >= 1000 ? count.toLocaleString("en-IN") : count}</span>
        <span className="text-green-300 text-2xl sm:text-3xl">{suffix}</span>
      </div>
      <div className="text-white font-semibold text-sm sm:text-base">{label}</div>
      <div className="text-green-200/70 text-xs sm:text-sm">{sublabel}</div>
    </motion.div>
  );
}

const statsDict = {
  mr: [
    { end: 10,    suffix: "+", label: "वर्षांचा अनुभव",  sublabel: "२०१६ पासून सेवेत",  icon: Clock,       delay: 0   },
    { end: 10000, suffix: "+", label: "समाधानी शेतकरी", sublabel: "महाराष्ट्रभर",      icon: Users,       delay: 0.1 },
    { end: 50,    suffix: "+", label: "वितरक नेटवर्क",  sublabel: "संपूर्ण महाराष्ट्र", icon: Network,     delay: 0.2 },
    { end: 100,   suffix: "%", label: "गुणवत्ता तपासणी", sublabel: "BIS मानकांनुसार",  icon: ShieldCheck, delay: 0.3 },
  ],
  en: [
    { end: 10,    suffix: "+", label: "Years of Experience",  sublabel: "Serving since 2016",  icon: Clock,       delay: 0   },
    { end: 10000, suffix: "+", label: "Happy Farmers", sublabel: "Across Maharashtra",      icon: Users,       delay: 0.1 },
    { end: 50,    suffix: "+", label: "Dealer Network",  sublabel: "Throughout state", icon: Network,     delay: 0.2 },
    { end: 100,   suffix: "%", label: "Quality Checks", sublabel: "BIS Standardized",  icon: ShieldCheck, delay: 0.3 },
  ]
};

export default function Stats() {
  const { t } = useLanguage();
  const stats = t(statsDict);

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Real HD cow-herd image — medium green overlay, not black */}
      <div className="absolute inset-0 z-0">
        <img
          src={COW_BG}
          alt="Dairy cattle herd"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-700/88 via-emerald-700/82 to-green-800/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            {t({ mr: "📊 आमची कामगिरी बोलते", en: "📊 Our Performance Speaks" })}
          </h2>
          <div className="h-1 w-14 bg-green-300 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

