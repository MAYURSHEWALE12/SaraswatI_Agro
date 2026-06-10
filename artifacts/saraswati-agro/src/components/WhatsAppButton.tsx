import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X } from "lucide-react";

const WA_URL =
  "https://wa.me/919552398974?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20पशुखाद्य%20उत्पादनांबद्दल%20अधिक%20माहिती%20हवी%20आहे.";

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed]  = useState(false);

  /* Auto-show popup after 8 s */
  useEffect(() => {
    const t = setTimeout(() => {
      if (!dismissed) setShowPopup(true);
    }, 8000);
    return () => clearTimeout(t);
  }, [dismissed]);

  const handleClick = () => {
    window.open(WA_URL, "_blank");
    setShowPopup(false);
  };

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowPopup(false);
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Popup chat bubble ── */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{   opacity: 0, y: 12, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-[240px] cursor-pointer hover:shadow-emerald-100 transition-shadow"
            onClick={handleClick}
          >
            {/* Close ✕ */}
            <button
              onClick={dismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-gray-600" />
            </button>

            {/* SAF badge */}
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 shadow">
                <span className="text-lg leading-none">🐄</span>
              </div>
              <div>
                <div className="text-xs font-extrabold text-gray-800 leading-tight">सरस्वती अ‍ॅग्रो फीड्स</div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                  <span className="text-[10px] text-green-600 font-medium">Online</span>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl rounded-tl-none px-3 py-2.5 mb-2">
              <p className="text-sm font-medium text-gray-700 leading-snug">
                नमस्कार! 🙏 मी कशी मदत करू?
              </p>
              <p className="text-xs text-gray-500 mt-1 leading-snug">
                Customized Feed, उत्पादने किंवा इतर चौकशी — व्हॉट्सअॅपवर विचारा.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-bold py-2 rounded-xl transition-colors">
              <FaWhatsapp className="w-4 h-4" />
              व्हॉट्सअॅपवर उत्तर द्या
            </div>

            {/* Tail */}
            <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-r border-b border-gray-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main floating button ── */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => showPopup ? handleClick() : setShowPopup(true)}
        data-testid="button-whatsapp-floating"
        className="relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center focus:outline-none"
        style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
      >
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-25" />
        <span className="absolute inset-0 rounded-full" style={{ animation: "wa-pulse 2.5s infinite" }} />

        {/* Cow icon + WA badge */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="text-2xl leading-none">🐄</span>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow">
            <FaWhatsapp className="w-3.5 h-3.5 text-green-500" />
          </div>
        </div>

        <style>{`
          @keyframes wa-pulse {
            0%   { box-shadow: 0 0 0 0 rgba(34,197,94,0.45); }
            70%  { box-shadow: 0 0 0 18px rgba(34,197,94,0); }
            100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
          }
        `}</style>
      </motion.button>

    </div>
  );
}
