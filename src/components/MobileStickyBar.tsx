import React from 'react';
import { Phone, MessageCircle, Utensils } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MobileStickyBarProps {
  currentLang: Language;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F2C59]/95 backdrop-blur-md border-t border-[#00A8CC]/30 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
        
        {/* Main Call Now / Order Button (Big & Prominent) */}
        <a
          href="tel:01275888836"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#00A8CC] active:bg-[#0284C7] text-white font-extrabold text-sm shadow-lg transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 animate-bounce shrink-0" />
          <div className="flex items-center gap-1.5 leading-tight">
            <span>{currentLang === 'en' ? 'Call Now' : 'اتصل للطلب'}</span>
            <span className="tracking-wider">012 75888836</span>
          </div>
        </a>

        {/* WhatsApp Quick Order */}
        <a
          href="https://wa.me/201275888836?text=Hello%20White%20%26%20Blue!%20I%20would%20like%20to%20order."
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow transition-all active:scale-95"
          aria-label="WhatsApp Order"
          title="WhatsApp Order"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Menu Quick Anchor */}
        <a
          href="#menu"
          className="p-3 rounded-xl bg-white/10 active:bg-white/20 text-white flex items-center justify-center shrink-0 border border-white/20 transition-all active:scale-95"
          aria-label="View Menu"
          title="Menu"
        >
          <Utensils className="w-5 h-5 text-[#00A8CC]" />
        </a>

      </div>
    </div>
  );
};
