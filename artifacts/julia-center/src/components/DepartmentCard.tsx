import React from "react";
import { Link } from "wouter";
import * as Icons from "lucide-react";

interface DepartmentCardProps {
  name: string;
  slug: string;
  iconName: string;
}

export default function DepartmentCard({ name, slug, iconName }: DepartmentCardProps) {
  // Dynamically resolve icon, fallback to Sparkles
  const IconComponent = (Icons as any)[iconName] || Icons.Sparkles;

  return (
    <Link href={`/departments/${slug}`} className="block">
      <div className="bg-white/40 backdrop-blur-md border border-white/40 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(189,45,95,0.15)] group cursor-pointer text-center h-full aspect-square md:aspect-auto">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <IconComponent size={32} strokeWidth={1.5} />
        </div>
 <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
      </div>
    </Link>
  );
}
