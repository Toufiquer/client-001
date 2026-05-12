Look at the code 
data.ts 
```
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
  features: string[];
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
    { id: 'tire', label: 'টায়ার ও চাকা', iconName: 'Disc' },
    { id: 'lubricant', label: 'লুব্রিকেন্ট', iconName: 'Droplets' },
  ],
  products: [
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
      image: 'https://i.ibb.co/bL4F59C/3.png',
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

```

Mutation.tsx 
```
'use client';

import { useState, useEffect } from 'react';
import { LayoutTemplate, Save, Plus, Trash2, Package, Image as ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { IProductSectionData, defaultDataSection44, IProductItem } from './data';

export interface SectionFormProps {
  data?: IProductSectionData;
  onSubmit: (values: IProductSectionData) => void;
}

const MutationSection = ({ data, onSubmit }: SectionFormProps) => {
  const [formData, setFormData] = useState<IProductSectionData>({ ...defaultDataSection44 });

  useEffect(() => {
    if (data) {
      setFormData({ ...defaultDataSection44, ...data });
    }
  }, [data]);

  const updateField = (field: keyof IProductSectionData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateProduct = (index: number, field: keyof IProductItem, value: any) => {
    const newProducts = [...formData.products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    updateField('products', newProducts);
  };

  const handleAddProduct = () => {
    const newProd: IProductItem = {
      id: Date.now().toString(),
      brand: 'New Brand',
      name: 'New Product Name',
      rating: 5,
      ratingCount: 0,
      features: ['Feature 1'],
      offerPrice: 0,
      originalPrice: 0,
      warranty: '1 Year',
      weight: '1kg',
      inStock: true,
      category: 'battery',
      image: 'https://i.ibb.co/bL4F59C/3.png',
    };
    updateField('products', [...formData.products, newProd]);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur flex items-center gap-3">
          <div className="p-2 bg-green-500/10 rounded-lg">
            <Package className="text-green-400" size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Manage Products</h2>
            <p className="text-zinc-400 text-sm">Edit your product showcase and catalog.</p>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-zinc-400">Section Title</Label>
              <Input
                value={formData.title}
                onChange={e => updateField('title', e.target.value)}
                className="bg-zinc-950/50 border-zinc-800 focus:border-green-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-zinc-400">Subtitle</Label>
              <Input
                value={formData.subtitle}
                onChange={e => updateField('subtitle', e.target.value)}
                className="bg-zinc-950/50 border-zinc-800 focus:border-green-500"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                Products <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">{formData.products.length}</span>
              </h3>
              <Button onClick={handleAddProduct} size="sm" className="bg-green-600 hover:bg-green-500">
                <Plus className="w-4 h-4 mr-2" /> Add Product
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {formData.products.map((product, idx) => (
                <div key={product.id} className="bg-zinc-900/80 border border-zinc-800 p-6 rounded-2xl relative group">
                  <button
                    onClick={() =>
                      updateField(
                        'products',
                        formData.products.filter((_, i) => i !== idx),
                      )
                    }
                    className="absolute top-4 right-4 p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={16} />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="aspect-square bg-zinc-950 rounded-xl overflow-hidden relative border border-zinc-800">
                        <img src={product.image} alt="" className="w-full h-full object-contain p-4" />
                        <div className="absolute inset-x-0 bottom-0 p-2 bg-black/60 backdrop-blur-sm">
                          <Input
                            value={product.image}
                            onChange={e => updateProduct(idx, 'image', e.target.value)}
                            className="h-7 text-[10px] bg-transparent border-zinc-700"
                            placeholder="Image URL"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Brand</Label>
                          <Input value={product.brand} onChange={e => updateProduct(idx, 'brand', e.target.value)} className="bg-zinc-950/50 border-zinc-800" />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Category</Label>
                          <Input
                            value={product.category}
                            onChange={e => updateProduct(idx, 'category', e.target.value)}
                            className="bg-zinc-950/50 border-zinc-800"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label className="text-[10px] uppercase text-zinc-500">Product Name</Label>
                        <Input value={product.name} onChange={e => updateProduct(idx, 'name', e.target.value)} className="bg-zinc-950/50 border-zinc-800" />
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Offer Price</Label>
                          <Input
                            type="number"
                            value={product.offerPrice}
                            onChange={e => updateProduct(idx, 'offerPrice', Number(e.target.value))}
                            className="bg-zinc-950/50 border-zinc-800"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Original Price</Label>
                          <Input
                            type="number"
                            value={product.originalPrice}
                            onChange={e => updateProduct(idx, 'originalPrice', Number(e.target.value))}
                            className="bg-zinc-950/50 border-zinc-800"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Warranty</Label>
                          <Input
                            value={product.warranty}
                            onChange={e => updateProduct(idx, 'warranty', e.target.value)}
                            className="bg-zinc-950/50 border-zinc-800"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Weight</Label>
                          <Input
                            value={product.weight}
                            onChange={e => updateProduct(idx, 'weight', e.target.value)}
                            className="bg-zinc-950/50 border-zinc-800"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-zinc-800 bg-zinc-900/80 backdrop-blur flex justify-end">
          <Button onClick={() => onSubmit(formData)} className="bg-green-600 hover:bg-green-500 text-white px-8">
            <Save className="w-5 h-5 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MutationSection;

```

Query.tsx 
```
'use client';

import React, { useState, useMemo } from 'react';
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
  Truck,
  Scale,
  Clock,
  ShieldCheck,
  X,
  Copy,
  Facebook,
  Twitter,
  MessageCircle,
  Linkedin,
  Menu,
  LucideIcon,
} from 'lucide-react';
import Image from 'next/image';
import { IProductSectionData, defaultDataSection44, ProductSectionProps, IProductItem } from './data';

const iconMap: Record<string, LucideIcon> = {
  Package,
  Battery,
  Truck,
  Settings,
  Disc,
  Droplets,
  Zap,
  Clock,
  ShieldCheck,
  Scale,
};

const formatPrice = (price: number) => '৳' + price.toLocaleString('bn-BD');

const QuerySection = ({ data }: ProductSectionProps) => {
  let sectionData: IProductSectionData = defaultDataSection44;
  if (data) {
    if (typeof data === 'string') {
      try {
        sectionData = JSON.parse(data) as IProductSectionData;
      } catch (e) {
        console.error(e);
      }
    } else {
      sectionData = data;
    }
  }

  const [selectedProduct, setSelectedProduct] = useState<IProductItem | null>(null);
  const [shareProduct, setShareProduct] = useState<IProductItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return sectionData.products;
    return sectionData.products.filter(p => p.category === activeCategory);
  }, [activeCategory, sectionData.products]);

  const copyToClipboard = (id: string) => {
    const url = `${typeof window !== 'undefined' ? window.location.origin : ''}#${id}`;
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] font-sans selection:bg-green-100">
      <nav className="bg-[#1B7E43] text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden lg:flex items-center gap-4">
              {sectionData.categories.map(cat => {
                const Icon = iconMap[cat.iconName] || Package;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-sm font-bold transition-all ${
                      activeCategory === cat.id ? 'bg-white text-[#1B7E43]' : 'hover:bg-white/10'
                    }`}
                  >
                    <Icon size={18} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
            <div className="lg:hidden">
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
              <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-2">
                {sectionData.categories.map(cat => {
                  const Icon = iconMap[cat.iconName] || Package;
                  return (
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
                      <Icon size={18} />
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-2xl font-black text-slate-800">{sectionData.title}</h2>
            <p className="text-slate-500 text-sm font-medium">{sectionData.subtitle}</p>
          </motion.div>
          <div className="h-[1px] flex-grow bg-slate-200 mx-4 hidden md:block" />
          <span className="bg-slate-100 px-3 py-1 text-xs font-bold text-slate-400 rounded-sm uppercase tracking-wider">
            {filteredProducts.length} items found
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-sm border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full overflow-hidden"
              >
                <div className="relative aspect-square p-4 bg-white">
                  <div className="relative w-full h-full border border-slate-100 rounded-sm overflow-hidden group-hover:border-green-500 transition-colors duration-300">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2 py-0.5 rounded-sm border border-green-100">
                      {product.brand}
                    </span>
                    <span className="text-[10px] font-bold text-green-700 flex items-center gap-1">
                      <div className={`w-1.5 h-1.5 rounded-full ${product.inStock ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                      {product.inStock ? 'স্টকে আছে' : 'স্টকে নেই'}
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
                        className="bg-[#1B7E43] hover:bg-[#156334] text-white py-2.5 rounded-sm flex items-center justify-center gap-2 text-xs font-bold transition-all"
                      >
                        <Eye size={16} /> বিস্তারিত
                      </button>
                      <button
                        onClick={() => setShareProduct(product)}
                        className="border border-slate-200 hover:border-green-600 hover:text-green-700 text-slate-600 py-2.5 rounded-sm flex items-center justify-center gap-2 text-xs font-bold transition-all"
                      >
                        <Share2 size={16} /> শেয়ার
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
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
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-sm">
                <X size={24} />
              </button>
              <div className="w-full md:w-1/2 aspect-square relative bg-white p-8">
                <div className="relative w-full h-full border border-slate-100 rounded-sm">
                  <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain" />
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
                      <Clock size={16} className="text-green-600" /> {selectedProduct.warranty}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 font-bold uppercase mb-1">ওজন</span>
                    <div className="flex items-center gap-2 font-bold text-slate-700">
                      <Scale size={16} className="text-amber-600" /> {selectedProduct.weight}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="mt-20 border-t border-slate-100 bg-white py-10">
        <div className="container mx-auto px-4">
          <section className="bg-green-700 rounded-sm p-8 md:p-16 overflow-hidden relative mb-20 shadow-xl">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">{sectionData.footerCtaTitle}</h2>
                <p className="text-lg text-green-100 mb-10 max-w-lg opacity-90 leading-relaxed">{sectionData.footerCtaDesc}</p>
                <button className="px-8 py-4 bg-white text-green-800 rounded-sm font-black text-lg hover:scale-105 transition-all">
                  অর্ডার করতে ক্লিক করুন
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {sectionData.footerFeatures.map((f, i) => {
                  const Icon = iconMap[f.iconName] || Zap;
                  return (
                    <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-sm hover:bg-white/20 transition-all">
                      <div className="text-green-300 mb-4">
                        <Icon size={32} />
                      </div>
                      <h5 className="text-white font-bold mb-1">{f.label}</h5>
                      <p className="text-green-100/70 text-xs">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default QuerySection;

```

Now your task is update those file for implementing the following features.
1. Add a section for adding category.
2. Inside products Please select Category. 
3. Please update products descriptions as images. 
    