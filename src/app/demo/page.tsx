'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
  Check,
  Eye,
  Share2,
  Package,
  Battery,
  Settings,
  Disc,
  Droplets,
  Zap,
  Wrench,
  Hammer,
  Truck,
  Scale,
  Clock,
  ShieldCheck,
  ExternalLink,
  X,
  Copy,
  Facebook,
  Twitter,
  MessageCircle,
  Linkedin,
  Menu,
} from 'lucide-react';
import Image from 'next/image';

interface Product {
  id: string;
  brand: string;
  name: string;
  rating: number;
  ratingCount: number;
  features: string[];
  offerPrice: number;
  originalPrice: number;
  warranty: string;
  weight: string;
  inStock: boolean;
  category: string;
}

const CATEGORIES = [
  { id: 'all', label: 'সব পণ্য', icon: <Package size={18} /> },
  { id: 'battery', label: 'ব্যাটারি', icon: <Battery size={18} /> },
  { id: 'rickshaw', label: 'ইলেকট্রিক রিকশা', icon: <Truck size={18} /> },
  { id: 'engine', label: 'ইঞ্জিন পার্টস', icon: <Settings size={18} /> },
  { id: 'tire', label: 'টায়ার ও চাকা', icon: <Disc size={18} /> },
  { id: 'lubricant', label: 'লুব্রিকেন্ট', icon: <Droplets size={18} /> },
  { id: 'electrical', label: 'ইলেকট্রিক্যাল', icon: <Zap size={18} /> },
  { id: 'accessories', label: 'আনুষাঙ্গিক', icon: <Wrench size={18} /> },
  { id: 'tools', label: 'সরঞ্জাম', icon: <Hammer size={18} /> },
];

const PRODUCTS: Product[] = [
  {
    id: 'lifepo4-pro',
    brand: 'LiFePO4 Pro',
    name: 'LiFePO4 12V 100Ah ব্যাটারি (ব্ল্যাক সিরিজ)',
    rating: 4.8,
    ratingCount: 12,
    features: ['LiFePO4 কেমিস্ট্রি', '৩০০০+ সাইকেল লাইফ', 'BMS সুরক্ষা সহ'],
    offerPrice: 24500,
    originalPrice: 28000,
    warranty: '৩ বছর',
    weight: '১০.৫ কেজি',
    inStock: true,
    category: 'battery',
  },
  {
    id: 'silver-pack',
    brand: 'SilverPack',
    name: 'লিথিয়াম প্যাক সিলভার সিরিজ (Top Label)',
    rating: 4.6,
    ratingCount: 8,
    features: ['হাই ডিসচার্জ রেট', 'সিলভার অ্যালয় টার্মিনাল', 'কমপ্যাক্ট ডিজাইন'],
    offerPrice: 19000,
    originalPrice: 22000,
    warranty: '২ বছর',
    weight: '১২ কেজি',
    inStock: true,
    category: 'battery',
  },
  {
    id: 'power-handle',
    brand: 'PowerHandle',
    name: 'লিথিয়াম প্যাক — হ্যান্ডেল ও টার্মিনাল সিরিজ',
    rating: 4.5,
    ratingCount: 15,
    features: ['বহনযোগ্য হ্যান্ডেল', 'মজবুত টার্মিনাল', 'ওয়াটারপ্রুফ কেসিং'],
    offerPrice: 17500,
    originalPrice: 20000,
    warranty: '২ বছর',
    weight: '১১ কেজি',
    inStock: true,
    category: 'battery',
  },
  {
    id: 'blue-power',
    brand: 'BluePower',
    name: 'লিথিয়াম প্যাক ব্লু ফ্রন্ট লেবেল',
    rating: 4.4,
    ratingCount: 20,
    features: ['হাই-টেম্পারেচার সহনশীল', 'দ্রুত চার্জিং', 'লং সাইকেল লাইফ'],
    offerPrice: 17000,
    originalPrice: 19500,
    warranty: '২ বছর',
    weight: '১০.৮ কেজি',
    inStock: true,
    category: 'battery',
  },
];

const IMAGE_URL = 'https://i.ibb.co/bL4F59C/3.png';

const formatPrice = (price: number) => {
  return '৳' + price.toLocaleString('bn-BD');
};

export default function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [shareProduct, setShareProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const product = PRODUCTS.find(p => p.id === hash);
        if (product) setSelectedProduct(product);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const copyToClipboard = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const getShareLinks = (id: string, name: string) => {
    const url = encodeURIComponent(`${window.location.origin}${window.location.pathname}#${id}`);
    const text = encodeURIComponent(`Check out this ${name}`);
    return {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
  };

  return (
    <div className="min-h-screen pt-20 bg-[#F8FAF9] font-sans selection:bg-green-100">
      <nav className="bg-[#1B7E43] text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden lg:flex items-center gap-4">
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-sm font-bold transition-all ${
                    activeCategory === cat.id ? 'bg-white text-[#1B7E43]' : 'hover:bg-white/10'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex lg:hidden items-center gap-2">
              {CATEGORIES.slice(0, 4).map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-bold transition-all ${
                    activeCategory === cat.id ? 'bg-white text-[#1B7E43]' : 'hover:bg-white/10'
                  }`}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              ))}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-white/10 rounded-sm">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-white/10 rounded-sm">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#156334] border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 p-3 rounded-sm text-sm font-bold transition-all border border-transparent ${
                      activeCategory === cat.id ? 'bg-white text-[#1B7E43]' : 'hover:border-white/20'
                    }`}
                  >
                    {cat.icon}
                    {cat.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800">{CATEGORIES.find(c => c.id === activeCategory)?.label || 'পণ্যসমূহ'}</h2>
            <p className="text-slate-500 text-sm font-medium">আপনার পছন্দের পণ্যটি বেছে নিন</p>
          </div>
          <div className="h-[1px] flex-grow bg-slate-200 mx-4 hidden md:block" />
          <span className="bg-slate-100 px-3 py-1 text-xs font-bold text-slate-400 rounded-sm uppercase tracking-wider">
            {filteredProducts.length} items found
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(product => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-sm border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden"
                >
                  <div className="relative aspect-square p-4 bg-white">
                    <div className="relative w-full h-full border border-slate-100 rounded-sm overflow-hidden group-hover:border-green-500 transition-colors duration-300">
                      <Image src={IMAGE_URL} alt={product.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2 py-0.5 rounded-sm border border-green-100">
                        {product.brand}
                      </span>
                      <span className="text-[10px] font-bold text-green-700 flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        স্টকে আছে
                      </span>
                    </div>

                    <h3 className="text-slate-800 font-bold text-base mb-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>

                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={12} className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'} />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 ml-1">({product.ratingCount})</span>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-black text-green-700">{formatPrice(product.offerPrice)}</span>
                        <span className="text-xs text-slate-300 line-through">{formatPrice(product.originalPrice)}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="bg-[#1B7E43] hover:bg-[#156334] text-white py-2.5 rounded-sm flex items-center justify-center gap-2 text-xs font-bold transition-all active:scale-95"
                        >
                          <Eye size={16} />
                          বিস্তারিত
                        </button>
                        <button
                          onClick={() => setShareProduct(product)}
                          className="border border-slate-200 hover:border-green-600 hover:text-green-700 text-slate-600 py-2.5 rounded-sm flex items-center justify-center gap-2 text-xs font-bold transition-all active:scale-95"
                        >
                          <Share2 size={16} />
                          শেয়ার
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-20 text-slate-400 gap-4"
          >
            <div className="p-6 bg-slate-50 rounded-sm">
              <Package size={64} strokeWidth={1} />
            </div>
            <p className="font-bold">এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি</p>
            <button onClick={() => setActiveCategory('all')} className="text-green-600 text-sm font-bold border-b border-green-600 pb-0.5 hover:text-green-700">
              সব পণ্য দেখুন
            </button>
          </motion.div>
        )}
      </main>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white md:text-slate-400 md:hover:text-slate-600 rounded-sm transition-colors"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-1/2 aspect-square relative bg-white p-8">
                <div className="relative w-full h-full border border-slate-100 rounded-sm overflow-hidden">
                  <Image src={IMAGE_URL} alt={selectedProduct.name} fill className="object-contain" />
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <span className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">{selectedProduct.brand}</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">{selectedProduct.name}</h2>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl font-black text-green-700">{formatPrice(selectedProduct.offerPrice)}</div>
                  <div className="text-lg text-slate-300 line-through">{formatPrice(selectedProduct.originalPrice)}</div>
                </div>

                <div className="space-y-4 mb-8">
                  {selectedProduct.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                      <div className="w-5 h-5 rounded-sm bg-green-100 flex items-center justify-center">
                        <Check size={14} className="text-green-600" />
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">গ্যারান্টি</span>
                    <div className="flex items-center gap-2 font-bold text-slate-700">
                      <Clock size={16} className="text-green-600" />
                      {selectedProduct.warranty}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">ওজন</span>
                    <div className="flex items-center gap-2 font-bold text-slate-700">
                      <Scale size={16} className="text-amber-600" />
                      {selectedProduct.weight}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {shareProduct && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShareProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-sm bg-white rounded-sm shadow-2xl p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-slate-800">শেয়ার করুন</h3>
                <button onClick={() => setShareProduct(null)} className="p-1 hover:bg-slate-100 rounded-sm">
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8">
                {Object.entries(getShareLinks(shareProduct.id, shareProduct.name)).map(([platform, link]) => (
                  <a key={platform} href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
                    <div className="w-12 h-12 rounded-sm bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                      {platform === 'whatsapp' && <MessageCircle size={24} />}
                      {platform === 'facebook' && <Facebook size={24} />}
                      {platform === 'twitter' && <Twitter size={24} />}
                      {platform === 'linkedin' && <Linkedin size={24} />}
                    </div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{platform}</span>
                  </a>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase">লিঙ্ক কপি করুন</label>
                <div className="relative">
                  <input
                    readOnly
                    value={`${window.location.origin}${window.location.pathname}#${shareProduct.id}`}
                    className="w-full bg-slate-50 border border-slate-200 rounded-sm px-3 py-3 pr-12 text-xs font-medium text-slate-600 outline-none"
                  />
                  <button
                    onClick={() => copyToClipboard(shareProduct.id)}
                    className="absolute right-1 top-1 bottom-1 px-3 bg-green-600 text-white rounded-sm flex items-center justify-center transition-all hover:bg-green-700"
                  >
                    {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="mt-20 border-t border-slate-100 bg-white py-10">
        <div className="container mx-auto px-4">
          <section className="bg-green-700 rounded-sm p-8 md:p-16 overflow-hidden relative mb-20 shadow-xl">
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
                  <button className="px-8 py-4 bg-white text-green-800 rounded-sm font-black text-lg transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2">
                    অর্ডার করতে ক্লিক করুন
                  </button>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="h-12 w-12 rounded-sm border-2 border-green-700 overflow-hidden bg-slate-200 relative">
                        <Image src={IMAGE_URL} alt="User" fill className="object-cover" />
                      </div>
                    ))}
                    <div className="h-12 px-3 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-sm text-xs font-bold text-white border border-white/30 ml-2">
                      ১০কে+ গ্রাহক
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Zap size={32} />, label: 'সুপার ফাস্ট চার্জিং', desc: 'কম সময়ে পূর্ণ চার্জ' },
                  { icon: <Clock size={32} />, label: 'দীর্ঘস্থায়ী গ্যারান্টি', desc: '৩-৫ বছর নিশ্চিন্ত সেবা' },
                  { icon: <ShieldCheck size={32} />, label: 'অরিজিনাল পার্টস', desc: '১০০% গ্যারান্টিযুক্ত' },
                  { icon: <ExternalLink size={32} />, label: 'হোম ডেলিভারি', desc: 'আপনার দরজায় পণ্য' },
                ].map((f, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm hover:bg-white/20 transition-all">
                    <div className="text-green-300 mb-4">{f.icon}</div>
                    <h5 className="text-white font-bold mb-1">{f.label}</h5>
                    <p className="text-green-100/70 text-xs">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
