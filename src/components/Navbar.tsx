import React, { useState, useEffect } from 'react';
import { Phone, Globe, Menu as MenuIcon, X, Anchor, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#menu', label: t.nav.menu },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#order', label: t.nav.orderNow },
    { href: '#location', label: t.nav.location },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0F2C59]/95 backdrop-blur-md shadow-lg border-b border-[#00A8CC]/20 py-2.5'
          : 'bg-gradient-to-b from-[#0F2C59]/90 via-[#0F2C59]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Nautical Club Crest */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8CC] rounded-lg p-1">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#00A8CC] to-[#0F2C59] border-2 border-white/80 flex items-center justify-center text-white shadow-md shadow-black/20 group-hover:scale-105 transition-transform">
              <Anchor className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                  {currentLang === 'en' ? 'WHITE & BLUE' : 'وايت أند بلو'}
                </span>
                <span className="text-[#00A8CC] text-xs font-semibold px-1.5 py-0.5 border border-[#00A8CC]/40 rounded bg-[#00A8CC]/10">
                  {currentLang === 'en' ? 'GREEK CLUB' : 'النادي اليوناني'}
                </span>
              </div>
              <span className="text-[11px] sm:text-xs text-slate-300 font-light tracking-wide">
                {currentLang === 'en'
                  ? 'Greek Nautical Club · Alexandria'
                  : 'النادي البحري اليوناني · الإسكندرية'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#00A8CC] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8CC]"
              title={currentLang === 'en' ? 'التحويل إلى العربية' : 'Switch to English'}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00A8CC]" />
              <span>{currentLang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Direct Call Button (Desktop) */}
            <a
              href="tel:01275888836"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00A8CC] hover:bg-[#0284C7] text-white text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95 group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>{t.nav.callUs}: 012 75888836</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#0F2C59] rounded-xl border border-white/10 shadow-2xl text-white animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="tel:01275888836"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#00A8CC] text-white font-bold text-sm shadow active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Call Now: 012 75888836' : 'اتصل للطلب الآن: 012 75888836'}</span>
              </a>

              <a
                href="https://wa.me/201275888836?text=Hello%20White%20%26%20Blue!%20I%20would%20like%20to%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
