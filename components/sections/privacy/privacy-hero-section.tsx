import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { privacyHero } from "@/data/privacy-policy";

export function PrivacyHeroSection() {
  return (
    <Section className="pb-8 pt-10 md:pb-10 md:pt-14">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: privacyHero.breadcrumbLabel },
          ]}
        />
      </Container>
    </Section>
  );
}
