import { Container } from "@/components/ui/container";
import { PhoneMockupPlaceholder } from "@/components/ui/phone-mockup-placeholder";
import { Section } from "@/components/ui/section";
import { assetPaths } from "@/data/assets";
import { diaryGraphs } from "@/data/diary";
import { resolveOptionalPublicAsset } from "@/lib/assets";

export function DiaryGraphsSection() {
  const graphsAssetSrc = resolveOptionalPublicAsset(assetPaths.homeScreenGraphs);

  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:items-center">
          <div className="space-y-4">
            <h2 className="h2-text text-wrap-balance text-text-primary">{diaryGraphs.title}</h2>
            {diaryGraphs.paragraphs.map((paragraph) => (
              <p key={paragraph} className="body-text text-text-secondary">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="rounded-[30px] bg-gradient-to-b from-brand-soft/70 via-surface to-background-soft px-5 py-7 shadow-soft">
            <div className="rounded-[24px] bg-white/80 px-4 py-6">
              <PhoneMockupPlaceholder
                assetSrc={graphsAssetSrc}
                className="max-w-[290px]"
                decorative={!graphsAssetSrc}
                imageAlt="Наглядные графики и история прогресса"
                imageSizes="(min-width: 1280px) 290px, (min-width: 768px) 34vw, 82vw"
                title="Наглядные графики и история прогресса"
                variant="graphs"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
