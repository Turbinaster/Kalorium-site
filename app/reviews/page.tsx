import { ReviewsFinalCtaSection } from "@/components/sections/reviews/reviews-final-cta-section";
import { ReviewsHeroSection } from "@/components/sections/reviews/reviews-hero-section";
import { ReviewsListSection } from "@/components/sections/reviews/reviews-list-section";
import { ReviewsRatingSection } from "@/components/sections/reviews/reviews-rating-section";
import { ReviewsThemesSection } from "@/components/sections/reviews/reviews-themes-section";
import { JsonLd } from "@/components/seo/json-ld";
import { reviewsHero } from "@/data/reviews";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/reviews");

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData(
          "/reviews",
          reviewsHero.breadcrumbLabel,
        )}
      />
      <ReviewsHeroSection />
      <ReviewsRatingSection />
      <ReviewsThemesSection />
      <ReviewsListSection />
      <ReviewsFinalCtaSection />
    </>
  );
}
