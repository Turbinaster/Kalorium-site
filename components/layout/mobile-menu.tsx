"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { DownloadMenu } from "@/components/ui/download-menu";
import { mobileNavigation } from "@/data/navigation";
import { cn } from "@/lib/cn";

export function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-menu-panel"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft bg-surface text-text-primary transition-colors hover:border-brand-primary/40 hover:bg-brand-soft/70"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-all duration-200 ease-soft",
          isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible",
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 bg-text-primary/25 backdrop-blur-sm transition-opacity duration-200",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsOpen(false)}
        />
        <div
          aria-label="Мобильная навигация"
          aria-modal="true"
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-surface px-5 pb-6 pt-5 shadow-[0_24px_60px_rgba(20,60,55,0.18)] transition-transform duration-200 ease-soft",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
          id="mobile-menu-panel"
          role="dialog"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-lg font-bold text-text-primary">Навигация</span>
            <button
              aria-label="Закрыть меню"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft bg-background-soft text-text-primary"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Мобильная навигация" className="flex-1 overflow-y-auto">
            <ul className="space-y-2">
              {mobileNavigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-medium transition-colors",
                        isActive
                          ? "border-brand-primary/25 bg-brand-soft text-text-primary"
                          : "border-transparent bg-background-soft text-text-secondary hover:border-brand-primary/20 hover:bg-brand-soft hover:text-text-primary",
                      )}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-6 pt-5">
            <DownloadMenu
              fullWidth
              mode="inline"
              onStoreSelect={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
