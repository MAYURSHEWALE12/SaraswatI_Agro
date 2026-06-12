import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const testimonialsDict = {
  mr: [
    { name: "रामराव शिंदे",  location: "अहमदनगर", initials: "रा", product: "रत्नाई पशु आहार",    stars: 5,
      text: "सरस्वती ॲग्रो फीड्सचा रत्नाई पशु आहार वापरल्यानंतर माझ्या गायींचे दूध उत्पादन २ लिटरने वाढले. दूधातील फॅट देखील खूप सुधारला." },
    { name: "सुभाष पाटील",   location: "सातारा",    initials: "सु", product: "अमृतधारा पशु आहार", stars: 5,
      text: "अमृतधारा पशु आहार वापरल्यापासून जनावरांचे आरोग्य खूपच सुधारले. जनावरे चांगली राहतात, आजार कमी झाले." },
    { name: "विठ्ठल माने",   location: "कोल्हापूर", initials: "वि", product: "रत्नाई पशु आहार",    stars: 5,
      text: "माझ्या म्हशींसाठी रत्नाई आहार वापरतो. दूध उत्पादन १.५ लिटरने वाढले आहे. किंमत वाजवी आहे आणि गुणवत्ता खूप चांगली आहे." },
    { name: "संतोष जाधव",    location: "नाशिक",     initials: "स",  product: "जनयात्री",           stars: 5,
      text: "जनयात्री पशु आहारामुळे माझ्या गाभण गायींची प्रसूती खूप सुलभ झाली. वासरेही धडधाकट जन्मली." },
    { name: "प्रकाश देशमुख", location: "पुणे",       initials: "प्र", product: "काफ गो-बूस्ट",       stars: 5,
      text: "काफ गो-बूस्ट वापरल्यानंतर माझ्या वासरांची वाढ खूप चांगली झाली. हाडे मजबूत झाली आणि वजनही लवकर वाढले." },
  ],
  en: [
    { name: "Ramrao Shinde",  location: "Ahmednagar", initials: "RS", product: "Ratnai Pashu Aahar",    stars: 5,
      text: "After using Saraswati Agro Feeds' Ratnai Pashu Aahar, my cows' milk production increased by 2 liters. The fat content in the milk has also improved significantly." },
    { name: "Subhash Patil",   location: "Satara",    initials: "SP", product: "Amritdhara Pashu Aahar", stars: 5,
      text: "Since using Amritdhara Pashu Aahar, the health of my livestock has improved greatly. The animals stay healthy and illnesses have reduced." },
    { name: "Vitthal Mane",   location: "Kolhapur", initials: "VM", product: "Ratnai Pashu Aahar",    stars: 5,
      text: "I use Ratnai Aahar for my buffaloes. Milk yield has increased by 1.5 liters. The price is reasonable and the quality is excellent." },
    { name: "Santosh Jadhav",    location: "Nashik",     initials: "SJ",  product: "Janyatri",           stars: 5,
      text: "Janyatri cattle feed made the delivery of my pregnant cows very easy. The calves were also born healthy and strong." },
    { name: "Prakash Deshmukh", location: "Pune",       initials: "PD", product: "Calf Go-Boost",       stars: 5,
      text: "After using Calf Go-Boost, my calves grew very well. Their bones became strong and they gained weight quickly." },
  ]
};

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
    /* Medium forest-green section — NOT near-black */
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-gradient-to-br from-emerald-700 via-green-700 to-emerald-800">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block bg-white/15 border border-white/25 text-emerald-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "💬 शेतकऱ्यांचे अनुभव", en: "💬 Farmers' Testimonials" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t({ mr: "शेतकऱ्यांचे ", en: "Farmers' " })}<span className="text-emerald-200">{t({ mr: "अनुभव", en: "Experiences" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 65 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -65 }}
                transition={{ duration: 0.36, ease: "easeInOut" }}
                className="bg-white/12 backdrop-blur-md border border-white/20 rounded-3xl p-7 sm:p-10 md:p-12 shadow-xl"
              >
                <Quote className="w-10 h-10 text-emerald-300/40 mb-5" />
                <p className="text-white/90 text-base sm:text-lg leading-relaxed italic mb-8">
                  "{currentTestimonial.text}"
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-emerald-300 to-green-500 flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-lg shrink-0">
                      {currentTestimonial.initials}
                    </div>
                    <div>
                      <div className="font-bold text-white text-base sm:text-lg">{currentTestimonial.name}</div>
                      <div className="text-emerald-200 text-xs sm:text-sm">📍 {currentTestimonial.location}, {t({ mr: "महाराष्ट्र", en: "Maharashtra" })}</div>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(currentTestimonial.stars)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="inline-block bg-white/15 border border-white/25 text-emerald-100 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full self-start sm:self-auto">
                    🌿 {currentTestimonial.product}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-7">
            <button
              onClick={() => go((current - 1 + testimonials.length) % testimonials.length, -1)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/25 hover:border-emerald-200 hover:bg-white/12 text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > current ? 1 : -1)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-7 sm:w-8 bg-amber-400" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go((current + 1) % testimonials.length, 1)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/25 hover:border-emerald-200 hover:bg-white/12 text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
