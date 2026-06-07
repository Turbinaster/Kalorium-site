"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StoreDownloadButtons } from "@/components/ui/store-download-buttons";
import { faqMidCta } from "@/data/faq";

import { useFaqSearchContext } from "@/components/sections/faq/faq-search-section";

export function FaqMidCtaSection() {
  const { hasQuery, getSectionById } = useFaqSearchContext();

  if (hasQuery && !getSectionById("faq-calories")) {
    return null;
  }

  return (
    <Section className="pt-0">
      <Container>
        <div className="rounded-[28px] border border-border-soft bg-gradient-to-br from-brand-soft via-surface to-surface px-6 py-8 shadow-soft md:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="space-y-3">
              <h2 className="h3-text text-text-primary">{faqMidCta.title}</h2>
              <p className="body-text max-w-2xl text-text-secondary">
                {faqMidCta.text}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg">
                <Link href="/calculator">{faqMidCta.primaryCta}</Link>
              </Button>
              <StoreDownloadButtons
                buttonClassName="w-full sm:w-auto lg:w-full"
                className="sm:flex-row lg:flex-col"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
