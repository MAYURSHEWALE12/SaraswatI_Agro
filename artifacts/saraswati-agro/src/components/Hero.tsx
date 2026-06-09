import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import productCatalog from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(4)_1780997454734.jpeg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block bg-green-200/50 dark:bg-green-800/50 text-primary-foreground dark:text-green-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide w-fit backdrop-blur-sm border border-green-300/50 dark:border-green-700/50">
              उत्तम पशुखाद्य, भरपूर दूध उत्पादन
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight leading-tight">
              सरस्वती <span className="text-primary block mt-2">अॅग्रो फीड्स</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90">
              उत्कृष्ट दर्जाचे संतुलित पशु आहार
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              २०१६ पासून महाराष्ट्रातील शेतकऱ्यांचा विश्वास जिंकत, संतुलित पशुखाद्याद्वारे जनावरांचे आरोग्य आणि दूध उत्पादन वाढविण्याचे कार्य करत आहोत. निरोगी जनावरे, अधिक दूध आणि शेतकऱ्यांची समृद्धी.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" asChild>
                <a href="#products">उत्पादने पहा</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 hover:bg-green-50 dark:hover:bg-green-900/50 transition-all hover:-translate-y-1" asChild>
                <a href="#dealer">वितरक बना</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-green-300 to-yellow-200 dark:from-green-800 dark:to-yellow-700 opacity-30 blur-3xl rounded-full" />
            <img 
              src={productCatalog} 
              alt="सरस्वती अॅग्रो फीड्स उत्पादने" 
              className="relative w-full h-auto object-cover rounded-2xl shadow-2xl border-4 border-white/50 dark:border-green-900/50 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
