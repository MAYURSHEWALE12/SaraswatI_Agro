import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircle2, Circle, Beaker, Target } from "lucide-react";

const WA_URL =
  "https://wa.me/919552398974?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20Customized%20Feed%20बद्दल%20अधिक%20माहिती%20हवी%20आहे.";

const HERO_COW =
  "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop";

const features = [
  "जनावरांच्या गरजेनुसार विशेष फॉर्म्युलेशन",
  "उच्च दर्जाचा कच्चा माल",
  "संतुलित प्रोटीन, ऊर्जा, मिनरल्स आणि व्हिटॅमिन्स",
  "दूध उत्पादन वाढण्यास मदत",
  "फॅट आणि SNF सुधारण्यास सहाय्य",
  "जनावरांचे आरोग्य आणि प्रजनन क्षमता सुधारण्यास मदत",
  "खाद्य खर्चावर नियंत्रण",
  "डेअरी व्यवसायातील नफा वाढवण्यावर भर",
];

const benefits = [
  { icon: "🥛", text: "अधिक दूध उत्पादन" },
  { icon: "💪", text: "चांगली शारीरिक वाढ" },
  { icon: "🌿", text: "उत्तम पचन आणि खाद्य उपयोगक्षमता" },
  { icon: "😌", text: "जनावरांचा ताण कमी होण्यास मदत" },
  { icon: "📦", text: "नियमित आणि दर्जेदार उत्पादन" },
  { icon: "💰", text: "दीर्घकालीन आर्थिक फायदा" },
];

const steps = [
  { num: "01", label: "जनावरांची माहिती संकलित करणे", icon: "🐄" },
  { num: "02", label: "उपलब्ध चारा व खाद्याचे विश्लेषण", icon: "🔬" },
  { num: "03", label: "पोषण गरज निश्चित करणे", icon: "⚗️" },
  { num: "04", label: "Customized Feed तयार करणे", icon: "🏭" },
  { num: "05", label: "नियमित मार्गदर्शन व फॉलोअप", icon: "📋" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CustomizedFeed() {
  return (
    <section id="customized-feed" className="relative overflow-hidden">

      {/* ─── Banner with HD cow bg ─── */}
      <div className="relative h-64 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={HERO_COW}
          alt="Healthy dairy cows"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/88 via-emerald-800/75 to-emerald-900/60" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-amber-400/20 border border-amber-300/40 text-amber-200 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm"
          >
            ✨ विशेष सेवा
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-3"
          >
            Customized Feed Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-emerald-100 text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed"
          >
            "प्रत्येक जनावरासाठी योग्य पोषण, प्रत्येक शेतकऱ्यासाठी अधिक नफा"
          </motion.p>
        </div>
      </div>

      {/* ─── Main content ─── */}
      <div className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Intro paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              दूध उत्पादन वाढवण्यासाठी फक्त खाद्य पुरेसे नसते, तर योग्य पोषण आवश्यक असते.
              प्रत्येक गाई-म्हशीची दूध देण्याची क्षमता, वय, वजन, आरोग्य आणि खाद्याची गरज वेगवेगळी असते.
              म्हणूनच <span className="font-bold text-emerald-700">सरस्वती अ‍ॅग्रो फीड्स</span> घेऊन आले आहे
              तुमच्या डेअरीसाठी खास तयार केलेले Customized Feed.
            </p>
          </motion.div>

          {/* ─── Features + Benefits grid ─── */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-emerald-50 rounded-3xl p-7 sm:p-8 border border-emerald-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">आमची वैशिष्ट्ये</h3>
              </div>
              <ul className="space-y-3">
                {features.map((f, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{f}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-amber-50 rounded-3xl p-7 sm:p-8 border border-amber-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Customized Feed चे फायदे</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 bg-white rounded-2xl p-4 border border-amber-100 shadow-sm"
                  >
                    <span className="text-2xl shrink-0">{b.icon}</span>
                    <span className="text-gray-700 text-sm font-semibold leading-snug">{b.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── Process Steps ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <div className="text-center mb-8">
              <div className="flex items-center gap-2 justify-center mb-2">
                <Beaker className="w-5 h-5 text-emerald-600" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">आमची कार्यपद्धती</h3>
              </div>
              <div className="h-1 w-16 bg-amber-400 rounded-full mx-auto" />
            </div>

            <div className="relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-emerald-200 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 relative z-10">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-2 border-emerald-200 shadow-lg flex flex-col items-center justify-center mb-3 hover:border-emerald-500 hover:shadow-emerald-100 transition-all duration-300 hover:-translate-y-1">
                      <span className="text-2xl sm:text-3xl">{step.icon}</span>
                    </div>
                    <div className="text-xs font-extrabold text-emerald-500 tracking-widest mb-1">{step.num}</div>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium leading-snug max-w-[130px]">{step.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ─── Goal + CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
              alt="Dairy cattle herd"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-green-900/80" />

            <div className="relative z-10 py-12 px-6 sm:px-10 md:px-14 text-center">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 mb-6 max-w-2xl">
                <p className="text-white text-base sm:text-lg font-medium leading-relaxed italic">
                  "शेतकऱ्यांच्या प्रगतीसाठी विज्ञानाधारित, गुणवत्तापूर्ण आणि परिणामकारक पोषण उपाय उपलब्ध करून देणे."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 mb-8 text-emerald-200 text-sm font-semibold">
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>गुणवत्ता</span>
                <span className="hidden sm:block text-white/30">|</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>विश्वास</span>
                <span className="hidden sm:block text-white/30">|</span>
                <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>प्रगती</span>
              </div>

              <p className="text-amber-300 font-bold text-base sm:text-lg mb-8">
                "योग्य पोषण – अधिक उत्पादन – अधिक नफा"
              </p>

              <button
                onClick={() => window.open(WA_URL, "_blank")}
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xl shadow-green-900/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-green-900/60"
              >
                <FaWhatsapp className="w-6 h-6" />
                Customized Feed बद्दल चौकशी करा
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
