import { CtaSection } from "@/components/ui/cta-section";
import { faqFinalCta } from "@/data/faq";

export function FaqFinalCtaSection() {
  return (
    <CtaSection
      downloadActions
      description={faqFinalCta.text}
      note={faqFinalCta.note}
      secondaryAction={{
        label: faqFinalCta.secondaryCta,
        href: "/calculator",
      }}
      title={faqFinalCta.title}
    />
  );
}
