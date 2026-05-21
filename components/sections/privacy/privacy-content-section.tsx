import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { privacyPolicyHtml } from "@/data/privacy-policy";

export function PrivacyContentSection() {
  return (
    <Section className="pt-0">
      <Container>
        <article
          className="privacy-document soft-card rounded-[28px] px-6 py-8 md:px-10 md:py-10"
          dangerouslySetInnerHTML={{ __html: privacyPolicyHtml }}
        />
      </Container>
    </Section>
  );
}
