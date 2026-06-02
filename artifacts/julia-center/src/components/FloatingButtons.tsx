import React from "react";
import { MessageCircle, Phone, Instagram, Facebook } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a 
        href="https://www.facebook.com/share/1BxMajrgGU/?mibextid=wwXIfr" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </a>
      
      <a 
        href="https://www.instagram.com/juliaclinic2" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
      
      <a 
        href="tel:+962770754031" 
        className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Us"
      >
        <Phone size={24} />
      </a>
      
      <a 
        href="https://wa.me/962770754031" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
