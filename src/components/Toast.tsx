"use client";

import { useToast } from "@/context/AppContext";

export function Toast() {
  const { toast } = useToast();
  if (!toast) return null;
  return (
    <div
      role="status"
      className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 animate-toast-in rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white shadow-lg dark:bg-white dark:text-ink"
    >
      {toast}
    </div>
  );
}
