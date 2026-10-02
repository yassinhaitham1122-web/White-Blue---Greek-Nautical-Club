export type Language = 'en' | 'ar';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameAr: string;
  category: 'meze' | 'catch' | 'pasta' | 'calamari' | 'drinks' | 'desserts';
  categoryLabelEn: string;
  categoryLabelAr: string;
  descriptionEn: string;
  descriptionAr: string;
  price: string;
  image: string;
  badgeEn?: string;
  badgeAr?: string;
  isPopular?: boolean;
  isCatchOfDay?: boolean;
  cookingStyles?: {
    en: string[];
    ar: string[];
  };
}

export interface Review {
  id: string;
  author: string;
  authorAr?: string;
  isLocalGuide?: boolean;
  guideBadge?: string;
  rating: number;
  dateEn: string;
  dateAr: string;
  textEn: string;
  textAr: string;
  dishRecommendedEn?: string;
  dishRecommendedAr?: string;
  avatarColor: string;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'all' | 'view' | 'food' | 'vibe' | 'sunset';
  imageUrl: string;
  descriptionEn: string;
  descriptionAr: string;
}
