/*
|-----------------------------------------
| setting up Query for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star,
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
  Menu,
  Wrench,
  PenTool,
  LucideIcon,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
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
  Wrench,
  PenTool,
};

const formatPrice = (price: number) => '৳' + price.toLocaleString('bn-BD');

const QuerySection = ({ data }: ProductSectionProps) => {
  let sectionData: IProductSectionData = defaultDataSection44;
  if (data) {
    if (typeof data === 'string') {
      try {
        sectionData = { ...defaultDataSection44, ...(JSON.parse(data) as IProductSectionData) };
      } catch (e) {
        console.error(e);
      }
    } else {
      sectionData = { ...defaultDataSection44, ...data };
    }
  }

  const [selectedProduct, setSelectedProduct] = useState<IProductItem | null>(null);
  const [shareProduct, setShareProduct] = useState<IProductItem | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return sectionData.products;
    return sectionData.products.filter(p => p.category === activeCategory);
  }, [activeCategory, sectionData.products]);
  const whatsappNumber = sectionData.whatsappNumber.replace(/\D/g, '') || defaultDataSection44.whatsappNumber;
  const createWhatsappUrl = (message: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-[#F8FAF9] font-sans selection:bg-green-100">
      <nav className="bg-[#1B7E43] text-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="hidden lg:flex items-center gap-2 overflow-x-auto no-scrollbar">
              {sectionData.categories.map(cat => {
                const Icon = iconMap[cat.iconName] || Package;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      activeCategory === cat.id ? 'bg-white text-[#1B7E43] shadow-lg' : 'hover:bg-white/10'
                    }`}
                  >
                    <Icon size={16} />
                    {cat.label}
                  </button>
                );
              })}
            </div>
            <div className="lg:hidden flex items-center gap-2">
              <span className="font-bold text-sm bg-white/20 px-3 py-1 rounded-full">{sectionData.categories.find(c => c.id === activeCategory)?.label}</span>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
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
              <div className="container mx-auto px-4 py-6 grid grid-cols-2 gap-3">
                {sectionData.categories.map(cat => {
                  const Icon = iconMap[cat.iconName] || Package;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-sm text-xs font-bold transition-all border ${
                        activeCategory === cat.id ? 'bg-white text-[#1B7E43] border-white' : 'bg-white/5 border-white/10 text-white'
                      }`}
                    >
                      <Icon size={24} />
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
            <h2 className="text-4xl font-black text-slate-800 tracking-tight">{sectionData.title}</h2>
            <p className="text-slate-500 font-medium text-lg">{sectionData.subtitle}</p>
          </motion.div>
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-slate-100 text-slate-400 text-xs font-black rounded-full uppercase tracking-widest border border-slate-200">
              {filteredProducts.length} Items Available
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-sm border border-slate-200 overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col h-full"
              >
                <div className="relative aspect-square overflow-hidden bg-[#F1F5F2]">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[10px] font-black uppercase text-emerald-600 border border-emerald-100">
                      {product.brand}
                    </span>
                  </div>
                  {product.inStock && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase border border-emerald-200">
                        স্টক আছে
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-slate-800 font-bold text-lg mb-2 line-clamp-2 min-h-[3.5rem] leading-snug">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                          className={i < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-300'}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium ml-1">({product.rating})</span>
                  </div>

                  {product.features && product.features.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-600 gap-1.5 font-medium">
                          <svg
                            className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-black text-emerald-700 leading-none">{formatPrice(product.offerPrice)}</span>
                      <span className="text-xs text-slate-400 line-through font-medium mb-1">{formatPrice(product.originalPrice)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-5 text-xs font-bold text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <div className="p-1 bg-blue-50 text-blue-500 rounded-full">
                        <ShieldCheck size={12} />
                      </div>
                      {product.warranty}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="p-1 bg-amber-50 text-amber-500 rounded-full">
                        <Scale size={12} />
                      </div>
                      {product.weight}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 rounded-sm flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-lg shadow-emerald-900/10 active:scale-95"
                    >
                      <Eye size={18} /> বিস্তারিত
                    </button>
                    <button
                      onClick={() => setShareProduct(product)}
                      className="border border-slate-200 hover:border-emerald-600 hover:text-emerald-700 text-slate-600 h-12 rounded-sm flex items-center justify-center gap-2 text-sm font-bold transition-all active:scale-95"
                    >
                      <Share2 size={18} /> শেয়ার
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 md:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-5xl bg-white rounded-sm overflow-y-auto shadow-2xl flex flex-col md:flex-row max-h-[94vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="fixed md:absolute top-3 right-3 z-[80] p-2 bg-white text-slate-900 shadow-lg border border-slate-200 hover:bg-slate-100 rounded-sm transition-all"
              >
                <X size={24} />
              </button>

              <div className="w-full md:w-5/12 bg-[#F1F5F2] p-4 md:p-6 flex items-start justify-center relative border-r border-slate-100">
                <div className="relative w-full aspect-square">
                  <Image src={selectedProduct.image} alt={selectedProduct.name} fill className="object-contain" priority />
                </div>
              </div>

              <div className="w-full md:w-7/12 flex flex-col">
                <div className="p-4 md:p-6 space-y-4">
                  <div>
                    <span className="text-sm font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-sm mb-2 inline-block">
                      {selectedProduct.brand}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">{selectedProduct.name}</h2>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase mb-1">Current Price</p>
                      <div className="text-3xl font-black text-emerald-700">{formatPrice(selectedProduct.offerPrice)}</div>
                    </div>
                    <div className="w-px h-10 bg-slate-200" />
                    <div>
                      <p className="text-slate-400 text-xs font-bold uppercase mb-1">Original</p>
                      <div className="text-xl text-slate-300 line-through font-bold">{formatPrice(selectedProduct.originalPrice)}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-sm">
                      <Clock className="text-emerald-600" size={24} />
                      <div>
                        <p className="text-slate-400 text-[10px] font-bold uppercase">Warranty</p>
                        <p className="text-slate-800 font-bold">{selectedProduct.warranty}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-sm">
                      <Scale className="text-amber-500" size={24} />
                      <div>
                        <p className="text-slate-400 text-[10px] font-bold uppercase">Weight</p>
                        <p className="text-slate-800 font-bold">{selectedProduct.weight}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-8 h-1 bg-emerald-600 rounded-sm" /> Product Details
                    </h4>
                    {selectedProduct.description && (
                      <div className="prose prose-slate max-w-none text-slate-600" dangerouslySetInnerHTML={{ __html: selectedProduct.description }} />
                    )}
                    <div className="space-y-4">
                      {selectedProduct.descriptionImages?.length > 0 ? (
                        selectedProduct.descriptionImages?.map((img, i) => (
                          <div key={i} className="relative w-full rounded-sm overflow-hidden border border-slate-100 shadow-sm">
                            <Image width={1200} height={1200} src={img} alt="Product description" className="w-full h-auto" />
                          </div>
                        ))
                      ) : (
                        <div className="py-8 border-2 border-dashed border-slate-100 rounded-sm flex flex-col items-center justify-center text-slate-300">
                          <Package size={48} strokeWidth={1} />
                          <p className="text-sm font-medium mt-2">No additional images provided</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 sticky bottom-0 bg-white/80 backdrop-blur-md flex gap-2">
                  <a
                    href={createWhatsappUrl(`আমি ${selectedProduct.name} অর্ডার করতে চাই।`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 rounded-sm font-black text-lg shadow-xl shadow-emerald-900/20 transition-all flex items-center justify-center gap-3"
                  >
                    <MessageCircle size={24} /> অর্ডার করতে ক্লিক করুন
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="md:hidden h-14 w-14 shrink-0 bg-slate-900 hover:bg-slate-800 text-white rounded-sm font-black text-lg shadow-xl transition-all"
                  >
                    X
                  </button>
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
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-sm overflow-hidden shadow-2xl p-6 md:p-8"
            >
              <button
                onClick={() => setShareProduct(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-all"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-black text-slate-800 mb-6 pr-8">Share &quot;{shareProduct.name}&quot;</h3>

              <div className="grid grid-cols-4 gap-4 mb-8">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <Facebook size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Facebook</span>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(shareProduct.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all shadow-sm">
                    <Twitter size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase">Twitter</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareProduct.name + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                    <MessageCircle size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase">WhatsApp</span>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(shareProduct.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all shadow-sm">
                    <Linkedin size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase">LinkedIn</span>
                </a>
              </div>

              <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-sm">
                <div className="flex-1 truncate px-3 text-sm text-slate-500 font-medium">
                  {typeof window !== 'undefined' ? window.location.href : 'https://example.com/product'}
                </div>
                <button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      navigator.clipboard.writeText(window.location.href);
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-sm text-sm font-bold transition-all shadow-md shadow-emerald-900/10 active:scale-95 whitespace-nowrap"
                >
                  {isCopied ? (
                    <>
                      <Check size={16} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={16} /> Copy URL
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="mt-20 border-t border-slate-100 bg-white py-12">
        <div className="container mx-auto px-4">
          <section className="bg-emerald-700 rounded-sm p-8 md:p-20 overflow-hidden relative shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-white space-y-8">
                <h2 className="text-4xl md:text-6xl font-black leading-tight">{sectionData.footerCtaTitle}</h2>
                <p className="text-xl text-emerald-100 max-w-lg opacity-90 leading-relaxed font-medium">{sectionData.footerCtaDesc}</p>
                <div className="flex flex-wrap gap-6 pt-4">
                  <a
                    href={createWhatsappUrl('আমি পণ্য অর্ডার করতে চাই।')}
                    target="_blank"
                    rel="noreferrer"
                    className="px-1 md:px-10 py-5 bg-white text-emerald-900 rounded-sm font-black text-sm w-full justify-center md:text-xl hover:scale-105 transition-all shadow-2xl shadow-emerald-950/20 flex items-center gap-3"
                  >
                    <MessageCircle size={24} /> অর্ডার করতে ক্লিক করুন
                  </a>
                  <div className="flex flex-col justify-center">
                    <p className="text-emerald-100 font-bold mb-1">Satisfied Customers</p>
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-emerald-700 bg-emerald-100 overflow-hidden">
                          <Image width={1200} height={1200} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User Count" />
                        </div>
                      ))}
                      <div className="h-10 px-3 flex items-center justify-center bg-white/20 backdrop-blur rounded-full text-xs font-black">10K+</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sectionData.footerFeatures.map((f, i) => {
                  const Icon = iconMap[f.iconName] || Zap;
                  return (
                    <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/10 p-8 rounded-sm hover:bg-white/20 transition-all group">
                      <div className="text-emerald-300 mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={40} />
                      </div>
                      <h5 className="text-white text-lg font-black mb-2">{f.label}</h5>
                      <p className="text-emerald-100/70 text-sm font-medium">{f.desc}</p>
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
