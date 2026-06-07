import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { PhoneMockupPlaceholder } from "@/components/ui/phone-mockup-placeholder";
import { Section } from "@/components/ui/section";
import { StoreDownloadButtons } from "@/components/ui/store-download-buttons";
import { assetPaths } from "@/data/assets";
import { homeFeatureChips, homeHero } from "@/data/home";
import { resolveOptionalPublicAsset } from "@/lib/assets";

const floatingCards = [
  { label: "1450 ккал", position: "left-4 top-8 md:left-1 lg:left-8" },
  { label: "Белки 82 г", position: "right-4 top-24 md:right-1 lg:right-8" },
  { label: "По фото", position: "left-10 bottom-10 md:left-6 lg:left-16" },
];

function HeroFloatingCard({
  label,
  position,
}: {
  label: string;
  position: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-20 hidden rounded-[22px] border border-border-soft bg-surface/95 px-4 py-3 shadow-soft backdrop-blur md:block ${position}`}
    >
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
        <span className="text-sm font-semibold text-text-primary">{label}</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const heroAssetSrc = resolveOptionalPublicAsset(assetPaths.homeHeroMain);

  return (
    <Section className="pb-8 pt-10 md:pb-10 md:pt-14 lg:pt-16">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-border-soft bg-gradient-to-br from-surface via-surface to-brand-soft/80 px-6 py-8 shadow-soft md:px-10 md:py-12 lg:px-12 lg:py-14">
          <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-brand-soft/90 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-brand-primary/10 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <span className="caption-text inline-flex rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
                  {homeHero.eyebrow}
                </span>
                <div className="space-y-4">
                  <h1 className="display-text max-w-4xl text-wrap-balance text-text-primary">
                    {homeHero.title}
                  </h1>
                  <p className="body-lg-text max-w-2xl text-text-secondary">
                    {homeHero.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {homeFeatureChips.map((chip) => (
                  <Chip
                    key={`hero-${chip.label}`}
                    active
                    href={chip.href}
                    label={chip.label}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <StoreDownloadButtons buttonClassName="w-full sm:w-auto" />
                <div>
                  <Button asChild className="w-full sm:w-auto" size="lg" variant="secondary">
                  <Link href="/calculator">{homeHero.secondaryCta}</Link>
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <p className="body-sm-text text-text-muted">{homeHero.supportingNote}</p>
                <div className="inline-flex max-w-xl items-start gap-3 rounded-[22px] border border-border-soft bg-white/70 px-4 py-4">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-primary"
                  />
                  <p className="body-sm-text text-text-secondary">{homeHero.microTrustText}</p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="rounded-[32px] bg-gradient-to-b from-background-soft via-white/80 to-brand-soft/70 px-6 py-8 md:px-8 md:py-10">
                {floatingCards.map((card) => (
                  <HeroFloatingCard
                    key={card.label}
                    label={card.label}
                    position={card.position}
                  />
                ))}

                <div className="relative z-10 mx-auto max-w-[340px] md:max-w-[360px] lg:max-w-[380px]">
                  <PhoneMockupPlaceholder
                    assetSrc={heroAssetSrc}
                    className="max-w-none"
                    decorative={!heroAssetSrc}
                    imageAlt="Главный экран приложения Калориум"
                    imagePriority
                    title="Главный экран приложения Калориум"
                    variant="hero"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
