import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const videoTestimonials = [
  { id: 1, src: "/videos/testimonial-1.mp4" },
  { id: 2, src: "/videos/testimonial-2.mp4" }
];

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
};

function FloatingOrb({ color, size, x, y, delay }: { color: string; size: number; x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl pointer-events-none"
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%`, background: color }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = videoTestimonials;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const currentTestimonial = testimonials[current];

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-br from-emerald-800 via-green-700 to-emerald-900 dark:from-slate-900 dark:via-slate-950 dark:to-emerald-950 transition-colors duration-500">
      {/* Animated floating orbs */}
      <FloatingOrb color="rgba(52,211,153,0.4)" size={400} x={-10} y={10} delay={0} />
      <FloatingOrb color="rgba(251,191,36,0.25)" size={300} x={80} y={60} delay={1.5} />
      <FloatingOrb color="rgba(167,243,208,0.2)" size={350} x={60} y={-5} delay={3} />

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.02] pointer-events-none transition-opacity"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01] pointer-events-none transition-opacity"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 dark:bg-black/30 backdrop-blur-md text-emerald-50 border border-white/20 dark:border-white/10 text-sm font-medium px-5 py-2 rounded-full mb-5 shadow-xl transition-colors">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            {t({ mr: "शेतकऱ्यांचे मनोगत", en: "Farmers' Testimonials" })}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight drop-shadow-md">
            {t({ mr: "आमच्या उत्पादनांवर ", en: "Trusted by " })}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
              {t({ mr: "शेतकऱ्यांचा विश्वास", en: "Thousands of Farmers" })}
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-300 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Decorative quote mark behind card */}
          <div className="absolute -top-6 -left-4 text-emerald-500/10 pointer-events-none select-none text-[200px] leading-none font-serif">
            "
          </div>

          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#12683b] rounded-3xl shadow-[12px_12px_24px_rgba(0,0,0,0.35),_-12px_-12px_24px_rgba(255,255,255,0.08)] overflow-hidden"
              >

                <div className="p-3 sm:p-5">
                  <div className="rounded-2xl overflow-hidden shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.1)] bg-[#0c4728]">
                    <video 
                      src={currentTestimonial.src} 
                      controls 
                      controlsList="nodownload"
                      className="w-full max-h-[65vh] object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-8">
            <button
              onClick={() => go((current - 1 + testimonials.length) % testimonials.length, -1)}
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#12683b] text-emerald-100 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-[6px_6px_12px_rgba(0,0,0,0.3),_-6px_-6px_12px_rgba(255,255,255,0.1)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.1)]"
              aria-label={t({ mr: "मागील", en: "Previous" })}
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > current ? 1 : -1)}
                  className="group relative"
                  aria-label={t({ mr: `प्रशंसापत्र ${i + 1}`, en: `Testimonial ${i + 1}` })}
                >
                  <div
                    className={`rounded-full transition-all duration-500 ${
                      i === current
                        ? "w-8 sm:w-10 h-2.5 bg-gradient-to-r from-amber-400 to-amber-300 shadow-lg shadow-amber-400/30"
                        : "w-2.5 h-2.5 bg-white/25 group-hover:bg-white/40 group-hover:scale-125"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => go((current + 1) % testimonials.length, 1)}
              className="group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#12683b] text-emerald-100 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-[6px_6px_12px_rgba(0,0,0,0.3),_-6px_-6px_12px_rgba(255,255,255,0.1)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.1)]"
              aria-label={t({ mr: "पुढील", en: "Next" })}
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
