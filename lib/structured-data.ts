import { faqSections } from "@/data/faq";
import { pageMeta, type PagePath } from "@/data/page-meta";
import {
  APP_PLATFORM_LABEL,
  GOOGLE_PLAY_URL,
  RUSTORE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/data/site";

type StructuredData = Record<string, unknown>;
type InternalPagePath = Exclude<PagePath, "/">;

function toAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export function createOrganizationStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [GOOGLE_PLAY_URL, RUSTORE_URL],
  };
}

export function createWebSiteStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: pageMeta["/"].description,
    inLanguage: "ru-RU",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function createSoftwareApplicationStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    applicationCategory: "LifestyleApplication",
    operatingSystem: APP_PLATFORM_LABEL,
    downloadUrl: GOOGLE_PLAY_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RUB",
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function createHomeStructuredData(): StructuredData[] {
  return [
    createOrganizationStructuredData(),
    createWebSiteStructuredData(),
    createSoftwareApplicationStructuredData(),
  ];
}

export function createFaqPageStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    ),
  };
}

export function createBreadcrumbStructuredData(
  path: InternalPagePath,
  label: string,
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: toAbsoluteUrl(path),
      },
    ],
  };
}
