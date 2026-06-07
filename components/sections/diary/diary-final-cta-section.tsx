import { CtaSection } from "@/components/ui/cta-section";
import { diaryFinalCta } from "@/data/diary";

export function DiaryFinalCtaSection() {
  return (
    <CtaSection
      downloadActions
      description={diaryFinalCta.text}
      note={diaryFinalCta.note}
      secondaryAction={{
        label: diaryFinalCta.secondaryCta,
        href: "/calculator",
      }}
      title={diaryFinalCta.title}
    />
  );
}
