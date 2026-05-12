/*
|-----------------------------------------
| setting up Mutation for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

'use client';

import { useState, useEffect } from 'react';
import { Save, Plus, Trash2, Package, Tag, Layers, ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { IProductSectionData, defaultDataSection44, IProductItem, ICategoryItem } from './data';

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
    };
    updateField('products', [...formData.products, newProd]);
  };

  const updateProduct = (idx: number, field: keyof IProductItem, value: any) => {
    const newProds = [...formData.products];
    newProds[idx] = { ...newProds[idx], [field]: value };
    updateField('products', newProds);
  };

  const handleAddDescImage = (pIdx: number) => {
    const newProds = [...formData.products];
    newProds[pIdx].descriptionImages = [...newProds[pIdx].descriptionImages, ''];
    updateField('products', newProds);
  };

  const updateDescImage = (pIdx: number, imgIdx: number, val: string) => {
    const newProds = [...formData.products];
    newProds[pIdx].descriptionImages[imgIdx] = val;
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
                      <Label className="text-[10px] uppercase text-zinc-500">Icon Name (Lucide)</Label>
                      <Input value={cat.iconName} onChange={e => updateCategory(idx, 'iconName', e.target.value)} className="h-9 bg-zinc-900 border-zinc-800" />
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
                        <div className="aspect-square bg-white rounded-2xl overflow-hidden relative border border-zinc-800">
                          <img src={product.image} alt="" className="w-full h-full object-contain p-4" />
                          <div className="absolute inset-x-0 bottom-0 p-3 bg-black/60 backdrop-blur-sm">
                            <Label className="text-[10px] text-zinc-300">Thumbnail URL</Label>
                            <Input
                              value={product.image}
                              onChange={e => updateProduct(pIdx, 'image', e.target.value)}
                              className="h-8 text-xs bg-zinc-900/50 border-zinc-700"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-xs font-bold text-zinc-400 flex items-center gap-2">
                            <ImageIcon size={14} /> Description Images (Gallery)
                          </Label>
                          <div className="grid grid-cols-2 gap-2">
                            {product.descriptionImages?.map((img, imgIdx) => (
                              <div key={imgIdx} className="relative group/img">
                                <Input
                                  value={img}
                                  onChange={e => updateDescImage(pIdx, imgIdx, e.target.value)}
                                  placeholder="Image URL"
                                  className="h-8 text-[10px] bg-zinc-950 border-zinc-800"
                                />
                                <button
                                  onClick={() => {
                                    const newImgs = product.descriptionImages?.filter((_, i) => i !== imgIdx);
                                    updateProduct(pIdx, 'descriptionImages', newImgs);
                                  }}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 opacity-0 group-hover/img:opacity-100 transition-all"
                                >
                                  <X size={10} />
                                </button>
                              </div>
                            ))}
                            <button
                              onClick={() => handleAddDescImage(pIdx)}
                              className="h-8 border border-dashed border-zinc-700 rounded-lg text-zinc-500 hover:text-zinc-300 hover:border-zinc-500 flex items-center justify-center transition-all"
                            >
                              <Plus size={14} />
                            </button>
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
