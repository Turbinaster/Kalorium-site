import { PageHero } from "@/components/ui/page-hero";
import { contactsHero } from "@/data/contacts";

export function ContactsHeroSection() {
  return (
    <PageHero
      breadcrumbLabel={contactsHero.breadcrumbLabel}
      description={contactsHero.description}
      downloadActions
      eyebrow={contactsHero.eyebrow}
      secondaryAction={{
        label: contactsHero.secondaryCta,
        href: "/",
      }}
      title={contactsHero.title}
    />
  );
}
