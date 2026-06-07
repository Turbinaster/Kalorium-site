import { CtaSection } from "@/components/ui/cta-section";
import { updatesFinalCta } from "@/data/updates";

export function UpdatesFinalCtaSection() {
  return (
    <CtaSection
      downloadActions
      description={updatesFinalCta.text}
      secondaryAction={{
        label: updatesFinalCta.secondaryCta,
        href: "/",
      }}
      title={updatesFinalCta.title}
    />
  );
}
