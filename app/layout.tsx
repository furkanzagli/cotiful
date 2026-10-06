import { absoluteUrl, siteUrl } from "@/lib/config";
import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, JsonLd } from "@/components/site";
import { siteDescription, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: { default: "Cotiful | Wholesale Womenswear from Türkiye", template: "%s | Cotiful" },
  description: siteDescription,
  applicationName: siteName,
  openGraph: { title: "Cotiful | Wholesale Womenswear from Türkiye", description: siteDescription, siteName, type: "website", locale: "en_GB", images: [{ url: absoluteUrl("/images/cotiful-hero-espresso.webp"), alt: "Cotiful womenswear tailoring campaign" }] },
  twitter: { card: "summary_large_image", title: "Cotiful | Wholesale Womenswear from Türkiye", description: siteDescription, images: [absoluteUrl("/images/cotiful-hero-espresso.webp")] },
};

const organization = { "@context": "https://schema.org", "@type": "Organization", name: "Cotiful", url: siteUrl, description: siteDescription, address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" }, areaServed: ["Europe", "Western Balkans"] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><JsonLd value={organization} /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
