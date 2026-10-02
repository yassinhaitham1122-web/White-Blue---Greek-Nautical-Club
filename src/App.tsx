import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { OrderSection } from './components/OrderSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  // Sync html dir and lang attributes when language toggles
  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }, [currentLang]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F2C59] selection:bg-[#00A8CC]/20 selection:text-[#0F2C59] flex flex-col font-sans">
      {/* Sticky Navigation Bar with Direct Call Button */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero currentLang={currentLang} />

        {/* 2. About Us & Greek Nautical Club Heritage */}
        <About currentLang={currentLang} />

        {/* 3. Menu Highlights & Signature Dishes */}
        <MenuSection currentLang={currentLang} />

        {/* 4. Experience & Vibe Gallery */}
        <GallerySection currentLang={currentLang} />

        {/* 5. Featured Guest Reviews (Google Reviews 4.2 ★) */}
        <ReviewsSection currentLang={currentLang} />

        {/* 6. Direct Order Hotline & Call Now Section (012 75888836) */}
        <OrderSection currentLang={currentLang} />

        {/* 7. Location, Hours & Interactive Map */}
        <LocationSection currentLang={currentLang} />
      </main>

      {/* 8. Footer */}
      <Footer currentLang={currentLang} />

      {/* Mobile-Only Sticky Call Now Action Bar */}
      <MobileStickyBar currentLang={currentLang} />
    </div>
  );
}
