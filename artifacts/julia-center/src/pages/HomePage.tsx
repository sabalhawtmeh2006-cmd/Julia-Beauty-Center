import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { departments } from "@/data/departments";
import DepartmentCard from "@/components/DepartmentCard";
import { MapPin, Phone, Instagram, Facebook, Star, Clock, Send } from "lucide-react";

export default function HomePage() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleSubmitReview = () => {
    if (!rating) return;
    const stars = "⭐".repeat(rating);
    const name = reviewName.trim() || "زبونة كريمة";
    const text = reviewText.trim();
    const msg = encodeURIComponent(
      `تقييم جديد من ${name}\n${stars} (${rating}/5)\n${text ? `\nالتعليق: ${text}` : ""}`
    );
    window.open(`https://wa.me/962770754031?text=${msg}`, "_blank");
    setSubmitted(true);
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
              مركز جوليا <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">للعناية بالبشرة والليزر</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              أهلاً بكم في مركز جوليا، وجهتكم المتخصصة للعناية بالبشرة، الليزر، التجميل، التغذية والأظافر بخدمات احترافية ونتائج مميزة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl w-full sm:w-auto transition-all">
                <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
                  احجزي الآن عبر واتساب
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg border-primary/20 text-primary hover:bg-primary/5 w-full sm:w-auto transition-all bg-white/50 backdrop-blur-sm"
                onClick={() => {
                  document.getElementById("feedback")?.scrollIntoView({ behavior: "smooth" });
                }}
                data-testid="button-feedback"
              >
                اتركي تقييمك
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-[50px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background" />
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
                <DepartmentCard name={dept.name} slug={dept.slug} iconName={dept.icon} />
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
            <p className="text-xl leading-loose text-muted-foreground mb-8">
              مركز جوليا هو مركز متخصص في العناية بالبشرة والليزر يقع في قلب الزرقاء. نفخر بتقديم أعلى مستويات الرعاية والخدمات التجميلية المتكاملة التي تشمل العناية المتقدمة بالبشرة، إزالة الشعر بالليزر بأحدث الأجهزة، الحقن التجميلي (فيلر وبوتوكس)، برامج التغذية المتخصصة، والعناية الاحترافية بالأظافر. فريقنا من الخبراء مكرس لإبراز جمالك الطبيعي وتوفير تجربة فاخرة تمنحك الثقة والنتائج التي تطمحين إليها.
            </p>
            <div className="flex items-center justify-center gap-3 bg-primary/8 border border-primary/15 rounded-2xl px-6 py-4 inline-flex">
              <Clock size={20} className="text-primary shrink-0" />
              <p className="text-foreground font-semibold">
                أوقات الدوام: يومياً ما عدا الجمعة — من الساعة 9 صباحاً حتى 5 مساءً
              </p>
            </div>
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
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" />
                  </div>
                  <span dir="ltr">+962 770 754 031</span>
                </a>
                <div className="flex items-center gap-4 text-xl">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <span>الزرقاء - جبل طارق - قرب دوار البقيع</span>
                </div>
                <div className="flex items-center gap-4 text-xl">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="text-primary" />
                  </div>
                  <span>يومياً ما عدا الجمعة، 9 صباحاً — 5 مساءً</span>
                </div>
                <div className="flex gap-4 pt-4">
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
                <div className="bg-white rounded-2xl p-4 mb-6 flex items-center justify-center">
                  <img
                    src="/julia-qr.png"
                    alt="QR Code مركز جوليا"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <p className="text-lg font-medium text-white">امسح الكود لزيارة موقع المركز</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback / Rating Section */}
      <section id="feedback" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">اتركي تقييمك</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-80" />
            <p className="text-muted-foreground mt-4 text-lg">رأيك يهمنا — شاركينا تجربتك مع مركز جوليا</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/50 backdrop-blur-md border border-white/40 rounded-3xl p-12 text-center shadow-xl"
              >
                <div className="text-5xl mb-4">🌸</div>
                <h3 className="text-2xl font-black text-foreground mb-2">شكراً لك!</h3>
                <p className="text-muted-foreground text-lg">تم إرسال تقييمك، نقدّر ثقتك بمركز جوليا.</p>
                <Button
                  className="mt-6 rounded-full bg-primary text-white px-8"
                  onClick={() => { setSubmitted(false); setRating(0); setReviewName(""); setReviewText(""); }}
                >
                  إرسال تقييم آخر
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 backdrop-blur-md border border-white/40 rounded-3xl p-8 md:p-12 shadow-xl"
              >
                {/* Star Rating */}
                <div className="text-center mb-8">
                  <p className="text-foreground font-bold text-xl mb-4">كيف كانت تجربتك؟</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-125 active:scale-110"
                        data-testid={`star-${star}`}
                      >
                        <Star
                          size={40}
                          className={`transition-colors ${
                            star <= (hoverRating || rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-primary font-semibold mt-2 text-sm">
                      {["", "ضعيف", "مقبول", "جيد", "جيد جداً", "ممتاز"][rating]}
                    </p>
                  )}
                </div>

                {/* Name */}
                <div className="mb-4">
                  <label className="block text-foreground font-semibold mb-2 text-right">اسمك (اختياري)</label>
                  <input
                    type="text"
                    value={reviewName}
                    onChange={e => setReviewName(e.target.value)}
                    placeholder="مثال: سارة"
                    className="w-full rounded-xl border border-border bg-white/60 px-4 py-3 text-right text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                    data-testid="input-review-name"
                  />
                </div>

                {/* Comment */}
                <div className="mb-6">
                  <label className="block text-foreground font-semibold mb-2 text-right">تعليقك (اختياري)</label>
                  <textarea
                    value={reviewText}
                    onChange={e => setReviewText(e.target.value)}
                    placeholder="شاركينا تجربتك مع خدماتنا..."
                    rows={4}
                    className="w-full rounded-xl border border-border bg-white/60 px-4 py-3 text-right text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    data-testid="textarea-review-comment"
                  />
                </div>

                <Button
                  onClick={handleSubmitReview}
                  disabled={!rating}
                  className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-bold shadow-md disabled:opacity-40"
                  data-testid="button-submit-review"
                >
                  <Send size={18} className="ml-2" />
                  إرسال التقييم عبر واتساب
                </Button>
                {!rating && (
                  <p className="text-center text-muted-foreground text-sm mt-3">اختاري عدد النجوم أولاً</p>
                )}
              </motion.div>
            )}
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
