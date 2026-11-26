import type { CategoryId } from "@/data/products";

/**
 * Precision technical line icons — one per category.
 * No product photos are used anywhere on the shop so the catalogue stays honest.
 */
const PATHS: Record<CategoryId, React.ReactNode> = {
  engine: (
    <>
      <rect x="11" y="25" width="30" height="22" rx="3" />
      <path d="M41 29h7l5-5v18l-5-4h-7" />
      <path d="M16 25v-8h9v8M28 25v-11h9v11" />
      <path d="M15 47v5M37 47v5M19 36h14M26 31v10" />
    </>
  ),
  gearbox: (
    <>
      <circle cx="32" cy="32" r="9" />
      <circle cx="32" cy="32" r="19" strokeDasharray="5 4" />
      <circle cx="32" cy="32" r="3" />
      <path d="M32 7v6M32 51v6M7 32h6M51 32h6" />
    </>
  ),
  suspension: (
    <>
      <path d="M24 9h16M24 55h16M32 9v8M32 47v8" />
      <path d="M20 20l24 5-24 6 24 6-24 6 24 4" />
    </>
  ),
  steering: (
    <>
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="5" />
      <path d="M12.5 32h14.5M37 32h14.5M32 37v15" />
    </>
  ),
  brakes: (
    <>
      <circle cx="32" cy="32" r="19" />
      <circle cx="32" cy="32" r="7" />
      <path d="M45 17a20 20 0 0 1 6 15v5h-6v-5a14 14 0 0 0-4-10z" />
      <path d="M22 22l2 2M22 42l2-2M32 18v3M32 43v3" />
    </>
  ),
  electrical: (
    <>
      <path d="M35 8L17 34h12l-3 22 21-28H35z" />
    </>
  ),
  ac: (
    <>
      <path d="M32 8v48M11 20l42 24M53 20L11 44" />
      <path d="M27 13l5 5 5-5M27 51l5-5 5 5M14 27l6-1-2-6M44 44l-2-6 6-1M50 27l-6-1 2-6M20 44l2-6-6-1" />
    </>
  ),
  body: (
    <>
      <path d="M9 40c2-11 9-14 15-15l7-8h15l7 8c7 1 11 5 11 11v6H9v-2z" />
      <circle cx="21" cy="43" r="5.5" />
      <circle cx="46" cy="43" r="5.5" />
      <path d="M26 25h17" />
    </>
  ),
  lights: (
    <>
      <path d="M12 22h20a10 10 0 0 1 10 10v0a10 10 0 0 1-10 10H12V22z" />
      <path d="M19 28h11M19 36h11M47 26l7-3M48 32h8M47 38l7 3" />
    </>
  ),
  hybrid: (
    <>
      <rect x="10" y="16" width="44" height="28" rx="5" />
      <path d="M19 16v-4h8v4M37 16v-4h8v4" />
      <path d="M34 21l-7 10h6l-3 9 9-11h-6z" />
      <path d="M18 50h28" />
    </>
  ),
  filters: (
    <>
      <rect x="16" y="12" width="32" height="40" rx="4" />
      <path d="M16 20h32M16 44h32M24 20v24M32 20v24M40 20v24" />
    </>
  ),
};

export function CategoryIcon({
  category,
  className = "h-10 w-10",
}: {
  category: CategoryId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[category]}
    </svg>
  );
}
