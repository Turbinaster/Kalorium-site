import Link from "next/link";

import { ReviewCard } from "@/components/ui/review-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeReviewsPreview } from "@/data/home";

export function ReviewsPreviewSection() {
  return (
    <Section tone="brand">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            align="center"
            description={homeReviewsPreview.intro}
            title={homeReviewsPreview.title}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {homeReviewsPreview.cards.map((card) => (
              <ReviewCard
                avatar={card.avatar}
                date={card.date}
                key={`${card.title}-${card.date}`}
                rating={card.rating}
                source={card.source}
                text={card.text}
                title={card.title}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              className="body-text inline-flex font-semibold text-brand-hover transition-colors hover:text-brand-primary"
              href={homeReviewsPreview.linkHref}
            >
              {homeReviewsPreview.linkLabel}
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
