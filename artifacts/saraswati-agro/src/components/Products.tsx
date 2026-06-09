import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import ratnaiAmrutdhara from "@assets/WhatsApp_Image_2026-06-09_at_12.48.21_(5)_1780997454734.jpeg";
import janayatriKaf from "@assets/WhatsApp_Image_2026-06-09_at_12.48.22_(1)_1780997454734.jpeg";

const products = [
  {
    name: "रत्नाई पशु आहार",
    type: "उच्च दूध उत्पादन",
    image: ratnaiAmrutdhara,
    specs: {
      use: "गाय व म्हैस",
      protein: "25%",
      fat: "6%",
      weight: "५० किलो",
      dosage: "गाय: ३०० ग्रॅम / लिटर | म्हैस: ४०० ग्रॅम / लिटर",
    },
    details: [
      { label: "Moisture (Max)", value: "10%" },
      { label: "Crude Protein (Min)", value: "25%" },
      { label: "Crude Fat (Min)", value: "6%" },
      { label: "Crude Fibre (Max)", value: "10%" },
      { label: "Acid Insoluble Ash (Max)", value: "2.50%" },
      { label: "Calcium (Min)", value: "0.80%" },
      { label: "Total Phosphorus (Min)", value: "0.50%" },
      { label: "Available Phosphorus (Min)", value: "0.25%" },
      { label: "Aflotoxin B1 (Max)", value: "20 PPB" },
      { label: "Urea if Present (Max)", value: "1%" },
    ]
  },
  {
    name: "अमृतधारा पशु आहार",
    type: "संतुलित आहार",
    image: ratnaiAmrutdhara,
    specs: {
      use: "गाय व म्हैस",
      protein: "22%",
      fat: "5%",
      weight: "५० किलो",
      dosage: "गाय: ३५० ग्रॅम / लिटर | म्हैस: ५०० ग्रॅम / लिटर",
    },
    details: [
      { label: "Crude Protein (Min)", value: "22%" },
      { label: "Crude Fat (Min)", value: "5%" },
      { label: "BIS Type", value: "Type 1" },
    ]
  },
  {
    name: "जनयात्री",
    type: "गाभण जनावरांसाठी",
    image: janayatriKaf,
    specs: {
      use: "गाभण गाय आणि म्हैस",
      weight: "५० किलो",
      utility: "सुलभ प्रसूती व वेताची भक्कम सुरुवात",
      dosage: "कालवडी: २ किलो | ८ वा महिना: ३ किलो | ९ वा महिना: ४ किलो",
    },
    details: []
  },
  {
    name: "काफ गो-बूस्ट",
    type: "वासरांसाठी",
    image: janayatriKaf,
    specs: {
      use: "वासरे (Calves)",
      weight: "२५ किलो",
      utility: "वजन वाढीस आणि अवयवांच्या विकासास मदत होते",
      dosage: "वय आणि वजनानुसार",
    },
    details: []
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-green-50/50 dark:bg-green-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            आमची <span className="text-primary">उत्पादने</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            प्रत्येक जनावराच्या गरजेनुसार तयार केलेले संतुलित आणि पौष्टिक पशुखाद्य
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{product.name}</h3>
                    <Badge variant="secondary" className="bg-accent text-accent-foreground border-none">
                      {product.type}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">उपयोग</div>
                    <div className="font-semibold">{product.specs.use}</div>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">वजन</div>
                    <div className="font-semibold">{product.specs.weight}</div>
                  </div>
                  {product.specs.protein && (
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">प्रथिने (Protein)</div>
                      <div className="font-semibold text-primary">{product.specs.protein}</div>
                    </div>
                  )}
                  {product.specs.fat && (
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">फॅट (Fat)</div>
                      <div className="font-semibold text-primary">{product.specs.fat}</div>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">मात्रा / उपयुक्तता</h4>
                  <p className="font-medium text-foreground bg-green-50 dark:bg-green-900/30 p-3 rounded-lg border border-green-100 dark:border-green-800">
                    {product.specs.dosage || product.specs.utility}
                  </p>
                </div>

                {product.details.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">तपशील (Specifications)</h4>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                      {product.details.map((detail, idx) => (
                        <div key={idx} className="flex justify-between border-b border-border pb-1">
                          <span className="text-muted-foreground">{detail.label}</span>
                          <span className="font-medium text-right">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
