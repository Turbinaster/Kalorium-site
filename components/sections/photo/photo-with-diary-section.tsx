import { Container } from "@/components/ui/container";
import { PhoneMockupPlaceholder } from "@/components/ui/phone-mockup-placeholder";
import { Section } from "@/components/ui/section";
import { assetPaths } from "@/data/assets";
import { photoWithDiary } from "@/data/photo";
import { resolveOptionalPublicAsset } from "@/lib/assets";

function MiniSurface({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute hidden rounded-[22px] border border-border-soft bg-surface/92 p-4 shadow-soft md:block ${className}`}
    >
      <div className="space-y-2">
        <div className="h-2.5 w-10 rounded-full bg-brand-primary/25" />
        <div className="h-2 w-24 rounded-full bg-border-soft" />
      </div>
    </div>
  );
}

export function PhotoWithDiarySection() {
  const diaryAssetSrc = resolveOptionalPublicAsset(assetPaths.homeScreenDiary);

  return (
    <Section tone="soft">
      <Container>
        <div className="soft-card rounded-[32px] bg-gradient-to-br from-surface via-surface to-background-soft px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] lg:items-center">
            <div className="space-y-4">
              <h2 className="h2-text text-wrap-balance text-text-primary">
                {photoWithDiary.title}
              </h2>
              {photoWithDiary.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-text text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="rounded-[28px] bg-gradient-to-b from-brand-soft/70 via-white to-background-soft px-6 py-8">
                <MiniSurface className="-left-3 top-8" />
                <MiniSurface className="-right-3 bottom-10" />
                <PhoneMockupPlaceholder
                  assetSrc={diaryAssetSrc}
                  className="max-w-[280px]"
                  decorative={!diaryAssetSrc}
                  imageAlt="Дневник питания по времени суток"
                  imageSizes="(min-width: 1280px) 280px, (min-width: 768px) 34vw, 82vw"
                  title="Дневник питания по времени суток"
                  variant="diary"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
