import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Network, ShieldCheck } from "lucide-react";
import productCatalog from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(4)_1780997454734.jpeg";

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
    const duration = 2200;
    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - progress, 4)) * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.04 }}
      className="relative flex flex-col items-center text-center gap-3 p-5 sm:p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all duration-300 cursor-default"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-400/15 border border-green-400/25 flex items-center justify-center">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-green-300" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none flex items-end gap-1">
        <span>{end >= 1000 ? count.toLocaleString("en-IN") : count}</span>
        <span className="text-green-400 text-2xl sm:text-3xl md:text-4xl">{suffix}</span>
      </div>
      <div className="text-white font-bold text-sm sm:text-base md:text-lg">{label}</div>
      <div className="text-green-200/65 text-xs sm:text-sm">{sublabel}</div>
    </motion.div>
  );
}

const stats = [
  { end: 10, suffix: "+", label: "वर्षांचा अनुभव", sublabel: "२०१६ पासून सेवेत", icon: Clock, delay: 0 },
  { end: 10000, suffix: "+", label: "समाधानी शेतकरी", sublabel: "महाराष्ट्रभर", icon: Users, delay: 0.1 },
  { end: 50, suffix: "+", label: "वितरक नेटवर्क", sublabel: "संपूर्ण महाराष्ट्र", icon: Network, delay: 0.2 },
  { end: 100, suffix: "%", label: "गुणवत्ता तपासणी", sublabel: "BIS मानकांनुसार", icon: ShieldCheck, delay: 0.3 },
];

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background: use brand catalog image with heavy green overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={productCatalog}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-emerald-900/95" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
            आमची कामगिरी बोलते
          </h2>
          <div className="h-1 w-14 bg-green-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
