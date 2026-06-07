import React, { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { departments } from "@/data/departments";
import NotFound from "@/pages/not-found";
import ServiceCard from "@/components/ServiceCard";
import { ChevronRight, X, ShoppingBag, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DepartmentPage() {
  const params = useParams();
  const slug = params.slug;
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const department = departments.find(d => d.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (lightboxImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxImg]);

  if (!department) {
    return <NotFound />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-24 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        {/* Breadcrumb & Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6 font-medium">
            <ChevronRight size={20} className="ml-1" />
            العودة للرئيسية
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-foreground"
          >
            {department.name}
          </motion.h1>
          <div className="w-24 h-1 bg-primary mt-6 rounded-full opacity-80" />
        </div>

        {/* Packages Section (البكجات) */}
        {department.packages && department.packages.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-10">
              <ShoppingBag className="text-primary" size={28} />
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-foreground">البكجات</h2>
                <div className="w-16 h-1 bg-primary mt-2 rounded-full opacity-70" />
              </div>
            </div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {department.packages.map((pkg, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(189,45,95,0.18)] transition-all duration-300 group">
                    {/* Image */}
                    <div
                      className="relative cursor-pointer overflow-hidden"
                      onClick={() => setLightboxImg(pkg.imageFile)}
                      data-testid={`package-image-${idx}`}
                    >
                      <img
                        src={pkg.imageFile}
                        alt={pkg.name}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ maxHeight: "320px", objectPosition: "top" }}
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/90 text-primary font-bold px-4 py-2 rounded-full text-sm shadow">
                          اضغطي لرؤية التفاصيل
                        </span>
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-5">
                      <h3 className="text-xl font-black text-foreground mb-3">{pkg.name}</h3>
                      <div className="flex gap-4 mb-4">
                        <div className="flex-1 bg-primary/8 rounded-xl p-3 text-center">
                          <p className="text-xs text-muted-foreground mb-1">الجلسة</p>
                          <p className="font-bold text-primary text-lg">{pkg.pricePerSession}</p>
                        </div>
                        <div className="flex-1 bg-accent/20 rounded-xl p-3 text-center">
                          <p className="text-xs text-muted-foreground mb-1">3 جلسات</p>
                          <p className="font-bold text-foreground text-lg">{pkg.priceFor3}</p>
                        </div>
                      </div>
                      <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white w-full shadow-sm">
                        <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
                          احجزي الآن
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* List Content */}
        {department.type === 'list' && (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {department.services.map((service, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <ServiceCard name={service.name} price={service.price} subtitle={service.subtitle} />
                </motion.div>
              ))}
            </motion.div>

            {department.subsections && department.subsections.map((sub, sIdx) => (
              <div key={sIdx} className="mt-16">
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground">{sub.name}</h2>
                  <div className="w-20 h-1 bg-primary mt-3 rounded-full opacity-70" />
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {sub.services.map((service, idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                      <ServiceCard name={service.name} price={service.price} subtitle={service.subtitle} />
                    </motion.div>
                  ))}
                </motion.div>
                {sub.note && (
                  <div className="mt-6 flex items-start gap-3 bg-primary/8 border border-primary/20 rounded-2xl px-6 py-4">
                    <span className="text-primary mt-0.5 shrink-0">✦</span>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      <span className="font-semibold text-foreground">ملاحظة: </span>{sub.note}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* Gallery Content (dental) */}
        {department.type === 'gallery' && department.galleryImages && (
          <div>
            {/* Contact banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-primary/8 border border-primary/20 rounded-3xl px-8 py-6"
            >
              <div className="text-center sm:text-right">
                <p className="text-xl font-bold text-foreground mb-1">للاستفسار عن تفاصيل الخدمات</p>
                <p className="text-muted-foreground">تواصلي معنا مباشرة عبر واتساب وسيسعدنا الإجابة على كل أسئلتك</p>
              </div>
              <Button asChild className="shrink-0 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-5 text-lg shadow-md gap-3 flex items-center">
                <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={22} />
                  تواصلي معنا
                </a>
              </Button>
            </motion.div>

            {/* Image grid */}
            <motion.div
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
              initial="hidden"
              animate="visible"
              className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4"
            >
              {department.galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                  className="break-inside-avoid"
                >
                  <button
                    className="w-full block overflow-hidden rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(189,45,95,0.18)] transition-all duration-300 hover:scale-[1.02] focus:outline-none group"
                    onClick={() => setLightboxImg(img)}
                  >
                    <img
                      src={img}
                      alt={`نتيجة أسنان ${idx + 1}`}
                      className="w-full object-cover rounded-3xl group-hover:brightness-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Table Content */}
        {department.type === 'table' && department.tableCols && department.tableData && (
          <>
            {department.packages && department.packages.length > 0 && (
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">المناطق الفردية</h2>
                <div className="w-20 h-1 bg-primary rounded-full opacity-70 mb-8" />
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/40 backdrop-blur-md border border-white/40 rounded-3xl p-6 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-x-auto"
            >
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr>
                    {department.tableCols.map((col, i) => (
                      <th key={i} className="pb-4 px-4 text-lg font-bold text-foreground border-b border-border">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {department.tableData.map((row, i) => (
                    <tr key={i} className="group hover:bg-white/50 transition-colors">
                      {row.map((cell, j) => (
                        <td key={j} className={`py-4 px-4 border-b border-border/50 text-muted-foreground ${j === 0 ? 'font-semibold text-foreground' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <div className="mt-8 text-center">
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg shadow-md">
                <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
                  احجزي الآن عبر واتساب
                </a>
              </Button>
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxImg(null)}
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-white text-foreground shadow-lg flex items-center justify-center z-10 hover:bg-primary hover:text-white transition-colors"
                onClick={() => setLightboxImg(null)}
                data-testid="lightbox-close"
              >
                <X size={18} />
              </button>
              <img
                src={lightboxImg}
                alt="تفاصيل البكج"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
