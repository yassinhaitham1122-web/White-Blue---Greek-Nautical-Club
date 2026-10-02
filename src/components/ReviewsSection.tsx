import React, { useState } from 'react';
import { Star, ShieldCheck, ExternalLink, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Language } from '../types';
import { reviewsData } from '../data/reviewsData';
import { translations } from '../data/translations';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const t = translations[currentLang];

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0F2C59] text-white relative overflow-hidden">
      {/* Background nautical pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-greek-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header & Google Rating Scoreboard */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A8CC]/20 text-[#00A8CC] text-xs font-bold tracking-wider uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-[#00A8CC]" />
              <span>{t.reviews.badge}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              {t.reviews.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              {t.reviews.basedOn}
            </p>
          </div>

          {/* Google Official Rating Badge */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex flex-col sm:flex-row items-center gap-6 shadow-xl shrink-0">
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold text-white">4.2</span>
                  <div className="flex text-amber-400">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                    <div className="relative">
                      <Star className="w-5 h-5 text-white/30" />
                      <div className="absolute inset-0 overflow-hidden w-[20%]">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-300 font-medium">
                  {t.reviews.basedOn}
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=6V6M%2BWF+Al+Gomrok+Alexandria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-colors whitespace-nowrap"
            >
              <span>{t.reviews.viewOnGoogle}</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#00A8CC]" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviewsData.slice(0, 3).map((rev) => {
            const author = currentLang === 'en' ? rev.author : rev.authorAr || rev.author;
            const text = currentLang === 'en' ? rev.textEn : rev.textAr;
            const date = currentLang === 'en' ? rev.dateEn : rev.dateAr;
            const dish = currentLang === 'en' ? rev.dishRecommendedEn : rev.dishRecommendedAr;

            return (
              <div
                key={rev.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors"
              >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${rev.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                        {author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-1.5">
                          <span>{author}</span>
                          {rev.isLocalGuide && (
                            <span className="w-3.5 h-3.5 text-amber-400" title="Google Local Guide">
                              ★
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-300">
                          {rev.guideBadge || (currentLang === 'en' ? 'Verified Diner' : 'زائر معتمد')} · {date}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-6 h-6 text-[#00A8CC]/40" />
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-4">
                    "{text}"
                  </p>
                </div>

                {/* Highlighted Dish recommendation */}
                {dish && (
                  <div className="pt-3 border-t border-white/10 text-xs text-[#00A8CC]">
                    <span className="text-slate-400">{currentLang === 'en' ? 'Recommended: ' : 'الأطباق المفضلة: '}</span>
                    <span className="font-semibold text-slate-200">{dish}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Testimonials Carousel */}
        <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-white font-medium leading-relaxed italic mb-6">
              "{currentLang === 'en' ? reviewsData[activeReviewIndex].textEn : reviewsData[activeReviewIndex].textAr}"
            </p>

            <div className="flex flex-col items-center">
              <span className="font-bold text-white text-base">
                {currentLang === 'en' ? reviewsData[activeReviewIndex].author : reviewsData[activeReviewIndex].authorAr || reviewsData[activeReviewIndex].author}
              </span>
              <span className="text-xs text-[#00A8CC] mt-0.5">
                {reviewsData[activeReviewIndex].guideBadge || (currentLang === 'en' ? 'Google Reviewer' : 'تقييم Google')}
              </span>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-1.5">
                {reviewsData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReviewIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeReviewIndex === i ? 'w-6 bg-[#00A8CC]' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
