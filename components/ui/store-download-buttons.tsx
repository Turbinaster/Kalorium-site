import { Play, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { STORE_DOWNLOAD_LINKS } from "@/data/site";
import { cn } from "@/lib/cn";

type StoreDownloadButtonsProps = {
  className?: string;
  buttonClassName?: string;
  layout?: "responsive" | "stacked";
};

const storeIcons = {
  "google-play": Play,
  rustore: ShoppingBag,
};

export function StoreDownloadButtons({
  className,
  buttonClassName,
  layout = "responsive",
}: StoreDownloadButtonsProps) {
  return (
    <div
      className={cn(
        "flex gap-3",
        layout === "responsive" ? "flex-col sm:flex-row" : "flex-col",
        className,
      )}
    >
      {STORE_DOWNLOAD_LINKS.map((store, index) => {
        const Icon = storeIcons[store.id];

        return (
          <Button
            key={store.id}
            asChild
            className={cn("min-w-[190px]", buttonClassName)}
            size="lg"
            variant={index === 0 ? "primary" : "secondary"}
          >
            <a
              data-analytics-event={store.eventName}
              href={store.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {store.label}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
