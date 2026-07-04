import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { reviewsRating } from "@/data/reviews";

const stars = [0, 1, 2, 3, 4];

export function ReviewsRatingSection() {
  return (
    <Section className="py-12 md:py-16" tone="brand">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] lg:items-center">
          <div className="max-w-2xl space-y-4">
            <span className="caption-text rounded-full bg-surface px-3 py-1 text-brand-hover">
              {reviewsRating.eyebrow}
            </span>
            <div className="space-y-3">
              <h2 className="h2-text text-wrap-balance text-text-primary">
                {reviewsRating.title}
              </h2>
              <p className="body-text text-text-secondary">{reviewsRating.description}</p>
            </div>
          </div>

          <figure
            aria-label={reviewsRating.ariaLabel}
            className="relative overflow-hidden rounded-[28px] border border-border-soft bg-surface p-6 shadow-soft md:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-2 bg-brand-primary" aria-hidden="true" />
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-brand-soft text-xl font-bold text-brand-hover">
                    ▶
                  </span>
                  <div>
                    <p className="caption-text text-text-muted">Google Play</p>
                    <p className="text-base font-bold leading-6 text-text-primary">
                      {reviewsRating.storeLabel}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                  <span className="text-7xl font-extrabold leading-none text-text-primary md:text-8xl">
                    {reviewsRating.score}
                  </span>
                  <span className="pb-2 text-xl font-bold leading-7 text-text-secondary">
                    {reviewsRating.maxScore}
                  </span>
                </div>

                <div className="flex gap-2" aria-label={reviewsRating.starsLabel}>
                  {stars.map((star) => (
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-xl font-bold text-white shadow-soft"
                      key={star}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 md:w-48 md:grid-cols-1">
                {reviewsRating.facts.map((fact) => (
                  <div
                    className="rounded-[18px] border border-border-soft bg-background-soft px-4 py-3"
                    key={fact.label}
                  >
                    <p className="text-lg font-bold leading-7 text-text-primary">{fact.value}</p>
                    <p className="body-sm-text text-text-muted">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </figure>
        </div>
      </Container>
    </Section>
  );
}
