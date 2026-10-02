import React, { useState } from 'react';
import { X, Phone, MessageCircle, Sparkles, Check, Flame } from 'lucide-react';
import { MenuItem, Language } from '../types';
import { translations } from '../data/translations';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
  currentLang: Language;
}

export const DishModal: React.FC<DishModalProps> = ({ item, onClose, currentLang }) => {
  const [selectedStyleIndex, setSelectedStyleIndex] = useState(0);
  const t = translations[currentLang];

  if (!item) return null;

  const dishName = currentLang === 'en' ? item.nameEn : item.nameAr;
  const dishDesc = currentLang === 'en' ? item.descriptionEn : item.descriptionAr;
  const styles = currentLang === 'en' 
    ? item.cookingStyles?.en || ['Chef Standard Preparation']
    : item.cookingStyles?.ar || ['طريقة التحضير القياسية'];
  
  const selectedStyle = styles[selectedStyleIndex] || styles[0];

  const whatsappMessage = encodeURIComponent(
    currentLang === 'en'
      ? `Hello White & Blue Restaurant! I would like to order: ${item.nameEn} (${item.price}), Preparation: ${selectedStyle}. Please confirm availability.`
      : `مرحباً مطعم وايت أند بلو! أود طلب: ${item.nameAr} (${item.price})، طريقة الطهي: ${selectedStyle}. برجاء تأكيد الطلب.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label={t.menu.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-100 shrink-0">
          <img
            src={item.image}
            alt={dishName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#00A8CC] text-white text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentLang === 'en' ? item.badgeEn || item.categoryLabelEn : item.badgeAr || item.categoryLabelAr}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              {dishName}
            </h3>
            <div className="text-[#F5D77F] font-bold text-lg mt-1">
              {item.price}
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {currentLang === 'en' ? 'About this Dish' : 'عن هذا الطبق'}
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {dishDesc}
            </p>
          </div>

          {/* Cooking Styles Selector */}
          {styles.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-4 h-4 text-orange-500" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  {t.menu.cookingStyleLabel} ({currentLang === 'en' ? 'Choose preference' : 'اختر طريقتك المفضلة'})
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {styles.map((style, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedStyleIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left rtl:text-right text-xs sm:text-sm transition-all cursor-pointer ${
                      selectedStyleIndex === idx
                        ? 'border-[#00A8CC] bg-[#00A8CC]/10 text-[#0F2C59] font-bold ring-1 ring-[#00A8CC]'
                        : 'border-slate-200 hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <span>{style}</span>
                    {selectedStyleIndex === idx && (
                      <Check className="w-4 h-4 text-[#00A8CC] shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Hotline notice */}
          <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-3 text-xs sm:text-sm text-[#0F2C59]">
            <Phone className="w-4 h-4 text-[#00A8CC] shrink-0" />
            <span>
              {currentLang === 'en'
                ? 'Cooked fresh upon order. For fast takeaway preparation or dine-in orders, call our hotline directly.'
                : 'يُطهى طازجاً فور الطلب. لسرعة التجهيز للتيك أواي أو للطلب داخل المطعم، اتصل بالخط الساخن مباشرة.'}
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="tel:01275888836"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#00A8CC] hover:bg-[#0284C7] text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>{t.menu.directCall}</span>
          </a>

          <a
            href={`https://wa.me/201275888836?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.menu.whatsappOrder}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
