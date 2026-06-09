import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import productCatalog from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(4)_1780997454734.jpeg";
import benefitsBrochure from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(3)_1780997454734.jpeg";

const WA_URL =
  "https://wa.me/919552398974?text=नमस्कार%2C%0Aमला%20सरस्वती%20अॅग्रो%20फीड्सच्या%20पशुखाद्य%20उत्पादनांबद्दल%20अधिक%20माहिती%20हवी%20आहे.";

const words = ["सरस्वती", "अॅग्रो", "फीड्स"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a2e0a] via-[#0f3d0f] to-[#1a5c1a]"
    >
      {/* Parallax brand background image (right side, faded) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={benefitsBrochure}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-10 object-left"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "25%"]) }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e0a] via-[#0a2e0a]/90 to-[#0a2e0a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e0a] via-transparent to-transparent" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#4CAF50 1px, transparent 1px), linear-gradient(90deg, #4CAF50 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Animated glowing orbs */}
      {[
        { w: 400, h: 400, x: "-10%", y: "10%", color: "rgba(46,125,50,0.15)" },
        { w: 300, h: 300, x: "60%", y: "50%", color: "rgba(249,168,37,0.08)" },
        { w: 200, h: 200, x: "30%", y: "-10%", color: "rgba(76,175,80,0.12)" },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{ width: orb.w, height: orb.h, left: orb.x, top: orb.y, background: orb.color }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        />
      ))}

      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20"
        style={{ y: textY, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* ── Left: Text ── */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 bg-green-500/15 backdrop-blur-sm border border-green-500/25 px-4 py-2 rounded-full w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-300 text-sm font-semibold tracking-wide">
                २०१६ पासून महाराष्ट्रात सेवेत
              </span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight">
              {words.map((word, wi) => (
                <motion.span
                  key={wi}
                  className={`block ${wi === 1 ? "text-green-400" : "text-white"}`}
                  initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, delay: 0.2 + wi * 0.18, ease: "easeOut" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-green-100"
            >
              उत्कृष्ट दर्जाचे संतुलित पशु आहार
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.88 }}
              className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg"
            >
              संतुलित पशुखाद्याद्वारे जनावरांचे आरोग्य आणि दूध उत्पादन वाढविण्याचे कार्य करत आहोत. निरोगी जनावरे, अधिक दूध आणि शेतकऱ्यांची समृद्धी.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="flex flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-400 text-white rounded-full px-5 sm:px-7 py-5 text-sm sm:text-base font-bold shadow-lg shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a href="#products" data-testid="link-hero-products">उत्पादने पहा</a>
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-full px-5 sm:px-7 py-5 text-sm sm:text-base font-bold backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 gap-2"
                onClick={() => window.open(WA_URL, "_blank")}
                data-testid="button-hero-whatsapp"
              >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                व्हॉट्सअॅप
              </Button>
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-full px-5 sm:px-7 py-5 text-sm sm:text-base font-bold backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 gap-2"
                asChild
              >
                <a href="tel:+919552398974" data-testid="link-hero-call">
                  <Phone className="w-4 h-4" />
                  कॉल करा
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25 }}
              className="flex flex-wrap gap-2"
            >
              {["BIS Certified", "Pure Veg Feed", "Lab Tested", "Maharashtra Brand"].map((b, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/8 border border-white/15 text-white/70 px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Product image ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 4 }}
            animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
            className="relative hidden sm:flex justify-center"
          >
            {/* Glow halo */}
            <div className="absolute -inset-8 bg-gradient-to-r from-green-500/25 to-yellow-400/15 blur-3xl rounded-full" />

            {/* Floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={productCatalog}
                alt="सरस्वती अॅग्रो फीड्स उत्पादने"
                className="w-full max-w-md xl:max-w-lg h-auto object-cover rounded-3xl shadow-2xl border-2 border-white/15"
              />
              {/* Ring */}
              <div className="absolute -inset-0.5 rounded-3xl border border-green-400/20 pointer-events-none" />
            </motion.div>

            {/* Floating chips */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, type: "spring" }}
              className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5"
            >
              <div className="text-2xl font-extrabold text-primary leading-none">10K+</div>
              <div className="text-xs text-muted-foreground font-medium leading-tight">समाधानी<br />शेतकरी</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute -bottom-5 -right-5 bg-green-600 text-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5"
            >
              <div className="text-2xl font-extrabold leading-none">50+</div>
              <div className="text-xs opacity-90 font-medium leading-tight">वितरक<br />नेटवर्क</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col items-center gap-1 text-white/40 mt-16 md:mt-20"
        >
          <span className="text-xs tracking-widest uppercase">खाली पहा</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
