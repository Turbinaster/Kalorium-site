import { CtaSection } from "@/components/ui/cta-section";
import { photoFinalCta } from "@/data/photo";

export function PhotoFinalCtaSection() {
  return (
    <CtaSection
      downloadActions
      description={photoFinalCta.text}
      note={photoFinalCta.note}
      secondaryAction={{
        label: photoFinalCta.secondaryCta,
        href: "/diary",
      }}
      title={photoFinalCta.title}
    />
  );
}
