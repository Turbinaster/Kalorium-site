import { AccountDeletionContentSection } from "@/components/sections/account-deletion/account-deletion-content-section";
import { AccountDeletionHeroSection } from "@/components/sections/account-deletion/account-deletion-hero-section";
import { JsonLd } from "@/components/seo/json-ld";
import { accountDeletionHero } from "@/data/account-deletion";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

export const metadata = createMetadata("/account-deletion");

export default function AccountDeletionPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbStructuredData(
          "/account-deletion",
          accountDeletionHero.breadcrumbLabel,
        )}
      />
      <AccountDeletionHeroSection />
      <AccountDeletionContentSection />
    </>
  );
}
