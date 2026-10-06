import { siteUrl } from "@/lib/config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs, PageIntro, JsonLd } from "@/components/site";
import { CategoryBrowser } from "@/components/category-browser";
import { categories, products } from "@/lib/catalog";

export const dynamicParams = false;
export function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const category = categories.find((item) => item.slug === slug);
  if (!category) return { title: "Category not found" };
  const title = `Wholesale Women's ${category.name} Manufacturer`;
  const description = `Explore ${category.name.toLowerCase()} for women's boutiques and fashion labels. Request wholesale availability, fabric details, sizes and minimums from Cotiful in Türkiye.`;
  return { title, description, alternates: { canonical: `${siteUrl}/category/${slug}/` }, openGraph: { title: `${title} | Cotiful`, description, type: "website", siteName: "Cotiful" }, twitter: { card: "summary_large_image", title, description } };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const category = categories.find((item) => item.slug === slug);
  if (!category) notFound();
  const items = products.filter((product) => product.categorySlug === slug);
  return <div className="page-wrap"><Breadcrumbs items={[{ label: "Categories", href: "/products" }, { label: category.name }]} /><PageIntro eyebrow="Wholesale womenswear · Cotiful" title={`${category.name}, considered.`} text={`${category.note}. Made for independent boutiques and labels sourcing womenswear from Türkiye. Ask our team to confirm current style availability, fabric composition, colour options, size grading and order minimums.`} /><JsonLd value={{ "@context": "https://schema.org", "@type": "CollectionPage", name: `Wholesale women's ${category.name}`, description: category.note, url: `${siteUrl}/category/${slug}` }} /><CategoryBrowser items={items} /></div>;
}
