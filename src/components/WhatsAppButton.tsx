import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X, User, Phone, MessageSquare, HelpCircle } from "lucide-react";
import safLogo from "@assets/image_1781081387145.webp";
import animatedCow from "@assets/animated_cow.webp";
import { useLanguage } from "@/hooks/useLanguage";
import { WA_NUMBER_FULL } from "@/lib/constants";

const WA_NUMBER = WA_NUMBER_FULL;

function LeftTooltip({ text, visible }: { text: string; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 10, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 10, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs font-semibold px-3.5 py-2.5 rounded-xl shadow-lg border border-gray-100 pointer-events-none"
          style={{ maxWidth: 220, whiteSpace: "normal" }}
        >
          {text}
          <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45 block" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function WhatsAppButton() {
  const [waHovered, setWaHovered] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language, t } = useLanguage();

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(t({ mr: "पशुखाद्य उत्पादने", en: "Cattle Feed Products" }));
  const [message, setMessage] = useState("");

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
        return;
      }

      if (e.key === "Tab" && isModalOpen) {
        const modalElement = document.getElementById("whatsapp-modal");
        if (!modalElement) return;
        const focusableElements = modalElement.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // lock scroll
      // autofocus first field
      setTimeout(() => firstInputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = encodeURIComponent(
      (language === "mr" ? `नमस्कार सरस्वती ॲग्रो फीड्स,\n\n मला चौकशी करायची आहे:\n` : `Hello Saraswati Agro Feeds,\n\n I want to make an inquiry:\n`) +
      (language === "mr" ? `👤 नाव: ` : `👤 Name: `) + `${name}\n` +
      (language === "mr" ? `📱 मोबाईल: ` : `📱 Mobile: `) + `${phone}\n` +
      (language === "mr" ? `📝 विषय: ` : `📝 Subject: `) + `${subject}\n` +
      (language === "mr" ? `💬 संदेश: ` : `💬 Message: `) + `${message || (language === "mr" ? "पशुखाद्याबद्दल अधिक माहिती हवी आहे." : "I need more information about animal feed.")}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${formattedText}`, "_blank");
    setIsModalOpen(false);
    // Reset form
    setName("");
    setPhone("");
    setMessage("");
  };

  const waTooltip = t({ mr: "नमस्कार! आपल्याला कशी मदत करू शकतो?", en: "Hello! How can we help you?" });
  const logoTooltip = t({ mr: "नमस्कार! मी तुम्हाला कशा पद्धतीने मदत करू शकतो?", en: "Hello! How can I assist you today?" });

  return (
    <>
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3">
        {/* ── 1. WhatsApp button (top) ── */}
        <div className="relative flex items-center">
          <LeftTooltip
            text={waTooltip}
            visible={waHovered}
          />
          <motion.a
            href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t({ mr: "नमस्कार, मला सरस्वती ॲग्रो फीड्सच्या पशुखाद्य उत्पादनांबद्दल अधिक माहिती हवी आहे.", en: "Hello, I want to know more about Saraswati Agro Feeds cattle feed products." }))}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setWaHovered(true)}
            onHoverEnd={() => setWaHovered(false)}
            className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-green-500/25"
            style={{
              width: "52px",
              height: "52px",
              background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            }}
          >
            <span className="absolute rounded-full bg-green-400 opacity-20 animate-ping" style={{ width: "52px", height: "52px" }} />
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
          </motion.a>
        </div>

        {/* ── 2. Animated Cow button (bottom) ── */}
        <div className="relative flex items-center">
          <LeftTooltip
            text={logoTooltip}
            visible={logoHovered}
          />
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 260, damping: 20 }}
            onHoverStart={() => setLogoHovered(true)}
            onHoverEnd={() => setLogoHovered(false)}
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="relative rounded-full overflow-hidden shadow-xl border-2 border-white hover:border-emerald-300 hover:shadow-emerald-200/60 transition-all duration-300 cursor-pointer focus:outline-none"
            style={{
              width: "56px",
              height: "56px",
              background: "linear-gradient(135deg, #d1fae5 0%, #6ee7b7 50%, #34d399 100%)",
            }}
            aria-label="Open inquiry form"
          >
            <motion.img
              src={animatedCow}
              alt="Cute Cow — Click to Inquire"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-full object-contain p-0.5"
              draggable={false}
            />
          </motion.button>
        </div>
      </div>

      {/* ── 3. Inquiry Form Popup Modal ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              id="whatsapp-modal"
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10"
            >
              {/* Header colored bar */}
              <div className="h-2 w-full bg-gradient-to-r from-green-700 to-emerald-500" />

              <div className="p-6 sm:p-8">
                {/* Close button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img src={animatedCow} alt="SAF Cow" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{t({ mr: "त्वरित चौकशी संदेश", en: "Quick Inquiry Form" })}</h3>
                    <p className="text-xs text-gray-400 mt-0.5 font-medium">{t({ mr: "माहिती भरा — WhatsApp वर उत्तर मिळवा", en: "Fill details — Receive response on WhatsApp" })}</p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      ref={firstInputRef}
                      required
                      type="text"
                      placeholder={t({ mr: "शेतकऱ्याचे/व्यवसायाचे नाव *", en: "Farmer/Business Name *" })}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      required
                      type="tel"
                      placeholder={t({ mr: "मोबाईल नंबर *", en: "Mobile Number *" })}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div className="relative">
                    <HelpCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 bg-white appearance-none transition"
                    >
                      <option value="पशुखाद्य उत्पादने">{t({ mr: "🌾 पशुखाद्य चौकशी (Products)", en: "🌾 Cattle Feed Products Inquiry" })}</option>
                      <option value="डीलरशिप चौकशी">{t({ mr: "🤝 डीलरशिप चौकशी (Dealer Program)", en: "🤝 Dealership Program Inquiry" })}</option>
                      <option value="मार्गदर्शन / सल्ला">{t({ mr: "🐄 आहार मार्गदर्शन (Expert Advice)", en: "🐄 Cattle Feed Expert Advice" })}</option>
                      <option value="इतर">{t({ mr: "📝 इतर चौकशी (Other)", en: "📝 Other Inquiry" })}</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      rows={3}
                      placeholder={t({ mr: "आपला संदेश किंवा चौकशी तपशील...", en: "Your message or inquiry details..." })}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm text-gray-700 placeholder:text-gray-400 transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold py-3.5 rounded-2xl shadow-lg shadow-green-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base mt-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    {t({ mr: "WhatsApp वर चौकशी पाठवा", en: "Send Inquiry on WhatsApp" })}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

