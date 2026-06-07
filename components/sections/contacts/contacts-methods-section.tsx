import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactsMethods } from "@/data/contacts";
import { GOOGLE_PLAY_URL, RUSTORE_URL } from "@/data/site";

function resolveHref(href: string) {
  if (href === "google-play") {
    return GOOGLE_PLAY_URL;
  }

  return href === "rustore" ? RUSTORE_URL : href;
}

function isExternal(href: string) {
  return href === "google-play" || href === "rustore";
}

export function ContactsMethodsSection() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="space-y-8">
          <SectionHeading title={contactsMethods.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {contactsMethods.items.map((item) => (
              <Link
                key={item.title}
                className="soft-card flex h-full flex-col gap-4 rounded-[24px] p-6 transition-colors hover:border-brand-primary/30 hover:bg-brand-soft/35"
                href={resolveHref(item.href)}
                rel={isExternal(item.href) ? "noopener noreferrer" : undefined}
                target={isExternal(item.href) ? "_blank" : undefined}
              >
                <div className="space-y-3">
                  <h3 className="h3-text text-text-primary">{item.title}</h3>
                  <p className="body-text text-text-secondary">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
