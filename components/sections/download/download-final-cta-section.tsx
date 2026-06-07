import { CtaSection } from "@/components/ui/cta-section";
import { downloadFinalCta } from "@/data/download";

export function DownloadFinalCtaSection() {
  return (
    <CtaSection
      downloadActions
      description={downloadFinalCta.text}
      secondaryAction={{
        label: downloadFinalCta.secondaryCta,
        href: "/calculator",
      }}
      title={downloadFinalCta.title}
    />
  );
}
