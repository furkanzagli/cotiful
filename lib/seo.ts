import type { Metadata } from "next";
import { absoluteUrl } from "./config";

export const siteName = "Cotiful";
export const siteDescription = "Wholesale womenswear manufacturing and export from Türkiye, for independent boutiques and fashion brands across Europe and the Balkans.";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { title: `${title} | Cotiful`, description, siteName, type: "website", locale: "en_GB", url: absoluteUrl(path), images: [{ url: absoluteUrl("/images/cotiful-hero-espresso.webp"), alt: "Cotiful womenswear editorial campaign" }] },
    twitter: { card: "summary_large_image", title: `${title} | Cotiful`, description, images: [absoluteUrl("/images/cotiful-hero-espresso.webp")] },
  };
}

export function jsonLd(value: object) {
  return { __html: JSON.stringify(value).replace(/</g, "\\u003c") };
}
