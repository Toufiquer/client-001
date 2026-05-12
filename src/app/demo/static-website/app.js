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
