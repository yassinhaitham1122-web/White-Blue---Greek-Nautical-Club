import React, { useState } from 'react';
import { Phone, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { MenuItem, Language } from '../types';
import { menuItems } from '../data/menuData';
import { translations } from '../data/translations';
import { DishModal } from './DishModal';

interface MenuSectionProps {
  currentLang: Language;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const t = translations[currentLang];

  const filterTabs = [
    { id: 'all', label: t.menu.filterAll },
    { id: 'meze', label: t.menu.filterMeze },
    { id: 'catch', label: t.menu.filterCatch },
    { id: 'pasta', label: t.menu.filterPasta },
    { id: 'calamari', label: t.menu.filterCalamari },
    { id: 'drinks', label: t.menu.filterDrinks },
  ];

  const filteredItems = activeTab === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeTab);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A8CC]/10 text-[#00A8CC] text-xs font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.menu.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F2C59] tracking-tight mb-4">
            {t.menu.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scrollbar-none no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#0F2C59] text-white shadow-md shadow-blue-950/20'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {filteredItems.map((item) => {
            const name = currentLang === 'en' ? item.nameEn : item.nameAr;
            const desc = currentLang === 'en' ? item.descriptionEn : item.descriptionAr;
            const badge = currentLang === 'en' ? item.badgeEn : item.badgeAr;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedDish(item)}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-[#00A8CC]/40 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Dish Photo */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Badge */}
                  {badge && (
                    <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3 bg-[#0F2C59]/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                      {badge}
                    </div>
                  )}

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 rtl:right-auto rtl:left-3 bg-white/95 backdrop-blur-sm text-[#0F2C59] text-xs sm:text-sm font-extrabold px-3 py-1 rounded-lg shadow-md border border-slate-100">
                    {item.price}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F2C59] group-hover:text-[#00A8CC] transition-colors mb-2 line-clamp-1">
                      {name}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                      {desc}
                    </p>
                  </div>

                  {/* Card Action footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#00A8CC] flex items-center gap-1 group-hover:underline">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.menu.details}</span>
                    </span>

                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <span>{t.menu.orderNow}</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prominent CTA Callout */}
        <div className="bg-gradient-to-r from-[#0F2C59] via-[#1A365D] to-[#0F2C59] rounded-2xl p-6 sm:p-10 text-white shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden border border-[#00A8CC]/30">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00A8CC]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              {t.menu.callToAction}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6">
              {t.menu.callToActionSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:01275888836"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#00A8CC] hover:bg-[#0284C7] text-white font-bold text-base shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>012 75888836</span>
              </a>

              <a
                href="https://wa.me/201275888836?text=Hello%20White%20%26%20Blue%20Greek%20Nautical%20Club!%20I%20would%20like%20to%20place%20a%20seafood%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-base border border-white/20 transition-colors"
              >
                <span>{t.menu.whatsappOrder}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Dish Detail Modal */}
      <DishModal
        item={selectedDish}
        onClose={() => setSelectedDish(null)}
        currentLang={currentLang}
      />
    </section>
  );
};
