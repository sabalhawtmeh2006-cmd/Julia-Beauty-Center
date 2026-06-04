import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, Facebook, Clock } from "lucide-react";
import FeedbackModal from "@/components/FeedbackModal";

export default function HomePage() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />

      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-accent/30 to-primary/10" />
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        <div className="container mx-auto px-5 relative z-10 text-center max-w-4xl py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5">
              وجهتك الأولى للجمال في الزرقاء
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-5 leading-tight tracking-tight">
              مركز جوليا <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                للعناية بالبشرة والليزر
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              أهلاً بكم في مركز جوليا، وجهتكم المتخصصة للعناية بالبشرة، الليزر، التجميل، التغذية والأظافر بخدمات احترافية ونتائج مميزة.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 py-5 text-base sm:text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl w-full sm:w-auto transition-all"
                onClick={() => setFeedbackOpen(true)}
              >
                ⭐ اتركي تقييمك
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-5 text-base sm:text-lg border-primary/30 text-primary hover:bg-primary/5 w-full sm:w-auto transition-all bg-white/50 backdrop-blur-sm"
              >
                <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
                  احجزي الآن عبر واتساب
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-[40px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-accent/10">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto text-center bg-white/40 backdrop-blur-lg border border-white/50 p-6 md:p-16 rounded-[2rem] shadow-xl">
            <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-6">من نحن</h2>
            <p className="text-base md:text-xl leading-loose text-muted-foreground mb-6">
              مركز جوليا هو مركز متخصص في العناية بالبشرة والليزر يقع في قلب الزرقاء. نفخر بتقديم أعلى مستويات الرعاية والخدمات التجميلية المتكاملة التي تشمل العناية المتقدمة بالبشرة، إزالة الشعر بالليزر بأحدث الأجهزة، الحقن التجميلي (فيلر وبوتوكس)، برامج التغذية المتخصصة، والعناية الاحترافية بالأظافر.
            </p>
            <div className="flex items-center justify-center gap-3 bg-primary/8 border border-primary/15 rounded-2xl px-5 py-4 mx-auto w-fit">
              <Clock size={18} className="text-primary shrink-0" />
              <p className="text-foreground font-semibold text-sm md:text-base">
                يومياً ما عدا الجمعة — 9 صباحاً حتى 5 مساءً
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-foreground text-background relative">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl md:text-5xl font-bold mb-10 text-white text-center md:text-right">تواصل معنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="space-y-5">
              <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <span dir="ltr">+962 770 754 031</span>
              </a>
              <div className="flex items-start gap-4 text-lg">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span>الزرقاء - جبل طارق - قرب دوار البقيع</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <span>يومياً ما عدا الجمعة، 9 ص — 5 م</span>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://www.facebook.com/share/1BxMajrgGU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/juliaclinic2" target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[2rem] text-center w-full max-w-xs">
                <div className="bg-white rounded-2xl p-3 mb-4 flex items-center justify-center">
                  <img src="/julia-qr.png" alt="QR Code مركز جوليا" className="w-full h-auto rounded-xl" />
                </div>
                <p className="text-base font-medium text-white">امسح الكود لزيارة موقع المركز</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-6 border-t border-border">
        <div className="container mx-auto px-5 text-center">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} مركز جوليا للعناية بالبشرة والليزر. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
