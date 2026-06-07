import { PageHero } from "@/components/ui/page-hero";
import { reviewsHero } from "@/data/reviews";

export function ReviewsHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={reviewsHero.breadcrumbLabel}
      description={reviewsHero.description}
      downloadActions
      eyebrow={reviewsHero.eyebrow}
      note={reviewsHero.note}
      title={reviewsHero.title}
    />
  );
}
