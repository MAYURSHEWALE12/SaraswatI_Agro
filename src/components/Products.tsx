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

const KafGoBoostDosageTableMR = (
  <div className="overflow-x-auto mt-2 -mx-3 sm:mx-0">
    <table className="w-full text-left text-xs sm:text-sm min-w-[380px]">
      <thead className="bg-amber-100 text-amber-900 border-b border-amber-200">
        <tr>
          <th className="p-2 font-bold">आठवडा</th>
          <th className="p-2 font-bold">दूध (लिटर)</th>
          <th className="p-2 font-bold">गो-बुस्ट (ग्रॅम)</th>
          <th className="p-2 font-bold">चारा</th>
          <th className="p-2 font-bold">पाणी (लिटर)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-100/50">
        {[
          ["१", "४ ते ५", "-", "-", "५ ते ६"],
          ["२", "४ ते ५", "-", "-", "५ ते ६"],
          ["३", "३ ते ४", "५०", "३००", "५ ते ६"],
          ["४", "३", "३५० (१ माप)", "५००", "६ ते ७"],
          ["५", "२.५", "३५० (१ माप)", "५५०", "६ ते ७"],
          ["६", "२", "७०० (२ मापे)", "६००", "७ ते ८"],
          ["७", "१.५", "१०५० (३ मापे)", "७००", "८ ते ९"],
          ["८", "१", "१०५० (३ मापे)", "८००", "९ ते १०"],
          ["९", "-", "१०५० (३ मापे)", "१०००", "८ ते १०"],
          ["१०", "-", "१४०० (४ मापे)", "११००", "८ ते १०"],
          ["११", "-", "१४०० (४ मापे)", "१२००", "८ ते १०"],
          ["१२", "-", "१४०० (४ मापे)", "१४००", "११ ते १२"],
          ["१३", "-", "१७५० (५ मापे)", "१९००", "१२ ते १५"],
          ["१४ पुढे", "-", "२००० (६ मापे)", "पोटभर", "१२ ते १५"],
        ].map((row, idx) => (
          <tr key={idx} className="hover:bg-amber-100/30">
            {row.map((cell, cellIdx) => (
              <td key={cellIdx} className="p-2 whitespace-nowrap text-gray-700 font-medium">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const KafGoBoostDosageTableEN = (
  <div className="overflow-x-auto mt-2 -mx-3 sm:mx-0">
    <table className="w-full text-left text-xs sm:text-sm min-w-[380px]">
      <thead className="bg-amber-100 text-amber-900 border-b border-amber-200">
        <tr>
          <th className="p-2 font-bold">Week</th>
          <th className="p-2 font-bold">Milk (L)</th>
          <th className="p-2 font-bold">Go-Boost (g)</th>
          <th className="p-2 font-bold">Fodder</th>
          <th className="p-2 font-bold">Water (L)</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-100/50">
        {[
          ["1", "4 to 5", "-", "-", "5 to 6"],
          ["2", "4 to 5", "-", "-", "5 to 6"],
          ["3", "3 to 4", "50", "300", "5 to 6"],
          ["4", "3", "350 (1 scoop)", "500", "6 to 7"],
          ["5", "2.5", "350 (1 scoop)", "550", "6 to 7"],
          ["6", "2", "700 (2 scoops)", "600", "7 to 8"],
          ["7", "1.5", "1050 (3 scoops)", "700", "8 to 9"],
          ["8", "1", "1050 (3 scoops)", "800", "9 to 10"],
          ["9", "-", "1050 (3 scoops)", "1000", "8 to 10"],
          ["10", "-", "1400 (4 scoops)", "1100", "8 to 10"],
          ["11", "-", "1400 (4 scoops)", "1200", "8 to 10"],
          ["12", "-", "1400 (4 scoops)", "1400", "11 to 12"],
          ["13", "-", "1750 (5 scoops)", "1900", "12 to 15"],
          ["14+", "-", "2000 (6 scoops)", "Full belly", "12 to 15"],
        ].map((row, idx) => (
          <tr key={idx} className="hover:bg-amber-100/30">
            {row.map((cell, cellIdx) => (
              <td key={cellIdx} className="p-2 whitespace-nowrap text-gray-700 font-medium">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const RatnaiSpecsMR = (
  <div className="flex flex-col gap-3">
    <div className="whitespace-pre-line text-sm text-gray-700">
      • उच्च उत्पादन क्षमतेच्या (२० लिटर च्या पुढच्या गायींसाठी व १० लिटर च्या पुढच्या म्हशींसाठी) प्रतिदिन{"\n"}
      • हिरवा व सुका चारा असणाऱ्या दूध उत्पादकांसाठी अत्यंत फायदेशीर
    </div>
    
    <div className="font-bold text-emerald-700 mt-2 text-xs uppercase text-center border-b border-emerald-200 pb-1">
      Specification as per BIS Type 1
    </div>
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-[11px] sm:text-xs min-w-[340px]">
        <tbody className="divide-y divide-emerald-100/50">
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Moisture (Max)</td>
            <td className="p-1.5 text-gray-800">: 10%</td>
            <td className="p-1.5 font-medium text-gray-600">Calcium (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.80%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Protein (Min)</td>
            <td className="p-1.5 text-gray-800">: 25%</td>
            <td className="p-1.5 font-medium text-gray-600">Total Phosphorus (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.50%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Fat (Min)</td>
            <td className="p-1.5 text-gray-800">: 6%</td>
            <td className="p-1.5 font-medium text-gray-600">Available Phosphorus (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.25%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Fibre (Max)</td>
            <td className="p-1.5 text-gray-800">: 10%</td>
            <td className="p-1.5 font-medium text-gray-600">Aflotoxin B1 (Max)</td>
            <td className="p-1.5 text-gray-800">: 20 PPB</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Acid Insoluble Ash (Max)</td>
            <td className="p-1.5 text-gray-800">: 2.50%</td>
            <td className="p-1.5 font-medium text-gray-600">Urea if Present (Max)</td>
            <td className="p-1.5 text-gray-800">: 1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const RatnaiSpecsEN = (
  <div className="flex flex-col gap-3">
    <div className="whitespace-pre-line text-sm text-gray-700">
      • Highly beneficial for high yielding cattle (cows above 20L & buffaloes above 10L per day){"\n"}
      • Extremely beneficial for dairy farmers using green & dry fodder
    </div>
    
    <div className="font-bold text-emerald-700 mt-2 text-xs uppercase text-center border-b border-emerald-200 pb-1">
      Specification as per BIS Type 1
    </div>
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-[11px] sm:text-xs min-w-[340px]">
        <tbody className="divide-y divide-emerald-100/50">
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Moisture (Max)</td>
            <td className="p-1.5 text-gray-800">: 10%</td>
            <td className="p-1.5 font-medium text-gray-600">Calcium (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.80%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Protein (Min)</td>
            <td className="p-1.5 text-gray-800">: 25%</td>
            <td className="p-1.5 font-medium text-gray-600">Total Phosphorus (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.50%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Fat (Min)</td>
            <td className="p-1.5 text-gray-800">: 6%</td>
            <td className="p-1.5 font-medium text-gray-600">Available Phosphorus (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.25%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Fibre (Max)</td>
            <td className="p-1.5 text-gray-800">: 10%</td>
            <td className="p-1.5 font-medium text-gray-600">Aflotoxin B1 (Max)</td>
            <td className="p-1.5 text-gray-800">: 20 PPB</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Acid Insoluble Ash (Max)</td>
            <td className="p-1.5 text-gray-800">: 2.50%</td>
            <td className="p-1.5 font-medium text-gray-600">Urea if Present (Max)</td>
            <td className="p-1.5 text-gray-800">: 1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const AmrutdharaSpecsMR = (
  <div className="flex flex-col gap-3">
    <div className="whitespace-pre-line text-sm text-gray-700">
      • उच्च उत्पादन क्षमतेच्या गायी व म्हशींसाठी उपयुक्त{"\n"}
      • हिरवा चारा असणाऱ्या दूध उत्पादकांसाठी अत्यंत फायदेशीर
    </div>
    
    <div className="font-bold text-emerald-700 mt-2 text-xs uppercase text-center border-b border-emerald-200 pb-1">
      Specification as per BIS Type 1
    </div>
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-[11px] sm:text-xs min-w-[340px]">
        <tbody className="divide-y divide-emerald-100/50">
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Moisture (Max)</td>
            <td className="p-1.5 text-gray-800">: 10%</td>
            <td className="p-1.5 font-medium text-gray-600">Calcium (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.80%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Protein (Min)</td>
            <td className="p-1.5 text-gray-800">: 22%</td>
            <td className="p-1.5 font-medium text-gray-600">Total Phosphorus (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.50%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Fat (Min)</td>
            <td className="p-1.5 text-gray-800">: 5%</td>
            <td className="p-1.5 font-medium text-gray-600">Available Phosphorus (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.25%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Fibre (Max)</td>
            <td className="p-1.5 text-gray-800">: 10%</td>
            <td className="p-1.5 font-medium text-gray-600">Aflotoxin B1 (Max)</td>
            <td className="p-1.5 text-gray-800">: 20 PPB</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Acid Insoluble Ash (Max)</td>
            <td className="p-1.5 text-gray-800">: 2.50%</td>
            <td className="p-1.5 font-medium text-gray-600">Urea if Present (Max)</td>
            <td className="p-1.5 text-gray-800">: 1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const AmrutdharaSpecsEN = (
  <div className="flex flex-col gap-3">
    <div className="whitespace-pre-line text-sm text-gray-700">
      • Useful for high yielding cows and buffaloes{"\n"}
      • Extremely beneficial for dairy farmers using green fodder
    </div>
    
    <div className="font-bold text-emerald-700 mt-2 text-xs uppercase text-center border-b border-emerald-200 pb-1">
      Specification as per BIS Type 1
    </div>
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-[11px] sm:text-xs min-w-[340px]">
        <tbody className="divide-y divide-emerald-100/50">
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Moisture (Max)</td>
            <td className="p-1.5 text-gray-800">: 10%</td>
            <td className="p-1.5 font-medium text-gray-600">Calcium (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.80%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Protein (Min)</td>
            <td className="p-1.5 text-gray-800">: 22%</td>
            <td className="p-1.5 font-medium text-gray-600">Total Phosphorus (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.50%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Fat (Min)</td>
            <td className="p-1.5 text-gray-800">: 5%</td>
            <td className="p-1.5 font-medium text-gray-600">Available Phosphorus (Min)</td>
            <td className="p-1.5 text-gray-800">: 0.25%</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Crude Fibre (Max)</td>
            <td className="p-1.5 text-gray-800">: 10%</td>
            <td className="p-1.5 font-medium text-gray-600">Aflotoxin B1 (Max)</td>
            <td className="p-1.5 text-gray-800">: 20 PPB</td>
          </tr>
          <tr className="hover:bg-emerald-100/30">
            <td className="p-1.5 font-medium text-gray-600">Acid Insoluble Ash (Max)</td>
            <td className="p-1.5 text-gray-800">: 2.50%</td>
            <td className="p-1.5 font-medium text-gray-600">Urea if Present (Max)</td>
            <td className="p-1.5 text-gray-800">: 1%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default function Products() {
  const [active, setActive] = useState(0);
  const [dir, setDir]       = useState(1);

  const { language, t } = useLanguage();

  const baseProducts = [
    {
      image: ratnai,
      name: t({ mr: "रत्नाई पशु आहार", en: "Ratnai Cattle Feed" }),
      nameEn: "Ratnai Pashu Aahar",
      tag: t({ mr: "गाय व म्हैस", en: "Cow & Buffalo" }),
      color: "from-amber-600 to-yellow-500",
      specs: t({ mr: RatnaiSpecsMR, en: RatnaiSpecsEN }),
      dosage: t({ 
        mr: "उत्पादनासाठी:\nगाय - ३०० ग्रॅम प्रति लिटर दुधासाठी\nम्हैस - ४०० ग्रॅम प्रति लिटर दुधासाठी\n\nशरीराच्या देखभालीसाठी वापरण्याची शिफारस:\nगाय - १ ते १.५ किलो प्रति दिवस प्रति प्राणी\nम्हैस - २ किलो प्रति दिवस प्रति प्राणी", 
        en: "For Production:\nCow - 300g per liter of milk\nBuffalo - 400g per liter of milk\n\nRecommended for Body Maintenance:\nCow - 1 to 1.5 kg per day per animal\nBuffalo - 2 kg per day per animal" 
      }),
      weight: t({ mr: "५० किलो", en: "50 Kg" }),
    },
    {
      image: amrutdhara,
      name: t({ mr: "अमृतधारा पशु आहार", en: "Amrutdhara Cattle Feed" }),
      nameEn: "Amrutdhara Pashu Aahar",
      tag: t({ mr: "गाय व म्हैस", en: "Cow & Buffalo" }),
      color: "from-green-700 to-emerald-500",
      specs: t({ mr: AmrutdharaSpecsMR, en: AmrutdharaSpecsEN }),
      dosage: t({ 
        mr: "उत्पादनासाठी:\nगाय - ३५० ग्रॅम पर्यंत प्रति लिटर दुधासाठी\nम्हैस - ४०० ते ५०० ग्रॅम पर्यंत प्रति लिटर दुधासाठी\n\nशरीराच्या देखभालीसाठी वापरण्याची शिफारस:\nगाय - १ ते १.५ किलो प्रति दिवस प्रति प्राणी\nम्हैस - २ किलो प्रति दिवस प्रति प्राणी", 
        en: "For Production:\nCow - up to 350g per liter of milk\nBuffalo - 400 to 500g per liter of milk\n\nRecommended for Body Maintenance:\nCow - 1 to 1.5 kg per day per animal\nBuffalo - 2 kg per day per animal" 
      }),
      weight: t({ mr: "५० किलो", en: "50 Kg" }),
    },
    {
      image: janayitri,
      name: t({ mr: "जनयित्री", en: "Janayitri (Pregnant Cattle)" }),
      nameEn: "Janayitri (Pregnant Cattle)",
      tag: t({ mr: "गाभण गाय आणि म्हैस", en: "Pregnant Cow & Buffalo" }),
      color: "from-teal-700 to-cyan-500",
      specs: t({ mr: "सुलभ प्रसूती व वेताची भक्कम सुरुवात करण्यासाठी अतिशय उपयुक्त", en: "Highly useful for easy delivery and a strong start to lactation" }),
      dosage: t({ mr: "गाभण कालवडीसाठी ७ व्या महिन्या पर्यंत - २ किलो प्रतिदिन\nगायींसाठी ८ वा महिना - ३ किलो. प्रती दिन\nगायींसाठी ९ वा महिना - ४ किलो. प्रती दिन", en: "Heifers up to 7th month - 2kg per day\nCows 8th month - 3kg per day\nCows 9th month - 4kg per day" }),
      weight: t({ mr: "५० किलो", en: "50 Kg" }),
    },
    {
      image: caf_go_boost,
      name: t({ mr: "काफ गो-बुस्ट", en: "Kaf Go-Boost" }),
      nameEn: "Kaf Go-Boost (Calf Growth)",
      tag: t({ mr: "वासरे", en: "For Calves" }),
      color: "from-red-700 to-orange-500",
      specs: t({ mr: "वजन वाढण्यास आणि अवयवांच्या विकासास मदत होते.", en: "Helps in weight gain and development of organs." }),
      dosage: t({ mr: KafGoBoostDosageTableMR, en: KafGoBoostDosageTableEN }),
      weight: t({ mr: "२५ किलो", en: "25 Kg" }),
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

  // Single source of truth for auto-rotation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setActive((p) => mod(p + 1, total));
    }, 1300);
    return () => clearInterval(timer);
  }, [active, total]);

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
                      {t({ mr: "⚗️ उपयोगिता", en: "⚗️ Utility & Benefits" })}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 whitespace-pre-line leading-snug">{p.specs}</div>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3 border border-amber-100">
                    <div className="text-xs text-amber-600 font-bold uppercase tracking-wider mb-1">
                      {t({ mr: "💊 मात्रा", en: "💊 Dosage / Usage" })}
                    </div>
                    <div className="text-sm font-semibold text-gray-700 whitespace-pre-line leading-snug">{p.dosage}</div>
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

