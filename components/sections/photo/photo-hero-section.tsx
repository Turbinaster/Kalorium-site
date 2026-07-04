import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PhoneMockupPlaceholder } from "@/components/ui/phone-mockup-placeholder";
import { Section } from "@/components/ui/section";
import { StoreDownloadButtons } from "@/components/ui/store-download-buttons";
import { assetPaths } from "@/data/assets";
import { photoHero } from "@/data/photo";
import { resolveOptionalPublicAsset } from "@/lib/assets";

const floatingCards = [
  {
    label: "Распознано",
    position: "right-8 top-12 md:right-4 lg:right-8",
  },
  {
    label: "По фото",
    position: "left-[12%] top-[32%] md:left-[8%] lg:left-[12%]",
  },
  {
    label: "КБЖУ",
    position: "right-[11%] top-[64%] md:right-[7%] lg:right-[11%]",
  },
];

function FloatingCard({
  label,
  position,
}: {
  label: string;
  position: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-20 hidden rounded-[22px] border border-border-soft bg-surface/92 px-4 py-3 shadow-soft backdrop-blur md:block ${position}`}
    >
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
        <span className="text-sm font-semibold text-text-primary">{label}</span>
      </div>
    </div>
  );
}

export function PhotoHeroSection() {
  const heroAssetSrc = resolveOptionalPublicAsset(assetPaths.photoHeroMain);

  return (
    <Section className="pb-10 pt-10 md:pb-12 md:pt-14">
      <Container>
        <div className="space-y-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: photoHero.breadcrumbLabel },
            ]}
          />

          <div className="overflow-hidden rounded-[36px] border border-border-soft bg-gradient-to-br from-surface via-surface to-brand-soft/70 px-6 py-8 shadow-soft md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] lg:items-center">
              <div className="space-y-7">
                <div className="space-y-5">
                  <span className="caption-text inline-flex rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
                    {photoHero.eyebrow}
                  </span>
                  <div className="space-y-4">
                    <h1 className="h1-text text-wrap-balance text-text-primary">
                      {photoHero.title}
                    </h1>
                    <p className="body-lg-text max-w-2xl text-text-secondary">
                      {photoHero.subtitle}
                    </p>
                    <p className="body-text max-w-2xl text-text-secondary">{photoHero.text}</p>
                  </div>
                </div>

                <div className="rounded-[24px] border border-border-soft bg-white/72 px-5 py-5">
                  <p className="body-text text-text-secondary">{photoHero.supportingText}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <StoreDownloadButtons buttonClassName="w-full sm:w-auto" />
                  <div>
                    <Button asChild className="w-full sm:w-auto" size="lg" variant="secondary">
                    <Link href="/calculator">{photoHero.secondaryCta}</Link>
                    </Button>
                  </div>
                </div>

                <p className="body-sm-text max-w-2xl text-text-muted">{photoHero.note}</p>
              </div>

              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="rounded-[32px] bg-gradient-to-b from-background-soft via-white/80 to-brand-soft/70 px-6 py-8 md:px-8 md:py-10">
                  {floatingCards.map((card) => (
                    <FloatingCard
                      key={card.label}
                      label={card.label}
                      position={card.position}
                    />
                  ))}

                  <div className="relative z-10 mx-auto max-w-[330px] md:max-w-[350px]">
                    <PhoneMockupPlaceholder
                      assetSrc={heroAssetSrc}
                      className="max-w-none"
                      decorative={!heroAssetSrc}
                      imageAlt="Экран функции подсчёта калорий по фото в приложении Калориум"
                      imagePriority
                      title="Экран функции подсчёта калорий по фото в приложении Калориум"
                      variant="photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
