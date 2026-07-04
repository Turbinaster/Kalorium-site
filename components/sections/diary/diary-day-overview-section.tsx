import { Container } from "@/components/ui/container";
import { PhoneMockupPlaceholder } from "@/components/ui/phone-mockup-placeholder";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { assetPaths } from "@/data/assets";
import { diaryDayOverview } from "@/data/diary";
import { resolveOptionalPublicAsset } from "@/lib/assets";

export function DiaryDayOverviewSection() {
  const dashboardAssetSrc = resolveOptionalPublicAsset(assetPaths.homeScreenDashboard);

  return (
    <Section tone="soft">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,420px)] lg:items-start">
          <div className="space-y-8">
            <SectionHeading title={diaryDayOverview.title} />
            <div className="grid gap-4 md:grid-cols-2">
              {diaryDayOverview.items.map((item) => (
                <article
                  key={item.title}
                  className="soft-card rounded-[24px] bg-surface px-5 py-5"
                >
                  <div className="space-y-3">
                    <h3 className="h3-text text-text-primary">{item.title}</h3>
                    <p className="body-text text-text-secondary">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] bg-gradient-to-b from-surface via-white to-background-soft px-5 py-7 shadow-soft">
            <PhoneMockupPlaceholder
              assetSrc={dashboardAssetSrc}
              className="max-w-[290px]"
              decorative={!dashboardAssetSrc}
              imageAlt="Суточная норма и остаток калорий"
              imageSizes="(min-width: 1280px) 290px, (min-width: 768px) 34vw, 82vw"
              title="Суточная норма и остаток калорий"
              variant="dashboard"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
