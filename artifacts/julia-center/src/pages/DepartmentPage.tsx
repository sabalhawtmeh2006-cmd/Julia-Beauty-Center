import React, { useEffect } from "react";
import { useParams, Link } from "wouter";
import { departments } from "@/data/departments";
import NotFound from "@/pages/not-found";
import ServiceCard from "@/components/ServiceCard";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function DepartmentPage() {
  const params = useParams();
  const slug = params.slug;
  
  const department = departments.find(d => d.slug === slug);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!department) {
    return <NotFound />;
  }

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
      transition: { duration: 0.5 }
    }
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

        {/* Content */}
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

        {department.type === 'table' && department.tableCols && department.tableData && (
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
                      <td key={j} className={`py-4 px-4 border-b border-border/50 text-muted-foreground ${j===0 ? 'font-semibold text-foreground' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>
    </div>
  );
}
