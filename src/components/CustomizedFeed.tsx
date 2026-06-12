import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Beaker, Send, User, Phone, Beef, Milk, Wheat, Hash, CheckCircle, ChevronRight, Award, Target } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { WA_NUMBER_FULL, PEXELS_COW_GRAZING } from "@/lib/constants";

/* HD Pexels — cow grazing/eating in green field */
const BANNER_COW = PEXELS_COW_GRAZING;
const TAGLINE_COW = PEXELS_COW_GRAZING;

const featuresDict = {
  mr: [
    "जनावरांच्या गरजेनुसार विशेष फॉर्म्युलेशन",
    "उच्च दर्जाचा कच्चा माल",
    "संतुलित प्रोटीन, ऊर्जा, मिनरल्स आणि व्हिटॅमिन्स",
    "दूध उत्पादन वाढण्यास मदत",
    "फॅट आणि SNF सुधारण्यास सहाय्य",
    "जनावरांचे आरोग्य आणि प्रजनन क्षमता सुधारण्यास मदत",
    "खाद्य खर्चावर नियंत्रण",
    "डेअरी व्यवसायातील नफा वाढवण्यावर भर",
  ],
  en: [
    "Special formulation based on animal needs",
    "High quality raw materials",
    "Balanced protein, energy, minerals, and vitamins",
    "Helps increase milk production",
    "Assists in improving fat and SNF",
    "Helps improve animal health and fertility",
    "Control over feed expenses",
    "Focus on increasing dairy business profit",
  ]
};

const benefitsDict = {
  mr: [
    "अधिक दूध उत्पादन",
    "चांगली शारीरिक वाढ",
    "उत्तम पचन आणि खाद्य उपयोगक्षमता",
    "जनावरांचा ताण कमी होण्यास मदत",
    "नियमित आणि दर्जेदार उत्पादन",
    "दीर्घकालीन आर्थिक फायदा",
  ],
  en: [
    "Higher milk production",
    "Good physical growth",
    "Better digestion and feed efficiency",
    "Helps reduce animal stress",
    "Regular and quality production",
    "Long-term economic benefits",
  ]
};

const methodologyDict = {
  mr: [
    "जनावरांची माहिती संकलित करणे",
    "उपलब्ध चारा व खाद्याचे विश्लेषण",
    "पोषण गरज निश्चित करणे",
    "Customized Feed तयार करणे",
    "नियमित मार्गदर्शन व फॉलोअप",
  ],
  en: [
    "Gathering animal details",
    "Analyzing available fodder and feed",
    "Determining nutritional requirements",
    "Preparing Customized Feed",
    "Regular guidance and follow-up",
  ]
};

type FormState = {
  name: string;
  phone: string;
  animalType: string;
  animalCount: string;
  milkPerDay: string;
  currentFeed: string;
  requirement: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  animalType: "गाय",
  animalCount: "",
  milkPerDay: "",
  currentFeed: "",
  requirement: "",
};

export default function CustomizedFeed() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const { language, t } = useLanguage();

  const features = t(featuresDict);
  const benefits = t(benefitsDict);
  const methodology = t(methodologyDict);

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Send Email Notification via API
    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          formType: "customized_feed",
          name: form.name,
          phone: form.phone,
          animalType: form.animalType,
          animalCount: form.animalCount,
          milkPerDay: form.milkPerDay,
          currentFeed: form.currentFeed,
          requirement: form.requirement,
        }),
      });
    } catch (err) {
      console.error("Failed to send email notification:", err);
    }

    // 2. Open WhatsApp Message
    const msg = encodeURIComponent(
      (language === "mr" ? `नमस्कार, मला Customized Feed बद्दल माहिती हवी आहे.\n\n` : `Hello, I need information about Customized Feed.\n\n`) +
      (language === "mr" ? `👤 नाव: ` : `👤 Name: `) + `${form.name}\n` +
      (language === "mr" ? `📱 मोबाईल: ` : `📱 Mobile: `) + `${form.phone}\n` +
      (language === "mr" ? `🐄 जनावराचा प्रकार: ` : `🐄 Animal Type: `) + `${form.animalType}\n` +
      (language === "mr" ? `🔢 जनावरांची संख्या: ` : `🔢 Number of Animals: `) + `${form.animalCount}\n` +
      (language === "mr" ? `🥛 दूध उत्पादन (लिटर/दिवस): ` : `🥛 Milk Production (Liters/Day): `) + `${form.milkPerDay}\n` +
      (language === "mr" ? `🌾 सध्याचे खाद्य: ` : `🌾 Current Feed: `) + `${form.currentFeed}\n` +
      (language === "mr" ? `📝 आवश्यकता: ` : `📝 Requirement: `) + `${form.requirement}`
    );
    window.open(`https://wa.me/${WA_NUMBER_FULL}?text=${msg}`, "_blank");
    
    setSubmitted(true);
    toast.success(language === "mr" ? "चौकशी यशस्वीरित्या पाठवली!" : "Inquiry Sent Successfully!");
    
    setTimeout(() => {
      setSubmitted(false);
      setForm(initial); // Reset form
    }, 4000);
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.4, delay: i * 0.05, ease: "easeOut" },
    }),
  };

  return (
    <section id="customized-feed" className="relative overflow-hidden">

      {/* ─── Banner: HD cow eating in green field ─── */}
      <div className="relative h-80 sm:h-96 md:h-[450px] flex items-center justify-center overflow-hidden">
        <img
          src={BANNER_COW}
          alt="Healthy dairy cows eating feed in green field"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="inline-block bg-amber-500/30 border border-amber-300/40 text-amber-200 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm"
          >
            ✨ {t({ mr: "सरस्वती ॲग्रो फीड्स", en: "Saraswati Agro Feeds" })}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl mb-4"
          >
            Customized Feed Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-amber-300 text-lg sm:text-2xl font-bold leading-relaxed max-w-2xl mx-auto"
          >
            {t({
              mr: '"प्रत्येक जनावरासाठी योग्य पोषण, प्रत्येक शेतकऱ्यासाठी अधिक नफा"',
              en: '"Right Nutrition for Every Animal, More Profit for Every Farmer"',
            })}
          </motion.p>
        </div>
      </div>

      {/* ─── Body ─── */}
      <div className="bg-slate-50 py-14 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Intro Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
          >
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              {t({
                mr: "दूध उत्पादन वाढवण्यासाठी फक्त खाद्य पुरेसे नसते, तर योग्य पोषण आवश्यक असते. प्रत्येक गाई-म्हशीची दूध देण्याची क्षमता, वय, वजन, आरोग्य आणि खाद्याची गरज वेगवेगळी असते.",
                en: "To increase milk production, just feed is not enough; proper nutrition is essential. Every cow or buffalo has different milk-producing capacity, age, weight, health, and feed requirements.",
              })}
            </p>
            <p className="text-emerald-800 text-base sm:text-lg font-semibold">
              {t({
                mr: "म्हणूनच सरस्वती ॲग्रो फीड्स घेऊन आले आहे तुमच्या डेअरीसाठी खास तयार केलेले Customized Feed.",
                en: "That is why Saraswati Agro Feeds brings you Customized Feed, specially prepared for your dairy.",
              })}
            </p>
          </motion.div>

          {/* ─── Features & Form Grid ─── */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">

            {/* Left: Features Checklist (7 Columns) */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 bg-emerald-900 text-white rounded-3xl p-7 sm:p-9 border border-emerald-850 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-emerald-950" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{t({ mr: "आमची वैशिष्ट्ये", en: "Our Key Features" })}</h3>
                </div>
                <ul className="space-y-4">
                  {features.map((item, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-amber-400 mt-0.5 text-lg shrink-0">✓</span>
                      <span className="text-emerald-100 text-sm sm:text-base font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Decorative visual */}
              <div className="relative rounded-2xl overflow-hidden mt-8">
                <img
                  src="https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=800&h=240&fit=crop"
                  alt="Dairy cow close up"
                  className="w-full h-32 object-cover object-center"
                />
                <div className="absolute inset-0 bg-emerald-950/60" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <p className="text-white text-sm sm:text-base font-bold text-center italic leading-relaxed drop-shadow">
                    {t({ mr: "गुणवत्ता | विश्वास | प्रगती", en: "Quality | Trust | Progress" })}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Enquiry Form (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 bg-white rounded-3xl border border-gray-100 shadow-xl p-7 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{t({ mr: "Customized Feed चौकशी", en: "Customized Feed Inquiry" })}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{t({ mr: "तुमच्या जनावरांची माहिती द्या आणि त्यानुसार तयार केलेले Customized Feed मिळवा.", en: "Provide details about your cattle to get customized feed recommendations." })}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    required
                    type="text"
                    placeholder={t({ mr: "शेतकऱ्याचे नाव *", en: "Farmer's Name *" })}
                    value={form.name}
                    onChange={set("name")}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    required
                    type="tel"
                    placeholder={t({ mr: "मोबाईल नंबर *", en: "Mobile Number *" })}
                    value={form.phone}
                    onChange={set("phone")}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
                  />
                </div>

                {/* Animal type + count */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <Beef className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      value={form.animalType}
                      onChange={set("animalType")}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 bg-white appearance-none transition"
                    >
                      <option value="गाय">{t({ mr: "🐄 गाय", en: "🐄 Cow" })}</option>
                      <option value="म्हैस">{t({ mr: "🐃 म्हैस", en: "🐃 Buffalo" })}</option>
                      <option value="गाय व म्हैस">{t({ mr: "🐄🐃 दोन्ही", en: "🐄🐃 Both" })}</option>
                    </select>
                  </div>
                  <div className="relative">
                    <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      required
                      type="number"
                      min="1"
                      placeholder={t({ mr: "जनावरांची संख्या *", en: "Number of Cattle *" })}
                      value={form.animalCount}
                      onChange={set("animalCount")}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
                    />
                  </div>
                </div>

                {/* Milk per day */}
                <div className="relative">
                  <Milk className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t({ mr: "दूध उत्पादन (लिटर/दिवस) — उदा. ३०–४०", en: "Milk Yield (Litres/Day) — e.g. 30-40" })}
                    value={form.milkPerDay}
                    onChange={set("milkPerDay")}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
                  />
                </div>

                {/* Current feed */}
                <div className="relative">
                  <Wheat className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={t({ mr: "सध्याचे खाद्य — उदा. मका, गहू भुसा…", en: "Current Feed — e.g. maize, wheat bran..." })}
                    value={form.currentFeed}
                    onChange={set("currentFeed")}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
                  />
                </div>

                {/* Requirement */}
                <textarea
                  rows={3}
                  placeholder={t({ mr: "इतर आवश्यकता किंवा प्रश्न…", en: "Any other requirements or comments..." })}
                  value={form.requirement}
                  onChange={set("requirement")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition resize-none"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl shadow-lg shadow-green-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  {submitted ? t({ mr: "WhatsApp उघडत आहे…", en: "Opening WhatsApp..." }) : t({ mr: "WhatsApp वर चौकशी पाठवा", en: "Send Inquiry on WhatsApp" })}
                </button>

                <p className="text-center text-xs text-gray-400">
                  {t({ mr: "तुमची माहिती सुरक्षित आहे · फक्त SAF तज्ज्ञांशी शेअर होईल", en: "Your information is secure · Will only be shared with SAF experts" })}
                </p>
              </form>
            </motion.div>
          </div>

          {/* ─── Customized Feed चे फायदे & आमची कार्यपद्धती ─── */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{t({ mr: "Customized Feed चे फायदे", en: "Benefits of Customized Feed" })}</h3>
              </div>
              <ul className="space-y-4">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-gray-700 text-sm sm:text-base font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Methodology Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <ChevronRight className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{t({ mr: "आमची कार्यपद्धती", en: "Our Working Process" })}</h3>
              </div>
              <div className="space-y-4">
                {methodology.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ─── Our Goal / आमचे ध्येय ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-700/60 mb-4">
              <Target className="w-6 h-6 text-amber-300" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-amber-300 mb-3">{t({ mr: "आमचे ध्येय", en: "Our Mission" })}</h3>
            <p className="text-emerald-100 text-base sm:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
              {t({
                mr: '"शेतकऱ्यांच्या प्रगतीसाठी विज्ञानाधारित, गुणवत्तापूर्ण आणि परिणामकारक पोषण उपाय उपलब्ध करून देणे."',
                en: '"To provide science-based, high-quality, and effective nutritional solutions for the progress and prosperity of farmers."',
              })}
            </p>
          </motion.div>

          {/* ─── Bottom tagline banner ─── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src={TAGLINE_COW}
              alt="Dairy cattle herd in green pasture"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 py-10 px-6 sm:px-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-4 text-white/85 text-sm font-semibold">
                {[t({ mr: "गुणवत्ता", en: "Quality" }), t({ mr: "विश्वास", en: "Trust" }), t({ mr: "प्रगती", en: "Progress" })].map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-amber-400 font-extrabold text-xl sm:text-2xl mb-1 drop-shadow">
                {t({ mr: '"योग्य पोषण – अधिक उत्पादन – अधिक नफा"', en: '"Right Nutrition – Higher Yield – More Profit"' })}
              </p>
              <p className="text-white/70 text-sm">{t({ mr: "सरस्वती ॲग्रो फीड्स", en: "Saraswati Agro Feeds" })}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

