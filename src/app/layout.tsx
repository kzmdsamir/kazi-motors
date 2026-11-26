import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kazi Motors — Genuine Japanese Reconditioned Car Parts | Dhaka, Bangladesh",
  description:
    "Kazi Motors supplies genuine Japanese reconditioned car parts in Dhaka, Bangladesh — engines, gearboxes, suspension, brakes, electrical, AC, body parts, lights, and hybrid parts for Axio, Premio, Allion, Corolla, Noah, and Hiace. Prices confirmed on enquiry.",
  keywords: [
    "Kazi Motors",
    "reconditioned car parts Bangladesh",
    "Japanese car parts Dhaka",
    "Dholaikhal parts",
    "Toyota parts Bangladesh",
    "Axio parts",
    "Premio parts",
    "Allion parts",
    "Corolla parts",
    "Noah parts",
    "Hiace parts",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Kazi Motors — Genuine Japanese Reconditioned Car Parts",
    description:
      "Genuine used parts from Japan matched to your Toyota by model or chassis number. Save your enquiry list and confirm pricing directly.",
    siteName: "Kazi Motors",
    locale: "en_BD",
  },
};

/**
 * Runs before React hydrates: applies the saved light/dark theme so the
 * page never flashes the wrong theme on first paint.
 */
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('km-theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoPartsStore",
              name: "Kazi Motors",
              description:
                "Genuine Japanese reconditioned car parts specialist in Dhaka, Bangladesh. Prices confirmed on enquiry.",
              areaServed: "Dhaka, Bangladesh",
              currenciesAccepted: "BDT",
              paymentAccepted: "Cash",
            }),
          }}
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
