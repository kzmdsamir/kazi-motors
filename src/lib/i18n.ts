/**
 * English / Bangla strings for the whole shop.
 * `Lang` is the only place language lives; every component reads through
 * the `useLanguage` hook in AppContext.
 */

export type Lang = "en" | "bn";

export interface Strings {
  brandName: string;
  brandTag: string;
  brandLocation: string;
  navParts: string;
  navHow: string;
  navFinder: string;
  navWhy: string;
  searchLabel: string;
  searchPlaceholder: string;
  searchClear: string;
  cartButton: string;
  langLabel: string;
  themeLight: string;
  themeDark: string;
  heroKicker: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSub: string;
  heroSearchPlaceholder: string;
  heroSearchButton: string;
  heroModelsLabel: string;
  heroCtaParts: string;
  heroCtaFinder: string;
  chipJapan: string;
  chipModels: string;
  chipPrice: string;
  chipDholaikhal: string;
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
  filterByCategory: string;
  filterByModel: string;
  resetFilters: string;
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
  finderKicker: string;
  finderTitle: string;
  finderText: string;
  finderWhereTitle: string;
  finderWhereText: string;
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
  dholaikhalKicker: string;
  dholaikhalTitle: string;
  dholaikhalText: string;
  dholaikhalStat1: string;
  dholaikhalStat2: string;
  dholaikhalStat3: string;
  whyTitle: string;
  whySub: string;
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
    brandLocation: "Dhaka, Bangladesh",
    navParts: "Parts catalogue",
    navHow: "How to order",
    navFinder: "Chassis finder",
    navWhy: "Why us",
    searchLabel: "Search parts",
    searchPlaceholder: "Search parts, e.g. AC compressor, alternator…",
    searchClear: "Clear search",
    cartButton: "Enquiry list",
    langLabel: "Language",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",

    heroKicker: "Japanese Reconditioned Parts Specialist · Dhaka, Bangladesh",
    heroTitle: "Genuine Japanese reconditioned parts,",
    heroTitleAccent: "matched to your car.",
    heroSub:
      "Used genuine parts sourced from Japan via Dholaikhal for Axio, Premio, Allion, Corolla, Noah, and Hiace. Build your enquiry list or match by chassis number — every price is confirmed on enquiry.",
    heroSearchPlaceholder: "Search by part name, category, or Toyota model…",
    heroSearchButton: "Search catalogue",
    heroModelsLabel: "Browse by model:",
    heroCtaParts: "Browse all 32 parts",
    heroCtaFinder: "Match by chassis number",
    chipJapan: "Genuine reconditioned parts",
    chipModels: "Matched by model or chassis number",
    chipPrice: "Price confirmed on enquiry",
    chipDholaikhal: "Sourced via Dholaikhal",

    howTitle: "How to order — in 3 clear steps",
    howSub: "No online checkout or fixed estimates. Your enquiry list stays saved on this device until ordering opens.",
    step1Title: "Find your part",
    step1Text:
      "Search by part name or filter by Toyota model — Axio, Premio, Allion, Corolla, Noah, or Hiace.",
    step2Title: "Build your enquiry list",
    step2Text:
      "Add the parts you need, or submit a chassis-number request. Everything stays saved in this browser.",
    step3Title: "Price & fitment confirmed",
    step3Text:
      "Ordering details will be added soon. When they are, send your list and we will confirm exact fitment and price.",
    howNote:
      "Tip: your chassis number is the surest way to match the exact part revision for your car — use the chassis finder below.",

    catalogTitle: "Parts catalogue",
    catalogSub:
      "All 32 genuine Japanese reconditioned parts across 11 categories. Every price is confirmed on enquiry — never guessed or inflated.",
    allCategories: "All categories",
    allModels: "All models",
    filterByCategory: "Category",
    filterByModel: "Toyota model",
    resetFilters: "Reset filters",
    sortLabel: "Sort",
    sortFeatured: "Featured",
    sortName: "Name A–Z",
    sortCategory: "Category",
    resultsCount: (n: number) => `${n} part${n === 1 ? "" : "s"} shown`,
    fitsLabel: "Fits",
    conditionLabel: "Reconditioned · Japan",
    priceOnRequest: "Price on request",
    addToList: "Add to list",
    inList: "In list",
    emptyTitle: "No parts match that filter.",
    emptyText:
      "Try a different keyword or reset the filters — or use the chassis finder below to request the exact part you need.",

    finderKicker: "Precision Fitment",
    finderTitle: "Find a part by chassis number",
    finderText:
      "Parts in Bangladesh are matched by model or chassis number, not by year alone. Enter your chassis number and the part you need — your request is saved straight to your enquiry list.",
    finderWhereTitle: "Where to find your chassis number",
    finderWhereText:
      "Check the metal build plate on the driver-side door jamb, the engine bay firewall, or your vehicle registration card (e.g. NZE161-0123456).",
    finderChassisLabel: "Chassis number",
    finderChassisPlaceholder: "e.g. NZE161-0123456",
    finderModelLabel: "Car model",
    finderPartLabel: "Which part do you need?",
    finderPartPlaceholder: "e.g. AC compressor, ABS module",
    finderOtherModel: "Other / not listed",
    finderButton: "Save to enquiry list",
    finderSaved: "Saved to your enquiry list.",
    finderNeedChassis: "Please enter your chassis number first.",
    finderNeedPart: "Please tell us which part you need.",

    dholaikhalKicker: "Our Supply Chain",
    dholaikhalTitle: "Sourced the Dholaikhal way",
    dholaikhalText:
      "Dholaikhal in Old Dhaka has been Bangladesh's home for reconditioned motor parts since the 1960s — thousands of specialist shops, and genuine parts that are no longer made new. Our parts come from the same Japan-sourced supply the Dhaka trade has relied on for decades: auction vehicles, dismantled Japanese cars, and trusted importers, checked before they are sold on.",
    dholaikhalStat1: "4,000–5,000 specialist shops in Dholaikhal",
    dholaikhalStat2: "Active trade since the 1960s",
    dholaikhalStat3: "Genuine parts no longer made new",

    whyTitle: "Why workshops and owners choose Kazi Motors",
    whySub: "Straightforward parts trading built on honest fitment and transparent pricing.",
    why1Title: "Genuine Japan-sourced parts",
    why1Text:
      "Reconditioned original parts sourced from Japan — the same supply Dhaka's Dholaikhal trade has relied on for decades.",
    why2Title: "Matched to your car",
    why2Text:
      "Tell us your model or your chassis number and we verify the exact fitment before you pay anything.",
    why3Title: "Honest pricing",
    why3Text:
      "Every price is confirmed on enquiry. We never list a price we cannot honour, and we would rather tell you a part does not fit than sell it to you.",
    why4Title: "Dhaka delivery",
    why4Text:
      "Delivery inside Dhaka is arranged once your order is confirmed. Ordering details will be added soon.",

    cartTitle: "Your enquiry list",
    cartNote:
      "Prices are confirmed on enquiry — this list is saved on your device, not a checkout. Ordering details will be added soon.",
    cartEmptyTitle: "Your enquiry list is empty.",
    cartEmptyText:
      "Add parts from the catalogue or save a chassis request here until ordering opens.",
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
    toastCleared: "Enquiry list cleared",
    toastRequestSaved: "Chassis request saved to your enquiry list",

    footerTag: "Japanese reconditioned car parts · Dhaka, Bangladesh.",
    footerHonest:
      "Honest note: all parts are reconditioned and sourced from Japan. Every price is confirmed on enquiry before you order — we never list a price we cannot honour. Availability is confirmed on enquiry.",
    footerMade: "Dhaka, Bangladesh",
    footerCatalogue: "Catalogue",
    footerHelp: "Information",
  },
  bn: {
    brandName: "কাজী মোটরস",
    brandTag: "জাপানি রিকন্ডিশন্ড গাড়ির পার্টস · ঢাকা, বাংলাদেশ",
    brandLocation: "ঢাকা, বাংলাদেশ",
    navParts: "পার্টস ক্যাটালগ",
    navHow: "অর্ডার করার নিয়ম",
    navFinder: "চেসিস ফাইন্ডার",
    navWhy: "কেন আমরা",
    searchLabel: "পার্টস খুঁজুন",
    searchPlaceholder: "পার্টস খুঁজুন, যেমন এসি কম্প্রেসর, অল্টারনেটর…",
    searchClear: "খোঁজ মুছুন",
    cartButton: "অনুসন্ধান তালিকা",
    langLabel: "ভাষা",
    themeLight: "আলো মোডে যান",
    themeDark: "অন্ধকার মোডে যান",

    heroKicker: "জাপানি রিকন্ডিশন্ড পার্টস বিশেষজ্ঞ · ঢাকা, বাংলাদেশ",
    heroTitle: "আসল জাপানি রিকন্ডিশন্ড পার্টস,",
    heroTitleAccent: "আপনার গাড়ির সাথে মিলিয়ে।",
    heroSub:
      "অ্যাক্সিও, প্রিমিও, অ্যালিয়ন, করোলা, নোয়া ও হাইএস-এর জন্য ধোলাইখালের মাধ্যমে জাপান থেকে আনা আসল ব্যবহৃত পার্টস। অনুসন্ধান তালিকা তৈরি করুন বা চেসিস নম্বর দিন — প্রতিটি দাম অনুসন্ধানে নিশ্চিত করা হয়।",
    heroSearchPlaceholder: "পার্টসের নাম, ক্যাটাগরি বা টয়োটা মডেল লিখুন…",
    heroSearchButton: "ক্যাটালগে খুঁজুন",
    heroModelsLabel: "মডেল অনুযায়ী দেখুন:",
    heroCtaParts: "সব ৩২টি পার্টস দেখুন",
    heroCtaFinder: "চেসিস নম্বর দিয়ে খুঁজুন",
    chipJapan: "আসল রিকন্ডিশন্ড পার্টস",
    chipModels: "মডেল বা চেসিস নম্বর দিয়ে মেলানো",
    chipPrice: "দাম অনুসন্ধানে নিশ্চিত করা হয়",
    chipDholaikhal: "ধোলাইখালের মাধ্যমে সংগৃহীত",

    howTitle: "অর্ডার করবেন যেভাবে — ৩টি সহজ ধাপ",
    howSub: "কোনো জটিল অনলাইন চেকআউট নয়। অর্ডার চালু হওয়া পর্যন্ত আপনার অনুসন্ধান তালিকা এই ডিভাইসে সংরক্ষিত থাকবে।",
    step1Title: "সঠিক পার্টস খুঁজুন",
    step1Text:
      "পার্টসের নাম দিয়ে খুঁজুন, অথবা আপনার টয়োটা মডেল দিয়ে ফিল্টার করুন — অ্যাক্সিও, প্রিমিও, অ্যালিয়ন, করোলা, নোয়া বা হাইএস।",
    step2Title: "অনুসন্ধান তালিকা তৈরি করুন",
    step2Text:
      "প্রয়োজনীয় পার্টস তালিকায় যোগ করুন, অথবা চেসিস নম্বর দিয়ে অনুরোধ সংরক্ষণ করুন। সবকিছু এই ব্রাউজারে সেভ থাকে।",
    step3Title: "দাম ও ফিটমেন্ট নিশ্চিত করা হয়",
    step3Text:
      "অর্ডার করার বিস্তারিত শীঘ্রই যোগ করা হবে। তখন আপনার তালিকা পাঠালে আমরা সঠিক ফিটমেন্ট ও দাম জানিয়ে দেব।",
    howNote:
      "টিপস: আপনার গাড়ির সঠিক পার্টস মেলানোর সবচেয়ে নির্ভরযোগ্য উপায় হলো চেসিস নম্বর — নিচে চেসিস ফাইন্ডার ব্যবহার করুন।",

    catalogTitle: "পার্টস ক্যাটালগ",
    catalogSub:
      "১১টি ক্যাটাগরিতে ৩২টি আসল জাপানি রিকন্ডিশন্ড পার্টস। ঢাকার ব্যবসার নিয়ম অনুযায়ী প্রতিটি দাম অনুসন্ধানে নিশ্চিত করা হয়।",
    allCategories: "সব ক্যাটাগরি",
    allModels: "সব মডেল",
    filterByCategory: "ক্যাটাগরি",
    filterByModel: "টয়োটা মডেল",
    resetFilters: "ফিল্টার মুছুন",
    sortLabel: "সাজান",
    sortFeatured: "সেরা",
    sortName: "নাম A–Z",
    sortCategory: "ক্যাটাগরি",
    resultsCount: (n: number) => `${n}টি পার্টস দেখানো হচ্ছে`,
    fitsLabel: "মানানসই",
    conditionLabel: "রিকন্ডিশন্ড · জাপান",
    priceOnRequest: "দাম জানতে অনুসন্ধান করুন",
    addToList: "তালিকায় যোগ করুন",
    inList: "তালিকায় আছে",
    emptyTitle: "এই ফিল্টারে কোনো পার্টস মেলেনি।",
    emptyText:
      "অন্য শব্দ দিয়ে চেষ্টা করুন বা ফিল্টার মুছে ফেলুন — অথবা নিচে চেসিস ফাইন্ডার ব্যবহার করে আপনার প্রয়োজনীয় পার্টস জানান।",

    finderKicker: "সঠিক ফিটমেন্ট",
    finderTitle: "চেসিস নম্বর দিয়ে পার্টস খুঁজুন",
    finderText:
      "বাংলাদেশে শুধু সাল নয়, মডেল বা চেসিস নম্বর দিয়ে সঠিক পার্টস মেলানো হয়। আপনার চেসিস নম্বর ও প্রয়োজনীয় পার্টস লিখুন — অনুরোধটি সরাসরি আপনার অনুসন্ধান তালিকায় সংরক্ষিত হবে।",
    finderWhereTitle: "চেসিস নম্বর কোথায় পাবেন",
    finderWhereText:
      "ড্রাইভার পাশের দরজার ফ্রেমের প্লেটে, ইঞ্জিন বে-র ফায়ারওয়ালে, অথবা গাড়ির রেজিস্ট্রেশন কার্ডে চেসিস নম্বর লেখা থাকে (যেমন: NZE161-0123456)।",
    finderChassisLabel: "চেসিস নম্বর",
    finderChassisPlaceholder: "যেমন: NZE161-0123456",
    finderModelLabel: "গাড়ির মডেল",
    finderPartLabel: "কোন পার্টস লাগবে?",
    finderPartPlaceholder: "যেমন: এসি কম্প্রেসর, এবিএস মডিউল",
    finderOtherModel: "অন্যান্য / তালিকায় নেই",
    finderButton: "অনুসন্ধান তালিকায় সংরক্ষণ করুন",
    finderSaved: "আপনার অনুসন্ধান তালিকায় সংরক্ষিত হয়েছে।",
    finderNeedChassis: "আগে আপনার চেসিস নম্বর লিখুন।",
    finderNeedPart: "কোন পার্টস লাগবে তা জানান।",

    dholaikhalKicker: "আমাদের সোর্সিং",
    dholaikhalTitle: "ধোলাইখালের পথে সংগ্রহ করা",
    dholaikhalText:
      "পুরান ঢাকার ধোলাইখাল ১৯৬০-এর দশক থেকে বাংলাদেশের রিকন্ডিশন্ড মোটর পার্টসের ঠিকানা — হাজার হাজার বিশেষজ্ঞ দোকান, আর এমন আসল পার্টস যা নতুন আর তৈরি হয় না। আমাদের পার্টস আসে সেই একই জাপান থেকে আনা সরবরাহ থেকে, যার ওপর ঢাকার ব্যবসা কয়েক দশক ধরে ভরসা করে: নিলামের গাড়ি, জাপান থেকে আমদানিকৃত পার্টস ও বিশ্বস্ত আমদানিকারকদের কাছ থেকে যাচাই করে সংগ্রহ করা।",
    dholaikhalStat1: "ধোলাইখালে ৪,০০০–৫,০০০ বিশেষজ্ঞ দোকান",
    dholaikhalStat2: "১৯৬০-এর দশক থেকে সক্রিয় বাজার",
    dholaikhalStat3: "যে আসল পার্টস নতুন আর তৈরি হয় না",

    whyTitle: "কেন গাড়ির মালিক ও ওয়ার্কশপ কাজী মোটরস বেছে নেন",
    whySub: "সঠিক ফিটমেন্ট ও সৎ দামের ওপর ভিত্তি করে সোজাসাপ্টা পার্টস ব্যবসা।",
    why1Title: "জাপান থেকে আনা আসল পার্টস",
    why1Text:
      "জাপান থেকে আনা রিকন্ডিশন্ড আসল পার্টস — ঢাকার ধোলাইখালের ব্যবসা কয়েক দশক ধরে যে সরবরাহের ওপর ভরসা করে।",
    why2Title: "আপনার গাড়ির সঙ্গে মিলিয়ে দেওয়া হয়",
    why2Text:
      "মডেল বা চেসিস নম্বর জানান — টাকা দেওয়ার আগেই আমরা সঠিক ফিটমেন্ট মিলিয়ে দিই।",
    why3Title: "সৎ দাম",
    why3Text:
      "প্রতিটি দাম অনুসন্ধানে নিশ্চিত করা হয়। আমরা এমন দাম দিই না যা রাখতে পারব না, আর পার্টস না মিললে বিক্রি করার চেয়ে সেটা জানিয়ে দেওয়াই ভালো মনে করি।",
    why4Title: "ঢাকায় ডেলিভারি",
    why4Text:
      "অর্ডার নিশ্চিত হলে ঢাকার ভেতরে ডেলিভারির ব্যবস্থা করা হবে। অর্ডার করার বিস্তারিত শীঘ্রই যোগ করা হবে।",

    cartTitle: "আপনার অনুসন্ধান তালিকা",
    cartNote:
      "দাম অনুসন্ধানে নিশ্চিত করা হয় — এই তালিকাটি আপনার ডিভাইসে সংরক্ষিত, এটি কোনো চেকআউট নয়। অর্ডার করার বিস্তারিত শীঘ্রই যোগ করা হবে।",
    cartEmptyTitle: "আপনার অনুসন্ধান তালিকা খালি।",
    cartEmptyText:
      "ক্যাটালগ থেকে পার্টস যোগ করুন বা চেসিস অনুরোধ সংরক্ষণ করুন, অর্ডার চালু হওয়া পর্যন্ত এখানে থাকবে।",
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
    toastCleared: "অনুসন্ধান তালিকা মুছে ফেলা হয়েছে",
    toastRequestSaved: "চেসিস অনুরোধ অনুসন্ধান তালিকায় সংরক্ষিত হয়েছে",

    footerTag: "জাপানি রিকন্ডিশন্ড গাড়ির পার্টস · ঢাকা, বাংলাদেশ।",
    footerHonest:
      "সৎ কথা: সব পার্টসই জাপান থেকে আনা রিকন্ডিশন্ড। অর্ডারের আগে প্রতিটি দাম অনুসন্ধানে নিশ্চিত করা হয় — আমরা এমন দাম দিই না যা রাখতে পারব না। পাওয়া যাবে কি না, তা অনুসন্ধানে জানানো হয়।",
    footerMade: "ঢাকা, বাংলাদেশ",
    footerCatalogue: "ক্যাটালগ",
    footerHelp: "তথ্য",
  },
};
