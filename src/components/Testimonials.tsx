import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const PHOTOS = {
  ramrao:   "https://images.pexels.com/photos/31942672/pexels-photo-31942672.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  subhash:  "https://images.pexels.com/photos/20849105/pexels-photo-20849105.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  vitthal:  "https://images.pexels.com/photos/18058148/pexels-photo-18058148.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  santosh:  "https://images.pexels.com/photos/13222257/pexels-photo-13222257.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
  prakash:  "https://images.pexels.com/photos/29041818/pexels-photo-29041818.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
};

const testimonialsDict = {
  mr: [
    { avatar: PHOTOS.ramrao,  name: "रामराव शिंदे",  location: "अहमदनगर", product: "रत्नाई पशु आहार",    stars: 5,
      text: "सरस्वती ॲग्रो फीड्सचा रत्नाई पशु आहार वापरल्यानंतर माझ्या गायींचे दूध उत्पादन २ लिटरने वाढले. दूधातील फॅट देखील खूप सुधारला." },
    { avatar: PHOTOS.subhash, name: "सुभाष पाटील",   location: "सातारा",    product: "अमृतधारा पशु आहार", stars: 5,
      text: "अमृतधारा पशु आहार वापरल्यापासून जनावरांचे आरोग्य खूपच सुधारले. जनावरे चांगली राहतात, आजार कमी झाले." },
    { avatar: PHOTOS.vitthal, name: "विठ्ठल माने",   location: "कोल्हापूर", product: "रत्नाई पशु आहार",    stars: 5,
      text: "माझ्या म्हशींसाठी रत्नाई आहार वापरतो. दूध उत्पादन १.५ लिटरने वाढले आहे. किंमत वाजवी आहे आणि गुणवत्ता खूप चांगली आहे." },
    { avatar: PHOTOS.santosh, name: "संतोष जाधव",    location: "नाशिक",     product: "जनयात्री",           stars: 5,
      text: "जनयात्री पशु आहारामुळे माझ्या गाभण गायींची प्रसूती खूप सुलभ झाली. वासरेही धडधाकट जन्मली." },
    { avatar: PHOTOS.prakash, name: "प्रकाश देशमुख", location: "पुणे",       product: "काफ गो-बूस्ट",       stars: 5,
      text: "काफ गो-बूस्ट वापरल्यानंतर माझ्या वासरांची वाढ खूप चांगली झाली. हाडे मजबूत झाली आणि वजनही लवकर वाढले." },
  ],
  en: [
    { avatar: PHOTOS.ramrao,  name: "Ramrao Shinde",  location: "Ahmednagar", product: "Ratnai Pashu Aahar",    stars: 5,
      text: "After using Saraswati Agro Feeds' Ratnai Pashu Aahar, my cows' milk production increased by 2 liters. The fat content in the milk has also improved significantly." },
    { avatar: PHOTOS.subhash, name: "Subhash Patil",   location: "Satara",    product: "Amritdhara Pashu Aahar", stars: 5,
      text: "Since using Amritdhara Pashu Aahar, the health of my livestock has improved greatly. The animals stay healthy and illnesses have reduced." },
    { avatar: PHOTOS.vitthal, name: "Vitthal Mane",   location: "Kolhapur", product: "Ratnai Pashu Aahar",    stars: 5,
      text: "I use Ratnai Aahar for my buffaloes. Milk yield has increased by 1.5 liters. The price is reasonable and the quality is excellent." },
    { avatar: PHOTOS.santosh, name: "Santosh Jadhav",    location: "Nashik",     product: "Janyatri",           stars: 5,
      text: "Janyatri cattle feed made the delivery of my pregnant cows very easy. The calves were also born healthy and strong." },
    { avatar: PHOTOS.prakash, name: "Prakash Deshmukh", location: "Pune",       product: "Calf Go-Boost",       stars: 5,
      text: "After using Calf Go-Boost, my calves grew very well. Their bones became strong and they gained weight quickly." },
  ]
};

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
  const testimonials = t(testimonialsDict);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((index: number, dir: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(dir);
    setCurrent(index);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5500);
  }, [testimonials.length]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [testimonials.length]);

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
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                className="bg-[#12683b] rounded-3xl shadow-[12px_12px_24px_rgba(0,0,0,0.35),_-12px_-12px_24px_rgba(255,255,255,0.08)] overflow-hidden"
              >

                <div className="p-7 sm:p-10 md:p-12">
                  {/* Quote icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#12683b] shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.1)] flex items-center justify-center">
                      <svg className="w-5 h-5 text-emerald-300/80" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-white/95 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-8 tracking-wide">
                    "{currentTestimonial.text}"
                  </p>

                  {/* Author section */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-2 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="relative shrink-0">
                        <img
                          src={currentTestimonial.avatar}
                          alt={currentTestimonial.name}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover shadow-[4px_4px_10px_rgba(0,0,0,0.3),_-4px_-4px_10px_rgba(255,255,255,0.1)] border-2 border-[#12683b]"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-white text-base sm:text-lg">{currentTestimonial.name}</div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-emerald-300/70 text-xs sm:text-sm">{currentTestimonial.location}, {t({ mr: "महाराष्ट्र", en: "Maharashtra" })}</span>
                        </div>
                        <div className="flex gap-0.5 mt-1.5">
                          {[...Array(currentTestimonial.stars)].map((_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.08 + 0.2 }}
                            >
                              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 bg-[#12683b] shadow-[inset_3px_3px_6px_rgba(0,0,0,0.25),_inset_-3px_-3px_6px_rgba(255,255,255,0.08)] text-emerald-100 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full self-start sm:self-auto transition-colors">
                      <span className="text-amber-400">🌿</span>
                      {currentTestimonial.product}
                    </div>
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
