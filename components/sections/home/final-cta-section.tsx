import { CtaSection } from "@/components/ui/cta-section";
import { homeFinalCta } from "@/data/home";

export function FinalCtaSection() {
  return (
    <CtaSection
      downloadActions
      description={homeFinalCta.text}
      note={homeFinalCta.note}
      secondaryAction={{
        label: homeFinalCta.secondaryCta,
        href: "/calculator",
      }}
      title={homeFinalCta.title}
    />
  );
}
