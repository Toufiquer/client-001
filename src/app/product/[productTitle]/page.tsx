/*
|-----------------------------------------
| setting up Product Details Page
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

import { cache } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Battery, CheckCircle2, Clock, MessageCircle, Package, Scale, ShieldCheck, Star } from 'lucide-react';

import { getAllPages } from '@/app/api/page-builder/v1/controller';
import { PageContent } from '@/app/dashboard/admin/page-builder/utils';
import { defaultDataSection44, IProductItem, IProductSectionData, normalizeProductRouteValue } from '@/components/all-section/section-44/data';

interface PageApiResponse {
  data?: {
    pages?: NormalizedPage[];
  } | null;
}

interface NormalizedPage {
  _id: string;
  pageName: string;
  path: string;
  isActive?: boolean;
  content: PageContent[];
  subPage?: NormalizedPage[];
  pageTitle?: string;
  pagePath?: string;
}

const formatPrice = (price: number) => '৳' + price.toLocaleString('bn-BD');

const getCachedAllPages = cache(async (): Promise<NormalizedPage[]> => {
  try {
    const pagesData = (await getAllPages()) as unknown as PageApiResponse;
    const pages = pagesData?.data?.pages;

    if (!Array.isArray(pages)) return [];
    return getNormalizedPages(pages.filter(page => page.isActive));
  } catch {
    return [];
  }
});

function getNormalizedPages(rawPages: NormalizedPage[]): NormalizedPage[] {
  const flattenPages = (list: NormalizedPage[]): NormalizedPage[] => {
    let results: NormalizedPage[] = [];

    list.forEach(item => {
      results.push({
        ...item,
        _id: item._id,
        pageName: item.pageName || item.pageTitle || 'Untitled',
        path: (item.path || item.pagePath || '#').startsWith('/') ? item.path || item.pagePath || '/' : '/' + (item.path || item.pagePath),
        content: item.content || [],
      });

      if (Array.isArray(item.subPage)) {
        results = [...results, ...flattenPages(item.subPage)];
      }
    });

    return results;
  };

  return flattenPages(rawPages);
}

function normalizeSectionData(data: unknown): IProductSectionData | null {
  if (!data) return null;

  try {
    const parsed = typeof data === 'string' ? (JSON.parse(data) as Partial<IProductSectionData>) : (data as Partial<IProductSectionData>);
    return {
      ...defaultDataSection44,
      ...parsed,
      categories: parsed.categories || defaultDataSection44.categories,
      products: parsed.products || defaultDataSection44.products,
      footerFeatures: parsed.footerFeatures || defaultDataSection44.footerFeatures,
    };
  } catch {
    return null;
  }
}

async function getProductSectionData() {
  const pages = await getCachedAllPages();
  const sectionItem = pages.flatMap(page => page.content || []).find(item => item.type === 'section' && item.key === 'section-uid-44');

  return normalizeSectionData(sectionItem?.data) || defaultDataSection44;
}

async function getProductFromRoute(productTitle: string) {
  const sectionData = await getProductSectionData();
  const normalizedRouteTitle = normalizeProductRouteValue(productTitle);
  const product = sectionData.products.find(item => normalizeProductRouteValue(item.name) === normalizedRouteTitle);

  return { sectionData, product };
}

export async function generateMetadata({ params }: { params: Promise<{ productTitle: string }> }) {
  const { productTitle } = await params;
  const { product } = await getProductFromRoute(productTitle);

  if (!product) {
    return {
      title: 'Product not found',
    };
  }

  return {
    title: product.name,
    description: `${product.brand} - ${product.features?.join(', ') || 'Product details'}`,
  };
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ productTitle: string }> }) {
  const { productTitle } = await params;
  const { sectionData, product } = await getProductFromRoute(productTitle);

  if (!product) notFound();

  const relatedProducts = sectionData.products.filter(item => item.category === product.category && item.name !== product.name).slice(0, 4);
  const whatsappNumber = sectionData.whatsappNumber.replace(/\D/g, '') || defaultDataSection44.whatsappNumber;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`আমি ${product.name} অর্ডার করতে চাই।`)}`;

  return (
    <main className="min-h-screen bg-[#F8FAF9] pt-[80px] text-slate-900">
      <section className="container mx-auto px-4 py-8 md:py-12">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-emerald-700 hover:text-emerald-900">
          <ArrowLeft size={18} /> সব পণ্যে ফিরে যান
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12">
          <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
            <div className="relative aspect-square bg-[#F1F5F2]">
              <Image src={product.image} alt={product.name} fill priority className="object-contain p-6 md:p-10" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-sm text-xs font-black uppercase tracking-widest">
                <Battery size={14} /> {product.brand}
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-slate-900">{product.name}</h1>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill={index < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      className={index < Math.floor(product.rating) ? 'text-amber-400' : 'text-slate-300'}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-500">
                  {product.rating} ({product.ratingCount} reviews)
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-end gap-3 rounded-sm border border-slate-200 bg-white p-5">
              <span className="text-4xl font-black text-emerald-700">{formatPrice(product.offerPrice)}</span>
              <span className="mb-1 text-lg font-bold text-slate-300 line-through">{formatPrice(product.originalPrice)}</span>
              {product.inStock && <span className="mb-2 rounded-sm bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">স্টক আছে</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-sm">
                <Clock className="text-emerald-600" size={24} />
                <div>
                  <p className="text-xs font-black uppercase text-slate-400">Warranty</p>
                  <p className="font-bold">{product.warranty}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white border border-slate-200 p-4 rounded-sm">
                <Scale className="text-amber-500" size={24} />
                <div>
                  <p className="text-xs font-black uppercase text-slate-400">Weight</p>
                  <p className="font-bold">{product.weight}</p>
                </div>
              </div>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="bg-white border border-slate-200 p-5 rounded-sm">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-black">
                  <ShieldCheck className="text-emerald-600" size={22} /> Key Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2 text-sm font-semibold text-slate-600">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-full items-center justify-center gap-3 rounded-sm bg-emerald-600 text-lg font-black text-white shadow-xl shadow-emerald-900/15 transition-all hover:bg-emerald-700"
            >
              <MessageCircle size={24} /> অর্ডার করতে ক্লিক করুন
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-12">
        <div className="bg-white border border-slate-200 rounded-sm p-5 md:p-8">
          <h2 className="mb-5 flex items-center gap-2 text-2xl font-black">
            <Package className="text-emerald-600" size={26} /> Product Details
          </h2>
          {product.description && <div className="prose prose-slate max-w-none text-slate-600" dangerouslySetInnerHTML={{ __html: product.description }} />}

          {product.descriptionImages?.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {product.descriptionImages.map((image, index) => (
                <div key={`${image}-${index}`} className="overflow-hidden rounded-sm border border-slate-100 bg-slate-50">
                  <Image src={image} alt={`${product.name} detail ${index + 1}`} width={1200} height={1200} className="h-auto w-full" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <h2 className="mb-6 text-2xl font-black">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedProducts.map((item: IProductItem) => (
              <Link key={item.id} href={`/product/${encodeURIComponent(item.name)}`} className="group overflow-hidden rounded-sm border border-slate-200 bg-white">
                <div className="relative aspect-square bg-[#F1F5F2]">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-6 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-xs font-black uppercase text-emerald-600">{item.brand}</p>
                  <h3 className="mt-1 line-clamp-2 min-h-[2.75rem] text-sm font-black text-slate-800">{item.name}</h3>
                  <p className="mt-3 text-lg font-black text-emerald-700">{formatPrice(item.offerPrice)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
