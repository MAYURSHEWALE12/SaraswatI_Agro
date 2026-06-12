import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import safLogo from "@assets/image_1781081387145.webp";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Mini branded nav */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src={safLogo} alt="SAF Logo" className="w-9 h-9 rounded-full object-cover" />
          <span className="font-bold text-lg text-gray-800 tracking-tight">
            {t({ mr: "सरस्वती", en: "Saraswati" })}{" "}
            <span className="text-emerald-600">{t({ mr: "ॲग्रो", en: "Agro" })}</span>
          </span>
        </Link>
      </div>

      {/* 404 content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-md"
        >
          {/* Large number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="text-9xl font-extrabold text-emerald-600/20 select-none leading-none mb-2"
          >
            404
          </motion.div>

          {/* Decorative line */}
          <div className="h-1 w-20 bg-amber-400 mx-auto rounded-full mb-6" />

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            {t({ mr: "पृष्ठ सापडले नाही", en: "Page Not Found" })}
          </h1>

          <p className="text-gray-500 text-sm sm:text-base mb-8 leading-relaxed">
            {t({
              mr: "तुम्ही शोधत असलेले पृष्ठ अस्तित्वात नाही किंवा ते हलविण्यात आले आहे. कृपया मुख्यपृष्ठावर परत जा.",
              en: "The page you're looking for doesn't exist or has been moved. Please return to the homepage.",
            })}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-300/40 hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              {t({ mr: "मुख्यपृष्ठ", en: "Home" })}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-full border border-gray-200 transition-all duration-300 hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              {t({ mr: "मागे जा", en: "Go Back" })}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
