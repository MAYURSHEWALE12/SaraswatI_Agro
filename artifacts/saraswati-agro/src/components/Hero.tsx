import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Milk, Leaf, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import productCatalog from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(4)_1780997454734.jpeg";

/* Confirmed Pexels dairy-cow image — Holstein cows on green pasture */
const COW_BG = "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";
const WA_URL =
  "https://wa.me/919552398974?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20पशुखाद्य%20उत्पादनांबद्दल%20अधिक%20माहिती%20हवी%20आहे.";

const words = ["सरस्वती", "अॅग्रो", "फीड्स"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY  = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ─── Real HD cow background ─── */}
      <motion.div className="absolute inset-0 z-0 scale-105" style={{ y: bgY }}>
        <img
          src={COW_BG}
          alt="Dairy cows on green pasture"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Lighter gradient — less black, more emerald tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-green-800/65 to-emerald-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20"
        style={{ y: textY, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: text ── */}
          <div className="flex flex-col gap-5">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight drop-shadow-lg">
              {words.map((word, wi) => (
                <motion.span
                  key={wi}
                  className={`block ${wi === 1 ? "text-green-300" : "text-white"}`}
                  initial={{ opacity: 0, y: 44, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.65, delay: 0.2 + wi * 0.16, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.72 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-100 drop-shadow"
            >
              उत्कृष्ट दर्जाचे संतुलित पशु आहार
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.88 }}
              className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md drop-shadow"
            >
              संतुलित पशुखाद्याद्वारे जनावरांचे आरोग्य आणि दूध उत्पादन वाढविण्याचे कार्य करत आहोत. निरोगी जनावरे, अधिक दूध आणि शेतकऱ्यांची समृद्धी.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.0 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-white rounded-full px-6 py-5 font-bold shadow-lg shadow-green-600/30 hover:-translate-y-0.5 transition-all duration-300"
                asChild
              >
                <a href="#products">🌿 उत्पादने पहा</a>
              </Button>
              <Button
                size="lg"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full px-6 py-5 font-bold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300 gap-2"
                onClick={() => window.open(WA_URL, "_blank")}
              >
                <FaWhatsapp className="w-5 h-5 text-green-300" />
                व्हॉट्सअॅप
              </Button>
              <Button
                size="lg"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 rounded-full px-6 py-5 font-bold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-300 gap-2"
                asChild
              >
                <a href="tel:+919552398974">
                  <Phone className="w-4 h-4" />
                  कॉल करा
                </a>
              </Button>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                { icon: "🏅", label: "BIS Certified" },
                { icon: "🌿", label: "Pure Veg Feed" },
                { icon: "🔬", label: "Lab Tested" },
                { icon: "🐄", label: "Maharashtra Brand" },
              ].map((b, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 border border-white/20 text-white/80 px-3 py-1.5 rounded-full backdrop-blur-sm"
                >
                  {b.icon} {b.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: floating product card ── */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: -1.5 }}
            transition={{ duration: 1, delay: 0.35, ease: "easeOut" }}
            className="relative hidden sm:flex justify-center items-center"
          >
            <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 to-yellow-400/15 blur-3xl rounded-full" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={productCatalog}
                alt="सरस्वती अॅग्रो फीड्स उत्पादने"
                className="w-full max-w-sm xl:max-w-md h-auto rounded-3xl shadow-2xl border-2 border-white/20 object-cover"
              />
              <div className="absolute -inset-px rounded-3xl border border-green-400/25 pointer-events-none" />
            </motion.div>

            {/* Stat chips — positioned inside, won't overflow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, type: "spring" }}
              className="absolute top-2 left-2 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
            >
              <Milk className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xl font-extrabold text-primary leading-none">10K+</div>
                <div className="text-xs text-muted-foreground font-medium">शेतकरी</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute bottom-2 right-2 bg-green-600 text-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
            >
              <Award className="w-5 h-5 text-green-200" />
              <div>
                <div className="text-xl font-extrabold leading-none">50+</div>
                <div className="text-xs opacity-85 font-medium">वितरक</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-1.5 text-white/40 mt-14 md:mt-20"
        >
          <span className="text-xs tracking-widest uppercase font-medium">खाली पहा</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
