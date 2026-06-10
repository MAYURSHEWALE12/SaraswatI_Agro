import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Beaker, Send, User, Phone, Beef, Milk, Wheat, Hash } from "lucide-react";

/* HD Pexels — cow grazing/eating in green field */
const BANNER_COW =
  "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=700&fit=crop";
const TAGLINE_COW =
  "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop";

const checkpoints = [
  "दूध उत्पादन वाढण्यास मदत",
  "फॅट आणि SNF सुधारण्यास सहाय्य",
  "जनावरांचे आरोग्य व प्रजनन क्षमता चांगली राहण्यास मदत",
  "खाद्याचा योग्य वापर होऊन खर्चावर नियंत्रण",
  "शेतकऱ्यांच्या गरजेनुसार प्रोटीन, ऊर्जा आणि मिनरल्सचे योग्य संतुलन",
  "तज्ज्ञांच्या मार्गदर्शनाखाली तयार केलेले खाद्य",
];

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

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `नमस्कार, मला Customized Feed बद्दल माहिती हवी आहे.\n\n` +
      `👤 नाव: ${form.name}\n` +
      `📱 मोबाईल: ${form.phone}\n` +
      `🐄 जनावराचा प्रकार: ${form.animalType}\n` +
      `🔢 जनावरांची संख्या: ${form.animalCount}\n` +
      `🥛 दूध उत्पादन (लिटर/दिवस): ${form.milkPerDay}\n` +
      `🌾 सध्याचे खाद्य: ${form.currentFeed}\n` +
      `📝 आवश्यकता: ${form.requirement}`
    );
    window.open(`https://wa.me/919552398974?text=${msg}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="customized-feed" className="relative overflow-hidden">

      {/* ─── Banner: HD cow eating in green field ─── */}
      <div className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center overflow-hidden">
        <img
          src={BANNER_COW}
          alt="Healthy dairy cows eating feed in green field"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        {/* Neutral-dark overlay so the cow image is fully visible */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="inline-block bg-amber-400/25 border border-amber-300/50 text-amber-200 text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm"
          >
            ✨ विशेष सेवा
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl mb-3"
          >
            Customized Feed Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/90 text-base sm:text-lg font-semibold leading-relaxed"
          >
            नमस्कार शेतकरी मित्रांनो! 🌾 तुमच्या जनावरांच्या गरजेनुसार खास तयार केलेले संतुलित खाद्य.
          </motion.p>
        </div>
      </div>

      {/* ─── Body ─── */}
      <div className="bg-white py-14 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              प्रत्येक गाई-म्हशीची दूध देण्याची क्षमता, वजन, वय आणि खाद्याची गरज वेगवेगळी असते.
              त्यामुळे सर्व जनावरांसाठी एकच खाद्य योग्य ठरत नाही.
            </p>
            <p className="text-gray-700 text-base sm:text-lg font-medium">
              <span className="text-emerald-700 font-bold">सरस्वती अ‍ॅग्रो फीड्स</span> घेऊन आले आहे{" "}
              <span className="text-emerald-700 font-bold">Customized Feed Solution</span> —
              तुमच्या डेअरीसाठी खास तयार केलेले संतुलित खाद्य.
            </p>
          </motion.div>

          {/* ─── Checklist + Enquiry Form ─── */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">

            {/* Left: Checklist */}
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
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Customized Feed चे फायदे</h3>
              </div>
              <ul className="space-y-3.5 mb-8">
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

              {/* Quote */}
              <div className="relative rounded-2xl overflow-hidden mt-auto">
                <img
                  src="https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&w=800&h=280&fit=crop"
                  alt="Dairy cow close up"
                  className="w-full h-36 object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <p className="text-white text-sm sm:text-base font-bold text-center italic leading-relaxed drop-shadow">
                    "योग्य पोषण, अधिक उत्पादन — सरस्वती अ‍ॅग्रो फीड्स तुमच्या सोबत!"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-xl p-7 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Customized Feed चौकशी</h3>
                  <p className="text-xs text-gray-400 mt-0.5">माहिती भरा — WhatsApp वर तज्ज्ञ मार्गदर्शन मिळवा</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    required
                    type="text"
                    placeholder="शेतकऱ्याचे नाव *"
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
                    placeholder="मोबाईल नंबर *"
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
                      <option value="गाय">🐄 गाय</option>
                      <option value="म्हैस">🐃 म्हैस</option>
                      <option value="गाय व म्हैस">🐄🐃 दोन्ही</option>
                    </select>
                  </div>
                  <div className="relative">
                    <Hash className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      required
                      type="number"
                      min="1"
                      placeholder="जनावरांची संख्या *"
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
                    placeholder="दूध उत्पादन (लिटर/दिवस) — उदा. ३०–४०"
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
                    placeholder="सध्याचे खाद्य — उदा. मका, गहू भुसा…"
                    value={form.currentFeed}
                    onChange={set("currentFeed")}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
                  />
                </div>

                {/* Requirement */}
                <textarea
                  rows={3}
                  placeholder="इतर आवश्यकता किंवा प्रश्न…"
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
                  {submitted ? "WhatsApp उघडत आहे…" : "WhatsApp वर चौकशी पाठवा"}
                </button>

                <p className="text-center text-xs text-gray-400">
                  तुमची माहिती सुरक्षित आहे · फक्त SAF तज्ज्ञांशी शेअर होईल
                </p>
              </form>
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
              src={TAGLINE_COW}
              alt="Dairy cattle herd in green pasture"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="relative z-10 py-10 px-6 sm:px-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-4 text-white/80 text-sm font-semibold">
                {["गुणवत्ता", "विश्वास", "प्रगती"].map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                    {b}
                  </span>
                ))}
              </div>
              <p className="text-amber-300 font-extrabold text-lg sm:text-xl mb-1 drop-shadow">
                "योग्य पोषण – अधिक उत्पादन – अधिक नफा"
              </p>
              <p className="text-white/70 text-sm">सरस्वती अ‍ॅग्रो फीड्स</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
