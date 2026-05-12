/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

'use client';

export interface ICategoryItem {
  id: string;
  label: string;
  iconName: string;
}

export interface IProductItem {
  id: string;
  brand: string;
  name: string;
  rating: number;
  ratingCount: number;
  descriptionImages: string[];
  offerPrice: number;
  originalPrice: number;
  warranty: string;
  weight: string;
  inStock: boolean;
  category: string;
  image: string;
}

export interface IFooterFeature {
  iconName: string;
  label: string;
  desc: string;
}

export interface IProductSectionData {
  title: string;
  subtitle: string;
  categories: ICategoryItem[];
  products: IProductItem[];
  footerCtaTitle: string;
  footerCtaDesc: string;
  footerFeatures: IFooterFeature[];
}

export interface ProductSectionProps {
  data?: IProductSectionData | string;
}

export const defaultDataSection44: IProductSectionData = {
  title: 'পণ্যসমূহ',
  subtitle: 'আপনার পছন্দের পণ্যটি বেছে নিন',
  categories: [
    { id: 'all', label: 'সব পণ্য', iconName: 'Package' },
    { id: 'battery', label: 'ব্যাটারি', iconName: 'Battery' },
    { id: 'rickshaw', label: 'ইলেকট্রিক রিকশা', iconName: 'Truck' },
    { id: 'engine', label: 'ইঞ্জিন পার্টস', iconName: 'Settings' },
  ],
  products: [
    {
      id: 'lifepo4-pro',
      brand: 'LiFePO4 Pro',
      name: 'LiFePO4 12V 100Ah ব্যাটারি (ব্ল্যাক সিরিজ)',
      rating: 4.8,
      ratingCount: 12,
      descriptionImages: [
        'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop',
      ],
      offerPrice: 24500,
      originalPrice: 28000,
      warranty: '৩ বছর',
      weight: '১০.৫ কেজি',
      inStock: true,
      category: 'battery',
      image: 'https://i.ibb.co/bL4F59C/3.png',
    },
  ],
  footerCtaTitle: 'সেরা মূল্যে ইলেকট্রিক রিকশা ও ব্যাটারি কিনুন',
  footerCtaDesc: 'আমরা সরাসরি আমদানিকারক হিসেবে পাইকারি ও খুচরা মূল্যে উন্নত প্রযুক্তির ব্যাটারি ও ইলেকট্রিক যানবাহন বিক্রি করছি।',
  footerFeatures: [
    { iconName: 'Zap', label: 'সুপার ফাস্ট চার্জিং', desc: 'কম সময়ে পূর্ণ চার্জ' },
    { iconName: 'Clock', label: 'দীর্ঘস্থায়ী গ্যারান্টি', desc: '৩-৫ বছর নিশ্চিন্ত সেবা' },
    { iconName: 'ShieldCheck', label: 'অরিজিনাল পার্টস', desc: '১০০% গ্যারান্টিযুক্ত' },
    { iconName: 'Truck', label: 'হোম ডেলিভারি', desc: 'আপনার দরজায় পণ্য' },
  ],
};
