
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";
import { WA_NUMBER_FULL } from "@/lib/constants";

// -------------------------------------------------------------
// AMRUTDHARA FLYER TEMPLATES
// -------------------------------------------------------------
const AmrutdharaFlyerMR = (
  <div className="bg-white text-gray-800 relative w-full p-4 sm:p-6 border-4 border-pink-600 rounded-3xl shadow-sm">
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
      <div className="h-[2px] bg-pink-600 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-pink-600">
        अमृतधारा पशु आहार
      </h2>
      <div className="h-[2px] bg-pink-600 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
    </div>
    
    <div className="grid sm:grid-cols-2 gap-4 relative">
      <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>
      
      <div className="space-y-4 sm:pr-4">
        <div>
          <h3 className="text-lg font-bold text-pink-600 mb-1">उपयोग: गाय व म्हैस</h3>
          <div className="text-xs sm:text-sm space-y-1 font-semibold text-gray-700">
            <p>गाय - ३५० ग्रॅम पर्यंत. प्रति लिटर दुधासाठी</p>
            <p>म्हैस - ४०० ते ५०० ग्रॅम पर्यंत. प्रति लिटर दुधासाठी</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-pink-600 mb-1">उपयुक्तता:</h3>
          <ul className="text-xs sm:text-sm space-y-1 text-gray-700 list-disc list-outside ml-4 font-semibold">
            <li>उच्च उत्पादन क्षमतेच्या गायी व म्हशींसाठी उपयुक्त</li>
            <li>हिरवा चारा असणाऱ्या दूध उत्पादकांसाठी अत्यंत फायदेशीर</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-4 sm:pl-4">
        <div>
          <h3 className="text-lg font-bold text-pink-600 mb-1 leading-tight">शरीराच्या देखभालीसाठी<br/>वापरण्याची शिफारस</h3>
          <div className="text-xs sm:text-sm space-y-1 font-semibold text-gray-700">
            <p>गाय - १ ते १.५ किलो. प्रति दिवस प्रति प्राणी</p>
            <p>म्हैस - २ किलो. प्रति दिवस प्रति प्राणी</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-pink-600 mb-0.5">पॅकिंग करताना एकूण वजन</h3>
          <p className="text-xl font-black text-gray-800">५० किलो</p>
        </div>
      </div>
    </div>
    
    <div className="mt-8 max-w-2xl mx-auto">
      <h3 className="text-sm md:text-base font-bold text-pink-600 mb-2 uppercase tracking-wide text-center">
        SPECIFICATION AS PER BIS TYPE 1
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="w-full text-xs sm:text-sm font-semibold bg-white">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Moisture (Max)</td>
              <td className="p-2 border-r border-gray-200">: 10%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Calcium (Min)</td>
              <td className="p-2">: 0.80%</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Crude Protein (Min)</td>
              <td className="p-2 border-r border-gray-200">: 22%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Total Phosphorus (Min)</td>
              <td className="p-2">: 0.50%</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Crude Fat (Min)</td>
              <td className="p-2 border-r border-gray-200">: 5%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Available Phosphorus (Min)</td>
              <td className="p-2">: 0.25%</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Crude Fibre (Max)</td>
              <td className="p-2 border-r border-gray-200">: 10%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Aflotoxin B1 (Max)</td>
              <td className="p-2">: 20 PPB</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Acid Insoluble Ash (Max)</td>
              <td className="p-2 border-r border-gray-200">: 2.50%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Urea if Present (Max)</td>
              <td className="p-2">: 1%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AmrutdharaFlyerEN = AmrutdharaFlyerMR; 

// -------------------------------------------------------------
// RATNAI FLYER TEMPLATES
// -------------------------------------------------------------
const RatnaiFlyerMR = (
  <div className="bg-white text-gray-800 relative w-full p-4 sm:p-6 border-4 border-green-700 rounded-3xl shadow-sm">
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
      <div className="h-[2px] bg-green-700 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-700">
        रत्नाई पशु आहार
      </h2>
      <div className="h-[2px] bg-green-700 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
    </div>
    
    <div className="grid sm:grid-cols-2 gap-4 relative">
      <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>
      
      <div className="space-y-4 sm:pr-4">
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-1">उपयोग: गाय व म्हैस</h3>
          <div className="text-xs sm:text-sm space-y-1 font-semibold text-gray-700">
            <p>गाय - ३०० ग्रॅम. प्रति लिटर दुधासाठी</p>
            <p>म्हैस - ४०० ग्रॅम. प्रति लिटर दुधासाठी</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-1">उपयुक्तता:</h3>
          <ul className="text-xs sm:text-sm space-y-1 text-gray-700 list-disc list-outside ml-4 font-semibold">
            <li>उच्च उत्पादन क्षमतेच्या (२० लिटर च्या पुढच्या गायींसाठी व १० लिटर च्या पुढच्या म्हशींसाठी) प्रतिदिन</li>
            <li>हिरवा व सुका चारा असणाऱ्या दूध उत्पादकांसाठी अत्यंत फायदेशीर</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-4 sm:pl-4">
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-1 leading-tight">शरीराच्या देखभालीसाठी<br/>वापरण्याची शिफारस</h3>
          <div className="text-xs sm:text-sm space-y-1 font-semibold text-gray-700">
            <p>गाय - १ ते १.५ किलो. प्रति दिवस प्रति प्राणी</p>
            <p>म्हैस - २ किलो. प्रति दिवस प्रति प्राणी</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-green-700 mb-0.5">पॅकिंग करताना एकूण वजन</h3>
          <p className="text-xl font-black text-gray-800">५० किलो</p>
        </div>
      </div>
    </div>
    
    <div className="mt-8 max-w-2xl mx-auto">
      <h3 className="text-sm md:text-base font-bold text-green-700 mb-2 uppercase tracking-wide text-center">
        SPECIFICATION AS PER BIS TYPE 1
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="w-full text-xs sm:text-sm font-semibold bg-white">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Moisture (Max)</td>
              <td className="p-2 border-r border-gray-200">: 10%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Calcium (Min)</td>
              <td className="p-2">: 0.80%</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Crude Protein (Min)</td>
              <td className="p-2 border-r border-gray-200">: 25%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Total Phosphorus (Min)</td>
              <td className="p-2">: 0.50%</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Crude Fat (Min)</td>
              <td className="p-2 border-r border-gray-200">: 6%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Available Phosphorus (Min)</td>
              <td className="p-2">: 0.25%</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Crude Fibre (Max)</td>
              <td className="p-2 border-r border-gray-200">: 10%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Aflotoxin B1 (Max)</td>
              <td className="p-2">: 20 PPB</td>
            </tr>
            <tr>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Acid Insoluble Ash (Max)</td>
              <td className="p-2 border-r border-gray-200">: 2.50%</td>
              <td className="p-2 border-r border-gray-200 bg-gray-50">Urea if Present (Max)</td>
              <td className="p-2">: 1%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const RatnaiFlyerEN = RatnaiFlyerMR;

// -------------------------------------------------------------
// KAF GO-BOOST FLYER TEMPLATES
// -------------------------------------------------------------
const KafGoBoostFlyerMR = (
  <div className="bg-white text-gray-800 relative w-full p-4 sm:p-6 border-4 border-pink-600 rounded-3xl shadow-sm">
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
      <div className="h-[2px] bg-pink-600 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-pink-600">
        काफ गो-बुस्ट
      </h2>
      <div className="h-[2px] bg-pink-600 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
    </div>
    
    <div className="max-w-2xl mx-auto">
      <h3 className="text-lg font-bold text-lime-700 mb-2">उपयोग: वासरे</h3>
      
      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-300">
        <table className="w-full text-xs sm:text-sm text-center font-bold bg-white">
          <thead className="bg-lime-50 text-lime-800">
            <tr>
              <th className="p-2 border-b border-r border-gray-200">आठवडा</th>
              <th className="p-2 border-b border-r border-gray-200">दूध<br/>(लिटर)</th>
              <th className="p-2 border-b border-r border-gray-200">सरस्वती ॲग्रो<br/>(काफ गो-बुस्ट)</th>
              <th className="p-2 border-b border-r border-gray-200">चारा</th>
              <th className="p-2 border-b border-gray-200">पाणी<br/>(लिटर)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {[
              ["१", "४ ते ५", "", "", "५ ते ६"],
              ["२", "४ ते ५", "", "", "५ ते ६"],
              ["३", "३ ते ४", "५०", "३००", "५ ते ६"],
              ["४", "३", "३५० (१ माप)", "५००", "६ ते ७"],
              ["५", "२.५", "३५० (१ माप)", "५५०", "६ ते ७"],
              ["६", "२", "७०० (२ मापे)", "६००", "७ ते ८"],
              ["७", "१.५", "१०५० (३ मापे)", "७००", "८ ते ९"],
              ["८", "१", "१०५० (३ मापे)", "८००", "९ ते १०"],
              ["९", "", "१०५० (३ मापे)", "१०००", "८ ते १०"],
              ["१०", "", "१४०० (४ मापे)", "११००", "८ ते १०"],
              ["११", "", "१४०० (४ मापे)", "१२०0", "८ ते १०"],
              ["१२", "", "१४०० (४ मापे)", "१४००", "११ ते १२"],
              ["१३", "", "१७५० (५ मापे)", "१९००", "१२ ते १५"],
              ["१४ च्या पुढे", "", "२००० (६ मापे)", "पोटभर", "१२ ते १५"],
            ].map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-1.5 border-r border-gray-200 bg-lime-50">{row[0]}</td>
                <td className="p-1.5 border-r border-gray-200">{row[1]}</td>
                <td className="p-1.5 border-r border-gray-200 bg-lime-50">{row[2]}</td>
                <td className="p-1.5 border-r border-gray-200">{row[3]}</td>
                <td className="p-1.5 bg-lime-50">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-bold text-lime-700 mb-1">उपयुक्तता:</h3>
          <ul className="text-xs sm:text-sm text-gray-700 list-disc list-outside ml-4 font-semibold">
            <li>वजन वाढण्यास आणि अवयवांच्या विकासास मदत होते.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-lime-700 mb-0.5">पॅकिंग करताना एकूण वजन:</h3>
          <p className="text-xl font-black text-gray-800">२५ किलो</p>
        </div>
      </div>
    </div>
  </div>
);

const KafGoBoostFlyerEN = KafGoBoostFlyerMR;

// -------------------------------------------------------------
// JANAYITRI FLYER TEMPLATES
// -------------------------------------------------------------
const JanayitriFlyerMR = (
  <div className="bg-white text-gray-800 relative w-full p-4 sm:p-6 border-4 border-green-500 rounded-3xl shadow-sm">
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
      <div className="h-[2px] bg-green-500 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-green-800">
        जनयित्री
      </h2>
      <div className="h-[2px] bg-green-500 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
    </div>
    
    <div className="max-w-lg space-y-6 pl-2 sm:pl-4">
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">उपयोग: गाभण गाय आणि म्हैस</h3>
        <div className="text-xs sm:text-sm space-y-2 font-semibold text-gray-700">
          <p>गाभण कालवडीसाठी ७ व्या महिन्या पर्यंत २ किलो प्रतिदिन</p>
          <p>गायींसाठी ८ वा महिना - ३ किलो. प्रती दिन</p>
          <p>गायींसाठी ९ वा महिना - ४ किलो. प्रती दिन</p>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">उपयुक्तता:</h3>
        <ul className="text-xs sm:text-sm text-gray-700 list-disc list-outside ml-4 font-semibold">
          <li>सुलभ प्रसूती व वेताची भक्कम सुरुवात करण्यासाठी अतिशय उपयुक्त</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-0.5">पॅकिंग करताना एकूण वजन</h3>
        <p className="text-xl font-black text-gray-800">५० किलो</p>
      </div>
    </div>
  </div>
);

const JanayitriFlyerEN = JanayitriFlyerMR;

// -------------------------------------------------------------
// PRODUCTS COMPONENT
// -------------------------------------------------------------
export default function Products() {
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState(1);

  const { language, t } = useLanguage();

  const baseProducts = [
    {
      name: t({ mr: "रत्नाई पशु आहार", en: "Ratnai Cattle Feed" }),
      nameEn: "Ratnai Pashu Aahar",
      color: "from-green-700 to-green-500",
      flyer: t({ mr: RatnaiFlyerMR, en: RatnaiFlyerEN }),
    },
    {
      name: t({ mr: "अमृतधारा पशु आहार", en: "Amrutdhara Cattle Feed" }),
      nameEn: "Amrutdhara Pashu Aahar",
      color: "from-pink-600 to-pink-400",
      flyer: t({ mr: AmrutdharaFlyerMR, en: AmrutdharaFlyerEN }),
    },
    {
      name: t({ mr: "जनयित्री", en: "Janayitri (Pregnant Cattle)" }),
      nameEn: "Janayitri (Pregnant Cattle)",
      color: "from-green-800 to-green-500",
      flyer: t({ mr: JanayitriFlyerMR, en: JanayitriFlyerEN }),
    },
    {
      name: t({ mr: "काफ गो-बुस्ट", en: "Kaf Go-Boost" }),
      nameEn: "Kaf Go-Boost (Calf Growth)",
      color: "from-pink-700 to-pink-500",
      flyer: t({ mr: KafGoBoostFlyerMR, en: KafGoBoostFlyerEN }),
    },
  ];

  const products = [...baseProducts, ...baseProducts];
  const total = products.length;

  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }

  const go = useCallback((next: number, d: number) => {
    setDir(d);
    setActive(mod(next, total));
  }, [total]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setActive((p) => mod(p + 1, total));
    }, 4000); 
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => go(active - 1, -1);
  const next = () => go(active + 1,  1);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getXSpacing = useCallback(() => {
    if (windowWidth < 400) return 180;
    if (windowWidth < 640) return 220;
    if (windowWidth < 1024) return 270;
    return 320;
  }, [windowWidth]);

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
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            {t({ mr: "आमची उत्पादने", en: "Our Products" })}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors">
            {t({ mr: "तुमच्या जनावरांसाठी ", en: "Best Feed for " })}
            <span className="text-emerald-600 dark:text-emerald-500">{t({ mr: "उत्तम आहार", en: "Your Cattle" })}</span>
          </h2>
          <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full mb-4" />
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto transition-colors">
            {t({ mr: "प्रत्येक जनावराच्या गरजेनुसार खास तयार केलेले उच्च प्रतीचे पशुखाद्य.", en: "High quality animal feed specially prepared according to the needs of each animal." })}
          </p>
        </motion.div>

        {/* Text-based Carousel Thumbnails */}
        <div className="relative max-w-[100vw] sm:max-w-6xl mx-auto h-[180px] sm:h-[220px]">
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
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className={`relative w-40 sm:w-48 aspect-video rounded-2xl overflow-hidden shadow-lg border-[3px] flex flex-col items-center justify-center p-3 bg-gradient-to-br ${prod.color} ${
                      isActive
                        ? "border-white shadow-xl scale-100"
                        : "border-white/50 scale-95"
                    } transition-all duration-300`}
                  >
                     <h3 className="text-base sm:text-lg font-black text-white text-center drop-shadow-sm">{prod.name}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-gray-100 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 shadow-md border border-gray-100 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500 hover:shadow-emerald-100 dark:hover:shadow-emerald-900/30 flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* ─── Active product exact template card ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 max-w-2xl mx-auto rounded-3xl shadow-xl overflow-hidden bg-white ring-1 ring-black/5"
          >
             {p.flyer}
             
            {/* CTA */}
            <div className="bg-white border-t border-gray-100 px-4 sm:px-6 pb-4 sm:pb-6 pt-4">
              <button
                onClick={() => {
                   const msg = [
                     `नमस्कार सरस्वती ॲग्रो फीड्स टीम!`,
                     ``,
                     `मला खालील उत्पादनाबद्दल अधिक माहिती हवी आहे:`,
                     ``,
                     `*उत्पादनाचे नाव:* ${p.name}`,
                     ``,
                     `कृपया किंमत, उपलब्धता आणि जवळच्या विक्रेत्याची माहिती द्यावी.`,
                     ``,
                     `धन्यवाद!`
                   ].join("\n");
                   window.open(`https://wa.me/${WA_NUMBER_FULL}?text=${encodeURIComponent(msg)}`, "_blank");
                 }}
                 className="w-full max-w-md mx-auto flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-xl py-2.5 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-green-600/20"
               >
                 <FaWhatsapp className="w-4 h-4" />
                 {t({ mr: "या उत्पादनाबद्दल चौकशी करा", en: "Inquire About This Product" })}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
