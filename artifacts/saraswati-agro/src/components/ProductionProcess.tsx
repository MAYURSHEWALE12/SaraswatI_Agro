import { motion } from "framer-motion";
import { FlaskConical, Beaker, Factory, ClipboardCheck, Package, Truck } from "lucide-react";

function SeedlingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 0 0 8" />
      <path d="M12 2a4 4 0 0 1 0 8" />
      <path d="M12 10v12" />
      <path d="M12 17a4 4 0 0 0 4-4" />
      <path d="M12 17a4 4 0 0 1-4-4" />
    </svg>
  );
}

const steps = [
  { icon: SeedlingIcon, label: "कच्चा माल निवड", desc: "उत्तम दर्जाच्या कच्च्या मालाची काळजीपूर्वक निवड" },
  { icon: FlaskConical, label: "लॅब टेस्टिंग", desc: "आधुनिक प्रयोगशाळेत प्रत्येक घटकाची कसोटी" },
  { icon: Beaker, label: "फॉर्म्युलेशन", desc: "तज्ञांकडून पोषणमूल्य संतुलन" },
  { icon: Factory, label: "उत्पादन", desc: "अत्याधुनिक यंत्रांद्वारे दर्जेदार निर्मिती" },
  { icon: ClipboardCheck, label: "गुणवत्ता तपासणी", desc: "प्रत्येक बॅचची BIS मानकांनुसार तपासणी" },
  { icon: Package, label: "पॅकेजिंग", desc: "सुरक्षित व आकर्षक पॅकेजिंग" },
  { icon: Truck, label: "वितरण", desc: "वेळेवर व सुरक्षित वितरण" },
];

export default function ProductionProcess() {
  return (
    <section className="py-24 bg-green-50/50 dark:bg-green-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            आमची <span className="text-primary">उत्पादन प्रक्रिया</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            प्रत्येक टप्प्यावर गुणवत्तेची हमी
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-16"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center text-center gap-3 relative"
                  data-testid={`step-process-${index}`}
                >
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white dark:bg-green-900 border-4 border-primary/20 shadow-lg flex items-center justify-center hover:border-primary transition-all duration-300 hover:scale-110">
                    <Icon className="w-9 h-9 text-primary" />
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm md:text-base leading-tight">{step.label}</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed hidden md:block">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-primary text-white rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            प्रत्येक पिशवीमागे विज्ञान आणि काळजी
          </h3>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            सरस्वती अॅग्रो फीड्समध्ये उत्पादन प्रक्रियेच्या प्रत्येक टप्प्यावर तज्ञांचे कडक निरीक्षण असते. आमचे पशुखाद्य BIS मानकांनुसार तयार होते आणि वितरणापूर्वी पूर्ण तपासणी केली जाते.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
