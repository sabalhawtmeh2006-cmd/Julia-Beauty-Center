import React from "react";
import { motion } from "framer-motion";
import { departments } from "@/data/departments";
import DepartmentCard from "@/components/DepartmentCard";

export default function DepartmentsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background pt-28 pb-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            مركز جوليا
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-foreground mb-4"
          >
            خدمات وأقسام المركز
          </motion.h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full opacity-80 mb-4" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            اختاري القسم الذي تودّين التعرف على خدماته وأسعاره
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {departments.map((dept) => (
            <motion.div key={dept.id} variants={itemVariants}>
              <DepartmentCard name={dept.name} slug={dept.slug} iconName={dept.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
