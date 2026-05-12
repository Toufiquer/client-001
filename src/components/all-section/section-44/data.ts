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
  features?: string[];
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
    { id: 'tyre', label: 'টায়ার ও চাকা', iconName: 'Disc' },
    { id: 'lubricant', label: 'লুব্রিকেন্ট', iconName: 'Droplets' },
    { id: 'electrical', label: 'ইলেকট্রিক্যাল', iconName: 'Zap' },
    { id: 'accessories', label: 'আনুষাঙ্গিক', iconName: 'Wrench' },
    { id: 'tools', label: 'সরঞ্জাম', iconName: 'PenTool' },
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
      image: 'https://placehold.co/400?text=No+Image',
      features: ['LiFePO4 কেমিস্ট্রি', '৩০০০+ সাইকেল লাইফ', 'BMS সুরক্ষা সহ'],
    },
    {
      id: 'silverpack',
      brand: 'SilverPack',
      name: 'লিথিয়াম প্যাক সিলভার সিরিজ (Top Label)',
      rating: 4.6,
      ratingCount: 15,
      descriptionImages: [],
      offerPrice: 19000,
      originalPrice: 22000,
      warranty: '২ বছর',
      weight: '১২ কেজি',
      inStock: true,
      category: 'battery',
      image: 'https://placehold.co/400?text=No+Image',
      features: ['হাই ডিসচার্জ রেট', 'সিলভার অ্যালয় টার্মিনাল', 'কম্প্যাক্ট ডিজাইন'],
    },
    {
      id: 'powerhandle',
      brand: 'PowerHandle',
      name: 'লিথিয়াম প্যাক - হ্যান্ডেল ও টার্মিনাল সিরিজ',
      rating: 4.5,
      ratingCount: 20,
      descriptionImages: [],
      offerPrice: 17500,
      originalPrice: 20000,
      warranty: '২ বছর',
      weight: '১১ কেজি',
      inStock: true,
      category: 'battery',
      image: 'https://placehold.co/400?text=No+Image',
      features: ['বলয়যুক্ত হ্যান্ডেল', 'মজবুত টার্মিনাল', 'ওয়াটারপ্রুফ কেসিং'],
    },
    {
      id: 'bluepower',
      brand: 'BluePower',
      name: 'লিথিয়াম প্যাক ব্লু ফ্রন্ট লেবেল',
      rating: 4.4,
      ratingCount: 10,
      descriptionImages: [],
      offerPrice: 17000,
      originalPrice: 18500,
      warranty: '২ বছর',
      weight: '১০.৫ কেজি',
      inStock: true,
      category: 'battery',
      image: 'https://placehold.co/400?text=No+Image',
      features: ['হাই-টেম্পারেচার সহনশীল', 'দ্রুত চার্জিং', 'লং সাইকেল লাইফ'],
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
