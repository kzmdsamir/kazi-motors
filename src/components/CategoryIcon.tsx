import type { CategoryId } from "@/data/products";

/**
 * Simple line icons — one per category. No product photos are used anywhere
 * on the shop (a photo would be invented), so the catalogue stays honest.
 */
const PATHS: Record<CategoryId, React.ReactNode> = {
  engine: (
    <>
      <rect x="10" y="26" width="30" height="22" rx="3" />
      <path d="M40 30h8l6-6v18l-6-4" />
      <path d="M16 26V16h8M26 26V12h8M14 48v6M36 48v6" />
    </>
  ),
  gearbox: (
    <>
      <circle cx="32" cy="32" r="10" />
      <circle cx="32" cy="32" r="20" strokeDasharray="4 5" />
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8" />
    </>
  ),
  suspension: (
    <>
      <path d="M20 8v10M44 8v10M20 46v10M44 46v10" />
      <path d="M14 22l36 6M50 22L14 40M14 22l36 18" />
    </>
  ),
  steering: (
    <>
      <circle cx="32" cy="32" r="20" />
      <path d="M32 16v-6M32 54v-6M16 32H10M54 32h-6" />
      <path d="M20 20l4 4M44 20l-4 4" />
    </>
  ),
  brakes: (
    <>
      <circle cx="32" cy="32" r="18" />
      <circle cx="32" cy="32" r="6" />
      <path d="M32 14v6M32 44v6M14 32h6M44 32h6" />
    </>
  ),
  electrical: <path d="M36 6L16 36h12l-4 22 20-30H32z" />,
  ac: (
    <path d="M32 8v48M12 20l40 24M52 20L12 44M32 8l-6 8M32 8l6 8M32 56l-6-8M32 56l6-8" />
  ),
  body: (
    <>
      <path d="M8 40q4-14 16-16l8-8h16l8 8q12 2 16 10v8H8z" />
      <circle cx="20" cy="44" r="6" />
      <circle cx="44" cy="44" r="6" />
    </>
  ),
  lights: (
    <>
      <path d="M14 26h24a12 12 0 0 1 0 24H14z" />
      <path d="M20 32h16M48 38l8-2M48 44l8 2" />
    </>
  ),
  hybrid: (
    <>
      <rect x="12" y="14" width="40" height="28" rx="6" />
      <path d="M34 20l-8 12h6l-4 8 10-12h-6z" />
      <path d="M20 48h24" />
    </>
  ),
  filters: (
    <>
      <path d="M14 14h36l-8 18v18l-20 6V32z" />
      <path d="M24 34h16" />
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
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[category]}
    </svg>
  );
}
