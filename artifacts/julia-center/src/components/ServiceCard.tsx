import React from "react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  name: string;
  price?: string;
}

export default function ServiceCard({ name, price = "---" }: ServiceCardProps) {
  return (
    <div className="bg-white/40 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(189,45,95,0.15)] group">
      <div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-muted-foreground mt-1">السعر: <span className="font-semibold text-primary">{price}</span> دينار</p>
      </div>
      <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white px-6 w-full sm:w-auto shadow-sm">
        <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
          احجزي الآن
        </a>
      </Button>
    </div>
  );
}
