import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { StoreDownloadButtons } from "@/components/ui/store-download-buttons";
import { cn } from "@/lib/cn";

type ActionLink = {
  label: string;
  href: string;
  external?: boolean;
};

type CtaSectionProps = {
  title: string;
  description: string;
  primaryAction?: ActionLink;
  secondaryAction?: ActionLink;
  downloadActions?: boolean;
  note?: string;
  className?: string;
};

function ActionAnchor({
  action,
  variant,
}: {
  action: ActionLink;
  variant: "primary" | "secondary";
}) {
  const props = action.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : undefined;

  return (
    <Button asChild size="lg" variant={variant}>
      <Link href={action.href} {...props}>
        {action.label}
      </Link>
    </Button>
  );
}

export function CtaSection({
  title,
  description,
  downloadActions = false,
  primaryAction,
  secondaryAction,
  note,
  className,
}: CtaSectionProps) {
  return (
    <Section className={className}>
      <Container>
        <div className="soft-card overflow-hidden rounded-[28px] bg-gradient-to-br from-brand-soft via-surface to-background-soft px-6 py-10 md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="max-w-3xl space-y-4">
              <h2 className="h2-text text-wrap-balance text-text-primary">{title}</h2>
              <p className="body-text max-w-2xl text-text-secondary">{description}</p>
              {note ? <p className="body-sm-text text-text-muted">{note}</p> : null}
            </div>
            <div className={cn("flex flex-col gap-3 sm:flex-row lg:flex-col")}>
              {downloadActions ? (
                <StoreDownloadButtons
                  buttonClassName="w-full sm:w-auto lg:w-full"
                  className="sm:flex-row lg:flex-col"
                />
              ) : primaryAction ? (
                <ActionAnchor action={primaryAction} variant="primary" />
              ) : null}
              {secondaryAction ? (
                <ActionAnchor action={secondaryAction} variant="secondary" />
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
