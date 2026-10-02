import React from 'react';
import { MapPin, Navigation, Phone, Clock, ExternalLink, ShieldCheck, Compass } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LocationSectionProps {
  currentLang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="location" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.location.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2C59] tracking-tight mb-4">
            {t.location.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.location.landmark}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Details & Quick Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
            <div className="space-y-6">
              
              {/* Address item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00A8CC]/15 text-[#00A8CC] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F2C59]">
                    {t.location.addressTitle}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    {t.location.addressText}
                  </p>
                  <div className="inline-block mt-2 px-2.5 py-1 rounded bg-slate-200/80 text-[#0F2C59] text-xs font-mono font-semibold">
                    {t.location.plusCode}
                  </div>
                </div>
              </div>

              {/* Hours item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F2C59]">
                    {t.orderSection.openingHoursTitle}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1">
                    {t.orderSection.hoursDetails}
                  </p>
                  <p className="text-emerald-600 text-xs font-semibold mt-1">
                    ● {currentLang === 'en' ? 'Open daily 7 days a week' : 'مفتوح طوال أيام الأسبوع'}
                  </p>
                </div>
              </div>

              {/* Contact item */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F2C59]">
                    {currentLang === 'en' ? 'Direct Order Hotline' : 'الخط الساخن المباشر للطلب'}
                  </h3>
                  <a
                    href="tel:01275888836"
                    className="inline-block text-base sm:text-lg font-bold text-[#00A8CC] hover:underline mt-1"
                  >
                    012 75888836
                  </a>
                </div>
              </div>

              {/* Landmark proximity info */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
                <div className="font-bold text-[#0F2C59] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00A8CC]" />
                  <span>{currentLang === 'en' ? 'How to Reach Us:' : 'كيفية الوصول للمطعم:'}</span>
                </div>
                <p>
                  {currentLang === 'en'
                    ? 'Enter the Greek Nautical Club gate directly next to the Citadel of Qaitbay esplanade. Valet parking attendants are stationed at the main entrance.'
                    : 'ادخل من بوابة النادي البحري اليوناني الملاصقة لساحة قلعة قايتباي مباشرة. يتوفر موظفو صف السيارات (فاليه) أمام المدخل الرئيسي.'}
                </p>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?q=6V6M%2BWF+Al+Gomrok+Alexandria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#00A8CC] hover:bg-[#0284C7] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>{t.location.getDirections}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href="tel:01275888836"
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F2C59] hover:bg-[#1A365D] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{t.location.callUs}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map Component with Realistic Harbor Visual */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative min-h-[380px] bg-slate-100 flex flex-col">
            
            {/* Map Header Overlay */}
            <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <div className="bg-[#0F2C59]/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white text-xs font-semibold shadow-md flex items-center gap-2 pointer-events-auto">
                <MapPin className="w-4 h-4 text-[#00A8CC]" />
                <span>6V6M+WF Al Gomrok · Greek Nautical Club</span>
              </div>
              <a
                href="https://maps.google.com/?q=6V6M%2BWF+Al+Gomrok+Alexandria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/95 hover:bg-white text-[#0F2C59] px-3 py-1.5 rounded-lg text-xs font-bold shadow-md transition-all pointer-events-auto flex items-center gap-1"
              >
                <span>{currentLang === 'en' ? 'Open Full Map' : 'الخريطة الكاملة'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#00A8CC]" />
              </a>
            </div>

            {/* Embedded Live Google Maps Iframe */}
            <iframe
              title="White & Blue Greek Nautical Club Alexandria Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.378952445657!2d29.883389!3d31.213567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ef27cbb029%3A0xe541cfc3e5361301!2sWhite%20and%20Blue%20Restaurant!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
              className="w-full h-full min-h-[380px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map bottom bar banner */}
            <div className="p-3 bg-[#0F2C59] text-white flex flex-col sm:flex-row items-center justify-between text-xs gap-2">
              <span className="text-slate-300">
                📍 {currentLang === 'en' ? 'Directly on the Alexandrian Eastern Harbor waterfront' : 'مباشرة على واجهة الميناء الشرقي بالإسكندرية'}
              </span>
              <a
                href="https://maps.google.com/?q=6V6M%2BWF+Al+Gomrok+Alexandria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00A8CC] hover:underline font-bold"
              >
                {currentLang === 'en' ? 'Navigate with GPS →' : 'التنقل عبر GPS ←'}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
