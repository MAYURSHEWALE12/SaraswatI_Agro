import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Beaker } from "lucide-react";

const WA_URL =
  "https://wa.me/919552398974?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20Customized%20Feed%20बद्दल%20अधिक%20माहिती%20हवी%20आहे.%20माझ्या%20जनावरांची%20माहिती%20शेअर%20करायची%20आहे.";

const HERO_COW =
  "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop";

const HERD_COW =
  "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop";

const checkpoints = [
  "दूध उत्पादन वाढण्यास मदत",
  "फॅट आणि SNF सुधारण्यास सहाय्य",
  "जनावरांचे आरोग्य व प्रजनन क्षमता चांगली राहण्यास मदत",
  "खाद्याचा योग्य वापर होऊन खर्चावर नियंत्रण",
  "शेतकऱ्यांच्या गरजेनुसार प्रोटीन, ऊर्जा आणि मिनरल्सचे योग्य संतुलन",
  "तज्ज्ञांच्या मार्गदर्शनाखाली तयार केलेले खाद्य",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CustomizedFeed() {
  return (
    <section id="customized-feed" className="relative overflow-hidden">

      {/* ─── Banner: HD cow bg ─── */}
      <div className="relative h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={HERO_COW}
          alt="Healthy dairy cows grazing"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/78 to-emerald-900/65" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="inline-block bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm"
          >
            ✨ विशेष सेवा
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl mb-4"
          >
            Customized Feed Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald-100 text-base sm:text-lg font-semibold leading-relaxed"
          >
            नमस्कार शेतकरी मित्रांनो! 🌾
          </motion.p>
        </div>
      </div>

      {/* ─── Body ─── */}
      <div className="bg-white py-14 sm:py-18 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">

          {/* Problem + solution intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
              प्रत्येक गाई-म्हशीची दूध देण्याची क्षमता, वजन, वय आणि खाद्याची गरज वेगवेगळी असते.
              त्यामुळे सर्व जनावरांसाठी एकच खाद्य योग्य ठरत नाही.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
              <span className="text-emerald-700 font-bold">सरस्वती अ‍ॅग्रो फीड्स</span> घेऊन आले आहे{" "}
              <span className="text-emerald-700 font-bold">Customized Feed Solution</span> –
              तुमच्या जनावरांच्या गरजेनुसार खास तयार केलेले संतुलित खाद्य.
            </p>
          </motion.div>

          {/* ─── 2-col: Checklist + CTA card ─── */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-emerald-50 rounded-3xl p-7 sm:p-8 border border-emerald-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shrink-0">
                  <Beaker className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">आमच्या Customized Feed चे फायदे</h3>
              </div>

              <ul className="space-y-3.5">
                {checkpoints.map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 text-xl shrink-0">✅</span>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA card with cow image */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="flex flex-col gap-5"
            >
              {/* Quote card */}
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[200px]">
                <img
                  src="https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Dairy cow close up"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/88 to-green-800/80" />
                <div className="relative z-10 h-full flex flex-col justify-center p-7 sm:p-8">
                  <p className="text-white text-base sm:text-lg font-bold leading-relaxed mb-4 italic">
                    "तुमच्या जनावरांची माहिती द्या आणि त्यानुसार तयार केलेले Customized Feed मिळवा."
                  </p>
                  <div className="text-emerald-200 text-sm font-medium">
                    सरस्वती अ‍ॅग्रो फीड्स – गुणवत्ता, विश्वास आणि तुमच्या डेअरीच्या प्रगतीसाठी समर्पित.
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <button
                onClick={() => window.open(WA_URL, "_blank")}
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl shadow-lg shadow-green-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-6 h-6" />
                जनावरांची माहिती द्या – Customized Feed मिळवा
              </button>
            </motion.div>
          </div>

          {/* ─── Bottom tagline banner ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src={HERD_COW}
              alt="Dairy cattle herd"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/92 via-emerald-800/85 to-emerald-900/92" />

            <div className="relative z-10 py-10 px-6 sm:px-10 text-center">
              {/* Brand badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-5 text-emerald-200 text-sm font-semibold">
                {["गुणवत्ता", "विश्वास", "प्रगती"].map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                    {b}
                  </span>
                ))}
              </div>

              <p className="text-amber-300 font-extrabold text-lg sm:text-xl mb-2 drop-shadow">
                "योग्य पोषण, अधिक उत्पादन – सरस्वती अ‍ॅग्रो फीड्स तुमच्या सोबत!"
              </p>
              <p className="text-emerald-300 text-sm font-medium">
                सरस्वती अ‍ॅग्रो फीड्स
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
