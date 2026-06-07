import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StoreDownloadButtons } from "@/components/ui/store-download-buttons";
import { faqHero } from "@/data/faq";

export function FaqHeroSection() {
  return (
    <Section className="pb-10 pt-10 md:pb-12 md:pt-14">
      <Container>
        <div className="space-y-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: faqHero.breadcrumbLabel },
            ]}
          />

          <div className="rounded-[32px] border border-border-soft bg-gradient-to-br from-surface via-surface to-background-soft px-6 py-8 shadow-soft md:px-10 md:py-12">
            <div className="max-w-4xl space-y-6">
              <span className="caption-text inline-flex rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
                {faqHero.eyebrow}
              </span>
              <div className="space-y-4">
                <h1 className="h1-text text-wrap-balance text-text-primary">
                  {faqHero.title}
                </h1>
                <p className="body-lg-text text-text-secondary">
                  {faqHero.description}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <Button asChild className="w-full sm:w-auto" size="lg">
                  <Link href="/calculator">{faqHero.primaryCta}</Link>
                  </Button>
                </div>
                <StoreDownloadButtons buttonClassName="w-full sm:w-auto" />
              </div>
              <div className="rounded-[24px] border border-border-soft bg-white/70 px-4 py-4">
                <p className="body-sm-text text-text-muted">{faqHero.note}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
