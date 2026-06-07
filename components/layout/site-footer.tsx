import Link from "next/link";

import { Container } from "@/components/ui/container";
import { footerNavigation } from "@/data/navigation";
import { SITE_NAME } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-surface">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 border-b border-border-soft pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft">
                <span className="h-4 w-4 rounded-full bg-brand-primary" />
                <span className="absolute inset-[8px] rounded-full border border-brand-primary/25" />
              </span>
              <span className="text-xl font-bold tracking-tight text-text-primary">
                {SITE_NAME}
              </span>
            </div>
            <p className="body-text max-w-sm text-text-secondary">
              Калориум — приложение для подсчёта калорий по фото, контроля КБЖУ и ведения дневника питания.
            </p>
          </div>

          {footerNavigation.map((group) => (
            <div key={group.title} className="space-y-4">
              <h2 className="text-base font-semibold text-text-primary">{group.title}</h2>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={`${group.title}-${item.href}`}>
                    {item.external ? (
                      <a
                        className="body-text text-text-secondary transition-colors hover:text-text-primary"
                        href={item.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        className="body-text text-text-secondary transition-colors hover:text-text-primary"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <span>© Калориум, 2026</span>
          <span>Официальный сайт приложения Калориум</span>
        </div>
      </Container>
    </footer>
  );
}
