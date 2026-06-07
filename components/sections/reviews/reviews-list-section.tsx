import Link from "next/link";

import { ReviewCard } from "@/components/ui/review-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviewsList } from "@/data/reviews";
import { RUSTORE_URL } from "@/data/site";

export function ReviewsListSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <SectionHeading title={reviewsList.title} />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviewsList.items.map((item, index) => (
              <ReviewCard
                key={`${item.source}-${index}`}
                source={item.source}
                text={item.text}
                title={item.title}
              />
            ))}
          </div>
          <Link
            className="body-text inline-flex items-center gap-2 text-brand-hover transition-colors hover:text-brand-primary"
            href={RUSTORE_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            {reviewsList.moreLinkLabel}
          </Link>
        </div>
      </Container>
    </Section>
  );
}
