/*
|-----------------------------------------
| setting up Data for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/
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
  description: string;
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
  whatsappNumber: string;
  categories: ICategoryItem[];
  products: IProductItem[];
  footerCtaTitle: string;
  footerCtaDesc: string;
  footerFeatures: IFooterFeature[];
}

export interface ProductSectionProps {
  data?: IProductSectionData | string;
}

export const normalizeProductRouteValue = (value: string) => {
  try {
    return decodeURIComponent(value).trim().toLocaleLowerCase('bn-BD').replace(/\s+/g, ' ');
  } catch {
    return value.trim().toLocaleLowerCase('bn-BD').replace(/\s+/g, ' ');
  }
};

export const getProductDetailPath = (product: Pick<IProductItem, 'name'>) => `/product/${encodeURIComponent(product.name)}`;

const batteryDescription =
  '<p>লিথিয়াম ব্যাটারি প্যাকটি ইলেকট্রিক রিকশা, অটো ও দৈনন্দিন পাওয়ার ব্যাকআপের জন্য তৈরি। স্থিতিশীল আউটপুট, কম ওজন এবং দীর্ঘ সাইকেল লাইফের কারণে এটি নিয়মিত ব্যবহারে নির্ভরযোগ্য।</p>';

const rickshawDescription =
  '<p>মজবুত বডি, আরামদায়ক সিটিং এবং শহর ও গ্রামীণ রাস্তায় চলাচলের উপযোগী ডিজাইনের ইলেকট্রিক রিকশা। কম চলতি খরচে যাত্রী পরিবহনের জন্য উপযুক্ত।</p>';

const cargoDescription =
  '<p>পণ্য পরিবহনের জন্য শক্তিশালী ইলেকট্রিক কার্গো ট্রাইসাইকেল। ব্যবসায়িক ডেলিভারি, বাজার পণ্য এবং দৈনন্দিন মালামাল বহনের জন্য কার্যকর সমাধান।</p>';

const createBatteryProduct = (index: number, name: string, image: string, features: string[], brand = 'Lithium Power'): IProductItem => ({
  id: `battery-${String(index).padStart(2, '0')}`,
  brand,
  name,
  rating: 4.7,
  ratingCount: 18 + index,
  description: batteryDescription,
  descriptionImages: [],
  offerPrice: 16500 + index * 750,
  originalPrice: 18500 + index * 900,
  warranty: index === 1 ? '৩ বছর' : '২ বছর',
  weight: index === 1 ? '১০.৫ কেজি' : '১১-১২ কেজি',
  inStock: true,
  category: 'battery',
  image,
  features,
});

const createRickshawProduct = (index: number, name: string, image: string, features: string[], brand = 'Farzana Auto'): IProductItem => ({
  id: `electric-rickshaw-${String(index).padStart(2, '0')}`,
  brand,
  name,
  rating: 4.6,
  ratingCount: 24 + index,
  description: rickshawDescription,
  descriptionImages: [],
  offerPrice: 145000 + index * 2500,
  originalPrice: 158000 + index * 3000,
  warranty: '১ বছর',
  weight: 'প্রায় ৩৫০-৪২০ কেজি',
  inStock: true,
  category: 'rickshaw',
  image,
  features,
});

export const defaultDataSection44: IProductSectionData = {
  title: 'ইলেকট্রিক রিকশা ও লিথিয়াম ব্যাটারি',
  subtitle: 'Farzana Enterprise এর সম্পূর্ণ পণ্য তালিকা থেকে আপনার প্রয়োজনীয় মডেলটি বেছে নিন',
  whatsappNumber: '8801700000000',
  categories: [
    { id: 'all', label: 'সব পণ্য', iconName: 'Package' },
    { id: 'battery', label: 'লিথিয়াম ব্যাটারি', iconName: 'Battery' },
    { id: 'rickshaw', label: 'ইলেকট্রিক রিকশা', iconName: 'Truck' },
    { id: 'cargo', label: 'কার্গো ট্রাইসাইকেল', iconName: 'Wrench' },
  ],
  products: [
    createBatteryProduct(1, 'LiFePO4 12V 100Ah ব্ল্যাক সিরিজ ব্যাটারি', '/resource/battery-01-lifepo4-12v-100ah-black-front.jpeg', [
      'LiFePO4 12V 100Ah ক্ষমতা',
      'BMS সুরক্ষা সহ',
      'দীর্ঘ সাইকেল লাইফ',
    ], 'LiFePO4 Pro'),
    createBatteryProduct(2, 'সিলভার টপ লেবেল লিথিয়াম ব্যাটারি প্যাক', '/resource/battery-02-lithium-pack-silver-top-label.jpeg', [
      'কম্প্যাক্ট সিলভার কেসিং',
      'স্থিতিশীল আউটপুট',
      'রিকশা ও অটোতে ব্যবহারযোগ্য',
    ], 'SilverPack'),
    createBatteryProduct(3, 'সিলভার হ্যান্ডেল টার্মিনাল ব্যাটারি প্যাক', '/resource/battery-03-lithium-pack-silver-handle-terminals.jpeg', [
      'মজবুত হ্যান্ডেল',
      'সহজ কানেকশন টার্মিনাল',
      'বহনযোগ্য ডিজাইন',
    ], 'PowerHandle'),
    createBatteryProduct(4, 'ব্লু ফ্রন্ট লেবেল লিথিয়াম ব্যাটারি', '/resource/battery-04-lithium-pack-blue-front-label.jpeg', [
      'দ্রুত চার্জিং সাপোর্ট',
      'হাই ডিসচার্জ পারফরম্যান্স',
      'তাপ সহনশীল কেসিং',
    ], 'BluePower'),
    createBatteryProduct(5, 'গ্রিন ব্র্যান্ড লেবেল লিথিয়াম ব্যাটারি', '/resource/battery-05-lithium-pack-green-brand-label.jpeg', [
      'এনার্জি সেভিং ডিজাইন',
      'দৈনন্দিন ব্যবহারের জন্য উপযোগী',
      'নির্ভরযোগ্য ব্যাকআপ',
    ], 'GreenVolt'),
    createBatteryProduct(6, 'সিলভার ব্র্যান্ড লেবেল লিথিয়াম ব্যাটারি', '/resource/battery-06-lithium-pack-silver-brand-label.jpeg', [
      'প্রিমিয়াম সিলভার ফিনিশ',
      'ওভারচার্জ সুরক্ষা',
      'কম রক্ষণাবেক্ষণ',
    ], 'SilverVolt'),
    createBatteryProduct(7, 'সিলভার চার্জিং লেবেল ব্যাটারি প্যাক', '/resource/battery-07-lithium-pack-silver-charging-label.jpeg', [
      'চার্জিং নির্দেশনা লেবেল',
      'সুরক্ষিত পাওয়ার ডেলিভারি',
      'লং ব্যাকআপ',
    ], 'ChargeSafe'),
    createBatteryProduct(8, 'সিলভার টপ লেবেল অল্টারনেট ব্যাটারি', '/resource/battery-08-lithium-pack-silver-top-label-alt.jpeg', [
      'কম্প্যাক্ট টপ লেবেল ডিজাইন',
      'সহজ ইনস্টলেশন',
      'দীর্ঘস্থায়ী সেল',
    ], 'SilverPack'),
    createBatteryProduct(9, 'সিলভার ডুয়াল হ্যান্ডেল লিথিয়াম ব্যাটারি', '/resource/battery-09-lithium-pack-silver-dual-handle.jpeg', [
      'ডুয়াল হ্যান্ডেল কেসিং',
      'সহজে বহনযোগ্য',
      'ভারী ব্যবহারে টেকসই',
    ], 'DualCarry'),
    createBatteryProduct(10, 'গ্রিন ডুয়াল হ্যান্ডেল লিথিয়াম ব্যাটারি', '/resource/battery-10-lithium-pack-green-dual-handle.jpeg', [
      'ডুয়াল হ্যান্ডেল',
      'গ্রিন প্রোটেক্টিভ কেস',
      'রিকশা ব্যাকআপের জন্য উপযোগী',
    ], 'GreenCarry'),
    createBatteryProduct(11, 'ব্লু ডুয়াল হ্যান্ডেল লিথিয়াম ব্যাটারি', '/resource/battery-11-lithium-pack-blue-dual-handle.jpeg', [
      'ডুয়াল হ্যান্ডেল ডিজাইন',
      'শক্তিশালী কেসিং',
      'নিয়মিত ব্যবহারে স্থিতিশীল',
    ], 'BlueCarry'),
    createBatteryProduct(12, 'গ্রিন স্পেসিফিকেশন লেবেল ব্যাটারি প্যাক', '/resource/battery-12-lithium-pack-green-spec-label.jpeg', [
      'স্পেসিফিকেশন লেবেলসহ',
      'উন্নত সেল প্যাক',
      'স্মুথ পাওয়ার সাপ্লাই',
    ], 'GreenVolt'),
    {
      id: 'electric-cargo-tricycle-01',
      brand: 'Farzana Cargo',
      name: 'গ্রিন ইলেকট্রিক কার্গো ট্রাইসাইকেল',
      rating: 4.7,
      ratingCount: 21,
      description: cargoDescription,
      descriptionImages: [],
      offerPrice: 185000,
      originalPrice: 205000,
      warranty: '১ বছর',
      weight: 'প্রায় ৪৫০ কেজি',
      inStock: true,
      category: 'cargo',
      image: '/resource/electric-cargo-tricycle-01-green-side-front.jpeg',
      features: ['মালামাল পরিবহনের জন্য উপযোগী', 'শক্তিশালী চেসিস', 'ব্যবসায়িক ডেলিভারির জন্য কার্যকর'],
    },
    createRickshawProduct(1, 'রেড সাইড লেফট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-01-red-side-left.jpeg', [
      'রেড বডি কালার',
      'সাইড ভিউ ডিজাইন',
      'শহর ও গ্রামীণ রাস্তায় উপযোগী',
    ]),
    createRickshawProduct(2, 'রেড সাইড রাইট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-02-red-side-right.jpeg', [
      'রেড সাইড প্রোফাইল',
      'আরামদায়ক যাত্রী আসন',
      'কম চলতি খরচ',
    ]),
    createRickshawProduct(3, 'গ্রিন সাইড লেফট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-03-green-side-left.jpeg', [
      'গ্রিন বডি কালার',
      'মজবুত ছাদ কাঠামো',
      'দৈনন্দিন যাত্রী পরিবহনে উপযোগী',
    ]),
    createRickshawProduct(4, 'গ্রিন ফ্রন্ট রাইট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-04-green-front-right.jpeg', [
      'ফ্রন্ট রাইট ভিউ',
      'টেকসই বডি',
      'স্মুথ ড্রাইভিং অভিজ্ঞতা',
    ]),
    createRickshawProduct(5, 'রেড ওপেন কেবিন সাইড লেফট রিকশা', '/resource/electric-rickshaw-05-red-side-left-open-cabin.jpeg', [
      'ওপেন কেবিন ডিজাইন',
      'যাত্রী ওঠানামায় সুবিধা',
      'রেড ফিনিশ',
    ]),
    createRickshawProduct(6, 'রেড ফ্রন্ট রাইট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-06-red-front-right.jpeg', [
      'ফ্রন্ট রাইট অ্যাঙ্গেল',
      'স্টাইলিশ রেড বডি',
      'কম রক্ষণাবেক্ষণ',
    ]),
    createRickshawProduct(7, 'গ্রিন ওপেন কেবিন সাইড লেফট রিকশা', '/resource/electric-rickshaw-07-green-side-left-open-cabin.jpeg', [
      'ওপেন কেবিন',
      'গ্রিন কালার',
      'যাত্রী পরিবহনে আরামদায়ক',
    ]),
    createRickshawProduct(8, 'রেড ফ্রন্ট ভিউ ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-08-red-front-view.jpeg', [
      'ফ্রন্ট ভিউ ডিজাইন',
      'মজবুত সামনের অংশ',
      'দৈনন্দিন রুটে উপযোগী',
    ]),
    createRickshawProduct(9, 'গ্রিন ফ্রন্ট লেফট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-09-green-front-left.jpeg', [
      'ফ্রন্ট লেফট ভিউ',
      'গ্রিন বডি',
      'কমফোর্ট সিটিং',
    ]),
    createRickshawProduct(10, 'ব্লু ফ্রন্ট লেফট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-10-blue-front-left.jpeg', [
      'ব্লু বডি কালার',
      'আকর্ষণীয় ফ্রন্ট ডিজাইন',
      'যাত্রী পরিবহনের জন্য প্রস্তুত',
    ]),
    createRickshawProduct(11, 'রেড ফ্রন্ট লেফট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-11-red-front-left.jpeg', [
      'রেড ফ্রন্ট লেফট ভিউ',
      'টেকসই বডি ফ্রেম',
      'সাশ্রয়ী অপারেশন',
    ]),
    createRickshawProduct(12, 'ব্লু ফ্রন্ট রাইট ইলেকট্রিক রিকশা', '/resource/electric-rickshaw-12-blue-front-right.jpeg', [
      'ব্লু ফিনিশ',
      'ফ্রন্ট রাইট প্রেজেন্টেশন',
      'আরামদায়ক কেবিন',
    ]),
    createRickshawProduct(13, 'রেড সাইড ফ্রন্ট লেফট রিকশা', '/resource/electric-rickshaw-13-red-side-front-left.jpeg', [
      'সাইড ফ্রন্ট লেফট ভিউ',
      'রেড বডি',
      'দীর্ঘ রুটে উপযোগী',
    ]),
    createRickshawProduct(14, 'রেড সাইড ফ্রন্ট রাইট রিকশা', '/resource/electric-rickshaw-14-red-side-front-right.jpeg', [
      'সাইড ফ্রন্ট রাইট ভিউ',
      'মজবুত গঠন',
      'কম রক্ষণাবেক্ষণ',
    ]),
    createRickshawProduct(15, 'গ্রিন ফ্রন্ট লেফট রিকশা মডেল', '/resource/electric-rickshaw-15-green-front-left.jpeg', [
      'গ্রিন ফ্রন্ট লেফট মডেল',
      'প্রশস্ত যাত্রী আসন',
      'নিয়মিত ব্যবহারে টেকসই',
    ]),
    createRickshawProduct(16, 'গ্রিন ফ্রন্ট রাইট রিকশা মডেল', '/resource/electric-rickshaw-16-green-front-right.jpeg', [
      'গ্রিন ফ্রন্ট রাইট মডেল',
      'স্মুথ অপারেশন',
      'শহর ও গ্রামে ব্যবহারযোগ্য',
    ]),
    createRickshawProduct(17, 'ব্লু ইয়েলো ফ্রন্ট লেফট রিকশা', '/resource/electric-rickshaw-17-blue-yellow-front-left.jpeg', [
      'ব্লু-ইয়েলো কালার কম্বিনেশন',
      'আকর্ষণীয় লুক',
      'আরামদায়ক সিটিং',
    ]),
    createRickshawProduct(18, 'ব্লু ইয়েলো ফ্রন্ট রাইট রিকশা', '/resource/electric-rickshaw-18-blue-yellow-front-right.jpeg', [
      'ব্লু-ইয়েলো ফ্রন্ট রাইট',
      'স্টাইলিশ বডি',
      'কম চলতি খরচ',
    ]),
    createRickshawProduct(19, 'ইয়েলো ব্ল্যাক ফ্রন্ট লেফট রিকশা', '/resource/electric-rickshaw-19-yellow-black-front-left.jpeg', [
      'ইয়েলো-ব্ল্যাক ডিজাইন',
      'ফ্রন্ট লেফট ভিউ',
      'দৈনন্দিন আয়ের জন্য উপযোগী',
    ]),
    createRickshawProduct(20, 'ব্লু ইয়েলো ফ্রন্ট লেফট অল্টারনেট রিকশা', '/resource/electric-rickshaw-20-blue-yellow-front-left-alt.jpeg', [
      'অল্টারনেট ব্লু-ইয়েলো ডিজাইন',
      'প্রশস্ত ছাদ',
      'আরামদায়ক যাত্রী কেবিন',
    ]),
    createRickshawProduct(21, 'ইয়েলো ব্ল্যাক ফ্রন্ট ভিউ রিকশা', '/resource/electric-rickshaw-21-yellow-black-front-view.jpeg', [
      'ফ্রন্ট ভিউ',
      'ইয়েলো-ব্ল্যাক বডি',
      'স্টাইলিশ সামনের অংশ',
    ]),
    createRickshawProduct(22, 'গ্রিন অরেঞ্জ ফ্রন্ট লেফট রিকশা', '/resource/electric-rickshaw-22-green-orange-front-left.jpeg', [
      'গ্রিন-অরেঞ্জ ফিনিশ',
      'ফ্রন্ট লেফট ভিউ',
      'টেকসই কাঠামো',
    ]),
    createRickshawProduct(23, 'গ্রিন অরেঞ্জ ফ্রন্ট রাইট রিকশা', '/resource/electric-rickshaw-23-green-orange-front-right.jpeg', [
      'গ্রিন-অরেঞ্জ ফ্রন্ট রাইট',
      'আরামদায়ক যাত্রী স্পেস',
      'স্মুথ চলাচল',
    ]),
    createRickshawProduct(24, 'রেড ডেকোরেটেড ফ্রন্ট লেফট রিকশা', '/resource/electric-rickshaw-24-red-decorated-front-left.jpeg', [
      'ডেকোরেটেড রেড ডিজাইন',
      'ফ্রন্ট লেফট ভিউ',
      'আকর্ষণীয় বাহ্যিক সাজ',
    ]),
    createRickshawProduct(25, 'রেড ডেকোরেটেড ফ্রন্ট রাইট রিকশা', '/resource/electric-rickshaw-25-red-decorated-front-right.jpeg', [
      'ডেকোরেটেড ফ্রন্ট রাইট',
      'মজবুত বডি',
      'যাত্রী পরিবহনের জন্য প্রস্তুত',
    ]),
    createRickshawProduct(26, 'ব্লু ডেকোরেটেড ফ্রন্ট ভিউ রিকশা', '/resource/electric-rickshaw-26-blue-decorated-front-view.jpeg', [
      'ব্লু ডেকোরেটেড ফ্রন্ট',
      'আকর্ষণীয় ফিনিশ',
      'কমফোর্ট সিটিং',
    ]),
    createRickshawProduct(27, 'ব্লু ডেকোরেটেড ফ্রন্ট রাইট রিকশা', '/resource/electric-rickshaw-27-blue-decorated-front-right.jpeg', [
      'ব্লু ডেকোরেটেড ভিউ',
      'ফ্রন্ট রাইট অ্যাঙ্গেল',
      'দীর্ঘস্থায়ী বডি',
    ]),
    createRickshawProduct(28, 'রেড ব্ল্যাক ফ্রন্ট লেফট রিকশা', '/resource/electric-rickshaw-28-red-black-front-left.jpeg', [
      'রেড-ব্ল্যাক কালার',
      'ফ্রন্ট লেফট ভিউ',
      'স্টাইলিশ যাত্রী রিকশা',
    ]),
    createRickshawProduct(29, 'রেড ব্ল্যাক ফ্রন্ট রাইট রিকশা', '/resource/electric-rickshaw-29-red-black-front-right.jpeg', [
      'রেড-ব্ল্যাক ফ্রন্ট রাইট',
      'মজবুত ফ্রেম',
      'দৈনন্দিন রুটে উপযোগী',
    ]),
    createRickshawProduct(30, 'ব্লু ব্ল্যাক ফ্রন্ট লেফট রিকশা', '/resource/electric-rickshaw-30-blue-black-front-left.jpeg', [
      'ব্লু-ব্ল্যাক কালার',
      'ফ্রন্ট লেফট ডিজাইন',
      'আরামদায়ক যাত্রী সিট',
    ]),
    createRickshawProduct(31, 'ব্লু এনক্লোজড সাইড রিকশা', '/resource/electric-rickshaw-31-blue-enclosed-side.jpeg', [
      'এনক্লোজড সাইড ডিজাইন',
      'ব্লু বডি',
      'অতিরিক্ত সুরক্ষা কভার',
    ]),
    createRickshawProduct(32, 'ব্লু ব্ল্যাক ফ্রন্ট ভিউ রিকশা', '/resource/electric-rickshaw-32-blue-black-front-view.jpeg', [
      'ফ্রন্ট ভিউ',
      'ব্লু-ব্ল্যাক ফিনিশ',
      'স্টাইলিশ সামনের ডিজাইন',
    ]),
    createRickshawProduct(33, 'ব্লু এনক্লোজড ফ্রন্ট রিকশা', '/resource/electric-rickshaw-33-blue-enclosed-front.jpeg', [
      'এনক্লোজড ফ্রন্ট ডিজাইন',
      'ব্লু কভারড বডি',
      'আরাম ও সুরক্ষার জন্য উপযোগী',
    ]),
  ],
  footerCtaTitle: 'সেরা মূল্যে ইলেকট্রিক রিকশা ও লিথিয়াম ব্যাটারি কিনুন',
  footerCtaDesc: 'Farzana Enterprise থেকে পাইকারি ও খুচরা মূল্যে ইলেকট্রিক রিকশা, কার্গো ট্রাইসাইকেল এবং লিথিয়াম ব্যাটারি সংগ্রহ করুন।',
  footerFeatures: [
    { iconName: 'Battery', label: 'লিথিয়াম ব্যাটারি', desc: 'দীর্ঘ ব্যাকআপ ও কম রক্ষণাবেক্ষণ' },
    { iconName: 'Truck', label: 'ইলেকট্রিক রিকশা', desc: 'যাত্রী পরিবহনের নির্ভরযোগ্য মডেল' },
    { iconName: 'ShieldCheck', label: 'গ্যারান্টিযুক্ত পণ্য', desc: 'অরিজিনাল পণ্য ও বিক্রয়োত্তর সেবা' },
    { iconName: 'MessageCircle', label: 'দ্রুত অর্ডার', desc: 'WhatsApp এ সরাসরি যোগাযোগ' },
  ],
};
