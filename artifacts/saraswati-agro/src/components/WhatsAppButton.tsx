import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WA_URL =
  "https://wa.me/919552398974?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20पशुखाद्य%20उत्पादनांबद्दल%20अधिक%20माहिती%20हवी%20आहे.";

export default function WhatsAppButton() {
  const [cowHovered, setCowHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">

      {/* ── 1. WhatsApp button (top) ── */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.0, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-whatsapp-floating"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        }}
      >
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full bg-green-400 opacity-20 animate-ping" />
        <FaWhatsapp className="w-7 h-7 text-white relative z-10" />
      </motion.a>

      {/* ── 2. Animated Cow logo (bottom) ── */}
      <div className="relative flex flex-col items-center">

        {/* Hover tooltip — "How may I help you?" */}
        <AnimatePresence>
          {cowHovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-[calc(100%+10px)] right-0 bg-white text-gray-800 text-xs font-semibold px-3 py-2 rounded-xl shadow-lg border border-gray-100 whitespace-nowrap pointer-events-none"
            >
              🐄 मी कशी मदत करू?
              {/* Tail */}
              <span className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-b border-r border-gray-100 rotate-45 block" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 260, damping: 20 }}
          onHoverStart={() => setCowHovered(true)}
          onHoverEnd={() => setCowHovered(false)}
          onClick={() => window.open(WA_URL, "_blank")}
          whileHover={{ scale: 1.15, rotate: [0, -8, 8, -4, 0] }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-200/60 transition-all duration-300 cursor-pointer"
        >
          {/* Animated cow emoji */}
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl leading-none select-none"
          >
            🐄
          </motion.span>
        </motion.button>
      </div>

    </div>
  );
}
