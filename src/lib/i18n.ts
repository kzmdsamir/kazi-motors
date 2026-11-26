/**
 * English / Bangla strings for the whole shop.
 * `Lang` is the only place language lives; every component reads through
 * the `useLanguage` hook in AppContext.
 */

export type Lang = "en" | "bn";

export interface Strings {
  brandName: string;
  brandTag: string;
  navParts: string;
  navHow: string;
  navFinder: string;
  navWhy: string;
  searchLabel: string;
  searchPlaceholder: string;
  cartButton: string;
  langLabel: string;
  themeLight: string;
  themeDark: string;
  heroKicker: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSub: string;
  heroCtaParts: string;
  heroCtaFinder: string;
  chipJapan: string;
  chipModels: string;
  chipPrice: string;
  howTitle: string;
  howSub: string;
  step1Title: string;
  step1Text: string;
  step2Title: string;
  step2Text: string;
  step3Title: string;
  step3Text: string;
  howNote: string;
  catalogTitle: string;
  catalogSub: string;
  allCategories: string;
  allModels: string;
  sortLabel: string;
  sortFeatured: string;
  sortName: string;
  sortCategory: string;
  resultsCount: (n: number) => string;
  fitsLabel: string;
  conditionLabel: string;
  priceOnRequest: string;
  addToList: string;
  inList: string;
  emptyTitle: string;
  emptyText: string;
  finderTitle: string;
  finderText: string;
  finderChassisLabel: string;
  finderChassisPlaceholder: string;
  finderModelLabel: string;
  finderPartLabel: string;
  finderPartPlaceholder: string;
  finderOtherModel: string;
  finderButton: string;
  finderSaved: string;
  finderNeedChassis: string;
  finderNeedPart: string;
  dholaikhalTitle: string;
  dholaikhalText: string;
  dholaikhalStat1: string;
  dholaikhalStat2: string;
  dholaikhalStat3: string;
  whyTitle: string;
  why1Title: string;
  why1Text: string;
  why2Title: string;
  why2Text: string;
  why3Title: string;
  why3Text: string;
  why4Title: string;
  why4Text: string;
  cartTitle: string;
  cartNote: string;
  cartEmptyTitle: string;
  cartEmptyText: string;
  cartClear: string;
  cartClose: string;
  cartQtyDecrease: string;
  cartQtyIncrease: string;
  cartRemove: string;
  cartRequest: string;
  cartRequestDetail: (chassis: string, model: string, part: string) => string;
  cartComingSoon: string;
  toastAdded: string;
  toastRemoved: string;
  toastCleared: string;
  toastRequestSaved: string;
  footerTag: string;
  footerHonest: string;
  footerMade: string;
  footerCatalogue: string;
  footerHelp: string;
}

export const STRINGS: Record<Lang, Strings> = {
  en: {
    brandName: "Kazi Motors",
    brandTag: "Japanese reconditioned car parts · Dhaka, Bangladesh",
    navParts: "Parts",
    navHow: "How to order",
    navFinder: "Chassis finder",
    navWhy: "Why us",
    searchLabel: "Search parts",
    searchPlaceholder: "Search parts, e.g. AC compressor…",
    cartButton: "Enquiry list",
    langLabel: "Language",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",

    heroKicker: "Japanese reconditioned parts",
    heroTitle: "The right part for your Toyota.",
    heroTitleAccent: "Price confirmed on enquiry.",
    heroSub:
      "Genuine used parts from Japan for Axio, Premio, Allion, Corolla, Noah, Hiace and more. Find your part, add it to your enquiry list, and we will confirm the price and availability.",
    heroCtaParts: "Browse parts",
    heroCtaFinder: "Find by chassis number",
    chipJapan: "Japan-sourced parts",
    chipModels: "All popular Toyota models",
    chipPrice: "Price on request — the Dhaka trade norm",

    howTitle: "How to order — in 3 easy steps",
    howSub: "No confusing checkout. Your enquiry list is saved on this device until ordering opens.",
    step1Title: "Find your part",
    step1Text:
      "Search by part name, or filter by your car model — Axio, Premio, Allion, Noah and more.",
    step2Title: "Add to your enquiry list",
    step2Text:
      "Add the parts you need to your list. Your list is saved in this browser, so you can come back to it.",
    step3Title: "We confirm price & availability",
    step3Text:
      "Ordering details will be added soon. When they are, send your list and we will confirm the price and check the part matches your car.",
    howNote:
      "Tip: your chassis number is the surest way to match the exact part for your model and year — use the chassis finder below.",

    catalogTitle: "Parts catalogue",
    catalogSub:
      "Reconditioned parts from Japan. Every price is confirmed on enquiry — no fixed online prices, just like the Dhaka trade.",
    allCategories: "All parts",
    allModels: "All models",
    sortLabel: "Sort",
    sortFeatured: "Featured",
    sortName: "Name A–Z",
    sortCategory: "Category",
    resultsCount: (n: number) => `${n} part${n === 1 ? "" : "s"}`,
    fitsLabel: "Fits:",
    conditionLabel: "Reconditioned · Japan",
    priceOnRequest: "Price on request",
    addToList: "Add to enquiry list",
    inList: "In your list",
    emptyTitle: "No parts match that search.",
    emptyText:
      "Try a different word or clear the filters — or use the chassis finder below and tell us the part you need.",

    finderTitle: "Find a part by chassis number",
    finderText:
      "Give us your chassis number and the part you need — we match the exact part for your car. Your request is saved to your enquiry list on this device.",
    finderChassisLabel: "Chassis number",
    finderChassisPlaceholder: "e.g. NZE161-0123456",
    finderModelLabel: "Car model",
    finderPartLabel: "Which part do you need?",
    finderPartPlaceholder: "e.g. AC compressor",
    finderOtherModel: "Other / not listed",
    finderButton: "Save to enquiry list",
    finderSaved: "Saved to your enquiry list.",
    finderNeedChassis: "Please enter your chassis number first.",
    finderNeedPart: "Please tell us which part you need.",

    dholaikhalTitle: "Sourced the Dholaikhal way",
    dholaikhalText:
      "Dholaikhal in Old Dhaka has been Bangladesh's home for reconditioned motor parts since the 1960s — thousands of specialist shops, and parts that are no longer made new. Our parts come from the same Japan-sourced supply the Dhaka trade has relied on for decades: accident-wrecked vehicles, auctions and importers, checked before they are sold on.",
    dholaikhalStat1: "4,000–5,000 shops in Dholaikhal",
    dholaikhalStat2: "Trading since the 1960s",
    dholaikhalStat3: "Parts no longer made new",

    whyTitle: "Why buy from Kazi Motors?",
    why1Title: "Japan-sourced parts",
    why1Text:
      "Reconditioned parts sourced from Japan — the same supply Dhaka's Dholaikhal trade has relied on for decades.",
    why2Title: "Matched to your car",
    why2Text:
      "Tell us your model — or your chassis number — and we match the exact part before you pay anything.",
    why3Title: "Honest pricing",
    why3Text:
      "Every price is confirmed on enquiry. We never list a price we cannot honour, and we would rather tell you a part does not fit than sell it to you.",
    why4Title: "Dhaka delivery",
    why4Text:
      "Delivery inside Dhaka is arranged once your order is confirmed. Ordering details will be added soon.",

    cartTitle: "Your enquiry list",
    cartNote:
      "Prices are confirmed on enquiry — this list is saved on your device, not a payment. Ordering details will be added soon.",
    cartEmptyTitle: "Your list is empty.",
    cartEmptyText:
      "Add parts from the catalogue and keep them here until ordering opens.",
    cartClear: "Clear list",
    cartClose: "Close",
    cartQtyDecrease: "Decrease quantity",
    cartQtyIncrease: "Increase quantity",
    cartRemove: "Remove from list",
    cartRequest: "Chassis request",
    cartRequestDetail: (chassis: string, model: string, part: string) =>
      `Chassis ${chassis} · ${model} · ${part}`,
    cartComingSoon: "Ordering details will be added soon.",

    toastAdded: "Added to your enquiry list",
    toastRemoved: "Removed from your list",
    toastCleared: "List cleared",
    toastRequestSaved: "Request saved to your enquiry list",

    footerTag: "Japanese reconditioned car parts in Dhaka, Bangladesh.",
    footerHonest:
      "Honest note: all parts are reconditioned, sourced from Japan. Every price is confirmed on enquiry before you order — we never list a price we cannot honour. Availability is confirmed on enquiry.",
    footerMade: "Made with care in Bangladesh",
    footerCatalogue: "Catalogue",
    footerHelp: "Help",
  },
  bn: {
    brandName: "কাজী মোটরস",
    brandTag: "জাপানি রিকন্ডিশন্ড গাড়ির পার্টস · ঢাকা, বাংলাদেশ",
    navParts: "পার্টস",
    navHow: "অর্ডার করার নিয়ম",
    navFinder: "চেসিস দিয়ে খুঁজুন",
    navWhy: "কেন আমরা",
    searchLabel: "পার্টস খুঁজুন",
    searchPlaceholder: "পার্টস খুঁজুন, যেমন এসি কম্প্রেসর…",
    cartButton: "অনুসন্ধান তালিকা",
    langLabel: "ভাষা",
    themeLight: "আলো মোডে যান",
    themeDark: "অন্ধকার মোডে যান",

    heroKicker: "জাপানি রিকন্ডিশন্ড পার্টস",
    heroTitle: "আপনার টয়োটার সঠিক পার্টস।",
    heroTitleAccent: "দাম জানতে অনুসন্ধান করুন।",
    heroSub:
      "অ্যাক্সিও, প্রিমিও, অ্যালিয়ন, করোলা, নোয়া, হাইএসসহ আরও অনেক গাড়ির জন্য জাপান থেকে আনা আসল ব্যবহৃত পার্টস। পার্টস খুঁজুন, অনুসন্ধান তালিকায় যোগ করুন, আর আমরা দাম ও পাওয়া যাবে কি না জানিয়ে দেব।",
    heroCtaParts: "পার্টস দেখুন",
    heroCtaFinder: "চেসিস নম্বর দিয়ে খুঁজুন",
    chipJapan: "জাপান থেকে আনা পার্টস",
    chipModels: "সব জনপ্রিয় টয়োটা মডেল",
    chipPrice: "দাম জানতে অনুসন্ধান করুন — ঢাকার ব্যবসার নিয়ম",

    howTitle: "অর্ডার করবেন যেভাবে — ৩টি সহজ ধাপ",
    howSub: "কোনো জটিল চেকআউট নয়। অর্ডার চালু হওয়া পর্যন্ত আপনার অনুসন্ধান তালিকা এই ডিভাইসে সংরক্ষিত থাকবে।",
    step1Title: "পার্টস খুঁজুন",
    step1Text:
      "পার্টসের নাম দিয়ে খুঁজুন, অথবা আপনার গাড়ির মডেল দিয়ে ফিল্টার করুন — অ্যাক্সিও, প্রিমিও, অ্যালিয়ন, নোয়া আরও অনেক।",
    step2Title: "অনুসন্ধান তালিকায় যোগ করুন",
    step2Text:
      "যে পার্টসগুলো লাগবে সেগুলো তালিকায় যোগ করুন। তালিকাটি এই ব্রাউজারে সংরক্ষিত থাকে, তাই পরে ফিরে এসেও দেখতে পারবেন।",
    step3Title: "আমরা দাম ও পাওয়া যাবে কি না জানাব",
    step3Text:
      "অর্ডার করার বিস্তারিত শীঘ্রই যোগ করা হবে। তখন আপনার তালিকা পাঠান, আমরা দাম জানাব আর পার্টস আপনার গাড়ির সঙ্গে মিলিয়ে দেখব।",
    howNote:
      "টিপস: আপনার চেসিস নম্বরই আপনার মডেল ও বছরের জন্য সঠিক পার্টস মেলানোর সবচেয়ে নির্ভরযোগ্য উপায় — নিচে চেসিস ফাইন্ডার ব্যবহার করুন।",

    catalogTitle: "পার্টস ক্যাটালগ",
    catalogSub:
      "জাপান থেকে আনা রিকন্ডিশন্ড পার্টস। প্রতিটি দাম অনুসন্ধানে নিশ্চিত করা হয় — ঢাকার ব্যবসার নিয়ম অনুযায়ী অনলাইনে কোনো নির্দিষ্ট দাম দেওয়া হয় না।",
    allCategories: "সব পার্টস",
    allModels: "সব মডেল",
    sortLabel: "সাজান",
    sortFeatured: "সেরা",
    sortName: "নাম A–Z",
    sortCategory: "ক্যাটাগরি",
    resultsCount: (n: number) => `${n}টি পার্টস`,
    fitsLabel: "মানানসই:",
    conditionLabel: "রিকন্ডিশন্ড • জাপান",
    priceOnRequest: "দাম জানতে অনুসন্ধান করুন",
    addToList: "অনুসন্ধান তালিকায় যোগ করুন",
    inList: "তালিকায় আছে",
    emptyTitle: "এই খোঁজে কোনো পার্টস মেলেনি।",
    emptyText:
      "অন্য শব্দ দিয়ে চেষ্টা করুন বা ফিল্টার মুছে ফেলুন — অথবা নিচে চেসিস ফাইন্ডার ব্যবহার করে জানান কোন পার্টস লাগবে।",

    finderTitle: "চেসিস নম্বর দিয়ে পার্টস খুঁজুন",
    finderText:
      "আপনার চেসিস নম্বর ও যে পার্টস লাগবে তা জানান — আমরা আপনার গাড়ির জন্য সঠিক পার্টস মিলিয়ে দেব। আপনার অনুরোধ এই ডিভাইসে অনুসন্ধান তালিকায় সংরক্ষিত হবে।",
    finderChassisLabel: "চেসিস নম্বর",
    finderChassisPlaceholder: "যেমন: NZE161-0123456",
    finderModelLabel: "গাড়ির মডেল",
    finderPartLabel: "কোন পার্টস লাগবে?",
    finderPartPlaceholder: "যেমন: এসি কম্প্রেসর",
    finderOtherModel: "অন্যান্য / তালিকায় নেই",
    finderButton: "অনুসন্ধান তালিকায় সংরক্ষণ করুন",
    finderSaved: "আপনার অনুসন্ধান তালিকায় সংরক্ষিত হয়েছে।",
    finderNeedChassis: "আগে আপনার চেসিস নম্বর লিখুন।",
    finderNeedPart: "কোন পার্টস লাগবে তা জানান।",

    dholaikhalTitle: "ধোলাইখালের পথে সংগ্রহ করা",
    dholaikhalText:
      "পুরান ঢাকার ধোলাইখাল ১৯৬০-এর দশক থেকে বাংলাদেশের রিকন্ডিশন্ড মোটর পার্টসের ঠিকানা — হাজার হাজার বিশেষজ্ঞ দোকান, আর এমন পার্টস যা নতুন আর তৈরি হয় না। আমাদের পার্টস আসে সেই একই জাপান থেকে আনা সরবরাহ থেকে, যার ওপর ঢাকার ব্যবসা কয়েক দশক ধরে ভরসা করে: দুর্ঘটনায় ক্ষতিগ্রস্ত গাড়ি, নিলাম ও আমদানিকারকদের কাছ থেকে, বিক্রির আগে যাচাই করে।",
    dholaikhalStat1: "ধোলাইখালে ৪,০০০–৫,০০০ দোকান",
    dholaikhalStat2: "১৯৬০-এর দশক থেকে ব্যবসা",
    dholaikhalStat3: "যে পার্টস নতুন আর তৈরি হয় না",

    whyTitle: "কেন কাজী মোটরস থেকে কিনবেন?",
    why1Title: "জাপান থেকে আনা পার্টস",
    why1Text:
      "জাপান থেকে আনা রিকন্ডিশন্ড পার্টস — ঢাকার ধোলাইখালের ব্যবসা কয়েক দশক ধরে যে সরবরাহের ওপর ভরসা করে।",
    why2Title: "আপনার গাড়ির সঙ্গে মিলিয়ে দেওয়া হয়",
    why2Text:
      "মডেল বলুন — অথবা চেসিস নম্বর — টাকা দেওয়ার আগেই আমরা সঠিক পার্টস মিলিয়ে দেব।",
    why3Title: "সৎ দাম",
    why3Text:
      "প্রতিটি দাম অনুসন্ধানে নিশ্চিত করা হয়। আমরা এমন দাম দিই না যা রাখতে পারব না, আর পার্টস না মিললে বিক্রি করার চেয়ে সেটা জানিয়ে দেওয়াই ভালো মনে করি।",
    why4Title: "ঢাকায় ডেলিভারি",
    why4Text:
      "অর্ডার নিশ্চিত হলে ঢাকার ভেতরে ডেলিভারির ব্যবস্থা করা হবে। অর্ডার করার বিস্তারিত শীঘ্রই যোগ করা হবে।",

    cartTitle: "আপনার অনুসন্ধান তালিকা",
    cartNote:
      "দাম অনুসন্ধানে নিশ্চিত করা হয় — এই তালিকাটি আপনার ডিভাইসে সংরক্ষিত, এটি কোনো পেমেন্ট নয়। অর্ডার করার বিস্তারিত শীঘ্রই যোগ করা হবে।",
    cartEmptyTitle: "আপনার তালিকা খালি।",
    cartEmptyText:
      "ক্যাটালগ থেকে পার্টস যোগ করুন আর অর্ডার চালু হওয়া পর্যন্ত এখানে রাখুন।",
    cartClear: "তালিকা মুছে ফেলুন",
    cartClose: "বন্ধ করুন",
    cartQtyDecrease: "পরিমাণ কমান",
    cartQtyIncrease: "পরিমাণ বাড়ান",
    cartRemove: "তালিকা থেকে সরান",
    cartRequest: "চেসিস অনুরোধ",
    cartRequestDetail: (chassis: string, model: string, part: string) =>
      `চেসিস ${chassis} · ${model} · ${part}`,
    cartComingSoon: "অর্ডার করার বিস্তারিত শীঘ্রই যোগ করা হবে।",

    toastAdded: "আপনার অনুসন্ধান তালিকায় যোগ হয়েছে",
    toastRemoved: "তালিকা থেকে সরানো হয়েছে",
    toastCleared: "তালিকা মুছে ফেলা হয়েছে",
    toastRequestSaved: "অনুরোধ অনুসন্ধান তালিকায় সংরক্ষিত হয়েছে",

    footerTag: "ঢাকা, বাংলাদেশে জাপানি রিকন্ডিশন্ড গাড়ির পার্টস।",
    footerHonest:
      "সৎ কথা: সব পার্টসই জাপান থেকে আনা রিকন্ডিশন্ড। অর্ডারের আগে প্রতিটি দাম অনুসন্ধানে নিশ্চিত করা হয় — আমরা এমন দাম দিই না যা রাখতে পারব না। পাওয়া যাবে কি না, তা অনুসন্ধানে জানানো হয়।",
    footerMade: "বাংলাদেশে যত্নে তৈরি",
    footerCatalogue: "ক্যাটালগ",
    footerHelp: "সাহায্য",
  },
};
