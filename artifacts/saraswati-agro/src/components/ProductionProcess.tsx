import { motion } from "framer-motion";
import { FlaskConical, Beaker, Factory, ClipboardCheck, Package, Truck, Sprout } from "lucide-react";

const steps = [
  { icon: Sprout, label: "कच्चा माल निवड", desc: "उत्तम दर्जाच्या कच्च्या मालाची काळजीपूर्वक निवड" },
  { icon: FlaskConical, label: "लॅब टेस्टिंग", desc: "आधुनिक प्रयोगशाळेत प्रत्येक घटकाची कसोटी" },
  { icon: Beaker, label: "फॉर्म्युलेशन", desc: "तज्ञांकडून पोषणमूल्य संतुलन" },
  { icon: Factory, label: "उत्पादन", desc: "अत्याधुनिक यंत्रांद्वारे दर्जेदार निर्मिती" },
  { icon: ClipboardCheck, label: "गुणवत्ता तपासणी", desc: "प्रत्येक बॅचची BIS मानकांनुसार तपासणी" },
  { icon: Package, label: "पॅकेजिंग", desc: "सुरक्षित व आकर्षक पॅकेजिंग" },
  { icon: Truck, label: "वितरण", desc: "वेळेवर व सुरक्षित वितरण" },
];

export default function ProductionProcess() {
  return (
    <section className="py-20 md:py-28 bg-green-50/60 dark:bg-green-950/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block bg-green-100 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            प्रक्रिया
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            आमची <span className="text-primary">उत्पादन प्रक्रिया</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground">प्रत्येक टप्प्यावर गुणवत्तेची हमी</p>
        </motion.div>

        {/* Horizontal timeline for md+ */}
        <div className="hidden md:flex items-start gap-0 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex-1 flex flex-col items-center relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.4 }}
                    className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/60 to-primary/20 origin-left"
                  />
                )}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, type: "spring", stiffness: 200 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-white border-4 border-primary/20 shadow-lg flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300 cursor-default"
                >
                  <Icon className="w-7 h-7 text-primary" />
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow">
                    {index + 1}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 + 0.2 }}
                  className="mt-4 text-center px-2"
                >
                  <div className="font-bold text-foreground text-sm">{step.label}</div>
                  <div className="text-muted-foreground text-xs mt-1 leading-tight">{step.desc}</div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Vertical list for mobile */}
        <div className="md:hidden flex flex-col gap-0 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 relative pl-2"
              >
                {/* Vertical connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-primary/20" />
                )}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-primary/30 shadow flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                <div className="pb-6 pt-1">
                  <div className="font-bold text-foreground text-sm">{step.label}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{step.desc}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center shadow-xl"
        >
          <h3 className="text-xl md:text-3xl font-bold mb-3">प्रत्येक पिशवीमागे विज्ञान आणि काळजी</h3>
          <p className="text-green-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            सरस्वती अॅग्रो फीड्समध्ये उत्पादन प्रक्रियेच्या प्रत्येक टप्प्यावर तज्ञांचे कडक निरीक्षण असते. आमचे पशुखाद्य BIS मानकांनुसार तयार होते आणि वितरणापूर्वी पूर्ण तपासणी केली जाते.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
