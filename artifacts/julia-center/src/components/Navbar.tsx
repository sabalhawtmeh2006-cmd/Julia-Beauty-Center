import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "/" },
    { label: "أقسام المركز", href: "/#departments" },
    { label: "من نحن", href: "/#about" },
    { label: "خدماتنا وأسعارنا", href: "/#departments" },
    { label: "موقعنا", href: "/#contact" },
    { label: "تواصل معنا", href: "/#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-white/20 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary tracking-wide">
            J<span className="text-foreground">ulia</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
              احجزي الآن
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/20 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full rounded-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="https://wa.me/962770754031" target="_blank" rel="noopener noreferrer">
              احجزي الآن عبر واتساب
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
