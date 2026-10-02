import React from 'react';
import { Phone, Clock, MapPin, CheckCircle, MessageCircle, Utensils, Sparkles, ChefHat } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface OrderSectionProps {
  currentLang: Language;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section id="order" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold tracking-wider uppercase mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>{t.orderSection.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2C59] tracking-tight mb-4">
            {t.orderSection.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.orderSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: VIP Call Now & WhatsApp Action Box */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#0F2C59] via-[#1A365D] to-[#0F2C59] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-[#00A8CC]/30 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#00A8CC]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00A8CC] text-xs font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.orderSection.hotlineLabel}</span>
              </div>

              <div>
                <a
                  href="tel:01275888836"
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wider hover:text-[#00A8CC] transition-colors inline-block"
                >
                  012 75888836
                </a>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  {currentLang === 'en'
                    ? 'Available daily for fresh seafood orders, market catch inquiries, and takeaway pick-up.'
                    : 'متاح يومياً لطلب المأكولات البحرية الطازجة، معرفة صيد اليوم، وطلبات التيك أواي.'}
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:01275888836"
                  className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#00A8CC] hover:bg-[#0284C7] text-white font-extrabold text-base shadow-xl shadow-cyan-950/30 transition-all hover:scale-105 active:scale-95 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>{t.orderSection.callNow}</span>
                </a>

                <a
                  href="https://wa.me/201275888836?text=Hello%20White%20%26%20Blue!%20I%20would%20like%20to%20order%20fresh%20seafood."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.orderSection.whatsappUs}</span>
                </a>
              </div>
            </div>

            {/* Bottom Service Badges */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-[#00A8CC]" />
                <span>{t.orderSection.serviceDineIn}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{t.orderSection.serviceTakeaway}</span>
              </span>
            </div>
          </div>

          {/* Right Column: How to Order & Ordering Guidelines */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#00A8CC]/10 text-[#00A8CC] flex items-center justify-center">
                  <ChefHat className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F2C59]">
                  {t.orderSection.howToOrderTitle}
                </h3>
              </div>

              {/* Steps */}
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#0F2C59] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F2C59] mb-0.5">
                      {currentLang === 'en' ? 'Direct Phone Call' : 'اتصال هاتفي مباشر'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t.orderSection.step1}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-[#00A8CC] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F2C59] mb-0.5">
                      {currentLang === 'en' ? 'Choose Fresh Catch & Cooking Style' : 'اختر صيدك وطريقة الطهي المفضلة'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t.orderSection.step2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F2C59] mb-0.5">
                      {currentLang === 'en' ? 'Fresh Preparation & Serving' : 'طهي طازج فوري واستلام سهل'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {t.orderSection.step3}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Note */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-[#00A8CC]" />
                <span>{t.orderSection.hoursDetails}</span>
              </div>

              <a
                href="tel:01275888836"
                className="text-xs font-bold text-[#00A8CC] hover:underline"
              >
                {currentLang === 'en' ? 'Call Now →' : 'اتصل الآن ←'}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
