'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Menu,
  X,
  Phone,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Clock,
  ShoppingBag,
  Share2,
  Maximize2,
  ExternalLink,
  Zap,
  MapPin,
  Mail,
} from 'lucide-react';

const IMAGE_URL = 'https://i.ibb.co/bL4F59C/3.png';

interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  rating: number;
  originalPrice: number;
  offerPrice: number;
  availability: 'in_stock' | 'out_of_stock' | 'limited';
  brand: string;
  weight: string;
  warranty: string;
  features: string[];
  specs: Record<string, string>;
}

const CATEGORIES = [
  { id: 'battery', label: 'ব্যাটারি', icon: '🔋', color: 'bg-green-100 text-green-700' },
  { id: 'vehicle', label: 'ইলেকট্রিক রিকশা', icon: '🛺', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'engine_parts', label: 'ইঞ্জিন পার্টস', icon: '⚙️', color: 'bg-teal-100 text-teal-700' },
  { id: 'tires', label: 'টায়ার', icon: '🛞', color: 'bg-lime-100 text-lime-700' },
  { id: 'accessories', label: 'আনুষাঙ্গিক', icon: '🔧', color: 'bg-green-50 text-green-600' },
];

const PRODUCTS: Product[] = [
  {
    id: 'BAT-001',
    category: 'battery',
    name: 'LiFePO4 12V 100Ah ব্যাটারি (ব্ল্যাক সিরিজ)',
    description: 'উচ্চ মানের LiFePO4 (লিথিয়াম আয়রন ফসফেট) ব্যাটারি। দীর্ঘস্থায়ী সাইকেল লাইফ এবং অতি নিরাপদ কেমিস্ট্রি।',
    rating: 4.8,
    originalPrice: 28000,
    offerPrice: 24500,
    availability: 'in_stock',
    brand: 'LiFePO4 Pro',
    weight: '১০.৫ কেজি',
    warranty: '৩ বছর',
    features: ['LiFePO4 কেমিস্ট্রি', '৩০০০+ সাইকেল লাইফ', 'BMS সুরক্ষা', 'দ্রুত চার্জিং'],
    specs: { ভোল্টেজ: '১২.৮V', 'চার্জিং টাইম': '৪-৬ ঘন্টা', মাত্রা: '৩২৮×১৭২×২১৫ মিমি' },
  },
  {
    id: 'VEH-001',
    category: 'vehicle',
    name: 'লাল ইলেকট্রিক রিকশা — স্ট্যান্ডার্ড মডেল',
    description: 'শক্তিশালী মোটর ও দীর্ঘমেয়াদী ব্যাটারি সহ দৈনন্দিন যাতায়াতের জন্য সেরা পছন্দ।',
    rating: 4.7,
    originalPrice: 185000,
    offerPrice: 170000,
    availability: 'in_stock',
    brand: 'EcoRide',
    weight: '৩৫০ কেজি',
    warranty: '১ বছর',
    features: ['শক্তিশালী DC মোটর', 'আরামদায়ক আসন', 'LED লাইটিং', 'কম রক্ষণাবেক্ষণ'],
    specs: { মোটর: '৮০০W DC', রেঞ্জ: '৭০-৮০ কিমি', 'যাত্রী ধারণ': '৩ জন' },
  },
  {
    id: 'ENG-001',
    category: 'engine_parts',
    name: 'পিস্টন রিং সেট (Universal)',
    description: 'উচ্চ মানের ক্রোম-মলিবডেনাম স্টিল দিয়ে তৈরি পিস্টন রিং সেট। ইঞ্জিনের কম্প্রেশন বাড়ায়।',
    rating: 4.5,
    originalPrice: 3500,
    offerPrice: 2800,
    availability: 'limited',
    brand: 'PowerPart',
    weight: '৫০০ গ্রাম',
    warranty: '৬ মাস',
    features: ['ক্রোম-মলি স্টিল', 'তাপ প্রতিরোধী', 'উচ্চ স্থায়িত্ব'],
    specs: { মডেল: 'UNI-2024', ম্যাটেরিয়াল: 'স্টিল' },
  },
  {
    id: 'TIR-001',
    category: 'tires',
    name: 'অটোমোটিভ গ্রিপ টায়ার',
    description: 'উন্নত রাবার ম্যাটেরিয়াল দিয়ে তৈরি যা সব ধরনের রাস্তায় চমৎকার গ্রিপ প্রদান করে।',
    rating: 4.6,
    originalPrice: 5500,
    offerPrice: 4200,
    availability: 'in_stock',
    brand: 'SuperGrip',
    weight: '৪ কেজি',
    warranty: '১ বছর',
    features: ['অ্যান্টি-স্কিড', 'দীর্ঘস্থায়ী', 'ভারী লোড ক্ষমতা'],
    specs: { সাইজ: '১২ ইঞ্চি', টাইপ: 'টিউবলেস' },
  },
];

export default function FarzanaEnterprise() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide(prev => (prev + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price: number) => '৳' + price.toLocaleString('bn-BD');

  return (
    <div className="min-h-screen pt-12 bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      <main className="container mx-auto px-4 py-20">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
            <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-2">পণ্য বিভাগসমূহ</h3>
              <p className="text-slate-500">আপনার প্রয়োজনীয় ক্যাটাগরি বেছে নিন</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${selectedCategory === 'all' ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
              >
                সব পণ্য
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${selectedCategory === cat.id ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-slate-100'}`}
                >
                  <span>{cat.icon}</span> {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(product => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image src={IMAGE_URL} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      {product.offerPrice < product.originalPrice && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-lg uppercase shadow-lg">
                          -{Math.round(((product.originalPrice - product.offerPrice) / product.originalPrice) * 100)}% ছাড়
                        </span>
                      )}
                      <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-[10px] font-bold px-2 py-1 rounded-lg uppercase shadow-sm">
                        #{product.id}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md uppercase tracking-wider">{product.brand}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star size={14} fill="currentColor" /> {product.rating}
                      </div>
                    </div>
                    <h4 className="font-bold text-slate-800 text-lg mb-3 line-clamp-2 leading-snug group-hover:text-green-700 transition-colors">
                      {product.name}
                    </h4>
                    <ul className="space-y-1.5 mb-6 flex-1">
                      {product.features.slice(0, 3).map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                          <CheckCircle2 size={12} className="text-green-500" /> {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-2xl font-black text-green-700">{formatPrice(product.offerPrice)}</p>
                        {product.originalPrice > product.offerPrice && (
                          <p className="text-sm text-slate-400 line-through font-medium">{formatPrice(product.originalPrice)}</p>
                        )}
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                          product.availability === 'in_stock' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                        }`}
                      >
                        {product.availability === 'in_stock' ? 'স্টকে আছে' : 'সীমিত স্টক'}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full py-3.5 bg-slate-900 hover:bg-green-600 text-white rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Maximize2 size={16} /> বিস্তারিত দেখুন
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">কোনো পণ্য পাওয়া যায়নি</h3>
              <p className="text-slate-500 mt-2">অনুগ্রহ করে অন্য কি-ওয়ার্ড দিয়ে সার্চ করুন</p>
            </div>
          )}
        </div>

        <section className="bg-green-700 rounded-[3rem] p-8 md:p-16 overflow-hidden relative mb-20 shadow-2xl shadow-green-900/30">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <div className="h-full w-full bg-white rotate-12 -translate-y-1/2 translate-x-1/2 rounded-full" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">সেরা মূল্যে ইলেকট্রিক রিকশা ও ব্যাটারি কিনুন</h2>
              <p className="text-lg text-green-100 mb-10 max-w-lg opacity-90 leading-relaxed">
                আমরা সরাসরি আমদানিকারক হিসেবে পাইকারি ও খুচরা মূল্যে উন্নত প্রযুক্তির ব্যাটারি ও ইলেকট্রিক যানবাহন বিক্রি করছি।
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-8 py-4 bg-white text-green-800 rounded-full font-black text-lg transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2"
                >
                  অর্ডার করতে ক্লিক করুন
                </a>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-12 w-12 rounded-full border-4 border-green-700 overflow-hidden bg-slate-200">
                      <Image src={IMAGE_URL} alt="User" width={48} height={48} />
                    </div>
                  ))}
                  <div className="h-12 px-3 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white border-2 border-green-700/50">
                    ১০কে+ গ্রাহক
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Zap />, label: 'সুপার ফাস্ট চার্জিং', desc: 'কম সময়ে পূর্ণ চার্জ' },
                { icon: <Clock />, label: 'দীর্ঘস্থায়ী গ্যারান্টি', desc: '৩-৫ বছর নিশ্চিন্ত সেবা' },
                { icon: <ShieldCheck />, label: 'অরিজিনাল পার্টস', desc: '১০০% গ্যারান্টিযুক্ত' },
                { icon: <ExternalLink />, label: 'হোম ডেলিভারি', desc: 'আপনার দরজায় পণ্য' },
              ].map((f, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-all">
                  <div className="text-green-300 mb-4">{React.cloneElement(f.icon as React.ReactElement)}</div>
                  <h5 className="text-white font-bold mb-1">{f.label}</h5>
                  <p className="text-green-100/70 text-xs">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
