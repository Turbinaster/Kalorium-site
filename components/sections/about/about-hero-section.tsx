import { PageHero } from "@/components/ui/page-hero";
import { aboutHero } from "@/data/about";

export function AboutHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={aboutHero.breadcrumbLabel}
      description={aboutHero.description}
      downloadActions
      eyebrow={aboutHero.eyebrow}
      secondaryAction={{
        label: aboutHero.secondaryCta,
        href: "/calculator",
      }}
      title={aboutHero.title}
    />
  );
}
