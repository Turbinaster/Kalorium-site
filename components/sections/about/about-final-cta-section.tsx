import { CtaSection } from "@/components/ui/cta-section";
import { aboutFinalCta } from "@/data/about";

export function AboutFinalCtaSection() {
  return (
    <CtaSection
      downloadActions
      description={aboutFinalCta.text}
      secondaryAction={{
        label: aboutFinalCta.secondaryCta,
        href: "/contacts",
      }}
      title={aboutFinalCta.title}
    />
  );
}
