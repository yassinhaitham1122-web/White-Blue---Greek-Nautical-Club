import React from 'react';
import { Phone, MapPin, Clock, Anchor, Facebook, Instagram, Heart, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1D3A] text-white pt-16 pb-24 md:pb-12 border-t border-[#00A8CC]/20 relative overflow-hidden">
      {/* Decorative Aegean Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00A8CC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A8CC] to-[#0F2C59] border border-white/60 flex items-center justify-center text-white shadow-md">
                <Anchor className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold tracking-wider">
                  {currentLang === 'en' ? 'WHITE & BLUE' : 'وايت أند بلو'}
                </h3>
                <span className="text-xs text-[#00A8CC] font-semibold tracking-wide">
                  {currentLang === 'en' ? 'Greek Nautical Club · Alexandria' : 'النادي البحري اليوناني · الإسكندرية'}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {t.footer.description}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00A8CC] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00A8CC] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-[#00A8CC] transition-colors">{t.nav.home}</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00A8CC] transition-colors">{t.nav.about}</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#00A8CC] transition-colors">{t.nav.menu}</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#00A8CC] transition-colors">{t.nav.gallery}</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#00A8CC] transition-colors">{t.nav.reviews}</a>
              </li>
              <li>
                <a href="#order" className="hover:text-[#00A8CC] transition-colors">{t.nav.orderNow}</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#00A8CC] transition-colors">{t.nav.location}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Order Hotline */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.contactInfo}
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A8CC]/20 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">{currentLang === 'en' ? 'Direct Hotline & Orders' : 'الخط الساخن للطلب والحجز'}</div>
                  <a href="tel:01275888836" className="text-white hover:text-[#00A8CC] font-bold text-base">
                    012 75888836
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A8CC]/20 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">{currentLang === 'en' ? 'Location' : 'العنوان'}</div>
                  <span className="text-slate-300">
                    {t.location.addressText} ({t.location.plusCode})
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00A8CC]/20 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-slate-400 text-xs">{t.footer.hours}</div>
                  <span className="text-slate-300">
                    {t.orderSection.hoursDetails}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>{currentLang === 'en' ? 'Authentic Seafood by the Citadel' : 'أشهى المأكولات البحرية بجوار القلعة'}</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
