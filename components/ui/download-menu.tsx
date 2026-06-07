"use client";

import {
  type KeyboardEvent as ReactKeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { ChevronDown, Play, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { STORE_DOWNLOAD_LINKS } from "@/data/site";
import { cn } from "@/lib/cn";

type DownloadMenuProps = {
  align?: "left" | "right";
  buttonClassName?: string;
  className?: string;
  fullWidth?: boolean;
  mode?: "popover" | "inline";
  onStoreSelect?: () => void;
};

const storeIcons = {
  "google-play": Play,
  rustore: ShoppingBag,
};

export function DownloadMenu({
  align = "right",
  buttonClassName,
  className,
  fullWidth = false,
  mode = "popover",
  onStoreSelect,
}: DownloadMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleStoreSelect = () => {
    setIsOpen(false);
    onStoreSelect?.();
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={cn(
        mode === "popover" ? "relative" : "w-full",
        fullWidth && "w-full",
        className,
      )}
      onKeyDown={handleKeyDown}
      ref={rootRef}
    >
      <Button
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={cn(fullWidth && "w-full", buttonClassName)}
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        Скачать
        <ChevronDown
          aria-hidden="true"
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        />
      </Button>

      <div
        aria-hidden={!isOpen}
        className={cn(
          "rounded-[24px] border border-border-soft bg-surface p-2 shadow-soft transition-all duration-200 ease-soft",
          mode === "popover" &&
            cn(
              "absolute top-full z-50 mt-3 w-[292px]",
              align === "right" ? "right-0" : "left-0",
            ),
          mode === "inline" && "mt-3 w-full",
          isOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0",
        )}
        id={menuId}
        role="menu"
      >
        <div className="space-y-1">
          {STORE_DOWNLOAD_LINKS.map((store) => {
            const Icon = storeIcons[store.id];

            return (
              <a
                className="flex items-center gap-3 rounded-[18px] px-4 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-brand-soft/70 focus-visible:bg-brand-soft/70"
                data-analytics-event={store.eventName}
                href={store.href}
                key={store.id}
                onClick={handleStoreSelect}
                rel="noopener noreferrer"
                role="menuitem"
                target="_blank"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-hover">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="flex flex-col">
                  <span>{store.label}</span>
                  <span className="caption-text text-text-muted">
                    Официальный магазин
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
