import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "रामराव शिंदे",
    location: "अहमदनगर, महाराष्ट्र",
    text: "सरस्वती अॅग्रो फीड्सचा रत्नाई पशु आहार वापरल्यानंतर माझ्या गायींचे दूध उत्पादन २ लिटरने वाढले. दूधातील फॅट देखील खूप सुधारला. SAF चा खूप आभारी आहे.",
    initials: "रा",
    product: "रत्नाई पशु आहार",
  },
  {
    name: "सुभाष पाटील",
    location: "सातारा, महाराष्ट्र",
    text: "अमृतधारा पशु आहार वापरल्यापासून जनावरांचे आरोग्य खूपच सुधारले. जनावरे चांगली राहतात, आजार कमी झाले. SAF चे उत्पादन खरोखरच उत्तम आहे.",
    initials: "सु",
    product: "अमृतधारा पशु आहार",
  },
  {
    name: "विठ्ठल माने",
    location: "कोल्हापूर, महाराष्ट्र",
    text: "माझ्या म्हशींसाठी रत्नाई आहार वापरतो. दूध उत्पादन १.५ लिटरने वाढले आहे. किंमत वाजवी आहे आणि गुणवत्ता खूप चांगली आहे. सर्व शेतकऱ्यांनी वापरावे.",
    initials: "वि",
    product: "रत्नाई पशु आहार",
  },
  {
    name: "संतोष जाधव",
    location: "नाशिक, महाराष्ट्र",
    text: "जनयात्री पशु आहारामुळे माझ्या गाभण गायींची प्रसूती खूप सुलभ झाली. वासरेही धडधाकट जन्मली. SAF च्या तांत्रिक मार्गदर्शनाचाही खूप फायदा झाला.",
    initials: "स",
    product: "जनयात्री",
  },
  {
    name: "प्रकाश देशमुख",
    location: "पुणे, महाराष्ट्र",
    text: "काफ गो-बूस्ट वापरल्यानंतर माझ्या वासरांची वाढ खूप चांगली झाली. हाडे मजबूत झाली आणि वजनही लवकर वाढले. SAF एक विश्वासार्ह ब्रँड आहे.",
    initials: "प्र",
    product: "काफ गो-बूस्ट",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(index);
    startTimer();
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-green-50/60 dark:bg-green-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            शेतकऱ्यांचे <span className="text-primary">अनुभव</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            महाराष्ट्रातील हजारो शेतकऱ्यांनी अनुभवलेला फरक
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl relative"
          >
            <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/20" />
            <div className="flex flex-col items-center text-center gap-6 pt-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                {t.initials}
              </div>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed italic max-w-2xl">
                "{t.text}"
              </p>
              <div>
                <div className="font-bold text-foreground text-lg">{t.name}</div>
                <div className="text-muted-foreground text-sm">{t.location}</div>
                <div className="mt-2 inline-block bg-accent/20 text-primary border border-accent/30 text-xs font-semibold px-3 py-1 rounded-full">
                  {t.product}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-200"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-primary/30"}`}
                  data-testid={`button-testimonial-dot-${i}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-200"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
