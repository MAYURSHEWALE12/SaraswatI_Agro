import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { CheckCircle2, TrendingUp, Headphones, Truck, BarChart3, Send } from "lucide-react";

const dealerSchema = z.object({
  name: z.string().min(2, "नाव किमान २ अक्षरे असणे आवश्यक आहे"),
  businessName: z.string().min(2, "व्यवसायाचे नाव आवश्यक आहे"),
  mobile: z.string().min(10, "मोबाईल नंबर १० अंकी असणे आवश्यक आहे").max(13),
  email: z.string().email("वैध ईमेल पत्ता टाका").optional().or(z.literal("")),
  district: z.string().min(2, "जिल्हा आवश्यक आहे"),
  state: z.string().min(2, "राज्य आवश्यक आहे"),
  message: z.string().optional(),
});

type DealerFormValues = z.infer<typeof dealerSchema>;

const dealerBenefits = [
  { icon: TrendingUp, label: "आकर्षक मार्जिन" },
  { icon: Headphones, label: "मार्केटिंग सपोर्ट" },
  { icon: Truck, label: "जलद पुरवठा" },
  { icon: BarChart3, label: "वाढती मागणी" },
];

export default function DealerForm() {
  const form = useForm<DealerFormValues>({
    resolver: zodResolver(dealerSchema),
    defaultValues: {
      name: "",
      businessName: "",
      mobile: "",
      email: "",
      district: "",
      state: "महाराष्ट्र",
      message: "",
    },
  });

  const onSubmit = (data: DealerFormValues) => {
    const msg = encodeURIComponent(
      `नमस्कार,\nमला सरस्वती अॅग्रो फीड्सचा वितरक बनायचे आहे.\nनाव: ${data.name}\nव्यवसाय: ${data.businessName}\nजिल्हा: ${data.district}, ${data.state}\nमोबाईल: ${data.mobile}`
    );
    window.open(`https://wa.me/919921937353?text=${msg}`, "_blank");
    toast.success("चौकशी यशस्वीरित्या पाठवली!", {
      description: "आम्ही लवकरच आपल्याशी संपर्क साधू.",
    });
    form.reset();
  };

  return (
    <section id="dealer" className="py-24 bg-background">
      <Toaster />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            सरस्वती अॅग्रो फीड्स <span className="text-primary">वितरक बना</span>
          </h2>
          <div className="h-1.5 w-24 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground">
            आमच्या वाढत्या वितरक नेटवर्कचा भाग व्हा आणि यशस्वी व्यवसाय उभा करा
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">वितरक होण्याचे फायदे</h3>
              <div className="grid grid-cols-2 gap-4">
                {dealerBenefits.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={i} className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-xl p-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold text-foreground">{benefit.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl p-6">
              <h4 className="font-bold text-primary text-lg mb-4">आमच्याशी संपर्क साधा</h4>
              <div className="flex flex-col gap-3 text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>9552398974 / 9921937353</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>saraswatiagrofeeds2215@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>टाकळकरवाडी, राजगुरूनगर, जि. पुणे – 410505</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">चौकशी फॉर्म भरा</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>नाव *</FormLabel>
                      <FormControl>
                        <Input placeholder="आपले पूर्ण नाव" data-testid="input-dealer-name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>व्यवसायाचे नाव *</FormLabel>
                      <FormControl>
                        <Input placeholder="आपल्या व्यवसायाचे नाव" data-testid="input-dealer-business" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>मोबाईल नंबर *</FormLabel>
                        <FormControl>
                          <Input placeholder="9XXXXXXXXX" data-testid="input-dealer-mobile" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ईमेल</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" data-testid="input-dealer-email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>जिल्हा *</FormLabel>
                        <FormControl>
                          <Input placeholder="जिल्ह्याचे नाव" data-testid="input-dealer-district" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>राज्य *</FormLabel>
                        <FormControl>
                          <Input placeholder="राज्य" data-testid="input-dealer-state" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>संदेश</FormLabel>
                      <FormControl>
                        <Textarea placeholder="आपला संदेश येथे लिहा..." rows={3} data-testid="input-dealer-message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full gap-2 rounded-full mt-2" data-testid="button-dealer-submit">
                  <Send className="w-4 h-4" />
                  चौकशी पाठवा
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
