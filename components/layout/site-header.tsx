"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { Container } from "@/components/ui/container";
import { DownloadMenu } from "@/components/ui/download-menu";
import { headerNavigation } from "@/data/navigation";
import { SITE_NAME } from "@/data/site";
import { cn } from "@/lib/cn";

type SiteHeaderProps = {
  logoSrc?: string | null;
};

function HeaderBrandLogo({ logoSrc }: { logoSrc: string }) {
  return (
    <>
      <span className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden">
        <Image
          alt={SITE_NAME}
          className="object-contain p-0.5"
          fill
          priority
          sizes="60px"
          src={logoSrc}
        />
      </span>
      <span className="text-lg font-bold tracking-tight text-text-primary">
        {SITE_NAME}
      </span>
    </>
  );
}

function HeaderBrandFallback() {
  return (
    <>
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft">
        <span className="h-4 w-4 rounded-full bg-brand-primary" />
        <span className="absolute inset-[7px] rounded-full border border-brand-primary/25" />
      </span>
      <span className="text-lg font-bold tracking-tight text-text-primary">
        {SITE_NAME}
      </span>
    </>
  );
}

export function SiteHeader({ logoSrc = null }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-200 ease-soft",
        isScrolled ? "py-3" : "py-4",
      )}
    >
      <Container>
        <div
          className={cn(
            "flex min-h-[64px] items-center gap-4 rounded-full border px-4 transition-all duration-200 ease-soft md:px-6",
            isScrolled
              ? "border-border-soft bg-surface/95 shadow-soft backdrop-blur-xl"
              : "border-transparent bg-surface/70 backdrop-blur-md",
          )}
        >
          <Link
            aria-label="Калориум — перейти на главную"
            className="flex shrink-0 items-center gap-3"
            href="/"
          >
            {logoSrc ? <HeaderBrandLogo logoSrc={logoSrc} /> : <HeaderBrandFallback />}
          </Link>

          <nav aria-label="Основная навигация" className="hidden flex-1 lg:block">
            <ul className="flex items-center justify-center gap-2">
              {headerNavigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <li key={item.href}>
                    <Link
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-soft text-text-primary"
                          : "text-text-secondary hover:bg-brand-soft/70 hover:text-text-primary",
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto hidden lg:block">
            <DownloadMenu />
          </div>

          <div className="ml-auto lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
