import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";

import "@/app/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { assetPaths } from "@/data/assets";
import { publicAssetPathToSrc, resolveOptionalPublicAsset } from "@/lib/assets";
import { createRootMetadata } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = createRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const faviconHref = publicAssetPathToSrc(assetPaths.publicFavicon);
  const headerLogoSrc = resolveOptionalPublicAsset(assetPaths.brandLogo);

  return (
    <html lang="ru">
      <head>
        <link rel="icon" href={faviconHref} type="image/svg+xml" />
        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110425504', 'ym');

    ym(110425504, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`}
        </Script>
      </head>
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans text-text-primary antialiased`}
      >
        <noscript>
          <div>
            <img
              alt=""
              src="https://mc.yandex.ru/watch/110425504"
              style={{ position: "absolute", left: "-9999px" }}
            />
          </div>
        </noscript>
        <div className="relative flex min-h-screen flex-col">
          <a
            className="sr-only absolute left-4 top-4 z-50 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-text-primary shadow-soft focus:not-sr-only focus:outline-none"
            href="#content"
          >
            Перейти к содержанию
          </a>
          <SiteHeader logoSrc={headerLogoSrc} />
          <main id="content" className="flex-1 pt-[var(--header-height)]">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
