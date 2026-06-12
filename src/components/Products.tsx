import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "@/hooks/useLanguage";
import { WA_NUMBER_FULL } from "@/lib/constants";

import ratnai      from "@assets/ratnai.webp";
import amrutdhara  from "@assets/amrutdhara.webp";
import janayitri   from "@assets/janayitri.webp";
import caf_go_boost from "@assets/caf_go_boost.webp";

export default function Products() {
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState(1);
  const timerRef            = useRef<ReturnType<typeof setInterval> | null>(null);
  const { language, t } = useLanguage();

  const products = [
    {
      image: ratnai,
      name: t({ mr: "रत्नाई पशु आहार", en: "Ratnai Cattle Feed" }),
      nameEn: "Ratnai Pashu Aahar",
      tag: t({ mr: "उच्च दूध उत्पादन", en: "High Milk Yield" }),
      color: "from-amber-600 to-yellow-500",
      specs: t({ mr: "प्रथिने २५% • फॅट ६% • BIS Type 1", en: "Protein 25% • Fat 6% • BIS Type 1" }),
      dosage: t({ mr: "गाय: ३०० ग्रॅम / लिटर दुधासाठी | म्हैस: ४०० ग्रॅम / लिटर दुधासाठी", en: "Cow: 300g / Litre of milk | Buffalo: 400g / Litre of milk" }),
      weight: t({ mr: "५० किलो", en: "50 Kg" }),
    },
    {
      image: amrutdhara,
      name: t({ mr: "अमृतधारा पशु आहार", en: "Amrutdhara Cattle Feed" }),
      nameEn: "Amrutdhara Pashu Aahar",
      tag: t({ mr: "संतुलित आहार", en: "Balanced Feed" }),
      color: "from-green-700 to-emerald-500",
      specs: t({ mr: "प्रथिने २२% • फॅट ५% • BIS Type 1", en: "Protein 22% • Fat 5% • BIS Type 1" }),
      dosage: t({ mr: "गाय: ३५० ग्रॅम पर्यंत / लिटर दुधासाठी | म्हैस: ४०० ते ५०० ग्रॅम पर्यंत / लिटर दुधासाठी", en: "Cow: up to 350g / Litre | Buffalo: 400g to 500g / Litre" }),
      weight: t({ mr: "५० किलो", en: "50 Kg" }),
    },
    {
      image: janayitri,
      name: t({ mr: "जनयित्री", en: "Janayitri (Heifer Feed)" }),
      nameEn: "Janayitri (Pregnant Cattle)",
      tag: t({ mr: "गाभण जनावरांसाठी", en: "For Pregnant Animals" }),
      color: "from-teal-700 to-cyan-500",
      specs: t({ mr: "विशेष फॉर्म्युला • सुलभ प्रसूती", en: "Special Formula • Easy Delivery Support" }),
      dosage: t({ mr: "७ वा महिना: २ किलो | ८ वा महिना: ३ किलो | ९ वा महिना: ४ किलो", en: "7th Month: 2 Kg | 8th Month: 3 Kg | 9th Month: 4 Kg" }),
      weight: t({ mr: "५० किलो", en: "50 Kg" }),
    },
    {
      image: caf_go_boost,
      name: t({ mr: "काफ गो-बूस्ट", en: "Kaf Go-Boost" }),
      nameEn: "Kaf Go-Boost (Calf Growth)",
      tag: t({ mr: "वासरांसाठी", en: "For Calves" }),
      color: "from-red-700 to-orange-500",
      specs: t({ mr: "वजन वाढ • अवयव विकास • मजबूत हाडे", en: "Weight Gain • Organ Development • Strong Bones" }),
      dosage: t({ mr: "वय आणि वजनानुसार (तक्त्यानुसार)", en: "According to age and weight chart" }),
      weight: t({ mr: "२५ किलो", en: "25 Kg" }),
    },
  ];

  const total = products.length;

  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  const go = useCallback((next: number, d: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDir(d);
    setActive(mod(next, total));
    timerRef.current = setInterval(() => {
      setDir(1);
      setActive((p) => mod(p + 1, total));
    }, 5000);
  }, [total]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDir(1);
      setActive((p) => mod(p + 1, total));
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [total]);

  const prev = () => go(active - 1, -1);
  const next = () => go(active + 1,  1);

  const getXSpacing = () => {
    if (typeof window === "undefined") return 280;
    if (window.innerWidth < 400) return 180;
    if (window.innerWidth < 640) return 220;
    if (window.innerWidth < 1024) return 270;
    return 320;
  };

  const getStyle = (i: number) => {
    const diff = mod(i - active + Math.floor(total / 2), total) - Math.floor(total / 2);
    const absDiff = Math.abs(diff);
    const scale   = absDiff === 0 ? 1.12 : absDiff === 1 ? 0.82 : 0.6;
    const opacity = absDiff === 0 ? 1    : absDiff === 1 ? 0.6  : 0.25;
    const x       = diff * getXSpacing();
    const zIndex  = 10 - absDiff;
    const isActive = i === active;
    return { scale, opacity, x, zIndex, isActive };
  };

  const p = products[active];

  return (
    <section id="products" className="py-16 sm:py-20 md:py-28 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "आमची उत्पादने", en: "Our Products" })}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors">
            {t({ mr: "तुमच्या जनावरांसाठी ", en: "Best Feed for " })}
            <span className="text-emerald-600 dark:text-emerald-500">{t({ mr: "उत्तम आहार", en: "Your Cattle" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto transition-colors">
            {t({ mr: "प्रत्येक जनावराच्या गरजेनुसार खास तयार केलेले उच्च प्रतीचे पशुखाद्य.", en: "High quality animal feed specially prepared according to the needs of each animal." })}
          </p>
        </motion.div>

        {/* ─── Modern Carousel ─── */}
        <div className="relative max-w-[100vw] sm:max-w-6xl mx-auto h-[320px] sm:h-[400px]">
          {/* Fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors" />

          <div className="relative w-full h-full flex items-center justify-center">
            {products.map((prod, i) => {
              const { x, scale, zIndex, opacity, isActive } = getStyle(i);
              return (
                <motion.div
                  key={i}
                  animate={{ x, scale, zIndex, opacity }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  className="absolute cursor-pointer"
                  style={{ zIndex }}
                  whileHover={{ scale: 1.08 }}
                >
                  <div
                    className={`relative w-48 sm:w-60 md:w-72 rounded-3xl overflow-hidden shadow-2xl border-2 ${
                      isActive
                        ? "border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] shadow-2xl scale-100"
                        : "border-white/60 dark:border-white/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-200 dark:hover:border-emerald-500/50 scale-95"
                    } transition-all duration-300`}
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full aspect-square object-contain bg-white p-3 transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      width="400"
                      height="400"
                    />
                    {/* Shine on active */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.25, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-100 dark:via-emerald-500/20 to-transparent pointer-events-none"
                      />
                    )}
                  </div>
                  {/* Active label below card */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center mt-3"
                    >
                      <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                        {prod.tag}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Nav buttons */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-100 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-gray-100 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > active ? 1 : -1)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-emerald-500" : "w-2 bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 dark:hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ─── Active product detail card ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden transition-colors"
          >
            {/* Coloured top bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${p.color}`} />

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* Mini thumbnail */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-gray-100 dark:border-slate-800 shadow-md bg-white shrink-0 flex items-center justify-center p-2">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain" width="200" height="200" loading="lazy" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-bold text-white px-3 py-1 rounded-full bg-gradient-to-r ${p.color}`}>
                    {p.tag}
                  </span>
                  <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-full">
                    📦 {p.weight}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800">{p.name}</h3>
                <div className="text-xs text-gray-400 mb-3">{p.nameEn}</div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-100">
                    <div className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-1">
                      {t({ mr: "⚗️ पोषण तपशील", en: "⚗️ Nutrition Specs" })}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">{p.specs}</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                    <div className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-1">
                      {t({ mr: "💊 मात्रा", en: "💊 Dosage / Usage" })}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">{p.dosage}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              <button
                onClick={() => {
                   const msg = [
                     `नमस्कार सरस्वती ॲग्रो फीड्स टीम!`,
                     ``,
                     `मला खालील उत्पादनाबद्दल अधिक माहिती हवी आहे:`,
                     ``,
                     `*उत्पादनाचे नाव:* ${p.name}`,
                     `*प्रकार:* ${p.tag}`,
                     `*वजन:* ${p.weight}`,
                     ``,
                     `*पोषण तपशील:*`,
                     `${p.specs}`,
                     ``,
                     `*मात्रा / वापर:*`,
                     `${p.dosage}`,
                     ``,
                     `कृपया किंमत, उपलब्धता आणि जवळच्या विक्रेत्याची माहिती द्यावी.`,
                     ``,
                     `धन्यवाद!`
                   ].join("\n");
                   window.open(`https://wa.me/${WA_NUMBER_FULL}?text=${encodeURIComponent(msg)}`, "_blank");
                 }}
                 className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl py-3.5 font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-emerald-600/20"
               >
                 <FaWhatsapp className="w-5 h-5" />
                 {t({ mr: "या उत्पादनाबद्दल चौकशी करा", en: "Inquire About This Product" })}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

