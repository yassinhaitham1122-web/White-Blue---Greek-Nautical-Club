import React from 'react';
import { Waves, Sparkles, Fish, ShieldCheck, Star } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle nautical Greek decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00A8CC]/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Collage & Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo: Terrace with Qaitbay view */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="/src/assets/images/hero_qaitbay.jpg"
                  alt="Greek Nautical Club terrace view of Qaitbay Castle"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs sm:text-sm font-medium">
                    🌊 {currentLang === 'en' ? 'Direct view of Citadel of Qaitbay' : 'إطلالة مباشرة على قلعة قايتباي'}
                  </div>
                </div>
              </div>

              {/* Overlapping Secondary Card: Grilled Octopus / Fresh Seafood */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-2/3 rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/src/assets/images/grilled_octopus.jpg"
                    alt="Charred Mediterranean Octopus"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-3 bg-[#0F2C59] text-white">
                  <div className="text-xs font-bold text-[#00A8CC] uppercase tracking-wider">
                    {currentLang === 'en' ? 'Authentic Greek Meze' : 'مزة يونانية أصيلة'}
                  </div>
                  <div className="text-[11px] text-slate-300">
                    {currentLang === 'en' ? 'Aegean grilled octopus & feta' : 'أخطبوط مشوي وجبنة فيتا كريمية'}
                  </div>
                </div>
              </div>

              {/* Floating Google Rating Trust Card */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Star className="w-5 h-5 fill-amber-500" />
                </div>
                <div>
                  <div className="text-base font-bold text-[#0F2C59] flex items-center gap-1">
                    <span>4.2</span>
                    <span className="text-amber-500 text-xs">★★★★★</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    2,470+ {currentLang === 'en' ? 'Google Reviews' : 'تقييم على Google'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0F2C59] tracking-tight leading-tight mb-6">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {t.about.badges.map((b, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#00A8CC]/50 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-1.5 font-bold text-sm sm:text-base text-[#0F2C59]">
                    <div className="w-7 h-7 rounded-full bg-[#00A8CC]/15 flex items-center justify-center text-[#00A8CC] shrink-0">
                      {i === 0 && <Waves className="w-4 h-4" />}
                      {i === 1 && <span className="text-sm">🐙</span>}
                      {i === 2 && <Fish className="w-4 h-4" />}
                      {i === 3 && <ShieldCheck className="w-4 h-4" />}
                    </div>
                    <span>{b.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 pl-9 rtl:pl-0 rtl:pr-9">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-6 border-t border-slate-200">
              {t.about.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F2C59]">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
