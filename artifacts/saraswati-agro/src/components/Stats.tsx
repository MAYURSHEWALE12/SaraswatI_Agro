import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
}

function AnimatedStat({ end, suffix, label, duration = 2 }: StatProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smoother animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 flex items-center">
        <span>{count.toLocaleString('mr-IN')}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-green-100 font-medium text-lg md:text-xl">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          <AnimatedStat end={10} suffix="+" label="वर्षांचा अनुभव" />
          <AnimatedStat end={10000} suffix="+" label="समाधानी शेतकरी" />
          <AnimatedStat end={50} suffix="+" label="वितरक नेटवर्क" />
          <AnimatedStat end={100} suffix="%" label="गुणवत्ता तपासणी" />
        </div>
      </div>
    </section>
  );
}
