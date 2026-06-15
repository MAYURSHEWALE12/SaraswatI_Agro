
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";
import { WA_NUMBER_FULL } from "@/lib/constants";
import amrutdhara  from "@assets/amrutdhara.webp";
import ratnai      from "@assets/ratnai.webp";
import janayitri   from "@assets/janayitri.webp";
import caf_go_boost from "@assets/caf_go_boost.webp";

// -------------------------------------------------------------
// AMRUTDHARA FLYER TEMPLATES
// -------------------------------------------------------------
const AmrutdharaFlyerMR = (
  <div className="bg-white text-gray-800 relative w-full p-3 sm:p-4 border-[3px] border-pink-600 rounded-3xl shadow-sm">
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
      <div className="h-[2px] bg-pink-600 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-pink-600">
        अमृतधारा पशु आहार
      </h2>
      <div className="h-[2px] bg-pink-600 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
    </div>
    
    <div className="grid sm:grid-cols-2 gap-3 relative">
      <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 border-l border-dashed border-gray-300 transform -translate-x-1/2"></div>
      
      <div className="space-y-3 sm:pr-3">
        <div>
          <h3 className="text-base font-bold text-pink-600 mb-0.5">उपयोग: गाय व म्हैस</h3>
          <div className="text-[11px] sm:text-xs space-y-0.5 font-semibold text-gray-700">
            <p>गाय - ३५० ग्रॅम पर्यंत. प्रति लिटर दुधासाठी</p>
            <p>म्हैस - ४०० ते ५०० ग्रॅम पर्यंत. प्रति लिटर दुधासाठी</p>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold text-pink-600 mb-0.5">उपयुक्तता:</h3>
          <ul className="text-[11px] sm:text-xs space-y-0.5 text-gray-700 list-disc list-outside ml-3 font-semibold">
            <li>उच्च उत्पादन क्षमतेच्या गायी व म्हशींसाठी उपयुक्त</li>
            <li>हिरवा चारा असणाऱ्या दूध उत्पादकांसाठी अत्यंत फायदेशीर</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-3 sm:pl-3">
        <div>
          <h3 className="text-base font-bold text-pink-600 mb-0.5 leading-tight">शरीराच्या देखभालीसाठी<br/>वापरण्याची शिफारस</h3>
          <div className="text-[11px] sm:text-xs space-y-0.5 font-semibold text-gray-700">
            <p>गाय - १ ते १.५ किलो. प्रति दिवस प्रति प्राणी</p>
            <p>म्हैस - २ किलो. प्रति दिवस प्रति प्राणी</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-pink-600">पॅकिंग करताना एकूण वजन:</h3>
          <p className="text-lg font-black text-gray-800">५० किलो</p>
        </div>
      </div>
    </div>
    
    <div className="mt-4 max-w-2xl mx-auto">
      <h3 className="text-xs md:text-sm font-bold text-pink-600 mb-1 uppercase tracking-wide text-center">
        SPECIFICATION AS PER BIS TYPE 1
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="w-full text-[10px] sm:text-xs font-semibold bg-white">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Moisture (Max)</td>
              <td className="p-1.5 border-r border-gray-200">: 10%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Calcium (Min)</td>
              <td className="p-1.5">: 0.80%</td>
            </tr>
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Crude Protein (Min)</td>
              <td className="p-1.5 border-r border-gray-200">: 22%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Total Phosphorus (Min)</td>
              <td className="p-1.5">: 0.50%</td>
            </tr>
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Crude Fat (Min)</td>
              <td className="p-1.5 border-r border-gray-200">: 5%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Available Phosphorus (Min)</td>
              <td className="p-1.5">: 0.25%</td>
            </tr>
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Crude Fibre (Max)</td>
              <td className="p-1.5 border-r border-gray-200">: 10%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Aflotoxin B1 (Max)</td>
              <td className="p-1.5">: 20 PPB</td>
            </tr>
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Acid Insoluble Ash (Max)</td>
              <td className="p-1.5 border-r border-gray-200">: 2.50%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Urea if Present (Max)</td>
              <td className="p-1.5">: 1%</td>
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
  <div className="bg-white text-gray-800 relative w-full p-3 sm:p-4 border-[3px] border-green-700 rounded-3xl shadow-sm">
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
      <div className="h-[2px] bg-green-700 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-green-700">
        रत्नाई पशु आहार
      </h2>
      <div className="h-[2px] bg-green-700 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
    </div>
    
    <div className="grid sm:grid-cols-2 gap-3 relative">
      <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 border-l border-dashed border-gray-300 transform -translate-x-1/2"></div>
      
      <div className="space-y-3 sm:pr-3">
        <div>
          <h3 className="text-base font-bold text-green-700 mb-0.5">उपयोग: गाय व म्हैस</h3>
          <div className="text-[11px] sm:text-xs space-y-0.5 font-semibold text-gray-700">
            <p>गाय - ३०० ग्रॅम. प्रति लिटर दुधासाठी</p>
            <p>म्हैस - ४०० ग्रॅम. प्रति लिटर दुधासाठी</p>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold text-green-700 mb-0.5">उपयुक्तता:</h3>
          <ul className="text-[11px] sm:text-xs space-y-0.5 text-gray-700 list-disc list-outside ml-3 font-semibold">
            <li>उच्च उत्पादन क्षमतेच्या (२० लिटर च्या पुढच्या गायींसाठी व १० लिटर च्या पुढच्या म्हशींसाठी) प्रतिदिन</li>
            <li>हिरवा व सुका चारा असणाऱ्या दूध उत्पादकांसाठी अत्यंत फायदेशीर</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-3 sm:pl-3">
        <div>
          <h3 className="text-base font-bold text-green-700 mb-0.5 leading-tight">शरीराच्या देखभालीसाठी<br/>वापरण्याची शिफारस</h3>
          <div className="text-[11px] sm:text-xs space-y-0.5 font-semibold text-gray-700">
            <p>गाय - १ ते १.५ किलो. प्रति दिवस प्रति प्राणी</p>
            <p>म्हैस - २ किलो. प्रति दिवस प्रति प्राणी</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-green-700">पॅकिंग करताना एकूण वजन:</h3>
          <p className="text-lg font-black text-gray-800">५० किलो</p>
        </div>
      </div>
    </div>
    
    <div className="mt-4 max-w-2xl mx-auto">
      <h3 className="text-xs md:text-sm font-bold text-green-700 mb-1 uppercase tracking-wide text-center">
        SPECIFICATION AS PER BIS TYPE 1
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="w-full text-[10px] sm:text-xs font-semibold bg-white">
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Moisture (Max)</td>
              <td className="p-1.5 border-r border-gray-200">: 10%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Calcium (Min)</td>
              <td className="p-1.5">: 0.80%</td>
            </tr>
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Crude Protein (Min)</td>
              <td className="p-1.5 border-r border-gray-200">: 25%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Total Phosphorus (Min)</td>
              <td className="p-1.5">: 0.50%</td>
            </tr>
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Crude Fat (Min)</td>
              <td className="p-1.5 border-r border-gray-200">: 6%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Available Phosphorus (Min)</td>
              <td className="p-1.5">: 0.25%</td>
            </tr>
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Crude Fibre (Max)</td>
              <td className="p-1.5 border-r border-gray-200">: 10%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Aflotoxin B1 (Max)</td>
              <td className="p-1.5">: 20 PPB</td>
            </tr>
            <tr>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Acid Insoluble Ash (Max)</td>
              <td className="p-1.5 border-r border-gray-200">: 2.50%</td>
              <td className="p-1.5 border-r border-gray-200 bg-gray-50">Urea if Present (Max)</td>
              <td className="p-1.5">: 1%</td>
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
  <div className="bg-white text-gray-800 relative w-full p-3 sm:p-4 border-[3px] border-pink-600 rounded-3xl shadow-sm">
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
      <div className="h-[2px] bg-pink-600 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-pink-600">
        काफ गो-बुस्ट
      </h2>
      <div className="h-[2px] bg-pink-600 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
    </div>
    
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-lime-700">उपयोग: वासरे</h3>
        <p className="text-[10px] text-gray-400">(खालील तक्ता स्क्रोल करा)</p>
      </div>
      
      <div className="max-h-[220px] sm:max-h-[280px] overflow-y-auto mb-3 rounded-lg border border-gray-300 shadow-inner">
        <table className="w-full text-[10px] sm:text-xs text-center font-bold bg-white relative">
          <thead className="bg-lime-50 text-lime-800 sticky top-0 z-10 shadow-sm border-b border-gray-300">
            <tr>
              <th className="p-1.5 sm:p-2 border-r border-gray-200 whitespace-nowrap">आठवडा</th>
              <th className="p-1.5 sm:p-2 border-r border-gray-200 whitespace-nowrap">दूध<br/>(लिटर)</th>
              <th className="p-1.5 sm:p-2 border-r border-gray-200">सरस्वती ॲग्रो<br/>(काफ गो-बुस्ट)</th>
              <th className="p-1.5 sm:p-2 border-r border-gray-200">चारा</th>
              <th className="p-1.5 sm:p-2 whitespace-nowrap">पाणी<br/>(लिटर)</th>
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
                <td className="p-1 sm:p-1.5 border-r border-gray-200 bg-lime-50/50">{row[0]}</td>
                <td className="p-1 sm:p-1.5 border-r border-gray-200">{row[1]}</td>
                <td className="p-1 sm:p-1.5 border-r border-gray-200 bg-lime-50/50">{row[2]}</td>
                <td className="p-1 sm:p-1.5 border-r border-gray-200">{row[3]}</td>
                <td className="p-1 sm:p-1.5 bg-lime-50/50">{row[4]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 bg-gray-50 p-2 rounded-lg border border-gray-100">
        <div className="flex-1 w-full">
          <h3 className="text-sm font-bold text-lime-700 mb-0.5">उपयुक्तता:</h3>
          <p className="text-[11px] sm:text-xs text-gray-700 font-semibold leading-tight">
            वजन वाढण्यास आणि अवयवांच्या विकासास मदत होते.
          </p>
        </div>
        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
          <h3 className="text-sm font-bold text-lime-700">पॅकिंग:</h3>
          <p className="text-base sm:text-lg font-black text-gray-800">२५ किलो</p>
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
  <div className="bg-white text-gray-800 relative w-full p-4 sm:p-6 border-[3px] border-green-500 rounded-3xl shadow-sm">
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
      <div className="h-[2px] bg-green-500 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-green-800">
        जनयित्री
      </h2>
      <div className="h-[2px] bg-green-500 flex-1 max-w-[50px] sm:max-w-[100px]"></div>
    </div>
    
    <div className="max-w-lg mx-auto space-y-4">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-1.5 text-center">उपयोग: गाभण गाय आणि म्हैस</h3>
        <div className="text-[11px] sm:text-xs space-y-1 font-semibold text-gray-700 bg-green-50 p-3 rounded-xl">
          <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> गाभण कालवडीसाठी ७ व्या महिन्या पर्यंत २ किलो प्रतिदिन</p>
          <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> गायींसाठी ८ वा महिना - ३ किलो. प्रती दिन</p>
          <p className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> गायींसाठी ९ वा महिना - ४ किलो. प्रती दिन</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 bg-gray-50 p-3 rounded-xl">
          <h3 className="text-sm font-bold text-gray-800 mb-1">उपयुक्तता:</h3>
          <p className="text-[11px] sm:text-xs text-gray-700 font-semibold">सुलभ प्रसूती व वेताची भक्कम सुरुवात करण्यासाठी अतिशय उपयुक्त</p>
        </div>
        
        <div className="bg-emerald-50 p-3 rounded-xl flex flex-col justify-center items-center shrink-0 min-w-[120px]">
          <h3 className="text-sm font-bold text-gray-800 mb-0.5">एकूण वजन</h3>
          <p className="text-lg font-black text-emerald-700">५० किलो</p>
        </div>
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
      image: ratnai,
      name: t({ mr: "रत्नाई पशु आहार", en: "Ratnai Cattle Feed" }),
      nameEn: "Ratnai Pashu Aahar",
      color: "from-green-700 to-green-500",
      flyer: t({ mr: RatnaiFlyerMR, en: RatnaiFlyerEN }),
    },
    {
      image: amrutdhara,
      name: t({ mr: "अमृतधारा पशु आहार", en: "Amrutdhara Cattle Feed" }),
      nameEn: "Amrutdhara Pashu Aahar",
      color: "from-pink-600 to-pink-400",
      flyer: t({ mr: AmrutdharaFlyerMR, en: AmrutdharaFlyerEN }),
    },
    {
      image: janayitri,
      name: t({ mr: "जनयित्री", en: "Janayitri (Pregnant Cattle)" }),
      nameEn: "Janayitri (Pregnant Cattle)",
      color: "from-green-800 to-green-500",
      flyer: t({ mr: JanayitriFlyerMR, en: JanayitriFlyerEN }),
    },
    {
      image: caf_go_boost,
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
    if (windowWidth < 400) return 140;
    if (windowWidth < 640) return 180;
    if (windowWidth < 1024) return 220;
    return 260;
  }, [windowWidth]);

  const getStyle = (i: number) => {
    const diff = mod(i - active + Math.floor(total / 2), total) - Math.floor(total / 2);
    const absDiff = Math.abs(diff);
    const scale   = absDiff === 0 ? 1.05 : absDiff === 1 ? 0.8 : 0.6;
    const opacity = absDiff === 0 ? 1    : absDiff === 1 ? 0.6  : 0.25;
    const x       = diff * getXSpacing();
    const zIndex  = 10 - absDiff;
    const isActive = i === active;
    return { scale, opacity, x, zIndex, isActive };
  };

  const p = products[active];

  return (
    <section id="products" className="py-6 sm:py-8 md:py-10 bg-gray-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 transition-colors">
            {t({ mr: "आमची उत्पादने", en: "Our Products" })}
          </h2>
          <div className="h-1 w-16 bg-amber-400 mx-auto rounded-full" />
        </motion.div>

        {/* Compressed Carousel */}
        <div className="relative max-w-[100vw] sm:max-w-5xl mx-auto h-[120px] sm:h-[140px] mb-2">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-gray-50 dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-gray-50 dark:from-slate-950 to-transparent z-10 pointer-events-none transition-colors" />

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
                    className={`relative w-24 sm:w-32 aspect-square rounded-2xl overflow-hidden shadow-sm border-[3px] bg-white flex flex-col items-center justify-center p-2 ${
                      isActive
                        ? "border-green-500 shadow-md scale-100 ring-4 ring-green-100"
                        : "border-gray-200 scale-95"
                    } transition-all duration-300`}
                  >
                     <img src={prod.image} alt={prod.name} className="w-full h-full object-contain" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500 flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-500 flex items-center justify-center transition-all duration-200"
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
            className="max-w-2xl mx-auto rounded-3xl shadow-xl overflow-hidden bg-white ring-1 ring-black/5"
          >
             {p.flyer}
             
            {/* Compressed CTA */}
            <div className="bg-white border-t border-gray-100 px-3 sm:px-4 pb-3 sm:pb-4 pt-2">
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
                 className="w-full max-w-[250px] mx-auto flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white rounded-xl py-2 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-green-600/20"
               >
                 <FaWhatsapp className="w-4 h-4" />
                 {t({ mr: "चौकशी करा", en: "Inquire Now" })}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
