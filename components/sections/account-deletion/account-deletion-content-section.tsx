import Link from "next/link";
import {
  Check,
  Clock,
  Database,
  Mail,
  ShieldCheck,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  accountDeletionHero,
  accountDeletionSummary,
  deletedDataItems,
  deletionSteps,
  processingTime,
  retainedDataIntro,
  retainedDataItems,
} from "@/data/account-deletion";

const supportMailHref = `mailto:${accountDeletionHero.supportEmail}?subject=${encodeURIComponent(
  accountDeletionHero.emailSubject,
)}`;

function InstructionCard({
  children,
  icon: Icon,
  title,
}: {
  children: ReactNode;
  icon: LucideIcon;
  title: string;
}) {
  return (
    <section className="soft-card rounded-[28px] px-6 py-7 md:px-8 md:py-8">
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-hover">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <h2 className="h3-text text-text-primary">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export function AccountDeletionContentSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(320px,0.28fr)]">
          <div className="space-y-6">
            <InstructionCard icon={Mail} title="Как запросить удаление аккаунта">
              <div className="rounded-[24px] border border-brand-primary/25 bg-brand-soft/60 p-5">
                <p className="body-sm-text font-semibold text-text-primary">
                  Адрес для запроса удаления
                </p>
                <Link
                  className="mt-2 inline-flex max-w-full rounded-cta bg-surface px-4 py-3 text-base font-bold text-brand-hover shadow-soft transition-colors hover:text-brand-primary sm:text-lg"
                  href={supportMailHref}
                >
                  <span className="truncate">{accountDeletionHero.supportEmail}</span>
                </Link>
                <p className="body-sm-text mt-3 text-text-secondary">
                  Тема письма: «{accountDeletionHero.emailSubject}».
                </p>
              </div>

              <ol className="space-y-4">
                {deletionSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="body-text pt-0.5 text-text-secondary">{step}</p>
                  </li>
                ))}
              </ol>
            </InstructionCard>

            <InstructionCard icon={Trash2} title="Какие данные будут удалены">
              <ul className="grid gap-3 sm:grid-cols-2">
                {deletedDataItems.map((item) => (
                  <li key={item} className="flex gap-3 rounded-[20px] bg-background-soft px-4 py-3">
                    <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-brand-hover" />
                    <span className="body-sm-text text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </InstructionCard>

            <InstructionCard icon={Database} title="Какие данные могут быть сохранены">
              <p className="body-text text-text-secondary">{retainedDataIntro}</p>
              <ul className="space-y-3">
                {retainedDataItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-primary" />
                    <span className="body-text text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </InstructionCard>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="soft-card rounded-[28px] px-6 py-7">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-hover">
                    <ShieldCheck aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h2 className="h3-text text-text-primary">Кратко</h2>
                </div>

                <dl className="space-y-4">
                  {accountDeletionSummary.map((item) => (
                    <div key={item.label}>
                      <dt className="caption-text uppercase text-text-muted">{item.label}</dt>
                      <dd className="body-text mt-1 font-semibold text-text-primary">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="surface-panel rounded-[28px] px-6 py-7">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-brand-hover">
                    <Clock aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h2 className="h3-text text-text-primary">Срок обработки</h2>
                </div>
                <p className="body-text text-text-secondary">{processingTime}</p>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
