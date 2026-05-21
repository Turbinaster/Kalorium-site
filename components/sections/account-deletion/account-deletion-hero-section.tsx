import { PageHero } from "@/components/ui/page-hero";
import { accountDeletionHero } from "@/data/account-deletion";

const mailtoHref = `mailto:${accountDeletionHero.supportEmail}?subject=${encodeURIComponent(
  accountDeletionHero.emailSubject,
)}`;

export function AccountDeletionHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={accountDeletionHero.breadcrumbLabel}
      description={accountDeletionHero.description}
      eyebrow={accountDeletionHero.eyebrow}
      note="Запрос можно отправить без установки приложения: достаточно написать на адрес поддержки и подтвердить владение аккаунтом."
      primaryAction={{
        label: accountDeletionHero.primaryCta,
        href: mailtoHref,
        external: true,
      }}
      secondaryAction={{
        label: accountDeletionHero.secondaryCta,
        href: "/privacy-policy",
      }}
      title={accountDeletionHero.title}
    />
  );
}
