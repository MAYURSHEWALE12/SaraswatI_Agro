import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import safLogo from "@assets/image_1781081387145.png";

const WA_URL =
  "https://wa.me/919552398974?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20पशुखाद्य%20उत्पादनांबद्दल%20अधिक%20माहिती%20हवी%20आहे.";

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

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-center gap-3">

      {/* ── 1. WhatsApp button (top) ── */}
      <div className="relative flex items-center">
        <LeftTooltip
          text="नमस्कार! आपल्याला कशी मदत करू शकतो?"
          visible={waHovered}
        />
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setWaHovered(true)}
          onHoverEnd={() => setWaHovered(false)}
          data-testid="button-whatsapp-floating"
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl"
          style={{
            width: "52px",
            height: "52px",
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          }}
        >
          <span className="absolute rounded-full bg-green-400 opacity-20 animate-ping" style={{ width: "52px", height: "52px" }} />
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
        </motion.a>
      </div>

      {/* ── 2. SAF Logo button (bottom) ── */}
      <div className="relative flex items-center">
        <LeftTooltip
          text="आपल्या जनावरांच्या पोषणासाठी योग्य मार्गदर्शन मिळवा"
          visible={logoHovered}
        />
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 260, damping: 20 }}
          onHoverStart={() => setLogoHovered(true)}
          onHoverEnd={() => setLogoHovered(false)}
          onClick={() => window.open(WA_URL, "_blank")}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.92 }}
          className="relative rounded-full overflow-hidden shadow-xl border-2 border-white hover:border-emerald-300 hover:shadow-emerald-200/60 transition-all duration-300 cursor-pointer focus:outline-none"
          style={{ width: "60px", height: "60px" }}
        >
          {/* Gentle float animation wrapper */}
          <motion.img
            src={safLogo}
            alt="Saraswati Agro Feeds"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full object-cover rounded-full"
            draggable={false}
          />
        </motion.button>
      </div>

    </div>
  );
}
