import { PageHero } from "@/components/ui/page-hero";
import { updatesHero } from "@/data/updates";

export function UpdatesHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={updatesHero.breadcrumbLabel}
      description={updatesHero.description}
      downloadActions
      eyebrow={updatesHero.eyebrow}
      secondaryAction={{
        label: updatesHero.secondaryCta,
        href: "/",
      }}
      title={updatesHero.title}
    />
  );
}
