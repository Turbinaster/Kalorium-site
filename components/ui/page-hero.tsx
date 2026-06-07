import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StoreDownloadButtons } from "@/components/ui/store-download-buttons";

type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
};

type PageHeroProps = {
  breadcrumbLabel?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  downloadActions?: boolean;
  note?: string;
};

function ActionButton({
  action,
  variant,
}: {
  action: HeroAction;
  variant: "primary" | "secondary";
}) {
  const externalProps = action.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : undefined;

  return (
    <Button asChild size="lg" variant={variant}>
      <Link href={action.href} {...externalProps}>
        {action.label}
      </Link>
    </Button>
  );
}

export function PageHero({
  breadcrumbLabel,
  eyebrow,
  title,
  description,
  downloadActions = false,
  primaryAction,
  secondaryAction,
  note,
}: PageHeroProps) {
  return (
    <Section className="pb-8 pt-10 md:pb-10 md:pt-14">
      <Container>
        <div className="space-y-8">
          <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: breadcrumbLabel ?? title }]} />

          <div className="soft-card overflow-hidden rounded-[28px] bg-gradient-to-br from-surface via-surface to-brand-soft/70 px-6 py-8 md:px-10 md:py-12">
            <div className="max-w-3xl space-y-5">
              <span className="caption-text rounded-full bg-brand-soft px-3 py-1 text-brand-hover">
                {eyebrow}
              </span>
              <div className="space-y-4">
                <h1 className="h1-text text-wrap-balance text-text-primary">{title}</h1>
                <p className="body-lg-text max-w-2xl text-text-secondary">{description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                {downloadActions ? (
                  <>
                    <StoreDownloadButtons
                      buttonClassName="w-full sm:w-auto"
                      className="contents sm:flex"
                    />
                    {secondaryAction ? (
                      <ActionButton action={secondaryAction} variant="secondary" />
                    ) : null}
                  </>
                ) : (
                  <>
                    {primaryAction ? (
                      <ActionButton action={primaryAction} variant="primary" />
                    ) : null}
                    {secondaryAction ? (
                      <ActionButton action={secondaryAction} variant="secondary" />
                    ) : null}
                  </>
                )}
              </div>
              {note ? <p className="body-sm-text max-w-2xl text-text-muted">{note}</p> : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
