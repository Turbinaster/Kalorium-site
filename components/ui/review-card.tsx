import { cn } from "@/lib/cn";

type ReviewCardProps = {
  title: string;
  text: string;
  source: string;
  date?: string;
  rating?: string;
  avatar?: string;
  className?: string;
};

function getInitials(title: string) {
  return title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function ReviewCard({
  title,
  text,
  source,
  date,
  rating,
  avatar,
  className,
}: ReviewCardProps) {
  const initials = getInitials(title);

  return (
    <article className={cn("soft-card flex h-full flex-col gap-5 p-6", className)}>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-soft text-sm font-bold text-brand-hover ring-1 ring-border-soft">
          {avatar ? (
            <img
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
              src={avatar}
            />
          ) : (
            <span>{initials}</span>
          )}
        </div>
        <div className="min-w-0 space-y-1">
          <h3 className="text-base font-bold leading-6 text-text-primary">{title}</h3>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-muted">
            {rating ? (
              <span className="font-semibold text-brand-hover">★★★★★ {rating}</span>
            ) : null}
            {date ? <span>{date}</span> : null}
          </div>
        </div>
      </div>

      <p className="body-text text-text-secondary">{text}</p>

      <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-brand-hover">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" aria-hidden="true" />
        <span>{source}</span>
      </div>
    </article>
  );
}
