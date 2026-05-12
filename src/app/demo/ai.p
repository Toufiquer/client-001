Look at the code 

app.js
```
/* ============================================================
   FARZANA ENTERPRISE — app.js  (v2 — real images)
   All data, rendering, and interactions
============================================================ */

"use strict";

/* ============================================================
   HERO SLIDES — using real banner images
============================================================ */
const heroSlides = [
  {
    bgImage: "generated-website-slides/battery-slide-01-premium-lithium-hero.jpg",
    badge: "✨ প্রিমিয়াম লিথিয়াম ব্যাটারি",
    title: "সর্বোচ্চ মানের ব্যাটারি",
    subtitle: "দীর্ঘস্থায়ী পারফরম্যান্সের জন্য সেরা লিথিয়াম ব্যাটারি সংগ্রহ",
    ctaText: "ব্যাটারি দেখুন",
    ctaHref: "#battery",
  },
  {
    bgImage: "generated-website-slides/auto-slide-01-electric-rickshaw-showcase.jpg",
    badge: "🔥 বিশেষ ছাড়",
    title: "ইলেকট্রিক রিকশা শোকেস",
    subtitle: "সর্বোচ্চ মানের ইলেকট্রিক রিকশা ও যানবাহন — সারাদেশে ডেলিভারি",
    ctaText: "রিকশা দেখুন",
    ctaHref: "#vehicle",
  },
  {
    bgImage: "generated-website-slides/battery-slide-02-complete-range-grid.jpg",
    badge: "💚 সম্পূর্ণ রেঞ্জ",
    title: "ব্যাটারির পূর্ণ সংগ্রহ",
    subtitle: "12V থেকে শুরু করে হাই-ক্যাপাসিটি ব্যাটারি — সব ধরনের চাহিদায়",
    ctaText: "সংগ্রহ দেখুন",
    ctaHref: "#battery",
  },
  {
    bgImage: "generated-website-slides/auto-slide-02-complete-lineup-collage.jpg",
    badge: "⚡ হট ডিল",
    title: "সম্পূর্ণ লাইনআপ",
    subtitle: "রিকশা, কার্গো ট্রাইসাইকেল — আমাদের কাছে সব ধরনের ইলেকট্রিক যান",
    ctaText: "পণ্য দেখুন",
    ctaHref: "#vehicle",
  },
];

/* ============================================================
   CATEGORIES DATA
============================================================ */
const categories = [
  { id: "battery",      label: "ব্যাটারি",          icon: "🔋", desc: "সব ধরনের লিথিয়াম ও লিড-অ্যাসিড ব্যাটারি",  colorClass: "bg-green"   },
  { id: "vehicle",      label: "ইলেকট্রিক রিকশা",   icon: "🛺", desc: "ইলেকট্রিক রিকশা ও কার্গো ট্রাইসাইকেল",     colorClass: "bg-emerald" },
  { id: "engine_parts", label: "ইঞ্জিন পার্টস",     icon: "⚙️", desc: "সব ধরনের ইঞ্জিনের যন্ত্রাংশ",             colorClass: "bg-teal"    },
  { id: "tires",        label: "টায়ার ও চাকা",      icon: "🛞", desc: "সেরা মানের টায়ার ও চাকা",                  colorClass: "bg-green2"  },
  { id: "lubricants",   label: "লুব্রিকেন্ট",       icon: "🛢️", desc: "ইঞ্জিন অয়েল ও গ্রিস",                    colorClass: "bg-lime"    },
  { id: "electrical",   label: "ইলেক্ট্রিক্যাল",    icon: "⚡", desc: "বৈদ্যুতিক যন্ত্রপাতি ও তার",             colorClass: "bg-yellow"  },
  { id: "accessories",  label: "আনুষাঙ্গিক",         icon: "🔧", desc: "গাড়ির আনুষাঙ্গিক পণ্যসমূহ",             colorClass: "bg-green3"  },
  { id: "tools",        label: "সরঞ্জাম",            icon: "🔩", desc: "হাতিয়ার ও মেরামত সরঞ্জাম",              colorClass: "bg-emerald2"},
];

const catIconColors = {
  "bg-green":   "background:#dcfce7;color:#15803d",
  "bg-emerald": "background:#d1fae5;color:#065f46",
  "bg-teal":    "background:#ccfbf1;color:#0f766e",
  "bg-green2":  "background:#dcfce7;color:#166534",
  "bg-lime":    "background:#ecfccb;color:#4d7c0f",
  "bg-yellow":  "background:#fef9c3;color:#854d0e",
  "bg-green3":  "background:#dcfce7;color:#16a34a",
  "bg-emerald2":"background:#d1fae5;color:#064e3b",
};

/* ============================================================
   PRODUCTS DATA — real local images
   Same folder as index.html, so paths are just filenames.
============================================================ */
const products = [

  /* ——— BATTERY (12 products, 1-2 images each) ——— */
  {
    id: "BAT-001", category: "battery",
    name: "LiFePO4 12V 100Ah ব্যাটারি (ব্ল্যাক সিরিজ)",
    description: "উচ্চ মানের LiFePO4 (লিথিয়াম আয়রন ফসফেট) ব্যাটারি। দীর্ঘস্থায়ী সাইকেল লাইফ এবং অতি নিরাপদ কেমিস্ট্রি। সোলার সিস্টেম, ইলেকট্রিক যান এবং আইপিএস-এর জন্য আদর্শ।",
    rating: 4.8, originalPrice: 28000, offerPrice: 24500,
    availability: "in_stock", brand: "LiFePO4 Pro",
    weight: "১০.৫ কেজি", warranty: "৩ বছর", lifespan: "৮–১০ বছর",
    images: ["battery-01-lifepo4-12v-100ah-black-front.jpeg", "battery-02-lithium-pack-silver-top-label.jpeg"],
    features: ["LiFePO4 কেমিস্ট্রি", "৩০০০+ সাইকেল লাইফ", "BMS সুরক্ষা সহ", "সোলার সামঞ্জস্যপূর্ণ", "দ্রুত চার্জিং"],
    specs: { "ক্যাপাসিটি": "১০০Ah", "ভোল্টেজ": "১২.৮V", "চার্জিং ভোল্টেজ": "১৪.৬V", "সাইকেল লাইফ": "৩০০০+", "চার্জিং টাইম": "৪–৬ ঘন্টা", "মাত্রা": "৩২৮×১৭২×২১৫ মিমি", "BMS": "অন্তর্ভুক্ত" },
  },
  {
    id: "BAT-002", category: "battery",
    name: "লিথিয়াম প্যাক সিলভার সিরিজ (Top Label)",
    description: "সিলভার সিরিজের লিথিয়াম ব্যাটারি প্যাক উচ্চ ডিসচার্জ রেট এবং দীর্ঘস্থায়ী ব্যাকআপের জন্য ডিজাইন করা হয়েছে। ইলেকট্রিক রিকশা ও যানবাহনের জন্য পারফেক্ট।",
    rating: 4.6, originalPrice: 22000, offerPrice: 19000,
    availability: "in_stock", brand: "SilverPack",
    weight: "১২ কেজি", warranty: "২ বছর", lifespan: "৫–৭ বছর",
    images: ["battery-02-lithium-pack-silver-top-label.jpeg", "battery-03-lithium-pack-silver-handle-terminals.jpeg"],
    features: ["হাই ডিসচার্জ রেট", "সিলভার অ্যালয় টার্মিনাল", "কমপ্যাক্ট ডিজাইন", "লো সেলফ-ডিসচার্জ"],
    specs: { "ক্যাপাসিটি": "৬০Ah", "ভোল্টেজ": "৪৮V", "চার্জিং টাইম": "৫–৭ ঘন্টা", "ডিসচার্জ রেট": "১C কন্টিনিউয়াস", "মাত্রা": "৩১০×১৫৮×২০০ মিমি" },
  },
  {
    id: "BAT-003", category: "battery",
    name: "লিথিয়াম প্যাক — হ্যান্ডেল ও টার্মিনাল সিরিজ",
    description: "সহজে বহনযোগ্য হ্যান্ডেল এবং মজবুত টার্মিনাল সহ লিথিয়াম ব্যাটারি প্যাক। রিকশা ও ছোট যানবাহনে স্থাপনার জন্য আদর্শ।",
    rating: 4.5, originalPrice: 20000, offerPrice: 17500,
    availability: "in_stock", brand: "PowerHandle",
    weight: "১১ কেজি", warranty: "২ বছর", lifespan: "৫–৬ বছর",
    images: ["battery-03-lithium-pack-silver-handle-terminals.jpeg", "battery-04-lithium-pack-blue-front-label.jpeg"],
    features: ["বহনযোগ্য হ্যান্ডেল", "মজবুত টার্মিনাল", "ওয়াটারপ্রুফ কেসিং", "শক-প্রতিরোধী"],
    specs: { "ক্যাপাসিটি": "৫০Ah", "ভোল্টেজ": "৪৮V", "চার্জিং টাইম": "৫–৬ ঘন্টা", "IP রেটিং": "IP54" },
  },
  {
    id: "BAT-004", category: "battery",
    name: "লিথিয়াম প্যাক ব্লু ফ্রন্ট লেবেল",
    description: "নীল রঙের বিশেষ ডিজাইনের লিথিয়াম ব্যাটারি প্যাক। উচ্চ তাপমাত্রায়ও কার্যকর পারফরম্যান্স বজায় রাখে।",
    rating: 4.4, originalPrice: 19500, offerPrice: 17000,
    availability: "in_stock", brand: "BluePower",
    weight: "১০.৮ কেজি", warranty: "২ বছর", lifespan: "৫–৬ বছর",
    images: ["battery-04-lithium-pack-blue-front-label.jpeg", "battery-05-lithium-pack-green-brand-label.jpeg"],
    features: ["হাই-টেম্পারেচার সহনশীল", "দ্রুত চার্জিং", "লং সাইকেল লাইফ", "কমপ্যাক্ট সাইজ"],
    specs: { "ক্যাপাসিটি": "৫০Ah", "ভোল্টেজ": "৪৮V", "অপারেটিং টেম্প": "-২০°C থেকে +৬০°C" },
  },
  {
    id: "BAT-005", category: "battery",
    name: "লিথিয়াম প্যাক গ্রিন ব্র্যান্ড লেবেল",
    description: "পরিবেশবান্ধব সবুজ ব্র্যান্ডিং সহ লিথিয়াম ব্যাটারি প্যাক। সোলার ও ইলেকট্রিক যানবাহনের জন্য সেরা পছন্দ।",
    rating: 4.7, originalPrice: 21000, offerPrice: 18500,
    availability: "in_stock", brand: "GreenPower",
    weight: "১১.৫ কেজি", warranty: "২ বছর", lifespan: "৬–৮ বছর",
    images: ["battery-05-lithium-pack-green-brand-label.jpeg", "battery-06-lithium-pack-silver-brand-label.jpeg"],
    features: ["ইকো-ফ্রেন্ডলি ডিজাইন", "হাই এনার্জি ডেনসিটি", "সোলার অপটিমাইজড", "দীর্ঘ আয়ুষ্কাল"],
    specs: { "ক্যাপাসিটি": "৬০Ah", "ভোল্টেজ": "৪৮V", "চার্জিং দক্ষতা": "৯৮%", "সেলফ-ডিসচার্জ": "<৩%/মাস" },
  },
  {
    id: "BAT-006", category: "battery",
    name: "লিথিয়াম প্যাক চার্জিং সিরিজ",
    description: "দ্রুত চার্জিং প্রযুক্তি সহ বিশেষ ব্যাটারি প্যাক। ব্যস্ত ব্যবহারকারীদের জন্য যারা দ্রুত চার্জ করে আবার যাত্রায় বের হতে চান।",
    rating: 4.5, originalPrice: 23000, offerPrice: 20000,
    availability: "limited", brand: "FastCharge",
    weight: "১২.২ কেজি", warranty: "২ বছর", lifespan: "৫–৭ বছর",
    images: ["battery-07-lithium-pack-silver-charging-label.jpeg", "battery-08-lithium-pack-silver-top-label-alt.jpeg"],
    features: ["ফাস্ট চার্জ প্রযুক্তি", "২ ঘন্টায় ৮০% চার্জ", "স্মার্ট BMS", "ওভার-চার্জ সুরক্ষা"],
    specs: { "ক্যাপাসিটি": "৬০Ah", "ভোল্টেজ": "৪৮V", "দ্রুত চার্জ": "২ঘন্টায় ৮০%", "BMS": "স্মার্ট অ্যাক্টিভ" },
  },
  {
    id: "BAT-007", category: "battery",
    name: "ডুয়াল হ্যান্ডেল সিলভার ব্যাটারি",
    description: "দুই পাশে হ্যান্ডেল সহ বিশেষ ডিজাইনের সিলভার ব্যাটারি প্যাক। ইনস্টলেশন ও রিমুভাল সহজ করার জন্য আদর্শ।",
    rating: 4.6, originalPrice: 24000, offerPrice: 21000,
    availability: "in_stock", brand: "DualGrip",
    weight: "১৩ কেজি", warranty: "২ বছর", lifespan: "৬–৭ বছর",
    images: ["battery-09-lithium-pack-silver-dual-handle.jpeg", "battery-10-lithium-pack-green-dual-handle.jpeg"],
    features: ["ডুয়াল হ্যান্ডেল ডিজাইন", "সহজ ইনস্টলেশন", "মজবুত কেসিং", "জং প্রতিরোধী"],
    specs: { "ক্যাপাসিটি": "৭২Ah", "ভোল্টেজ": "৪৮V", "কেসিং উপাদান": "অ্যালুমিনিয়াম অ্যালয়" },
  },
  {
    id: "BAT-008", category: "battery",
    name: "ডুয়াল হ্যান্ডেল গ্রিন-ব্লু সিরিজ",
    description: "সবুজ ও নীল রঙের ডুয়াল হ্যান্ডেল ব্যাটারি প্যাক সিরিজ। উচ্চ ক্ষমতা ও দীর্ঘমেয়াদী ব্যাকআপ।",
    rating: 4.7, originalPrice: 26000, offerPrice: 23000,
    availability: "in_stock", brand: "ColorPack",
    weight: "১৩.৫ কেজি", warranty: "২ বছর", lifespan: "৬–৮ বছর",
    images: ["battery-10-lithium-pack-green-dual-handle.jpeg", "battery-11-lithium-pack-blue-dual-handle.jpeg", "battery-12-lithium-pack-green-spec-label.jpeg"],
    features: ["৭২Ah উচ্চ ক্ষমতা", "স্পেক লেবেল সহ", "ডুয়াল হ্যান্ডেল", "হাই ডিসচার্জ রেট"],
    specs: { "ক্যাপাসিটি": "৭২Ah", "ভোল্টেজ": "৬০V", "সাইকেল লাইফ": "২০০০+", "চার্জিং টাইম": "৬–৮ ঘন্টা" },
  },

  /* ——— VEHICLE / ELECTRIC RICKSHAW (10 products) ——— */
  {
    id: "VEH-001", category: "vehicle",
    name: "লাল ইলেকট্রিক রিকশা — স্ট্যান্ডার্ড মডেল",
    description: "উচ্চ মানের লাল রঙের ইলেকট্রিক রিকশা। শক্তিশালী মোটর ও দীর্ঘমেয়াদী ব্যাটারি সহ দৈনন্দিন যাতায়াতের জন্য সেরা পছন্দ। মজবুত বডি ও আরামদায়ক যাত্রী আসন।",
    rating: 4.6, originalPrice: 185000, offerPrice: 170000,
    availability: "in_stock", brand: "EcoRide",
    weight: "৩৫০ কেজি", warranty: "১ বছর", lifespan: "৮–১২ বছর",
    images: ["electric-rickshaw-01-red-side-left.jpeg", "electric-rickshaw-02-red-side-right.jpeg", "electric-rickshaw-08-red-front-view.jpeg"],
    features: ["শক্তিশালী DC মোটর", "দীর্ঘমেয়াদী ব্যাটারি", "আরামদায়ক আসন", "LED লাইটিং", "কম রক্ষণাবেক্ষণ"],
    specs: { "মোটর": "৮০০W DC মোটর", "ব্যাটারি": "৪৮V ৬০Ah লিথিয়াম", "রেঞ্জ": "৭০–৮০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৩৫ কিমি/ঘন্টা", "চার্জিং টাইম": "৬–৮ ঘন্টা", "যাত্রী ধারণ": "৩ যাত্রী", "বছর": "২০২৩" },
  },
  {
    id: "VEH-002", category: "vehicle",
    name: "সবুজ ইলেকট্রিক রিকশা — পরিবেশবান্ধব মডেল",
    description: "পরিবেশবান্ধব সবুজ রঙের ইলেকট্রিক রিকশা। কম বিদ্যুৎ খরচে বেশি দূরত্ব অতিক্রম করে। শহর ও গ্রামীণ উভয় পরিবেশের জন্য উপযুক্ত।",
    rating: 4.7, originalPrice: 190000, offerPrice: 175000,
    availability: "in_stock", brand: "GreenWheels",
    weight: "৩৬০ কেজি", warranty: "১ বছর", lifespan: "৮–১২ বছর",
    images: ["electric-rickshaw-03-green-side-left.jpeg", "electric-rickshaw-04-green-front-right.jpeg", "electric-rickshaw-09-green-front-left.jpeg"],
    features: ["ইকো-ফ্রেন্ডলি", "দীর্ঘ রেঞ্জ", "শক-অ্যাবজর্বার সাসপেনশন", "ডিজিটাল স্পিডোমিটার"],
    specs: { "মোটর": "১০০০W BLDC মোটর", "ব্যাটারি": "৬০V ৬০Ah লিথিয়াম", "রেঞ্জ": "৮০–১০০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৪০ কিমি/ঘন্টা", "চার্জিং টাইম": "৭–৮ ঘন্টা", "যাত্রী ধারণ": "৩ যাত্রী" },
  },
  {
    id: "VEH-003", category: "vehicle",
    name: "লাল ওপেন-কেবিন ইলেকট্রিক রিকশা",
    description: "খোলা কেবিন ডিজাইনের লাল ইলেকট্রিক রিকশা। গরমে যাত্রীদের আরামের জন্য বায়ু-প্রবাহ ডিজাইন। সহজে পরিষ্কার ও রক্ষণাবেক্ষণযোগ্য।",
    rating: 4.4, originalPrice: 175000, offerPrice: 162000,
    availability: "in_stock", brand: "OpenAir",
    weight: "৩২০ কেজি", warranty: "১ বছর", lifespan: "৭–১০ বছর",
    images: ["electric-rickshaw-05-red-side-left-open-cabin.jpeg", "electric-rickshaw-06-red-front-right.jpeg"],
    features: ["ওপেন-কেবিন ডিজাইন", "বায়ু-প্রবাহ সিস্টেম", "হালকা ওজন", "সহজ পরিষ্কার"],
    specs: { "মোটর": "৮০০W DC", "ব্যাটারি": "৪৮V ৫০Ah", "রেঞ্জ": "৬০–৭০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৩০ কিমি/ঘন্টা", "কেবিন টাইপ": "ওপেন" },
  },
  {
    id: "VEH-004", category: "vehicle",
    name: "নীল ইলেকট্রিক রিকশা — প্রিমিয়াম মডেল",
    description: "প্রিমিয়াম নীল রঙের ইলেকট্রিক রিকশা। উন্নত সাসপেনশন সিস্টেম ও প্রিমিয়াম ইন্টেরিয়র সহ যাত্রীদের সর্বোচ্চ আরাম নিশ্চিত করে।",
    rating: 4.8, originalPrice: 210000, offerPrice: 195000,
    availability: "in_stock", brand: "BlueStar",
    weight: "৩৮০ কেজি", warranty: "১.৫ বছর", lifespan: "১০–১৫ বছর",
    images: ["electric-rickshaw-10-blue-front-left.jpeg", "electric-rickshaw-12-blue-front-right.jpeg", "electric-rickshaw-30-blue-black-front-left.jpeg"],
    features: ["প্রিমিয়াম সাসপেনশন", "হাই-পাওয়ার মোটর", "লম্বা রেঞ্জ", "LED ড্যাশবোর্ড", "USB চার্জিং পোর্ট"],
    specs: { "মোটর": "১২০০W BLDC মোটর", "ব্যাটারি": "৬০V ৭২Ah লিথিয়াম", "রেঞ্জ": "১০০–১২০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৪৫ কিমি/ঘন্টা", "চার্জিং টাইম": "৮–১০ ঘন্টা", "গ্রেডেবিলিটি": "২০°" },
  },
  {
    id: "VEH-005", category: "vehicle",
    name: "হলুদ-কালো ইলেকট্রিক রিকশা",
    description: "আকর্ষণীয় হলুদ-কালো দ্বিরঙ ডিজাইনের ইলেকট্রিক রিকশা। সহজেই চোখে পড়ে ও পেশাদার চেহারায় সজ্জিত।",
    rating: 4.5, originalPrice: 195000, offerPrice: 180000,
    availability: "in_stock", brand: "TwoTone",
    weight: "৩৫৫ কেজি", warranty: "১ বছর", lifespan: "৮–১২ বছর",
    images: ["electric-rickshaw-19-yellow-black-front-left.jpeg", "electric-rickshaw-21-yellow-black-front-view.jpeg"],
    features: ["দ্বিরঙ ডিজাইন", "দৃষ্টিনন্দন স্টাইলিং", "মজবুত বডি", "অ্যান্টি-রাস্ট কোটিং"],
    specs: { "মোটর": "১০০০W DC", "ব্যাটারি": "৪৮V ৬০Ah", "রেঞ্জ": "৭০–৯০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৩৮ কিমি/ঘন্টা" },
  },
  {
    id: "VEH-006", category: "vehicle",
    name: "সবুজ-কমলা ডেকোরেটেড রিকশা",
    description: "রঙিন সবুজ-কমলা ডেকোরেশন সহ আকর্ষণীয় ইলেকট্রিক রিকশা। উৎসবমুখর ও প্রাণবন্ত ডিজাইন।",
    rating: 4.3, originalPrice: 180000, offerPrice: 165000,
    availability: "in_stock", brand: "ColorRide",
    weight: "৩৪০ কেজি", warranty: "১ বছর", lifespan: "৭–১০ বছর",
    images: ["electric-rickshaw-22-green-orange-front-left.jpeg", "electric-rickshaw-23-green-orange-front-right.jpeg"],
    features: ["বিশেষ ডেকোরেশন", "উজ্জ্বল রঙ", "আকর্ষণীয় ডিজাইন", "স্থায়ী পেইন্ট"],
    specs: { "মোটর": "৮০০W DC", "ব্যাটারি": "৪৮V ৫০Ah", "রেঞ্জ": "৬৫–৭৫ কিমি/চার্জ", "সর্বোচ্চ গতি": "৩২ কিমি/ঘন্টা" },
  },
  {
    id: "VEH-007", category: "vehicle",
    name: "লাল ডেকোরেটেড প্রিমিয়াম রিকশা",
    description: "বিশেষ লাল ডেকোরেশন সহ প্রিমিয়াম ইলেকট্রিক রিকশা। বিশেষ অনুষ্ঠান ও ভিআইপি পরিষেবার জন্য আদর্শ।",
    rating: 4.7, originalPrice: 220000, offerPrice: 200000,
    availability: "limited", brand: "RedPremium",
    weight: "৩৭০ কেজি", warranty: "১.৫ বছর", lifespan: "১০–১৫ বছর",
    images: ["electric-rickshaw-24-red-decorated-front-left.jpeg", "electric-rickshaw-25-red-decorated-front-right.jpeg", "electric-rickshaw-28-red-black-front-left.jpeg"],
    features: ["প্রিমিয়াম ডেকোরেশন", "ভেলভেট ইন্টেরিয়র", "উচ্চমানের শেষটা", "বিশেষ LED প্যাটার্ন"],
    specs: { "মোটর": "১২০০W BLDC", "ব্যাটারি": "৬০V ৬০Ah লিথিয়াম", "রেঞ্জ": "৮০–১০০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৪০ কিমি/ঘন্টা", "ইন্টেরিয়র": "প্রিমিয়াম ভেলভেট" },
  },
  {
    id: "VEH-008", category: "vehicle",
    name: "নীল এনক্লোজড ক্যাবিন রিকশা",
    description: "সম্পূর্ণ বন্ধ কেবিন সহ নীল ইলেকট্রিক রিকশা। বৃষ্টি ও ঝড়ে যাত্রীদের সম্পূর্ণ সুরক্ষা নিশ্চিত করে। শীতকালীন ব্যবহারের জন্য আদর্শ।",
    rating: 4.9, originalPrice: 250000, offerPrice: 230000,
    availability: "in_stock", brand: "AllWeather",
    weight: "৪২০ কেজি", warranty: "২ বছর", lifespan: "১২–১৫ বছর",
    images: ["electric-rickshaw-31-blue-enclosed-side.jpeg", "electric-rickshaw-33-blue-enclosed-front.jpeg", "electric-rickshaw-32-blue-black-front-view.jpeg"],
    features: ["সম্পূর্ণ এনক্লোজড কেবিন", "সব আবহাওয়ায় উপযুক্ত", "ওয়েদার-প্রুফ ডোর", "ইনসুলেটেড ইন্টেরিয়র", "উন্নত মোটর"],
    specs: { "মোটর": "১৫০০W BLDC মোটর", "ব্যাটারি": "৬০V ৮৪Ah লিথিয়াম", "রেঞ্জ": "১২০–১৪০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৪৮ কিমি/ঘন্টা", "কেবিন": "সম্পূর্ণ এনক্লোজড", "IP রেটিং": "IP৬৫" },
  },
  {
    id: "VEH-009", category: "vehicle",
    name: "নীল-হলুদ ডুয়াল-টোন রিকশা",
    description: "ট্রেন্ডি নীল-হলুদ দ্বিরঙ ডিজাইনের ইলেকট্রিক রিকশা। তরুণ উদ্যোক্তাদের জন্য স্টাইলিশ ও আধুনিক পছন্দ।",
    rating: 4.4, originalPrice: 192000, offerPrice: 178000,
    availability: "in_stock", brand: "YouthRide",
    weight: "৩৪৫ কেজি", warranty: "১ বছর", lifespan: "৮–১০ বছর",
    images: ["electric-rickshaw-17-blue-yellow-front-left.jpeg", "electric-rickshaw-18-blue-yellow-front-right.jpeg", "electric-rickshaw-20-blue-yellow-front-left-alt.jpeg"],
    features: ["ট্রেন্ডি দ্বিরঙ ডিজাইন", "আধুনিক স্টাইলিং", "উজ্জ্বল LED লাইট", "ডিজিটাল ড্যাশবোর্ড"],
    specs: { "মোটর": "১০০০W BLDC", "ব্যাটারি": "৬০V ৫০Ah", "রেঞ্জ": "৭৫–৯০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৪০ কিমি/ঘন্টা" },
  },
  {
    id: "VEH-010", category: "vehicle",
    name: "ইলেকট্রিক কার্গো ট্রাইসাইকেল (সবুজ)",
    description: "মালামাল পরিবহনের জন্য বিশেষভাবে ডিজাইন করা ইলেকট্রিক কার্গো ট্রাইসাইকেল। বড় কার্গো বক্স ও শক্তিশালী মোটর সহ ভারী বোঝা বহনে সক্ষম।",
    rating: 4.6, originalPrice: 280000, offerPrice: 255000,
    availability: "in_stock", brand: "CargoElec",
    weight: "৫৫০ কেজি", warranty: "১.৫ বছর", lifespan: "১০–১৫ বছর",
    images: ["electric-cargo-tricycle-01-green-side-front.jpeg"],
    features: ["বড় কার্গো বক্স", "উচ্চ পেলোড ক্ষমতা", "শক্তিশালী মোটর", "তিন চাকার স্থায়িত্ব", "কম অপারেটিং খরচ"],
    specs: { "মোটর": "২০০০W BLDC মোটর", "ব্যাটারি": "৭২V ৮০Ah লিথিয়াম", "সর্বোচ্চ পেলোড": "৫০০ কেজি", "রেঞ্জ": "৮০–১০০ কিমি/চার্জ", "সর্বোচ্চ গতি": "৩৫ কিমি/ঘন্টা", "কার্গো বক্স": "১২০০×৮০০×৬০০ মিমি" },
  },

  /* ——— ENGINE PARTS ——— */
  {
    id: "ENG-001", category: "engine_parts",
    name: "পিস্টন রিং সেট (Universal)",
    description: "উচ্চ মানের ক্রোম-মলিবডেনাম স্টিল দিয়ে তৈরি পিস্টন রিং সেট। ইঞ্জিনের কম্প্রেশন বাড়ায় এবং তেল খরচ কমায়।",
    rating: 4.3, originalPrice: 2500, offerPrice: 2100,
    availability: "in_stock", brand: "MahindraFlex",
    weight: "৩০০ গ্রাম", warranty: "৬ মাস", lifespan: "২–৩ বছর",
    images: ["battery-01-lifepo4-12v-100ah-black-front.jpeg"],
    features: ["ক্রোম-মলি স্টিল", "উচ্চ কম্প্রেশন", "তাপ প্রতিরোধী", "ঘর্ষণ হ্রাস"],
    specs: { "পার্ট নম্বর": "PR-UNI-001", "উপাদান": "ক্রোম-মলিবডেনাম স্টিল", "মাত্রা": "৭২ মিমি ব্যাস", "সামঞ্জস্যতা": "টয়োটা, হোন্ডা, সুজুকি" },
  },
  {
    id: "ENG-002", category: "engine_parts",
    name: "টাইমিং বেল্ট কিট",
    description: "প্রিমিয়াম মানের টাইমিং বেল্ট কিট। ইঞ্জিনের নির্ভুল সময় নিয়ন্ত্রণ নিশ্চিত করে। টেনশনার ও ওয়াটার পাম্প অন্তর্ভুক্ত।",
    rating: 4.6, originalPrice: 4500, offerPrice: 3800,
    availability: "in_stock", brand: "Gates",
    weight: "৮০০ গ্রাম", warranty: "১ বছর", lifespan: "৬০,০০০ কিমি",
    images: ["battery-02-lithium-pack-silver-top-label.jpeg"],
    features: ["সম্পূর্ণ কিট", "OEM মানের", "দীর্ঘস্থায়ী রাবার", "সহজ ইনস্টলেশন"],
    specs: { "পার্ট নম্বর": "TB-GATES-002", "উপাদান": "হাই-গ্রেড রাবার ও স্টিল", "সামঞ্জস্যতা": "টয়োটা ১NZ, ১ZZ-FE" },
  },

  /* ——— TIRES ——— */
  {
    id: "TIR-001", category: "tires",
    name: "Bridgestone Turanza T005 ১৮৫/৬৫ R15",
    description: "ব্রিজস্টোন টুরানজা T005 প্রিমিয়াম ট্যুরিং টায়ার। ভেজা ও শুষ্ক উভয় রাস্তায় চমৎকার গ্রিপ প্রদান করে।",
    rating: 4.8, originalPrice: 8500, offerPrice: 7800,
    availability: "in_stock", brand: "Bridgestone",
    weight: "৮.২ কেজি", warranty: "৫ বছর", lifespan: "৪০,০০০–৬০,০০০ কিমি",
    images: ["electric-rickshaw-15-green-front-left.jpeg"],
    features: ["ভেজা রাস্তায় সুপিরিয়র গ্রিপ", "কম রোলিং রেজিস্ট্যান্স", "আরামদায়ক যাত্রা"],
    specs: { "সাইজ": "১৮৫/৬৫ R15 88H", "লোড ইনডেক্স": "৮৮ (৫৬০ কেজি)", "স্পিড রেটিং": "H (২১০ কিমি/ঘন্টা)", "সামঞ্জস্যতা": "সেডান, হ্যাচব্যাক, ছোট SUV" },
  },

  /* ——— LUBRICANTS ——— */
  {
    id: "LUB-001", category: "lubricants",
    name: "Mobil 1 সিন্থেটিক ইঞ্জিন অয়েল 5W-30",
    description: "মোবিল ১ পূর্ণ সিন্থেটিক ইঞ্জিন অয়েল আধুনিক ইঞ্জিনের জন্য সর্বোচ্চ সুরক্ষা প্রদান করে।",
    rating: 4.9, originalPrice: 1800, offerPrice: 1550,
    availability: "in_stock", brand: "Mobil",
    weight: "৩.৫ কেজি (৪ লিটার)", warranty: "প্যাকেজ সিল পর্যন্ত", lifespan: "৫,০০০–৭,৫০০ কিমি",
    images: ["battery-05-lithium-pack-green-brand-label.jpeg"],
    features: ["পূর্ণ সিন্থেটিক ফর্মুলা", "উন্নত ইঞ্জিন সুরক্ষা", "ঠান্ডায় দ্রুত স্টার্ট", "জ্বালানি সাশ্রয়"],
    specs: { "ভিসকোসিটি": "5W-30", "পরিমাণ": "৪ লিটার", "তেলের ধরন": "পূর্ণ সিন্থেটিক", "সামঞ্জস্যতা": "পেট্রোল, ডিজেল, হাইব্রিড" },
  },

  /* ——— ELECTRICAL ——— */
  {
    id: "ELC-001", category: "electrical",
    name: "অটোমোটিভ ফিউজ বক্স সেট (৪০ পিস)",
    description: "গাড়ির বৈদ্যুতিক সিস্টেম সুরক্ষার জন্য উচ্চ মানের ফিউজ বক্স সেট।",
    rating: 4.2, originalPrice: 450, offerPrice: 380,
    availability: "in_stock", brand: "Bosch",
    weight: "১৫০ গ্রাম", warranty: "৬ মাস", lifespan: "৩–৫ বছর",
    images: ["battery-07-lithium-pack-silver-charging-label.jpeg"],
    features: ["৪০ পিস সেট", "মিনি ATM ফিউজ", "রঙ-কোডেড", "সব গাড়িতে প্রযোজ্য"],
    specs: { "ভোল্টেজ": "১২–৩২V", "অ্যাম্পিয়ার রেঞ্জ": "৫A–৪০A", "সামঞ্জস্যতা": "সব ধরনের গাড়ি" },
  },

  /* ——— ACCESSORIES ——— */
  {
    id: "ACC-001", category: "accessories",
    name: "কার সিট কভার (ফুল সেট)",
    description: "প্রিমিয়াম লেদার ও মেশ ম্যাটেরিয়াল দিয়ে তৈরি কার সিট কভার। গাড়ির আসনকে সুরক্ষিত রাখে।",
    rating: 4.3, originalPrice: 3500, offerPrice: 2900,
    availability: "in_stock", brand: "CarComfort",
    weight: "২.৫ কেজি", warranty: "১ বছর", lifespan: "৩–৫ বছর",
    images: ["electric-rickshaw-11-red-front-left.jpeg"],
    features: ["প্রিমিয়াম PU লেদার", "এয়ারব্যাগ সামঞ্জস্যপূর্ণ", "ওয়াটারপ্রুফ", "সহজে পরিষ্কারযোগ্য"],
    specs: { "উপাদান": "PU লেদার + মেশ", "মাত্রা": "ইউনিভার্সাল", "সামঞ্জস্যতা": "সেডান, SUV, হ্যাচব্যাক" },
  },

  /* ——— TOOLS ——— */
  {
    id: "TOL-001", category: "tools",
    name: "অটোমোটিভ টুলস কিট (৭২ পিস)",
    description: "পেশাদার মেকানিকদের জন্য সম্পূর্ণ ৭২ পিস টুলস কিট। Cr-V স্টিল দিয়ে তৈরি।",
    rating: 4.6, originalPrice: 6500, offerPrice: 5500,
    availability: "in_stock", brand: "Stanley",
    weight: "৫.৫ কেজি", warranty: "৫ বছর", lifespan: "১০+ বছর",
    images: ["battery-09-lithium-pack-silver-dual-handle.jpeg"],
    features: ["৭২ পিস সম্পূর্ণ সেট", "Cr-V স্টিল", "পোর্টেবল কেস সহ", "জং প্রতিরোধী"],
    specs: { "উপাদান": "ক্রোম-ভ্যানেডিয়াম স্টিল", "মাত্রা": "৪৫×৩৫×১৫ সেমি", "পিস": "৭২ পিস" },
  },
];

/* ============================================================
   HELPERS
============================================================ */
function formatPrice(price) {
  return "৳" + price.toLocaleString("bn-BD");
}
function discountPct(original, offer) {
  return Math.round(((original - offer) / original) * 100);
}
function stars(rating) {
  let h = '<div class="stars">';
  for (let i = 1; i <= 5; i++) {
    h += `<span class="star ${i <= Math.floor(rating) ? "star-filled" : "star-empty"}">★</span>`;
  }
  return h + "</div>";
}
function availClass(a) {
  return { in_stock: "avail-in", out_of_stock: "avail-out", limited: "avail-limit" }[a] || "avail-in";
}
function availLabel(a) {
  return { in_stock: "স্টকে আছে", out_of_stock: "স্টকে নেই", limited: "সীমিত স্টক" }[a] || "স্টকে আছে";
}
function availDetailClass(a) {
  return { in_stock: "detail-avail-in", out_of_stock: "detail-avail-out", limited: "detail-avail-lim" }[a] || "detail-avail-in";
}
function getProductById(id) { return products.find(p => p.id === id); }
function getPageUrl(productId) {
  return `${window.location.origin}${window.location.pathname}#product-${productId}`;
}

/* ============================================================
   HERO SLIDER — real background images
============================================================ */
let currentSlide = 0;
let heroTimer = null;

function buildHeroSlider() {
  const container = document.getElementById("hero-slider");
  const dotsContainer = document.getElementById("hero-dots");

  heroSlides.forEach((slide, i) => {
    const el = document.createElement("div");
    el.className = `hero-slide ${i === 0 ? "active" : ""}`;
    el.id = `hero-slide-${i}`;
    // Set real background image
    el.style.backgroundImage = `url('${slide.bgImage}')`;
    el.innerHTML = `
      <div class="container hero-container">
        <div class="hero-content">
          <span class="hero-badge">${slide.badge}</span>
          <h1 class="hero-title">${slide.title}</h1>
          <p class="hero-subtitle">${slide.subtitle}</p>
          <div class="hero-ctas">
            <a href="${slide.ctaHref}" class="hero-cta-primary">${slide.ctaText} →</a>
            <a href="https://wa.me/8801700000000" target="_blank" rel="noopener" class="hero-cta-secondary">💬 অর্ডার করুন</a>
          </div>
        </div>
      </div>`;
    container.appendChild(el);

    const dot = document.createElement("button");
    dot.className = `hero-dot ${i === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `স্লাইড ${i + 1}`);
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  });

  startHeroTimer();
}

function goToSlide(index) {
  document.querySelectorAll(".hero-slide").forEach((s, i) => s.classList.toggle("active", i === index));
  document.querySelectorAll(".hero-dot").forEach((d, i) => d.classList.toggle("active", i === index));
  currentSlide = index;
  document.getElementById("hero-counter").textContent = `${index + 1} / ${heroSlides.length}`;
}
function heroSlide(dir) {
  clearInterval(heroTimer);
  goToSlide((currentSlide + dir + heroSlides.length) % heroSlides.length);
  startHeroTimer();
}
function startHeroTimer() {
  heroTimer = setInterval(() => goToSlide((currentSlide + 1) % heroSlides.length), 4500);
}

/* ============================================================
   BUILD NAV
============================================================ */
function buildNav() {
  const desktopNav = document.getElementById("desktop-nav-list");
  const mobileNav  = document.getElementById("mobile-nav-list");
  const catNav     = document.getElementById("cat-nav-scroll");
  const footerCat  = document.getElementById("footer-cat-links");

  categories.forEach(cat => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${cat.id}" class="nav-link">${cat.icon} ${cat.label}</a>`;
    desktopNav.appendChild(li);

    const mli = document.createElement("li");
    mli.innerHTML = `<a href="#${cat.id}" class="mobile-nav-link" onclick="closeMenu()">${cat.icon} ${cat.label}</a>`;
    mobileNav.appendChild(mli);

    const pill = document.createElement("a");
    pill.href = `#${cat.id}`;
    pill.className = "cat-pill";
    pill.innerHTML = `<span>${cat.icon}</span><span>${cat.label}</span>`;
    catNav.appendChild(pill);

    const fli = document.createElement("li");
    fli.innerHTML = `<a href="#${cat.id}">${cat.label}</a>`;
    footerCat.appendChild(fli);
  });

  const contactLi = document.createElement("li");
  contactLi.innerHTML = `<a href="#contact" class="nav-link nav-contact">📍 যোগাযোগ</a>`;
  desktopNav.appendChild(contactLi);
}

/* ============================================================
   BUILD PRODUCT SECTIONS
============================================================ */
function buildSections() {
  const wrapper = document.getElementById("sections-wrapper");
  categories.forEach(cat => {
    const catProducts = products.filter(p => p.category === cat.id);
    if (!catProducts.length) return;

    const section = document.createElement("section");
    section.className = "cat-section";
    section.id = cat.id;

    const iconStyle = catIconColors[cat.colorClass] || "background:#dcfce7;color:#16a34a";
    section.innerHTML = `
      <div class="cat-section-header">
        <div class="cat-header-left">
          <div class="cat-icon-box" style="${iconStyle}">${cat.icon}</div>
          <div>
            <h2 class="cat-name">${cat.label}</h2>
            <p class="cat-desc">${cat.desc}</p>
          </div>
        </div>
        <span class="cat-count">${catProducts.length}টি পণ্য</span>
      </div>
      <div class="cat-divider">
        <div class="cat-divider-bar"></div>
        <div class="cat-divider-bar"></div>
      </div>
      <div class="product-grid" id="grid-${cat.id}"></div>`;

    wrapper.appendChild(section);
    const grid = section.querySelector(`#grid-${cat.id}`);
    catProducts.forEach(p => grid.appendChild(buildProductCard(p)));
  });
}

/* ============================================================
   PRODUCT CARD — uses first image as thumbnail
============================================================ */
function buildProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.id = `card-${product.id}`;

  const discount = discountPct(product.originalPrice, product.offerPrice);
  const firstImg  = product.images && product.images[0];
  const imgCount  = product.images ? product.images.length : 0;

  const imgHtml = firstImg
    ? `<img class="card-img" src="${firstImg}" alt="${product.name}" loading="lazy"
         onerror="this.parentElement.innerHTML='<div class=\\'card-img-placeholder\\'><span>📦</span><span>ছবি নেই</span></div>'" />`
    : `<div class="card-img-placeholder"><span>📦</span><span>ছবি নেই</span></div>`;

  const multiImgBadge = imgCount > 1
    ? `<div class="card-id-badge" style="left:10px;right:auto;background:rgba(22,163,74,.75)">📸 ${imgCount}টি ছবি</div>` : "";

  card.innerHTML = `
    <div class="card-img-wrap">
      ${imgHtml}
      ${discount > 0 ? `<div class="card-discount-badge">-${discount}%</div>` : ""}
      ${multiImgBadge}
      <div class="card-id-badge">#${product.id}</div>
    </div>
    <div class="card-body">
      <div class="card-top-row">
        <span class="card-brand">${product.brand}</span>
        <span class="card-avail ${availClass(product.availability)}">${availLabel(product.availability)}</span>
      </div>
      <h3 class="card-name">${product.name}</h3>
      <div class="star-row">${stars(product.rating)}<span class="rating-val">(${product.rating})</span></div>
      <ul class="card-features">
        ${product.features.slice(0, 3).map(f => `<li class="card-feature"><span class="feature-check">✓</span>${f}</li>`).join("")}
      </ul>
      <div class="card-price-row">
        <span class="card-price-offer">${formatPrice(product.offerPrice)}</span>
        ${product.originalPrice !== product.offerPrice
          ? `<span class="card-price-orig">${formatPrice(product.originalPrice)}</span>` : ""}
      </div>
      <div class="card-meta"><span>🛡️ ${product.warranty}</span><span>⚖️ ${product.weight}</span></div>
      <div class="card-actions">
        <button class="btn-view" onclick="openDetailModal('${product.id}')">👁️ বিস্তারিত</button>
        <button class="btn-share" onclick="openShareModal('${product.id}')">📤 শেয়ার</button>
      </div>
    </div>`;
  return card;
}

/* ============================================================
   IMAGE GALLERY (in detail modal)
============================================================ */
let galleryIndex = 0;
let galleryImages = [];

function buildGallery(images, productName) {
  galleryImages = images || [];
  galleryIndex = 0;

  if (!galleryImages.length) {
    return `<div class="gallery-wrap"><div class="gallery-slide-placeholder"><span>📦</span><span>ছবি নেই</span></div></div>`;
  }

  const track = galleryImages.map((img, i) =>
    `<div class="gallery-slide">
       <img src="${img}" alt="${productName} — ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}"
            onerror="this.parentElement.innerHTML='<div class=\\'gallery-slide-placeholder\\'><span>📦</span></div>'" />
     </div>`
  ).join("");

  const dots = galleryImages.length > 1
    ? `<div class="gallery-dots">${galleryImages.map((_, i) =>
        `<button class="gallery-dot ${i === 0 ? 'active' : ''}" onclick="galleryGoTo(${i})" aria-label="${i + 1}নং ছবি"></button>`
      ).join("")}</div>` : "";

  const arrows = galleryImages.length > 1
    ? `<button class="gallery-arrow gallery-prev" onclick="gallerySlide(-1)" aria-label="আগের ছবি">&#8249;</button>
       <button class="gallery-arrow gallery-next" onclick="gallerySlide(1)" aria-label="পরের ছবি">&#8250;</button>` : "";

  const counter = galleryImages.length > 1
    ? `<div class="gallery-count" id="gallery-count">1 / ${galleryImages.length}</div>` : "";

  const thumbs = galleryImages.length > 1
    ? `<div class="thumb-row">${galleryImages.map((img, i) =>
        `<div class="thumb-item ${i === 0 ? 'active' : ''}" id="thumb-${i}" onclick="galleryGoTo(${i})">
           <img src="${img}" alt="thumb ${i + 1}" loading="lazy" />
         </div>`
      ).join("")}</div>` : "";

  return `
    <div class="gallery-wrap">
      <div class="gallery-track" id="gallery-track">
        ${track}
      </div>
      ${arrows}${dots}${counter}
    </div>
    ${thumbs}`;
}

function galleryGoTo(index) {
  galleryIndex = index;
  const track = document.getElementById("gallery-track");
  if (track) track.style.transform = `translateX(-${index * 100}%)`;

  document.querySelectorAll(".gallery-dot").forEach((d, i) => d.classList.toggle("active", i === index));
  document.querySelectorAll(".thumb-item").forEach((t, i) => t.classList.toggle("active", i === index));

  const counter = document.getElementById("gallery-count");
  if (counter) counter.textContent = `${index + 1} / ${galleryImages.length}`;
}

function gallerySlide(dir) {
  const next = (galleryIndex + dir + galleryImages.length) % galleryImages.length;
  galleryGoTo(next);
}

/* ============================================================
   PRODUCT DETAIL MODAL
============================================================ */
function openDetailModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const overlay = document.getElementById("detail-overlay");
  const content = document.getElementById("detail-content");

  const discount   = discountPct(product.originalPrice, product.offerPrice);
  const aDetailCls = availDetailClass(product.availability);
  const aLabel     = availLabel(product.availability);
  const savings    = product.originalPrice - product.offerPrice;

  const commonSpecs = { "ব্র্যান্ড": product.brand, "পণ্য আইডি": product.id, "ওজন": product.weight, "আয়ুষ্কাল": product.lifespan };
  const allSpecs = { ...commonSpecs, ...(product.specs || {}) };
  const specRows = Object.entries(allSpecs).map(([k, v]) =>
    `<tr><td class="spec-label">${k}</td><td class="spec-value">${v}</td></tr>`
  ).join("");

  const featHtml = product.features.map(f =>
    `<div class="detail-feature-item"><div class="feature-check-circle">✓</div><span>${f}</span></div>`
  ).join("");

  // Build gallery HTML
  const galleryHtml = buildGallery(product.images, product.name);

  content.innerHTML = `
    <div class="detail-img-col" style="padding:0;background:#f0fdf4;">
      ${galleryHtml}
      ${discount > 0 ? `<div class="detail-discount" style="position:absolute;top:12px;left:12px;z-index:10;">-${discount}% ছাড়</div>` : ""}
    </div>
    <div class="detail-info-col">
      <div class="detail-top-badges">
        <span class="detail-brand">${product.brand}</span>
        <span class="detail-avail ${aDetailCls}">
          <span class="detail-avail-dot"></span>${aLabel}
        </span>
      </div>
      <h2 class="detail-name">${product.name}</h2>
      <div class="detail-stars">${stars(product.rating)}
        <span class="detail-rating-val">${product.rating}</span>
        <span class="detail-rating-max">/ ৫.০</span>
      </div>
      <div class="detail-price-box">
        <p class="detail-price-label">মূল্য</p>
        <div class="detail-price-row">
          <span class="detail-price-offer">${formatPrice(product.offerPrice)}</span>
          ${product.originalPrice !== product.offerPrice
            ? `<span class="detail-price-orig">${formatPrice(product.originalPrice)}</span>` : ""}
        </div>
        ${savings > 0 ? `<p class="detail-price-save">আপনি বাঁচাচ্ছেন: ${formatPrice(savings)}</p>` : ""}
      </div>
      <div class="detail-key-info">
        <div class="key-info-card"><div class="icon">🛡️</div><div class="label">ওয়ারেন্টি</div><div class="value">${product.warranty}</div></div>
        <div class="key-info-card"><div class="icon">⚖️</div><div class="label">ওজন</div><div class="value">${product.weight}</div></div>
        <div class="key-info-card"><div class="icon">⏳</div><div class="label">আয়ুষ্কাল</div><div class="value">${product.lifespan}</div></div>
      </div>
      <p class="detail-desc-label">বিবরণ</p>
      <p class="detail-desc">${product.description}</p>

      <div class="detail-tabs">
        <button class="detail-tab active" onclick="switchTab(this,'tab-specs-${product.id}')">📋 স্পেসিফিকেশন</button>
        <button class="detail-tab" onclick="switchTab(this,'tab-feat-${product.id}')">✅ ফিচার</button>
        <button class="detail-tab" onclick="switchTab(this,'tab-warr-${product.id}')">🛡️ ওয়ারেন্টি</button>
      </div>

      <div class="detail-tab-content active" id="tab-specs-${product.id}">
        <table class="spec-table"><tbody>${specRows}</tbody></table>
      </div>
      <div class="detail-tab-content" id="tab-feat-${product.id}">
        <div class="detail-features-grid">${featHtml}</div>
      </div>
      <div class="detail-tab-content" id="tab-warr-${product.id}">
        <div class="warranty-box">
          <div class="warranty-header"><span>🛡️</span><span class="warranty-period">${product.warranty}</span></div>
          <p class="warranty-desc">এই পণ্যটি ${product.warranty} ওয়ারেন্টি সহ আসে। স্বাভাবিক ব্যবহারে যেকোনো উৎপাদন ত্রুটির জন্য বিনামূল্যে মেরামত বা প্রতিস্থাপনের নিশ্চয়তা।</p>
        </div>
        <div class="warranty-points">
          <div class="warranty-point"><span class="check">✓</span><span>উৎপাদন ত্রুটির জন্য বিনামূল্যে মেরামত</span></div>
          <div class="warranty-point"><span class="check">✓</span><span>প্রয়োজনে পণ্য প্রতিস্থাপন</span></div>
          <div class="warranty-point"><span class="info">ⓘ</span><span>ক্রয়ের রশিদ সংরক্ষণ করুন</span></div>
          <div class="warranty-point"><span class="info">ⓘ</span><span>দুর্ঘটনা বা অপব্যবহারজনিত ক্ষতি ওয়ারেন্টির বাইরে</span></div>
        </div>
      </div>

      <div class="detail-cta">
        <a href="https://wa.me/8801700000000" target="_blank" rel="noopener" class="detail-cta-primary">
          💬 WhatsApp-এ অর্ডার করুন
        </a>
        <div class="detail-contact-row">
          <a href="tel:+8801700000000" class="detail-contact-link">📞 কল করুন</a>
          <a href="https://m.me/farzanaenterprise" target="_blank" rel="noopener" class="detail-contact-link">💌 Messenger</a>
          <a href="https://t.me/farzanaenterprise" target="_blank" rel="noopener" class="detail-contact-link">✈️ Telegram</a>
        </div>
      </div>
    </div>`;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  document.getElementById("detail-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function switchTab(btn, targetId) {
  const infoCol = btn.closest(".detail-info-col");
  infoCol.querySelectorAll(".detail-tab").forEach(t => t.classList.remove("active"));
  infoCol.querySelectorAll(".detail-tab-content").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(targetId).classList.add("active");
}

/* ============================================================
   SHARE MODAL
============================================================ */
function openShareModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const url = getPageUrl(productId);
  const text = encodeURIComponent(`${product.name} — Farzana Enterprise`);
  const encUrl = encodeURIComponent(url);

  document.getElementById("share-product-name").textContent = product.name;
  document.getElementById("copy-link-input").value = url;
  document.getElementById("copy-success").classList.remove("show");
  document.getElementById("copy-btn").textContent = "কপি";
  document.getElementById("copy-btn").classList.remove("copied");

  document.getElementById("share-wa").href  = `https://wa.me/?text=${text}%0A${encUrl}`;
  document.getElementById("share-fb").href  = `https://www.facebook.com/sharer/sharer.php?u=${encUrl}`;
  document.getElementById("share-msg").href = `https://m.me/?link=${encUrl}`;
  document.getElementById("share-tg").href  = `https://t.me/share/url?url=${encUrl}&text=${text}`;
  document.getElementById("share-tw").href  = `https://twitter.com/intent/tweet?text=${text}&url=${encUrl}`;

  document.getElementById("share-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeShareModal() {
  document.getElementById("share-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function copyLink() {
  const input = document.getElementById("copy-link-input");
  const btn   = document.getElementById("copy-btn");
  const msg   = document.getElementById("copy-success");

  navigator.clipboard.writeText(input.value).catch(() => {
    input.select(); document.execCommand("copy");
  });
  btn.textContent = "✓ কপি"; btn.classList.add("copied");
  msg.classList.add("show");
  setTimeout(() => { btn.textContent = "কপি"; btn.classList.remove("copied"); msg.classList.remove("show"); }, 2500);
}

/* ============================================================
   MOBILE MENU
============================================================ */
function toggleMenu() {
  document.getElementById("mobile-menu").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("open");
}
function closeMenu() {
  document.getElementById("mobile-menu").classList.remove("open");
  document.getElementById("hamburger").classList.remove("open");
}

/* ============================================================
   SEARCH
============================================================ */
let searchTimeout = null;

function handleSearch() {
  const query = document.getElementById("search-input").value.trim().toLowerCase();
  const box   = document.getElementById("search-suggestions");
  if (!query) { box.innerHTML = ""; return; }

  const results = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.id.toLowerCase().includes(query)
  ).slice(0, 6);

  if (!results.length) {
    box.innerHTML = `<div class="search-suggestion-item" style="color:#9ca3af">কোনো পণ্য পাওয়া যায়নি</div>`;
    return;
  }
  box.innerHTML = results.map(p => {
    const dis = discountPct(p.originalPrice, p.offerPrice);
    return `<div class="search-suggestion-item" onclick="openDetailModal('${p.id}');document.getElementById('search-suggestions').innerHTML='';">
      <strong>${p.name}</strong>
      <span style="margin-left:8px;color:#16a34a">${formatPrice(p.offerPrice)}</span>
      ${dis > 0 ? `<span style="margin-left:6px;color:#ef4444;font-size:.75rem">-${dis}%</span>` : ""}
    </div>`;
  }).join("");
}

/* ============================================================
   KEYBOARD / SCROLL / INIT
============================================================ */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeShareModal(); closeDetailModal(); closeMenu(); }
  if (e.key === "ArrowLeft")  gallerySlide(-1);
  if (e.key === "ArrowRight") gallerySlide(1);
});

window.addEventListener("scroll", () => {
  const btn = document.getElementById("back-to-top");
  if (btn) btn.classList.toggle("visible", window.scrollY > 400);
}, { passive: true });

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  buildHeroSlider();
  buildNav();
  buildSections();

  const input = document.getElementById("search-input");
  if (input) {
    input.addEventListener("input", () => { clearTimeout(searchTimeout); searchTimeout = setTimeout(handleSearch, 220); });
    document.addEventListener("click", e => {
      if (!e.target.closest(".header-search")) document.getElementById("search-suggestions").innerHTML = "";
    });
  }
});

```

index.html
```
<!DOCTYPE html>
<html lang="bn" dir="ltr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <meta name="theme-color" content="#16a34a" />
  <meta name="description" content="Farzana Enterprise — সর্বোচ্চ মানের ব্যাটারি, অটো পার্টস ও ভেহিকেল পণ্যের জন্য আপনার বিশ্বস্ত অংশীদার।" />
  <title>Farzana Enterprise | ব্যাটারি ও অটো পার্টস</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ============================================================
       HEADER
  ============================================================ -->
  <header class="site-header" id="site-header">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="container top-bar-inner">
        <span class="top-bar-left">
          <span>📞</span>
          <span>হটলাইন: ০১৭XX-XXXXXX</span>
          <span class="sep hide-sm">|</span>
          <span class="hide-sm">📧 info@farzanaenterprise.com</span>
        </span>
        <span class="top-bar-right hide-sm">⏰ সোম–শনি: সকাল ৯টা – রাত ৮টা</span>
      </div>
    </div>

    <!-- Main Header -->
    <div class="header-main">
      <div class="container header-main-inner">
        <!-- Logo -->
        <a href="#" class="logo">
          <div class="logo-icon">F</div>
          <div class="logo-text hide-sm">
            <p class="logo-name">Farzana Enterprise</p>
            <p class="logo-tagline">আপনার বিশ্বস্ত অংশীদার</p>
          </div>
        </a>

        <!-- Search -->
        <div class="header-search hide-md-down">
          <div class="search-box">
            <input type="text" id="search-input" placeholder="পণ্য খুঁজুন..." autocomplete="off" />
            <button class="search-btn" onclick="handleSearch()">🔍</button>
          </div>
          <div class="search-suggestions" id="search-suggestions"></div>
        </div>

        <!-- Actions -->
        <div class="header-actions">
          <a href="tel:+8801700000000" class="call-btn hide-sm">📞 কল করুন</a>
          <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="মেনু">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Desktop Nav -->
    <nav class="desktop-nav hide-md-down">
      <div class="container">
        <ul class="nav-list" id="desktop-nav-list">
          <li><a href="#" class="nav-link">🏠 হোম</a></li>
          <!-- Category links injected by JS -->
        </ul>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-search">
        <div class="search-box">
          <input type="text" placeholder="পণ্য খুঁজুন..." />
          <button class="search-btn">🔍</button>
        </div>
      </div>
      <ul class="mobile-nav-list" id="mobile-nav-list">
        <li><a href="#" class="mobile-nav-link" onclick="closeMenu()">🏠 হোম</a></li>
        <!-- Category links injected by JS -->
      </ul>
      <a href="tel:+8801700000000" class="mobile-call-btn">📞 এখনই কল করুন</a>
    </div>
  </header>

  <!-- ============================================================
       HERO SLIDER
  ============================================================ -->
  <section class="hero" id="hero">
    <div class="hero-slider" id="hero-slider">
      <!-- Slides injected by JS -->
    </div>
    <button class="hero-arrow hero-prev" onclick="heroSlide(-1)" aria-label="আগের স্লাইড">&#8249;</button>
    <button class="hero-arrow hero-next" onclick="heroSlide(1)" aria-label="পরের স্লাইড">&#8250;</button>
    <div class="hero-dots" id="hero-dots"></div>
    <div class="hero-counter" id="hero-counter">1 / 4</div>
  </section>

  <!-- Stats Bar -->
  <div class="stats-bar">
    <div class="container stats-grid">
      <div class="stat-item">
        <span class="stat-icon">📦</span>
        <div>
          <p class="stat-title">৫০০+ পণ্য</p>
          <p class="stat-sub">সব ধরনের পণ্য</p>
        </div>
      </div>
      <div class="stat-item">
        <span class="stat-icon">🚚</span>
        <div>
          <p class="stat-title">দ্রুত ডেলিভারি</p>
          <p class="stat-sub">সারাদেশে</p>
        </div>
      </div>
      <div class="stat-item">
        <span class="stat-icon">✅</span>
        <div>
          <p class="stat-title">মানের নিশ্চয়তা</p>
          <p class="stat-sub">১০০% খাঁটি</p>
        </div>
      </div>
      <div class="stat-item">
        <span class="stat-icon">🏆</span>
        <div>
          <p class="stat-title">১০+ বছরের অভিজ্ঞতা</p>
          <p class="stat-sub">বিশ্বস্ত ব্র্যান্ড</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ============================================================
       MAIN CONTENT
  ============================================================ -->
  <main>
    <!-- Category Quick Nav -->
    <div class="cat-nav-bar">
      <div class="container">
        <div class="cat-nav-scroll" id="cat-nav-scroll">
          <!-- Category pills injected by JS -->
        </div>
      </div>
    </div>

    <!-- Product Sections injected by JS -->
    <div class="container sections-wrapper" id="sections-wrapper"></div>

    <!-- Why Choose Us -->
    <section class="why-us">
      <div class="container">
        <div class="section-title-center">
          <h2>কেন আমাদের বেছে নেবেন?</h2>
          <p>আমরা ১০ বছরেরও বেশি সময় ধরে বাংলাদেশে সেরা মানের পণ্য সরবরাহ করে আসছি।</p>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-icon">🏆</div>
            <h3>মান নিশ্চিত</h3>
            <p>প্রতিটি পণ্য কঠোর মান নিয়ন্ত্রণের মধ্য দিয়ে যায়</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🚚</div>
            <h3>দ্রুত ডেলিভারি</h3>
            <p>সারাদেশে ২৪–৭২ ঘন্টার মধ্যে ডেলিভারি</p>
          </div>
          <div class="why-card">
            <div class="why-icon">💰</div>
            <h3>সাশ্রয়ী মূল্য</h3>
            <p>সর্বনিম্ন মূল্যে সেরা মানের পণ্য</p>
          </div>
          <div class="why-card">
            <div class="why-icon">🛡️</div>
            <h3>ওয়ারেন্টি সুবিধা</h3>
            <p>সব পণ্যে নির্ভরযোগ্য ওয়ারেন্টি গ্যারান্টি</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2>পণ্য সম্পর্কে জানতে চান?</h2>
        <p>আমাদের বিশেষজ্ঞ দল আপনাকে সঠিক পণ্য বেছে নিতে সাহায্য করবে।</p>
        <div class="cta-buttons">
          <a href="https://wa.me/8801700000000" target="_blank" rel="noopener" class="btn-primary">
            💬 WhatsApp-এ অর্ডার করুন
          </a>
          <a href="tel:+8801700000000" class="btn-outline">
            📞 সরাসরি কল করুন
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- ============================================================
       FOOTER
  ============================================================ -->
  <footer class="site-footer" id="contact">
    <div class="footer-main">
      <div class="container footer-grid">
        <!-- About -->
        <div class="footer-col">
          <div class="footer-logo">
            <div class="footer-logo-icon">F</div>
            <div>
              <p class="footer-logo-name">Farzana Enterprise</p>
              <p class="footer-logo-tagline">আপনার বিশ্বস্ত অংশীদার</p>
            </div>
          </div>
          <p class="footer-about">
            আমরা সর্বোচ্চ মানের অটোমোটিভ পণ্য ও ব্যাটারি সরবরাহ করি।
            গ্রাহক সন্তুষ্টি আমাদের প্রধান লক্ষ্য।
          </p>
          <div class="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener" class="social-btn fb" aria-label="Facebook">f</a>
            <a href="https://wa.me/8801700000000" target="_blank" rel="noopener" class="social-btn wa" aria-label="WhatsApp">W</a>
            <a href="https://t.me/farzanaenterprise" target="_blank" rel="noopener" class="social-btn tg" aria-label="Telegram">T</a>
          </div>
        </div>

        <!-- Categories -->
        <div class="footer-col">
          <h3 class="footer-col-title">পণ্য বিভাগসমূহ</h3>
          <ul class="footer-links" id="footer-cat-links">
            <!-- Injected by JS -->
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h3 class="footer-col-title">দ্রুত লিংক</h3>
          <ul class="footer-links">
            <li><a href="#">হোম পেজ</a></li>
            <li><a href="#battery">সব পণ্য</a></li>
            <li><a href="#">বিশেষ অফার</a></li>
            <li><a href="#">নতুন পণ্য</a></li>
            <li><a href="#contact">আমাদের সম্পর্কে</a></li>
            <li><a href="#contact">যোগাযোগ</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h3 class="footer-col-title">যোগাযোগ করুন</h3>
          <ul class="footer-contact">
            <li><span>📍</span><span>১২৩ মেইন রোড, ঢাকা-১২০০, বাংলাদেশ</span></li>
            <li><span>📞</span><a href="tel:+8801700000000">০১৭XX-XXXXXX</a></li>
            <li><span>📧</span><a href="mailto:info@farzanaenterprise.com">info@farzanaenterprise.com</a></li>
            <li><span>⏰</span><span>সোম–শনি: ৯টা–৮টা</span></li>
          </ul>
          <a href="https://wa.me/8801700000000" target="_blank" rel="noopener" class="footer-wa-btn">
            💬 WhatsApp-এ যোগাযোগ
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© <span id="footer-year"></span> Farzana Enterprise. সর্বস্বত্ব সংরক্ষিত।</p>
        <p>তৈরি করেছেন <strong>TecBuzz</strong></p>
      </div>
    </div>
  </footer>

  <!-- ============================================================
       SHARE MODAL
  ============================================================ -->
  <div class="modal-overlay" id="share-overlay" onclick="closeShareModal()">
    <div class="modal share-modal" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeShareModal()" aria-label="বন্ধ করুন">✕</button>
      <h2 class="modal-title">শেয়ার করুন</h2>
      <p class="modal-subtitle" id="share-product-name"></p>
      <div class="share-grid" id="share-grid">
        <a href="#" id="share-wa"   target="_blank" rel="noopener" class="share-btn share-wa">💬 WhatsApp</a>
        <a href="#" id="share-fb"   target="_blank" rel="noopener" class="share-btn share-fb">📘 Facebook</a>
        <a href="#" id="share-msg"  target="_blank" rel="noopener" class="share-btn share-msg">💌 Messenger</a>
        <a href="#" id="share-tg"   target="_blank" rel="noopener" class="share-btn share-tg">✈️ Telegram</a>
        <a href="#" id="share-tw"   target="_blank" rel="noopener" class="share-btn share-tw">🐦 Twitter/X</a>
        <a href="https://wa.me/8801700000000" target="_blank" rel="noopener" class="share-btn share-contact">📞 সরাসরি যোগাযোগ</a>
      </div>
      <div class="copy-link-box">
        <input type="text" id="copy-link-input" readonly />
        <button id="copy-btn" onclick="copyLink()">কপি</button>
      </div>
      <p class="copy-success" id="copy-success">✓ লিংক কপি হয়েছে!</p>
    </div>
  </div>

  <!-- ============================================================
       PRODUCT DETAIL MODAL
  ============================================================ -->
  <div class="modal-overlay" id="detail-overlay" onclick="closeDetailModal()">
    <div class="modal detail-modal" onclick="event.stopPropagation()">
      <button class="modal-close" onclick="closeDetailModal()" aria-label="বন্ধ করুন">✕</button>
      <div class="detail-content" id="detail-content">
        <!-- Injected by JS -->
      </div>
    </div>
  </div>

  <!-- Back to Top -->
  <button class="back-to-top" id="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="উপরে যান">↑</button>

  <script src="app.js"></script>
</body>
</html>

```

style.css
```
/* ============================================================
   FARZANA ENTERPRISE — style.css
   Theme: Green & White | Font: Hind Siliguri
============================================================ */

/* ---------- CSS Variables ---------- */
:root {
  --green-50:  #f0fdf4;
  --green-100: #dcfce7;
  --green-200: #bbf7d0;
  --green-300: #86efac;
  --green-500: #22c55e;
  --green-600: #16a34a;
  --green-700: #15803d;
  --green-800: #166534;
  --green-900: #14532d;
  --green-950: #052e16;

  --white:     #ffffff;
  --gray-50:   #f9fafb;
  --gray-100:  #f3f4f6;
  --gray-200:  #e5e7eb;
  --gray-400:  #9ca3af;
  --gray-500:  #6b7280;
  --gray-600:  #4b5563;
  --gray-700:  #374151;
  --gray-800:  #1f2937;

  --amber-400: #fbbf24;
  --red-500:   #ef4444;
  --red-600:   #dc2626;

  --shadow-sm: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.05);
  --shadow-md: 0 4px 12px rgba(0,0,0,.1), 0 2px 6px rgba(0,0,0,.06);
  --shadow-lg: 0 10px 30px rgba(0,0,0,.12), 0 4px 12px rgba(0,0,0,.07);
  --shadow-xl: 0 20px 50px rgba(0,0,0,.14);

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  --transition: 0.25s ease;
  --font: 'Hind Siliguri', sans-serif;
}

/* ---------- Reset ---------- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font);
  background: #f8fdf9;
  color: var(--gray-800);
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; display: block; }
button { cursor: pointer; border: none; background: none; font-family: var(--font); }

/* ---------- Utilities ---------- */
.container { width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
.hide-sm { display: none; }
.hide-md-down { display: none; }
@media (min-width: 600px) { .hide-sm { display: flex; } }
@media (min-width: 768px) { .hide-md-down { display: flex; } }

/* ---------- Scrollbar ---------- */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--green-50); }
::-webkit-scrollbar-thumb { background: var(--green-600); border-radius: 3px; }

/* ============================================================
   HEADER
============================================================ */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--white);
  box-shadow: var(--shadow-sm);
}

/* Top Bar */
.top-bar {
  background: var(--green-700);
  color: #d1fae5;
  font-size: 0.78rem;
  padding: 6px 0;
}
.top-bar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top-bar-left {
  display: flex;
  align-items: center;
  gap: 8px;
}
.sep { color: rgba(255,255,255,.3); }

/* Main Header */
.header-main { background: var(--white); }
.header-main-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 12px 1rem;
}

/* Logo */
.logo { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
.logo-icon {
  width: 42px; height: 42px;
  background: var(--green-600);
  border-radius: var(--radius-full);
  display: flex; align-items: center; justify-content: center;
  color: var(--white); font-weight: 700; font-size: 1.2rem;
  flex-shrink: 0;
}
.logo-name { font-weight: 700; color: var(--green-800); font-size: 1.05rem; line-height: 1.2; }
.logo-tagline { font-size: 0.7rem; color: var(--green-600); }

/* Search */
.header-search { flex: 1; max-width: 440px; position: relative; }
.search-box {
  display: flex;
  border: 1.5px solid var(--green-200);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color var(--transition);
}
.search-box:focus-within { border-color: var(--green-500); }
.search-box input {
  flex: 1; padding: 9px 14px;
  font-size: 0.88rem; font-family: var(--font);
  border: none; outline: none;
  color: var(--gray-700);
}
.search-btn {
  background: var(--green-600); color: var(--white);
  padding: 9px 14px; font-size: 0.9rem;
  transition: background var(--transition);
}
.search-btn:hover { background: var(--green-700); }
.search-suggestions {
  position: absolute; top: 100%; left: 0; right: 0;
  background: var(--white); border: 1px solid var(--green-200);
  border-top: none; border-radius: 0 0 var(--radius-md) var(--radius-md);
  box-shadow: var(--shadow-md); z-index: 20; max-height: 280px; overflow-y: auto;
}
.search-suggestion-item {
  padding: 10px 14px; font-size: 0.85rem; cursor: pointer;
  border-bottom: 1px solid var(--green-50);
  transition: background var(--transition);
}
.search-suggestion-item:hover { background: var(--green-50); color: var(--green-700); }

/* Header Actions */
.header-actions { display: flex; align-items: center; gap: 10px; }
.call-btn {
  display: flex; align-items: center; gap: 6px;
  background: var(--green-600); color: var(--white);
  font-size: 0.85rem; font-family: var(--font);
  padding: 8px 14px; border-radius: var(--radius-md);
  transition: background var(--transition);
}
.call-btn:hover { background: var(--green-700); }

/* Hamburger */
.hamburger {
  display: flex; flex-direction: column;
  gap: 5px; padding: 6px; border-radius: var(--radius-sm);
}
.hamburger span {
  display: block; width: 24px; height: 2.5px;
  background: var(--green-800); border-radius: 2px;
  transition: transform .3s, opacity .3s;
}
.hamburger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }
@media (min-width: 768px) { .hamburger { display: none; } }

/* Desktop Nav */
.desktop-nav { background: var(--green-700); }
.nav-list {
  display: flex; align-items: center; gap: 0;
  flex-wrap: nowrap; overflow-x: auto;
}
.nav-link {
  display: block; padding: 12px 14px;
  color: var(--white); font-size: 0.85rem; font-weight: 500;
  white-space: nowrap; transition: background var(--transition);
}
.nav-link:hover { background: var(--green-600); }
.nav-contact { margin-left: auto; color: #a7f3d0; }

/* Mobile Menu */
.mobile-menu {
  display: none; flex-direction: column;
  background: var(--white);
  border-top: 1px solid var(--green-100);
  box-shadow: var(--shadow-md);
  max-height: 80vh; overflow-y: auto;
}
.mobile-menu.open { display: flex; }
.mobile-search { padding: 12px 1rem 8px; }
.mobile-nav-list { border-top: 1px solid var(--green-50); }
.mobile-nav-link {
  display: block; padding: 13px 1rem;
  font-size: 0.9rem; color: var(--green-800);
  border-bottom: 1px solid var(--green-50);
  transition: background var(--transition);
}
.mobile-nav-link:hover { background: var(--green-50); }
.mobile-call-btn {
  display: flex; align-items: center; justify-content: center;
  margin: 12px 1rem 16px;
  background: var(--green-600); color: var(--white);
  font-family: var(--font); font-size: 0.9rem; font-weight: 600;
  padding: 12px; border-radius: var(--radius-lg);
  transition: background var(--transition);
}
.mobile-call-btn:hover { background: var(--green-700); }

/* ============================================================
   HERO SLIDER
============================================================ */
.hero {
  position: relative;
  overflow: hidden;
  min-height: 320px;
}
@media (min-width: 600px) { .hero { min-height: 400px; } }
@media (min-width: 900px) { .hero { min-height: 480px; } }

.hero-slider { position: relative; width: 100%; height: 100%; }
.hero-slide {
  position: absolute; inset: 0;
  display: flex; align-items: center;
  opacity: 0; transition: opacity .5s ease;
  pointer-events: none;
  min-height: 320px;
}
@media (min-width: 600px) { .hero-slide { min-height: 400px; } }
@media (min-width: 900px) { .hero-slide { min-height: 480px; } }
.hero-slide.active { opacity: 1; pointer-events: all; }

/* Slide gradients */
.hero-slide-1 { background: linear-gradient(135deg, #14532d 0%, #16a34a 100%); }
.hero-slide-2 { background: linear-gradient(135deg, #052e16 0%, #15803d 100%); }
.hero-slide-3 { background: linear-gradient(135deg, #065f46 0%, #16a34a 100%); }
.hero-slide-4 { background: linear-gradient(135deg, #15803d 0%, #0d9488 100%); }

.hero-bg-circle {
  position: absolute; border-radius: var(--radius-full);
  background: rgba(255,255,255,.08);
}
.hero-bg-circle-1 { width: 320px; height: 320px; top: -80px; left: -80px; }
.hero-bg-circle-2 { width: 480px; height: 480px; bottom: -150px; right: -100px; }

.hero-content {
  position: relative; z-index: 1;
  padding: 2.5rem 1.25rem;
  max-width: 640px;
}
.container.hero-container { max-width: 1280px; margin: 0 auto; padding: 0 1.25rem; width: 100%; }

.hero-badge {
  display: inline-block;
  background: rgba(255,255,255,.18);
  border: 1px solid rgba(255,255,255,.3);
  color: var(--white);
  font-size: 0.75rem; font-weight: 600;
  padding: 4px 12px; border-radius: var(--radius-full);
  margin-bottom: 14px;
  backdrop-filter: blur(4px);
}
.hero-title {
  font-size: clamp(1.6rem, 5vw, 3rem);
  font-weight: 700; color: var(--white);
  line-height: 1.2; margin-bottom: 12px;
}
.hero-subtitle {
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  color: #bbf7d0; margin-bottom: 28px; line-height: 1.6;
}
.hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; }
.hero-cta-primary {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--white); color: var(--green-800);
  font-family: var(--font); font-weight: 700; font-size: 0.95rem;
  padding: 12px 22px; border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  transition: transform var(--transition), box-shadow var(--transition);
}
.hero-cta-primary:hover { transform: translateY(-2px); box-shadow: var(--shadow-xl); }
.hero-cta-secondary {
  display: inline-flex; align-items: center; gap: 6px;
  border: 2px solid rgba(255,255,255,.7); color: var(--white);
  font-family: var(--font); font-weight: 600; font-size: 0.95rem;
  padding: 12px 22px; border-radius: var(--radius-xl);
  transition: background var(--transition);
}
.hero-cta-secondary:hover { background: rgba(255,255,255,.12); }

/* Arrows */
.hero-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 42px; height: 42px; z-index: 10;
  background: rgba(255,255,255,.2); border: 1px solid rgba(255,255,255,.3);
  color: var(--white); font-size: 1.6rem; border-radius: var(--radius-full);
  display: flex; align-items: center; justify-content: center;
  backdrop-filter: blur(4px);
  transition: background var(--transition);
}
.hero-arrow:hover { background: rgba(255,255,255,.35); }
.hero-prev { left: 14px; }
.hero-next { right: 14px; }

/* Dots */
.hero-dots {
  position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%);
  display: flex; gap: 7px; z-index: 10;
}
.hero-dot {
  height: 10px; border-radius: var(--radius-full);
  background: rgba(255,255,255,.45);
  transition: width var(--transition), background var(--transition);
  width: 10px; cursor: pointer;
}
.hero-dot.active { width: 26px; background: var(--white); }

/* Counter */
.hero-counter {
  position: absolute; top: 14px; right: 60px;
  background: rgba(0,0,0,.3); color: var(--white);
  font-size: 0.75rem; padding: 4px 10px; border-radius: var(--radius-full);
  backdrop-filter: blur(4px); z-index: 10;
}

/* ============================================================
   STATS BAR
============================================================ */
.stats-bar { background: var(--white); border-bottom: 1px solid var(--green-100); }
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: none;
}
@media (min-width: 600px) { .stats-grid { grid-template-columns: repeat(4, 1fr); } }
.stat-item {
  display: flex; align-items: center; gap: 12px;
  padding: 14px 1rem;
  border-right: 1px solid var(--green-100);
}
.stat-item:last-child { border-right: none; }
.stat-icon { font-size: 1.6rem; }
.stat-title { font-weight: 600; color: var(--green-800); font-size: 0.9rem; line-height: 1.2; }
.stat-sub { font-size: 0.72rem; color: var(--gray-400); }

/* ============================================================
   CATEGORY NAV BAR
============================================================ */
.cat-nav-bar {
  background: var(--white);
  border-bottom: 1px solid var(--green-100);
  padding: 14px 0;
  position: sticky; top: 112px; z-index: 50;
  box-shadow: var(--shadow-sm);
}
.cat-nav-scroll {
  display: flex; gap: 8px;
  overflow-x: auto; padding-bottom: 2px;
  scrollbar-width: none;
}
.cat-nav-scroll::-webkit-scrollbar { display: none; }
.cat-pill {
  display: inline-flex; align-items: center; gap: 6px;
  flex-shrink: 0; padding: 7px 14px;
  border: 1.5px solid var(--green-200);
  border-radius: var(--radius-full);
  font-family: var(--font); font-size: 0.83rem; font-weight: 500;
  cursor: pointer; text-decoration: none;
  transition: border-color var(--transition), color var(--transition), background var(--transition);
  color: var(--green-700); background: var(--green-50);
}
.cat-pill:hover { border-color: var(--green-600); background: var(--green-100); color: var(--green-800); }

/* ============================================================
   SECTIONS WRAPPER
============================================================ */
.sections-wrapper { padding-top: 8px; }

/* ============================================================
   CATEGORY SECTION
============================================================ */
.cat-section {
  padding: 40px 0;
  scroll-margin-top: 160px;
}
.cat-section-header {
  display: flex; align-items: flex-start;
  justify-content: space-between; gap: 1rem; margin-bottom: 20px;
}
.cat-header-left { display: flex; align-items: center; gap: 14px; }
.cat-icon-box {
  width: 52px; height: 52px; border-radius: var(--radius-xl);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; flex-shrink: 0;
  box-shadow: var(--shadow-sm);
}
.cat-name { font-size: 1.4rem; font-weight: 700; color: var(--green-900); }
.cat-desc { font-size: 0.8rem; color: var(--gray-400); margin-top: 2px; }
.cat-count { font-size: 0.8rem; color: var(--gray-400); flex-shrink: 0; margin-top: 6px; }
.cat-divider {
  display: flex; align-items: center; gap: 10px; margin-bottom: 22px;
}
.cat-divider-bar { height: 2px; border-radius: 2px; }
.cat-divider-bar:first-child { width: 32px; background: var(--green-600); }
.cat-divider-bar:last-child { flex: 1; background: var(--green-100); }

/* ============================================================
   PRODUCT GRID & CARD
============================================================ */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
@media (min-width: 500px)  { .product-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 900px)  { .product-grid { grid-template-columns: repeat(3, 1fr); } }
@media (min-width: 1200px) { .product-grid { grid-template-columns: repeat(4, 1fr); } }

.product-card {
  background: var(--white);
  border-radius: var(--radius-xl);
  border: 1.5px solid var(--green-100);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  display: flex; flex-direction: column;
  transition: box-shadow var(--transition), border-color var(--transition), transform var(--transition);
}
.product-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--green-200);
  transform: translateY(-3px);
}

/* Card Image */
.card-img-wrap {
  position: relative;
  width: 100%; aspect-ratio: 4 / 3;
  overflow: hidden; background: var(--green-50);
}
.card-img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}
.product-card:hover .card-img { transform: scale(1.06); }
.card-img-placeholder {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  color: var(--green-200); gap: 6px;
  font-size: 3rem;
}
.card-img-placeholder span:last-child { font-size: 0.75rem; color: var(--green-400); }
.card-discount-badge {
  position: absolute; top: 10px; left: 10px;
  background: var(--red-500); color: var(--white);
  font-size: 0.72rem; font-weight: 700;
  padding: 4px 9px; border-radius: var(--radius-sm);
}
.card-id-badge {
  position: absolute; top: 10px; right: 10px;
  background: rgba(0,0,0,.5); color: var(--white);
  font-size: 0.65rem; padding: 3px 8px;
  border-radius: 6px; backdrop-filter: blur(4px);
}

/* Card Body */
.card-body { padding: 14px; flex: 1; display: flex; flex-direction: column; }
.card-top-row {
  display: flex; align-items: center;
  justify-content: space-between; margin-bottom: 8px;
}
.card-brand {
  font-size: 0.72rem; font-weight: 600; color: var(--green-600);
  background: var(--green-50); padding: 3px 9px;
  border-radius: var(--radius-full);
}
.card-avail {
  font-size: 0.7rem; font-weight: 600;
  padding: 3px 8px; border-radius: var(--radius-full);
}
.avail-in    { color: #15803d; background: #dcfce7; }
.avail-out   { color: #b91c1c; background: #fee2e2; }
.avail-limit { color: #92400e; background: #fef3c7; }

.card-name {
  font-size: 0.9rem; font-weight: 600; color: var(--gray-800);
  line-height: 1.4; margin-bottom: 8px;
  display: -webkit-box; -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; overflow: hidden;
  flex: 1;
}
/* Stars */
.star-row { display: flex; align-items: center; gap: 4px; margin-bottom: 8px; }
.stars { display: flex; }
.star { font-size: 0.85rem; }
.star-filled { color: var(--amber-400); }
.star-empty  { color: var(--gray-200); }
.rating-val  { font-size: 0.75rem; color: var(--gray-400); }

/* Features */
.card-features { margin-bottom: 10px; }
.card-feature {
  display: flex; align-items: flex-start; gap: 6px;
  font-size: 0.75rem; color: var(--gray-500);
  margin-bottom: 4px; line-height: 1.4;
}
.feature-check { color: var(--green-500); flex-shrink: 0; margin-top: 1px; }

/* Price */
.card-price-row { display: flex; align-items: baseline; gap: 8px; margin-bottom: 6px; }
.card-price-offer { font-size: 1.1rem; font-weight: 700; color: var(--green-700); }
.card-price-orig  { font-size: 0.85rem; color: var(--gray-400); text-decoration: line-through; }

/* Meta */
.card-meta { display: flex; align-items: center; gap: 12px; font-size: 0.73rem; color: var(--gray-400); margin-bottom: 14px; }

/* Buttons */
.card-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: auto; }
.btn-view, .btn-share {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  font-family: var(--font); font-size: 0.83rem; font-weight: 600;
  padding: 10px 6px; border-radius: var(--radius-lg);
  cursor: pointer; transition: all var(--transition);
}
.btn-view  { background: var(--green-600); color: var(--white); }
.btn-view:hover  { background: var(--green-700); }
.btn-share { background: none; border: 2px solid var(--green-600); color: var(--green-700); }
.btn-share:hover { background: var(--green-50); }

/* ============================================================
   WHY CHOOSE US
============================================================ */
.why-us { background: var(--green-700); padding: 56px 0; margin-top: 24px; }
.section-title-center { text-align: center; margin-bottom: 36px; }
.section-title-center h2 {
  font-size: clamp(1.4rem, 4vw, 1.9rem);
  font-weight: 700; color: var(--white); margin-bottom: 10px;
}
.section-title-center p { font-size: 0.9rem; color: #bbf7d0; max-width: 520px; margin: 0 auto; }

.why-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 16px;
}
@media (min-width: 768px) { .why-grid { grid-template-columns: repeat(4, 1fr); } }
.why-card {
  background: rgba(255,255,255,.1);
  border: 1px solid rgba(255,255,255,.2);
  border-radius: var(--radius-xl); padding: 24px 18px;
  text-align: center; backdrop-filter: blur(4px);
}
.why-icon { font-size: 2.4rem; margin-bottom: 12px; }
.why-card h3 { font-size: 0.95rem; font-weight: 600; color: var(--white); margin-bottom: 8px; }
.why-card p  { font-size: 0.78rem; color: #bbf7d0; line-height: 1.5; }

/* ============================================================
   CTA SECTION
============================================================ */
.cta-section {
  background: linear-gradient(135deg, var(--green-50) 0%, #ecfdf5 100%);
  border-top: 1px solid var(--green-100);
  border-bottom: 1px solid var(--green-100);
  padding: 52px 0;
}
.cta-inner { text-align: center; max-width: 640px; margin: 0 auto; }
.cta-inner h2 { font-size: clamp(1.3rem, 4vw, 1.8rem); font-weight: 700; color: var(--green-900); margin-bottom: 10px; }
.cta-inner p  { font-size: 0.9rem; color: var(--gray-500); margin-bottom: 24px; }
.cta-buttons  { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; }

.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--green-600); color: var(--white);
  font-family: var(--font); font-weight: 700; font-size: 0.95rem;
  padding: 13px 22px; border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: background var(--transition), box-shadow var(--transition), transform var(--transition);
}
.btn-primary:hover { background: var(--green-700); transform: translateY(-2px); box-shadow: var(--shadow-lg); }

.btn-outline {
  display: inline-flex; align-items: center; gap: 8px;
  border: 2px solid var(--green-600); color: var(--green-700);
  font-family: var(--font); font-weight: 700; font-size: 0.95rem;
  padding: 13px 22px; border-radius: var(--radius-xl);
  transition: background var(--transition);
}
.btn-outline:hover { background: var(--green-50); }

/* ============================================================
   FOOTER
============================================================ */
.site-footer { background: var(--green-900); }
.footer-main { padding: 48px 0; }
.footer-grid {
  display: grid; grid-template-columns: 1fr;
  gap: 32px;
}
@media (min-width: 600px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .footer-grid { grid-template-columns: repeat(4, 1fr); } }

.footer-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
.footer-logo-icon {
  width: 42px; height: 42px;
  background: var(--green-500); border-radius: var(--radius-full);
  display: flex; align-items: center; justify-content: center;
  color: var(--white); font-weight: 700; font-size: 1.1rem; flex-shrink: 0;
}
.footer-logo-name    { font-weight: 700; color: var(--white); font-size: 1rem; }
.footer-logo-tagline { font-size: 0.7rem; color: #6ee7b7; }
.footer-about        { font-size: 0.83rem; color: #a7f3d0; line-height: 1.7; margin-bottom: 16px; }
.footer-socials      { display: flex; gap: 10px; }
.social-btn {
  width: 36px; height: 36px; border-radius: var(--radius-full);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; color: var(--white); font-size: 0.85rem;
  transition: opacity var(--transition);
}
.social-btn:hover { opacity: .85; }
.fb { background: #2563eb; }
.wa { background: #16a34a; }
.tg { background: #0ea5e9; }

.footer-col-title {
  font-size: 0.95rem; font-weight: 600; color: var(--white);
  margin-bottom: 14px; padding-bottom: 8px;
  border-bottom: 1px solid rgba(255,255,255,.1);
}
.footer-links li { margin-bottom: 8px; }
.footer-links a {
  font-size: 0.83rem; color: #a7f3d0;
  display: flex; align-items: center; gap: 6px;
  transition: color var(--transition);
}
.footer-links a::before { content: '›'; color: var(--green-500); }
.footer-links a:hover { color: var(--white); }

.footer-contact li {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.83rem; color: #a7f3d0; margin-bottom: 10px;
}
.footer-contact a { color: #a7f3d0; transition: color var(--transition); }
.footer-contact a:hover { color: var(--white); }
.footer-wa-btn {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  margin-top: 14px;
  background: var(--green-500); color: var(--white);
  font-family: var(--font); font-size: 0.85rem; font-weight: 600;
  padding: 10px 16px; border-radius: var(--radius-lg);
  transition: background var(--transition);
}
.footer-wa-btn:hover { background: var(--green-400); }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,.08);
  background: rgba(0,0,0,.2);
}
.footer-bottom-inner {
  display: flex; flex-direction: column; gap: 4px;
  align-items: center; justify-content: center;
  text-align: center; padding: 14px 1rem;
  font-size: 0.75rem; color: #6ee7b7;
}
@media (min-width: 600px) {
  .footer-bottom-inner { flex-direction: row; justify-content: space-between; text-align: left; }
}
.footer-bottom-inner strong { color: #a7f3d0; }

/* ============================================================
   SHARE MODAL
============================================================ */
.modal-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(4px);
  display: none; align-items: center; justify-content: center;
  padding: 1rem;
}
.modal-overlay.open { display: flex; }

.modal {
  background: var(--white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  position: relative;
  animation: modalIn .3s ease;
  max-height: 90vh; overflow-y: auto;
}
@keyframes modalIn {
  from { opacity: 0; transform: translateY(20px) scale(.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.modal-close {
  position: absolute; top: 14px; right: 14px;
  width: 32px; height: 32px;
  border-radius: var(--radius-full);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.9rem; color: var(--gray-400);
  transition: background var(--transition), color var(--transition);
}
.modal-close:hover { background: var(--gray-100); color: var(--gray-600); }

.share-modal { width: 100%; max-width: 400px; padding: 24px; }
.modal-title { font-size: 1.1rem; font-weight: 700; color: var(--gray-800); margin-bottom: 4px; }
.modal-subtitle {
  font-size: 0.82rem; color: var(--gray-400); margin-bottom: 20px;
  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
}

.share-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 10px; margin-bottom: 18px;
}
.share-btn {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font); font-size: 0.85rem; font-weight: 600;
  padding: 12px 14px; border-radius: var(--radius-lg);
  color: var(--white); transition: opacity var(--transition), transform var(--transition);
}
.share-btn:hover { opacity: .88; transform: translateY(-1px); }
.share-wa      { background: #16a34a; }
.share-fb      { background: #2563eb; }
.share-msg     { background: #7c3aed; }
.share-tg      { background: #0ea5e9; }
.share-tw      { background: #111827; }
.share-contact { background: #059669; }

.copy-link-box {
  display: flex; border: 1.5px solid var(--gray-200);
  border-radius: var(--radius-lg); overflow: hidden;
}
.copy-link-box input {
  flex: 1; padding: 10px 12px; font-size: 0.78rem;
  font-family: var(--font); border: none; outline: none;
  color: var(--gray-600); background: var(--gray-50); min-width: 0;
}
#copy-btn {
  background: var(--green-600); color: var(--white);
  font-family: var(--font); font-size: 0.83rem; font-weight: 600;
  padding: 10px 16px; flex-shrink: 0;
  transition: background var(--transition);
}
#copy-btn:hover { background: var(--green-700); }
#copy-btn.copied { background: #059669; }
.copy-success {
  text-align: center; font-size: 0.78rem; color: var(--green-600);
  font-weight: 600; margin-top: 8px; display: none;
}
.copy-success.show { display: block; }

/* ============================================================
   PRODUCT DETAIL MODAL
============================================================ */
.detail-modal {
  width: 100%; max-width: 860px;
  padding: 0; overflow: hidden;
}

.detail-content { display: flex; flex-direction: column; }
@media (min-width: 640px) { .detail-content { flex-direction: row; } }

.detail-img-col {
  flex-shrink: 0; width: 100%;
  background: var(--green-50);
  min-height: 220px; position: relative;
}
@media (min-width: 640px) { .detail-img-col { width: 300px; min-height: 400px; } }

.detail-img-col img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  max-height: 260px;
}
@media (min-width: 640px) { .detail-img-col img { max-height: none; } }
.detail-img-placeholder {
  width: 100%; height: 220px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-size: 4rem; color: var(--green-200); gap: 8px;
}
@media (min-width: 640px) { .detail-img-placeholder { height: 100%; } }
.detail-discount {
  position: absolute; top: 12px; left: 12px;
  background: var(--red-500); color: var(--white);
  font-size: 0.8rem; font-weight: 700;
  padding: 5px 10px; border-radius: var(--radius-md);
}

.detail-info-col {
  flex: 1; padding: 24px; overflow-y: auto;
  max-height: 90vh;
}
@media (min-width: 640px) { .detail-info-col { max-height: 80vh; } }

.detail-top-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; }
.detail-brand {
  font-size: 0.78rem; font-weight: 600; color: var(--green-600);
  background: var(--green-50); padding: 4px 10px;
  border: 1px solid var(--green-200); border-radius: var(--radius-full);
}
.detail-avail {
  font-size: 0.78rem; font-weight: 600; padding: 4px 10px;
  border: 1px solid; border-radius: var(--radius-full);
  display: flex; align-items: center; gap: 6px;
}
.detail-avail-dot { width: 8px; height: 8px; border-radius: var(--radius-full); }
.detail-avail-in  { color: #15803d; background: #dcfce7; border-color: #bbf7d0; }
.detail-avail-in .detail-avail-dot  { background: #16a34a; }
.detail-avail-out { color: #b91c1c; background: #fee2e2; border-color: #fecaca; }
.detail-avail-out .detail-avail-dot { background: var(--red-600); }
.detail-avail-lim { color: #92400e; background: #fef3c7; border-color: #fde68a; }
.detail-avail-lim .detail-avail-dot { background: #d97706; }

.detail-name {
  font-size: clamp(1rem, 3vw, 1.35rem);
  font-weight: 700; color: var(--green-900);
  line-height: 1.3; margin-bottom: 10px;
}

.detail-stars { display: flex; align-items: center; gap: 8px; margin-bottom: 14px; }
.detail-rating-val { font-size: 1.1rem; font-weight: 700; color: var(--gray-700); }
.detail-rating-max { font-size: 0.8rem; color: var(--gray-400); }

.detail-price-box {
  background: var(--green-50); border: 1px solid var(--green-100);
  border-radius: var(--radius-lg); padding: 14px; margin-bottom: 14px;
}
.detail-price-label { font-size: 0.75rem; color: var(--gray-400); margin-bottom: 4px; }
.detail-price-row { display: flex; align-items: baseline; gap: 10px; }
.detail-price-offer { font-size: 1.6rem; font-weight: 700; color: var(--green-700); }
.detail-price-orig  { font-size: 1rem; color: var(--gray-400); text-decoration: line-through; }
.detail-price-save  { font-size: 0.8rem; color: var(--red-600); font-weight: 600; margin-top: 4px; }

.detail-key-info {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 8px; margin-bottom: 14px;
}
.key-info-card {
  background: var(--white); border: 1px solid var(--green-100);
  border-radius: var(--radius-md); padding: 10px 6px; text-align: center;
}
.key-info-card .icon { font-size: 1.3rem; margin-bottom: 4px; }
.key-info-card .label { font-size: 0.65rem; color: var(--gray-400); margin-bottom: 3px; }
.key-info-card .value { font-size: 0.72rem; font-weight: 700; color: var(--gray-700); line-height: 1.3; }

.detail-desc-label { font-size: 0.82rem; font-weight: 600; color: var(--gray-600); margin-bottom: 6px; }
.detail-desc { font-size: 0.83rem; color: var(--gray-600); line-height: 1.7; margin-bottom: 16px; }

/* Tabs */
.detail-tabs { display: flex; border-bottom: 1.5px solid var(--green-100); margin-bottom: 14px; }
.detail-tab {
  flex: 1; padding: 10px 4px; font-family: var(--font);
  font-size: 0.8rem; font-weight: 600;
  color: var(--gray-400); cursor: pointer;
  border-bottom: 2px solid transparent; margin-bottom: -1.5px;
  transition: color var(--transition), border-color var(--transition);
  background: none;
}
.detail-tab:hover { color: var(--green-600); }
.detail-tab.active { color: var(--green-700); border-bottom-color: var(--green-600); background: none; }

.detail-tab-content { display: none; }
.detail-tab-content.active { display: block; }

/* Spec table */
.spec-table { width: 100%; border-collapse: collapse; }
.spec-table tr { border-bottom: 1px solid var(--gray-100); }
.spec-table tr:last-child { border: none; }
.spec-table td { padding: 8px 4px; font-size: 0.8rem; vertical-align: top; }
.spec-label { color: var(--gray-400); font-weight: 500; width: 130px; white-space: nowrap; }
.spec-value { color: var(--gray-800); font-weight: 600; }

/* Feature list */
.detail-features-grid {
  display: grid; grid-template-columns: 1fr;
  gap: 8px;
}
@media (min-width: 480px) { .detail-features-grid { grid-template-columns: 1fr 1fr; } }
.detail-feature-item {
  display: flex; align-items: center; gap: 10px;
  background: var(--green-50); border: 1px solid var(--green-100);
  border-radius: var(--radius-md); padding: 10px 12px;
  font-size: 0.8rem; font-weight: 500; color: var(--gray-700);
}
.feature-check-circle {
  width: 22px; height: 22px; border-radius: var(--radius-full);
  background: var(--green-600); color: var(--white);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.65rem; flex-shrink: 0; font-weight: 700;
}

/* Warranty tab */
.warranty-box {
  background: var(--green-50); border: 1px solid var(--green-200);
  border-radius: var(--radius-lg); padding: 14px; margin-bottom: 14px;
}
.warranty-header { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.warranty-header span:first-child { font-size: 1.5rem; }
.warranty-period { font-size: 1.1rem; font-weight: 700; color: var(--green-800); }
.warranty-desc { font-size: 0.8rem; color: var(--green-700); line-height: 1.6; }
.warranty-points { display: flex; flex-direction: column; gap: 6px; }
.warranty-point { display: flex; align-items: flex-start; gap: 8px; font-size: 0.8rem; color: var(--gray-600); }
.warranty-point .check { color: var(--green-500); flex-shrink: 0; }
.warranty-point .info  { color: var(--gray-400); flex-shrink: 0; }

/* Detail CTA */
.detail-cta { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
.detail-cta-primary {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  background: var(--green-600); color: var(--white);
  font-family: var(--font); font-weight: 700; font-size: 0.9rem;
  padding: 13px; border-radius: var(--radius-lg);
  transition: background var(--transition);
}
.detail-cta-primary:hover { background: var(--green-700); }
.detail-contact-row { display: flex; gap: 8px; flex-wrap: wrap; }
.detail-contact-link {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.8rem; font-family: var(--font);
  color: var(--gray-600); background: var(--gray-50);
  border: 1px solid var(--gray-200);
  padding: 8px 12px; border-radius: var(--radius-md);
  transition: all var(--transition);
}
.detail-contact-link:hover { background: var(--green-50); border-color: var(--green-300); color: var(--green-700); }

/* ============================================================
   BACK TO TOP
============================================================ */
.back-to-top {
  position: fixed; bottom: 22px; right: 22px; z-index: 90;
  width: 42px; height: 42px; border-radius: var(--radius-full);
  background: var(--green-600); color: var(--white);
  font-size: 1.1rem; box-shadow: var(--shadow-md);
  display: none; align-items: center; justify-content: center;
  transition: background var(--transition), transform var(--transition);
}
.back-to-top.visible { display: flex; }
.back-to-top:hover { background: var(--green-700); transform: translateY(-3px); }

/* ============================================================
   SEARCH HIGHLIGHT
============================================================ */
.search-highlight { border: 2px solid var(--green-500) !important; animation: pulse .6s ease; }
@keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(22,163,74,.4); } 50% { box-shadow: 0 0 0 8px rgba(22,163,74,0); } }

/* ============================================================
   RESPONSIVE — TABLET NAV
============================================================ */
@media (min-width: 768px) {
  .hide-md-down { display: flex; }
  .cat-nav-bar  { top: 128px; }
}

/* ============================================================
   HERO — REAL BACKGROUND IMAGES WITH OVERLAY
============================================================ */
.hero-slide {
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
.hero-slide::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(5,46,22,.80) 0%, rgba(21,128,61,.60) 100%);
  z-index: 0;
}
.hero-content { position: relative; z-index: 1; }
.hero-slide-1, .hero-slide-2, .hero-slide-3, .hero-slide-4 {
  background-color: #052e16;
}

/* ============================================================
   PRODUCT IMAGE GALLERY (in detail modal)
============================================================ */
.gallery-wrap {
  position: relative;
  width: 100%; background: #f0fdf4;
  overflow: hidden;
}
.gallery-track {
  display: flex;
  transition: transform .4s cubic-bezier(.4,0,.2,1);
}
.gallery-slide { min-width: 100%; flex-shrink: 0; }
.gallery-slide img {
  width: 100%; display: block;
  object-fit: cover; max-height: 280px;
}
@media (min-width: 640px) { .gallery-slide img { max-height: 100%; aspect-ratio: 4/3; } }
.gallery-slide-placeholder {
  padding: 40px 0;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-size: 3.5rem; color: #86efac; gap: 8px;
}
.gallery-arrow {
  position: absolute; top: 50%; transform: translateY(-50%);
  width: 36px; height: 36px; border-radius: 9999px;
  background: rgba(0,0,0,.38); color: #fff;
  font-size: 1.3rem; display: flex;
  align-items: center; justify-content: center;
  z-index: 5; border: none; cursor: pointer;
  transition: background .2s ease;
}
.gallery-arrow:hover { background: rgba(0,0,0,.58); }
.gallery-prev { left: 8px; }
.gallery-next { right: 8px; }
.gallery-dots {
  position: absolute; bottom: 8px; left: 50%;
  transform: translateX(-50%);
  display: flex; gap: 6px; z-index: 5;
}
.gallery-dot {
  width: 7px; height: 7px; border-radius: 9999px;
  background: rgba(255,255,255,.5); border: none; cursor: pointer;
  transition: background .2s ease, width .2s ease;
}
.gallery-dot.active { background: #fff; width: 18px; }
.gallery-count {
  position: absolute; top: 8px; right: 8px;
  background: rgba(0,0,0,.42); color: #fff;
  font-size: .7rem; padding: 3px 9px;
  border-radius: 9999px; z-index: 5;
}
.thumb-row {
  display: flex; gap: 6px; padding: 8px;
  background: #fff; overflow-x: auto;
  scrollbar-width: none;
}
.thumb-row::-webkit-scrollbar { display: none; }
.thumb-item {
  flex-shrink: 0; width: 54px; height: 42px;
  border-radius: 6px; overflow: hidden;
  border: 2px solid transparent; cursor: pointer;
  transition: border-color .2s ease;
}
.thumb-item.active { border-color: #16a34a; }
.thumb-item img { width: 100%; height: 100%; object-fit: cover; }

```

Now your task is generate same design for NextJs page.tsx and you must be use image url = 'https://i.ibb.co/bL4F59C/3.png' and you must be use tailwind css. 