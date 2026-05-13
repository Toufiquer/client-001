/*
|-----------------------------------------
| setting up Mutation for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

'use client';

import { useState, useEffect, useMemo } from 'react';
import { Save, Plus, Trash2, Package, Tag, Layers, ImageIcon, List, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { IProductSectionData, defaultDataSection44, IProductItem, ICategoryItem } from './data';
import Image from 'next/image';
import ImageUploadManagerSingle from '@/components/dashboard-ui/ImageUploadManagerSingle';
import { iconMap, iconOptions } from '@/components/all-icons/all-icons-jsx';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const IconSelector = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iconSearch, setIconSearch] = useState('');

  const filteredIcons = useMemo(() => {
    if (!iconSearch) return iconOptions;
    return iconOptions.filter(name => name.toLowerCase().includes(iconSearch.toLowerCase()));
  }, [iconSearch]);

  const SelectedIcon = iconMap[value] || iconMap['Package'];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="h-9 w-full bg-zinc-900 border border-zinc-800 rounded-md flex items-center px-3 gap-2 hover:bg-zinc-800 transition-colors">
          {SelectedIcon && <SelectedIcon size={16} className="text-zinc-400 shrink-0" />}
          <span className="text-xs text-zinc-300 flex-1 text-left truncate">{value || 'Select Icon...'}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-md bg-zinc-950 border-zinc-800 text-zinc-100 p-6">
        <DialogTitle className="text-lg font-semibold mb-4">Select an Icon</DialogTitle>
        <div className="relative mb-4 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-blue-400 transition-colors" />
          <input
            type="text"
            value={iconSearch}
            onChange={e => setIconSearch(e.target.value)}
            placeholder="Search icons..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 pl-9 pr-4 text-xs text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-3">
          {filteredIcons.length > 0 ? (
            <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 max-h-[300px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
              {filteredIcons.map(iconName => {
                const IconComp = iconMap[iconName];
                if (!IconComp) return null;
                const isActive = value === iconName;
                return (
                  <button
                    key={iconName}
                    onClick={() => {
                      onChange(iconName);
                      setIsOpen(false);
                    }}
                    className={cn(
                      'group/icon relative aspect-square flex flex-col items-center justify-center rounded-lg transition-all duration-200',
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 scale-105 z-10'
                        : 'bg-zinc-900/50 text-zinc-500 hover:bg-zinc-800 hover:text-zinc-200 hover:scale-105',
                    )}
                    title={iconName}
                  >
                    <IconComp size={18} strokeWidth={1.5} />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-zinc-600 text-xs">No icons found</div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateField = (field: keyof IProductSectionData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddCategory = () => {
    const newCat: ICategoryItem = { id: `cat-${Date.now()}`, label: 'New Category', iconName: 'Package' };
    updateField('categories', [...formData.categories, newCat]);
  };

  const updateCategory = (idx: number, field: keyof ICategoryItem, value: string) => {
    const newCats = [...formData.categories];
    newCats[idx] = { ...newCats[idx], [field]: value };
    updateField('categories', newCats);
  };

  const handleAddProduct = () => {
    const newProd: IProductItem = {
      id: Date.now().toString(),
      brand: 'New Brand',
      name: 'New Product Name',
      rating: 5,
      ratingCount: 0,
      descriptionImages: [],
      offerPrice: 0,
      originalPrice: 0,
      warranty: '1 Year',
      weight: '1kg',
      inStock: true,
      category: formData.categories[0]?.id || 'all',
      image: 'https://i.ibb.co/bL4F59C/3.png',
      features: [],
    };
    updateField('products', [...formData.products, newProd]);
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateProduct = (idx: number, field: keyof IProductItem, value: any) => {
    const newProds = [...formData.products];
    newProds[idx] = { ...newProds[idx], [field]: value };
    updateField('products', newProds);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-zinc-800 bg-zinc-900/80 backdrop-blur flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <Package className="text-emerald-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Catalogue Manager</h2>
              <p className="text-zinc-400 text-sm">Configure categories and product inventory.</p>
            </div>
          </div>

          <div className="p-6 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <Tag className="text-zinc-500" size={20} />
                  <h3 className="text-lg font-semibold">Categories</h3>
                </div>
                <Button onClick={handleAddCategory} size="sm" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                  <Plus className="w-4 h-4 mr-2" /> Add Category
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {formData.categories.map((cat, idx) => (
                  <div key={cat.id} className="p-4 bg-zinc-950/50 border border-zinc-800 rounded-xl flex flex-col gap-3 relative group">
                    {cat.id !== 'all' && (
                      <button
                        onClick={() =>
                          updateField(
                            'categories',
                            formData.categories.filter((_, i) => i !== idx),
                          )
                        }
                        className="absolute -top-2 -right-2 p-1.5 bg-red-500/10 text-red-400 rounded-full hover:bg-red-500 hover:text-white opacity-0 group-hover:opacity-100 transition-all shadow-xl"
                      >
                        <Trash2 size={12} />
                      </button>
                    )}
                    <div className="space-y-1">
                      <Label className="text-[10px] uppercase text-zinc-500">Label</Label>
                      <Input value={cat.label} onChange={e => updateCategory(idx, 'label', e.target.value)} className="h-9 bg-zinc-900 border-zinc-800" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-[10px] uppercase text-zinc-500">Icon</Label>
                      <IconSelector value={cat.iconName} onChange={val => updateCategory(idx, 'iconName', val)} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <Layers className="text-zinc-500" size={20} />
                  <h3 className="text-lg font-semibold">Products</h3>
                </div>
                <Button onClick={handleAddProduct} size="sm" className="bg-emerald-600 hover:bg-emerald-500">
                  <Plus className="w-4 h-4 mr-2" /> Add Product
                </Button>
              </div>

              <div className="space-y-8">
                {formData.products.map((product, pIdx) => (
                  <div key={product.id} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl relative group hover:border-zinc-700 transition-all">
                    <button
                      onClick={() =>
                        updateField(
                          'products',
                          formData.products.filter((_, i) => i !== pIdx),
                        )
                      }
                      className="absolute top-4 right-4 p-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition-all shadow-lg"
                    >
                      <Trash2 size={16} />
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      <div className="lg:col-span-4 space-y-4">
                        <div className="bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50">
                          <div className="mb-3">
                            <Label className="text-[10px] text-zinc-300 mb-1 block">Thumbnail URL</Label>
                            <Input
                              value={product.image}
                              onChange={e => updateProduct(pIdx, 'image', e.target.value)}
                              placeholder="https://..."
                              className="h-8 text-xs bg-zinc-900 border-zinc-800 mb-2"
                            />
                          </div>
                          <ImageUploadManagerSingle label="" value={product.image} onChange={url => updateProduct(pIdx, 'image', url)} />
                        </div>

                        <div className="space-y-3">
                          <Label className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                            <ImageIcon size={14} /> Description Images (Gallery)
                          </Label>
                          <div className="bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50 space-y-4">
                            {product.descriptionImages?.length > 0 && (
                              <div className="flex flex-wrap gap-3">
                                {product.descriptionImages.map((imgUrl, imgIdx) => (
                                  <div key={imgIdx} className="relative group w-20 h-20">
                                    <div className="relative w-full h-full rounded-md overflow-hidden border border-zinc-700 shadow-sm">
                                      {imgUrl ? (
                                        <Image src={imgUrl} alt={`Gallery ${imgIdx}`} fill className="object-cover" />
                                      ) : (
                                        <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-500 text-xs">Empty</div>
                                      )}
                                    </div>
                                    <button
                                      onClick={() => {
                                        const newImgs = product.descriptionImages?.filter((_, i) => i !== imgIdx);
                                        updateProduct(pIdx, 'descriptionImages', newImgs);
                                      }}
                                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10"
                                    >
                                      <X size={12} />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="border-t border-zinc-800 pt-3">
                              <p className="text-xs text-zinc-500 mb-2">Add new gallery image</p>
                              <ImageUploadManagerSingle
                                label=""
                                value=""
                                onChange={url => {
                                  if (url) {
                                    const newProds = [...formData.products];
                                    newProds[pIdx].descriptionImages = [...(newProds[pIdx].descriptionImages || []), url];
                                    updateField('products', newProds);
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Category</Label>
                          <select
                            value={product.category}
                            onChange={e => updateProduct(pIdx, 'category', e.target.value)}
                            className="w-full h-10 bg-zinc-950 border border-zinc-800 rounded-md px-3 text-sm focus:ring-1 focus:ring-emerald-500"
                          >
                            {formData.categories.map(c => (
                              <option key={c.id} value={c.id}>
                                {c.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Brand</Label>
                          <Input
                            value={product.brand}
                            onChange={e => updateProduct(pIdx, 'brand', e.target.value)}
                            className="bg-zinc-950 border-zinc-800 h-10"
                          />
                        </div>
                        <div className="md:col-span-2 space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Full Product Name</Label>
                          <Input
                            value={product.name}
                            onChange={e => updateProduct(pIdx, 'name', e.target.value)}
                            className="bg-zinc-950 border-zinc-800 h-10"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Offer Price</Label>
                          <Input
                            type="number"
                            value={product.offerPrice}
                            onChange={e => updateProduct(pIdx, 'offerPrice', Number(e.target.value))}
                            className="bg-zinc-950 border-zinc-800 h-10"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Original Price</Label>
                          <Input
                            type="number"
                            value={product.originalPrice}
                            onChange={e => updateProduct(pIdx, 'originalPrice', Number(e.target.value))}
                            className="bg-zinc-950 border-zinc-800 h-10"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Warranty</Label>
                          <Input
                            value={product.warranty}
                            onChange={e => updateProduct(pIdx, 'warranty', e.target.value)}
                            className="bg-zinc-950 border-zinc-800 h-10"
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-[10px] uppercase text-zinc-500">Weight</Label>
                          <Input
                            value={product.weight}
                            onChange={e => updateProduct(pIdx, 'weight', e.target.value)}
                            className="bg-zinc-950 border-zinc-800 h-10"
                          />
                        </div>
                        <div className="md:col-span-2 space-y-3 mt-4 border-t border-zinc-800 pt-4">
                          <Label className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                            <List size={14} /> Features
                          </Label>
                          <div className="space-y-2">
                            {product.features?.map((feat, fIdx) => (
                              <div key={fIdx} className="relative group/feat">
                                <Input
                                  value={feat}
                                  onChange={e => {
                                    const newFeats = [...(product.features || [])];
                                    newFeats[fIdx] = e.target.value;
                                    updateProduct(pIdx, 'features', newFeats);
                                  }}
                                  className="h-8 text-xs bg-zinc-950 border-zinc-800 pr-8"
                                />
                                <button
                                  onClick={() => {
                                    const newFeats = product.features?.filter((_, i) => i !== fIdx);
                                    updateProduct(pIdx, 'features', newFeats);
                                  }}
                                  className="absolute top-1/2 -translate-y-1/2 right-2 text-zinc-500 hover:text-red-400 transition-all"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={() => {
                                const newFeats = [...(product.features || []), ''];
                                updateProduct(pIdx, 'features', newFeats);
                              }}
                              className="w-full h-8 border border-dashed border-zinc-700 rounded-lg text-zinc-500 hover:text-zinc-300 hover:border-zinc-500 flex items-center justify-center transition-all text-xs"
                            >
                              <Plus size={14} className="mr-1" /> Add Feature
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="p-6 border-t border-zinc-800 bg-zinc-900/80 backdrop-blur flex justify-end">
            <Button
              onClick={() => onSubmit(formData)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 h-12 rounded-xl font-bold shadow-emerald-900/20 shadow-lg"
            >
              <Save className="w-5 h-5 mr-2" />
              Update Catalog
            </Button>
          </div>
        </div>
      </div>
      <style>{`
        /* Thin scrollbar for icon area */
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </div>
  );
};

const X = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default MutationSection;
