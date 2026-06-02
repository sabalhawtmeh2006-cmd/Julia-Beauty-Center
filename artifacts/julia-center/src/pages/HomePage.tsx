import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { departments } from "@/data/departments";
import DepartmentCard from "@/components/DepartmentCard";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-accent/30 to-primary/10" />
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              وجهتك الأولى للجمال في الزرقاء
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight">
              مركز جوليا <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">للعناية بالبشرة والليزر</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">وجهتكِ المتخصصة للجمال والعناية المتكاملة 
            خدمات البشرة، الليزر، التغذية والأظافر بأحدث التقنيات ولمسة من الفخامة</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl w-full sm:w-auto transition-all">
                <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
                  احجزي الآن عبر واتساب
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-primary/20 text-primary hover:bg-primary/5 w-full sm:w-auto transition-all bg-white/50 backdrop-blur-sm">
                <Link href="#departments">
                  تصفحي الأقسام
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>
      </section>
      {/* Departments Section */}
      <section id="departments" className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">أقسام المركز</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-80" />
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {departments.map((dept) => (
              <motion.div key={dept.id} variants={itemVariants}>
                <DepartmentCard 
                  name={dept.name} 
                  slug={dept.slug} 
                  iconName={dept.icon} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white/40 backdrop-blur-lg border border-white/50 p-8 md:p-16 rounded-[2rem] shadow-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">من نحن</h2>
            <p className="text-xl leading-loose text-muted-foreground">
              مركز جوليا هو مركز متخصص في العناية بالبشرة والليزر يقع في قلب الزرقاء. نفخر بتقديم أعلى مستويات الرعاية والخدمات التجميلية المتكاملة التي تشمل العناية المتقدمة بالبشرة، إزالة الشعر بالليزر بأحدث الأجهزة، الحقن التجميلي (فيلر وبوتوكس)، برامج التغذية المتخصصة، والعناية الاحترافية بالأظافر. فريقنا من الخبراء مكرس لإبراز جمالك الطبيعي وتوفير تجربة فاخرة تمنحك الثقة والنتائج التي تطمحين إليها.
            </p>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">أجواء المركز</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-80" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md group relative"
              >
                <div className={`w-full h-full bg-gradient-to-br from-primary/${10 + (i*10)%40} to-accent/${20 + (i*15)%30} flex items-center justify-center transition-transform duration-700 group-hover:scale-110`}>
                  <div className="text-primary/30">J</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-foreground text-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">تواصل معنا</h2>
              <div className="space-y-6">
                <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-xl hover:text-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="text-primary" />
                  </div>
                  <span dir="ltr">+962 770 754 031</span>
                </a>
                <div className="flex items-center gap-4 text-xl">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin className="text-primary" />
                  </div>
                  <span>الزرقاء - جبل طارق - قرب دوار البقيع</span>
                </div>
                <div className="flex gap-4 pt-6">
                  <a href="https://www.facebook.com/share/1BxMajrgGU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                    <Facebook />
                  </a>
                  <a href="https://www.instagram.com/juliaclinic2" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] text-center max-w-sm w-full">
                <div className="aspect-square bg-white rounded-xl p-4 mb-6 flex items-center justify-center">
                  {/* QR Code Placeholder */}
                  <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)] rounded-lg flex items-center justify-center border-4 border-foreground border-dashed">
                    <Phone size={48} className="text-foreground opacity-50" />
                  </div>
                </div>
                <p className="text-lg font-medium text-white">امسح الكود للتواصل عبر واتساب</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-background py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} مركز جوليا للعناية بالبشرة والليزر. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
