import { PageHero } from "@/components/ui/page-hero";
import { downloadHero } from "@/data/download";

export function DownloadHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={downloadHero.breadcrumbLabel}
      description={downloadHero.description}
      downloadActions
      eyebrow={downloadHero.eyebrow}
      note={downloadHero.note}
      secondaryAction={{
        label: downloadHero.secondaryCta,
        href: "/",
      }}
      title={downloadHero.title}
    />
  );
}
