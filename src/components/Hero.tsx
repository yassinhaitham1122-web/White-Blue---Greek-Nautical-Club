import React, { useState, useEffect } from 'react';
import { Phone, Utensils, MessageCircle, Waves, Fish, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  currentLang: Language;
}

const heroSlides = [
  {
    image: '/src/assets/images/hero_qaitbay.jpg',
    tagEn: 'Historic Qaitbay Panoramic View',
    tagAr: 'إطلالة بانورامية على قلعة قايتباي التاريخية',
  },
  {
    image: '/src/assets/images/seafood_platter.jpg',
    tagEn: 'Catch of the Day Cooked to Order',
    tagAr: 'صيد اليوم طازج ومطهو حسب اختيارك',
  },
  {
    image: '/src/assets/images/sunset_qaitbay.jpg',
    tagEn: 'Golden Sunset at the Eastern Harbor',
    tagAr: 'سحر الغروب الذهبي بالميناء الشرقي',
  }
];

export const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[currentLang];

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#0F2C59]">
      {/* Background Image Carousel with Ken Burns subtle animation */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={currentLang === 'en' ? slide.tagEn : slide.tagAr}
            className="w-full h-full object-cover object-center filter brightness-[0.78]"
          />
        </div>
      ))}

      {/* Layered Gradient Overlays for High-Contrast Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59] via-[#0F2C59]/40 to-[#0F2C59]/80" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#0F2C59]/30 to-[#0F2C59]/90" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 lg:pt-32 lg:pb-24">
        
        {/* Heritage Tagline & Live Open Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wide shadow-sm">
            <Compass className="w-4 h-4 text-[#00A8CC] animate-spin-slow" />
            <span>{t.hero.tagline}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t.hero.openStatusOpen}</span>
          </div>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.18] mb-6 drop-shadow-md">
          {currentLang === 'en' ? (
            <>
              Authentic Greek & <span className="text-[#00A8CC]">Mediterranean Seafood</span> With a Panoramic Harbor View
            </>
          ) : (
            <>
              مأكولات بحرية يونانية و<span className="text-[#00A8CC]">متوسطية أصيلة</span> مع إطلالة بانورامية على الميناء
            </>
          )}
        </h1>

        {/* Sub-headline description */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-10 drop-shadow">
          {t.hero.subheadline}
        </p>

        {/* Action CTAs: Direct Call Now & Order */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto mb-14">
          {/* Order Hotline Call */}
          <a
            href="tel:01275888836"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#00A8CC] hover:bg-[#0284C7] text-white font-bold text-base shadow-xl shadow-cyan-900/40 hover:scale-105 active:scale-95 transition-all group"
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>{t.hero.ctaOrder}</span>
          </a>

          {/* WhatsApp Quick Order */}
          <a
            href="https://wa.me/201275888836?text=Hello%20White%20%26%20Blue!%20I%20would%20like%20to%20order%20fresh%20seafood."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.hero.ctaWhatsApp}</span>
          </a>

          {/* Explore Menu Scroll */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-base backdrop-blur-sm border border-white/20 transition-all hover:border-white/40"
          >
            <Utensils className="w-4 h-4 text-[#00A8CC]" />
            <span>{t.hero.ctaMenu}</span>
          </a>
        </div>

        {/* Key Highlight Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 border-t border-white/10 text-left">
          {/* Badge 1 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00A8CC]/20 flex items-center justify-center shrink-0 text-[#00A8CC]">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                {t.hero.highlights[0].title}
              </div>
              <div className="text-slate-300 text-xs">
                {t.hero.highlights[0].desc}
              </div>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00A8CC]/20 flex items-center justify-center shrink-0 text-[#00A8CC]">
              <span className="text-lg">🐙</span>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                {t.hero.highlights[1].title}
              </div>
              <div className="text-slate-300 text-xs">
                {t.hero.highlights[1].desc}
              </div>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00A8CC]/20 flex items-center justify-center shrink-0 text-[#00A8CC]">
              <Fish className="w-5 h-5" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                {t.hero.highlights[2].title}
              </div>
              <div className="text-slate-300 text-xs">
                {t.hero.highlights[2].desc}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Dots & Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-3">
        <button
          onClick={prevSlide}
          className="p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all rounded-full ${
              currentSlide === index ? 'w-8 bg-[#00A8CC]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        <button
          onClick={nextSlide}
          className="p-1.5 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
