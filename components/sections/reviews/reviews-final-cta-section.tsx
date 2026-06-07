import { CtaSection } from "@/components/ui/cta-section";
import { reviewsFinalCta } from "@/data/reviews";

export function ReviewsFinalCtaSection() {
  return (
    <CtaSection
      downloadActions
      description={reviewsFinalCta.text}
      secondaryAction={{
        label: reviewsFinalCta.secondaryCta,
        href: "/",
      }}
      title={reviewsFinalCta.title}
    />
  );
}
