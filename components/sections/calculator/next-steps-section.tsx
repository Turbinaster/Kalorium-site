import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StoreDownloadButtons } from "@/components/ui/store-download-buttons";
import { nextStepsContent } from "@/data/calculator";

export function NextStepsSection() {
  return (
    <Section tone="soft">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
          <div className="space-y-8">
            <SectionHeading title={nextStepsContent.title} />
            <div className="grid gap-4">
              {nextStepsContent.items.map((item, index) => (
                <article
                  key={item.title}
                  className="soft-card flex gap-4 rounded-[24px] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-base font-bold text-brand-primary">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-text-primary">{item.title}</h3>
                    <p className="body-sm-text text-text-secondary">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="soft-card rounded-[30px] bg-gradient-to-br from-brand-soft via-surface to-surface p-6 md:p-8">
            <div className="space-y-5">
              <div className="space-y-3">
                <h3 className="h3-text text-text-primary">{nextStepsContent.ctaCard.title}</h3>
                <p className="body-text text-text-secondary">{nextStepsContent.ctaCard.text}</p>
              </div>
              <div className="flex flex-col gap-3">
                <StoreDownloadButtons buttonClassName="w-full" layout="stacked" />
                <Button asChild size="lg" variant="secondary">
                  <Link href="/diary">{nextStepsContent.ctaCard.secondaryCta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
