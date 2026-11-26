/**
 * Kazi Motors — parts catalogue.
 *
 * Data carried over from the shop's original catalogue. Every part is
 * reconditioned, sourced from Japan. All prices are "Price on request" —
 * that is how the Dhaka parts trade works, so no prices are listed here.
 * No stock counts are claimed: availability is confirmed on enquiry.
 */

export type CategoryId =
  | "engine"
  | "gearbox"
  | "suspension"
  | "steering"
  | "brakes"
  | "electrical"
  | "ac"
  | "body"
  | "lights"
  | "hybrid"
  | "filters";

export interface Category {
  id: CategoryId;
  en: string;
  bn: string;
}

export const CATEGORIES: Category[] = [
  { id: "engine", en: "Engine", bn: "ইঞ্জিন" },
  { id: "gearbox", en: "Gearbox", bn: "গিয়ারবক্স" },
  { id: "suspension", en: "Suspension", bn: "সাসপেনশন" },
  { id: "steering", en: "Steering", bn: "স্টিয়ারিং" },
  { id: "brakes", en: "Brakes", bn: "ব্রেক" },
  { id: "electrical", en: "Electrical", bn: "ইলেকট্রিক্যাল" },
  { id: "ac", en: "AC & Cooling", bn: "এসি ও কুলিং" },
  { id: "body", en: "Body parts", bn: "বডি পার্টস" },
  { id: "lights", en: "Lights", bn: "লাইট" },
  { id: "hybrid", en: "Hybrid parts", bn: "হাইব্রিড পার্টস" },
  { id: "filters", en: "Filters & service", bn: "ফিল্টার ও সার্ভিস" },
];

/** Car models these parts are commonly fitted to. */
export const MODELS = [
  "Axio",
  "Premio",
  "Allion",
  "Corolla",
  "Noah",
  "Probox",
  "Succeed",
  "Hiace",
] as const;

export type Model = (typeof MODELS)[number];

export interface Part {
  id: string;
  category: CategoryId;
  en: string;
  bn: string;
  /** Models this part fits (compatibility guide, not a stock claim). */
  fits: Model[];
}

export const PARTS: Part[] = [
  { id: "eng-1nz", category: "engine", en: "Complete engine — 1NZ-FE 1500cc", bn: "সম্পূর্ণ ইঞ্জিন — 1NZ-FE ১৫০০সিসি", fits: ["Axio", "Premio", "Allion", "Corolla", "Probox", "Succeed"] },
  { id: "eng-head", category: "engine", en: "Cylinder head block", bn: "সিলিন্ডার হেড ব্লক", fits: ["Axio", "Premio", "Allion"] },
  { id: "eng-throttle", category: "engine", en: "Throttle body", bn: "থ্রটল বডি", fits: ["Axio", "Premio", "Allion", "Probox", "Succeed"] },
  { id: "eng-fuelpump", category: "engine", en: "Fuel pump", bn: "ফুয়েল পাম্প", fits: ["Axio", "Premio", "Allion", "Noah", "Probox", "Succeed"] },
  { id: "gb-auto", category: "gearbox", en: "Automatic gearbox / transmission", bn: "অটো গিয়ারবক্স / ট্রান্সমিশন", fits: ["Axio", "Premio", "Allion", "Noah"] },
  { id: "susp-shock", category: "suspension", en: "Shock absorbers (front & rear)", bn: "শক অ্যাবজর্বার (সামনে ও পেছনে)", fits: ["Axio", "Premio", "Allion", "Noah", "Probox", "Succeed"] },
  { id: "susp-arm", category: "suspension", en: "Lower control arm", bn: "লোয়ার কন্ট্রোল আর্ম", fits: ["Axio", "Premio", "Allion", "Corolla"] },
  { id: "susp-cv", category: "suspension", en: "CV joint & drive shaft", bn: "সিভি জয়েন্ট ও ড্রাইভ শ্যাফট", fits: ["Axio", "Premio", "Allion", "Probox", "Succeed"] },
  { id: "str-rack", category: "steering", en: "Steering rack", bn: "স্টিয়ারিং র‍্যাক", fits: ["Axio", "Premio", "Allion", "Noah"] },
  { id: "str-motor", category: "steering", en: "Steering motor (EPS)", bn: "স্টিয়ারিং মোটর (EPS)", fits: ["Axio", "Premio", "Allion"] },
  { id: "brk-disc", category: "brakes", en: "Brake discs & pads", bn: "ব্রেক ডিস্ক ও প্যাড", fits: ["Axio", "Premio", "Allion", "Noah", "Corolla", "Probox", "Succeed", "Hiace"] },
  { id: "brk-booster", category: "brakes", en: "Brake booster", bn: "ব্রেক বুস্টার", fits: ["Axio", "Premio", "Allion", "Noah"] },
  { id: "brk-abs", category: "brakes", en: "ABS module", bn: "এবিএস মডিউল", fits: ["Axio", "Premio", "Allion", "Noah"] },
  { id: "ele-ecu", category: "electrical", en: "ECU / computer box", bn: "ইসিইউ / কম্পিউটার বক্স", fits: ["Axio", "Premio", "Allion", "Probox", "Succeed"] },
  { id: "ele-alt", category: "electrical", en: "Alternator", bn: "অল্টারনেটর", fits: ["Axio", "Premio", "Allion", "Noah", "Probox", "Succeed"] },
  { id: "ele-starter", category: "electrical", en: "Starter motor", bn: "স্টার্টার মোটর", fits: ["Axio", "Premio", "Allion", "Probox", "Succeed", "Hiace"] },
  { id: "ele-coil", category: "electrical", en: "Ignition coils", bn: "ইগনিশন কয়েল", fits: ["Axio", "Premio", "Allion", "Corolla", "Probox", "Succeed"] },
  { id: "ele-o2", category: "electrical", en: "Oxygen sensor", bn: "অক্সিজেন সেন্সর", fits: ["Axio", "Premio", "Allion", "Noah"] },
  { id: "ele-fuse", category: "electrical", en: "Fuse box", bn: "ফিউজ বক্স", fits: ["Axio", "Premio", "Allion", "Probox", "Succeed"] },
  { id: "ac-comp", category: "ac", en: "AC compressor", bn: "এসি কম্প্রেসর", fits: ["Axio", "Premio", "Allion", "Noah", "Probox", "Succeed", "Hiace"] },
  { id: "ac-rad", category: "ac", en: "Radiator", bn: "রেডিয়েটর", fits: ["Axio", "Premio", "Allion", "Noah", "Corolla", "Probox", "Succeed"] },
  { id: "ac-fan", category: "ac", en: "Radiator fan motor", bn: "রেডিয়েটর ফ্যান মোটর", fits: ["Axio", "Premio", "Allion", "Noah"] },
  { id: "ac-pump", category: "ac", en: "Water pump", bn: "ওয়াটার পাম্প", fits: ["Axio", "Premio", "Allion", "Probox", "Succeed"] },
  { id: "body-bumper", category: "body", en: "Front bumper", bn: "সামনের বাম্পার", fits: ["Axio", "Premio", "Allion", "Noah", "Probox", "Succeed"] },
  { id: "body-mirror", category: "body", en: "Side mirror", bn: "সাইড মিরর", fits: ["Axio", "Premio", "Allion", "Noah", "Corolla", "Probox", "Succeed"] },
  { id: "body-window", category: "body", en: "Door window motor & regulator", bn: "জানালার মোটর ও রেগুলেটর", fits: ["Axio", "Premio", "Allion", "Noah"] },
  { id: "lt-head", category: "lights", en: "Headlights", bn: "হেডলাইট", fits: ["Axio", "Premio", "Allion", "Noah", "Corolla", "Probox", "Succeed", "Hiace"] },
  { id: "lt-tail", category: "lights", en: "Tail lights", bn: "টেইল লাইট", fits: ["Axio", "Premio", "Allion", "Noah", "Probox", "Succeed"] },
  { id: "hyb-batt", category: "hybrid", en: "Hybrid battery pack", bn: "হাইব্রিড ব্যাটারি প্যাক", fits: ["Axio", "Noah"] },
  { id: "hyb-pump", category: "hybrid", en: "Hybrid water pump", bn: "হাইব্রিড ওয়াটার পাম্প", fits: ["Axio", "Noah"] },
  { id: "flt-air", category: "filters", en: "Air filter", bn: "এয়ার ফিল্টার", fits: ["Axio", "Premio", "Allion", "Noah", "Corolla", "Probox", "Succeed", "Hiace"] },
  { id: "flt-oil", category: "filters", en: "Oil filter", bn: "অয়েল ফিল্টার", fits: ["Axio", "Premio", "Allion", "Noah", "Corolla", "Probox", "Succeed", "Hiace"] },
];

export function categoryById(id: CategoryId): Category {
  return CATEGORIES.find((c) => c.id === id) as Category;
}

export function partById(id: string): Part | undefined {
  return PARTS.find((p) => p.id === id);
}
